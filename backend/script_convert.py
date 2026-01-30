import os

source_path = '/Users/smithjoshi/vscode/project/clg project/ai/sports-rules-assistant-ai/data/sportsData.ts'
dest_path = '/Users/smithjoshi/vscode/project/clg project/ai/sports-rules-assistant-ai/backend/app/sports_data.py'

if not os.path.exists(os.path.dirname(dest_path)):
    os.makedirs(os.path.dirname(dest_path))

with open(source_path, 'r') as f:
    content = f.read()

# We only want the content between "export const SPORTS_DATA =" and the end of the object.
# But simply parsing the whole file safely is better.

output = []
i = 0
n = len(content)
in_string = False
string_char = ''
buffer = [] # To accumulate potential keys

# Helper to flush buffer
def flush_buffer(out_list, buf_list, do_quote=False):
    word = "".join(buf_list)
    if not word:
        return
    if do_quote:
        out_list.append(f'"{word}"')
    else:
        # Check for null -> None keyword
        if word == 'null':
            out_list.append('None')
        else:
            out_list.append(word)
    buf_list.clear()

while i < n:
    char = content[i]
    
    if in_string:
        output.append(char)
        if char == string_char:
            # Check for escaped quote?
            # JS strings can have \" or \'
            # Minimal check: counting backslashes?
            # For this file, let's assume standard escaping
            backslashes = 0
            j = i - 1
            while j >= 0 and content[j] == '\\':
                backslashes += 1
                j -= 1
            if backslashes % 2 == 0:
                in_string = False
    else:
        # Not in string
        
        # Check for comments
        if char == '/' and i + 1 < n and content[i+1] == '/':
            flush_buffer(output, buffer) # Flush whatever was before
            # Consume until newline
            output.append('#')
            i += 2
            while i < n and content[i] != '\n':
                output.append(content[i])
                i += 1
            if i < n:
                output.append(content[i]) # The newline
            i += 1
            continue

        if char == '"' or char == "'":
            flush_buffer(output, buffer)
            in_string = True
            string_char = char
            output.append(char)
        elif char.isalnum() or char == '_':
            buffer.append(char)
        else:
            # Delimiter or whitespace
            # Check if next meaningful char is colon?
            # No, we process linearly.
            # If char is ':', and buffer has content, quote it!
            
            # Special case: 'export const SPORTS_DATA'
            # 'export', 'const', 'SPORTS_DATA' are words.
            # 'SPORTS_DATA' followed by ':'? No, usually ' = ' or ': Type'.
            
            # The file has: export const SPORTS_DATA: Record<Sport, SportData> = {
            # My parser will quote SPORTS_DATA if followed by colon?
            # It has ': Record', so 'SPORTS_DATA' -> '"SPORTS_DATA"'.
            # That's acceptable for Python dict key if we are inside a dict?
            # But this is top level assignment.
            
            # We need to skip the typescript type definitions and export statements.
            
            # Simplification: Just target the JS-object syntax.
            # Python variable assignment: SPORTS_DATA = { ... }
            
            # Let's just output keys as quoted if followed by ':'.
            # But for top level 'SPORTS_DATA: ...', we might mess it up.
            # We will fix the header manually or detecting it.
            
            if char == ':':
                # Check whitespace between buffer and colon?
                # The loop handles char by char. If we have space, buffer is flushed.
                # So we need to look ahead effectively or buffer words.
                pass
            
            # Re-think: simple char loop is hard for 'word   :' detection.
            pass

# Retry with regex but on non-string constraints is cleaner if we can mask strings...
# Mask strings -> perform substitution -> restore strings.

def mask_strings(text):
    masked = []
    strings = []
    i = 0
    n = len(text)
    while i < n:
        if text[i] == '"' or text[i] == "'":
            quote = text[i]
            start = i
            i += 1
            while i < n:
                if text[i] == quote:
                    # Check escape
                    bs = 0
                    j = i - 1
                    while text[j] == '\\':
                        bs += 1
                        j -= 1
                    if bs % 2 == 0:
                        break
                i += 1
            end = i + 1
            strings.append(text[start:end])
            masked.append(f'__STR_{len(strings)-1}__')
        
        # Also mask comments to be safe
        elif text[i:i+2] == '//':
             start = i
             while i < n and text[i] != '\n':
                 i += 1
             strings.append(text[start:i]) # Store comment content
             masked.append(f'__CMT_{len(strings)-1}__\n') # Preserve newline 
        else:
            masked.append(text[i])
            i += 1
            
    return "".join(masked), strings

masked_content, strings = mask_strings(content)

# Now we can safely regex replace on masked_content
import re

# 1. Quote keys: word followed by colon
# Avoiding http: (which shouldn't happen outside strings anyway)
# But wait, type definitions like "foo: string" in TS?
# The file has 'export const SPORTS_DATA: Record<...'
# We want to change syntax to Python: 'SPORTS_DATA = ...'

# Let's remove export const...
masked_content = re.sub(r'export\s+const\s+(\w+)\s*:[^=]+=', r'\1 =', masked_content)
masked_content = re.sub(r'export\s+interface\s+.*', '', masked_content) # Remove interfaces
masked_content = re.sub(r'import\s+.*', '', masked_content) # Remove imports

# Now quote keys in object literals
# Pattern: valid identifier followed by colon
masked_content = re.sub(r'\b([a-zA-Z_]\w*)\s*:', r'"\1":', masked_content)

# Recover comments (convert to #)
# We stored comments as __CMT_...__
# But we need to replace // with # inside them?
# No, we stored the raw "// comment".
# We'll post-process comments during unmasking.

# Recover strings
# Iterate and replace placeholders

final_output = []
# Split by tokens to find placeholders
tokens = re.split(r'(__STR_\d+__|__CMT_\d+__)', masked_content)

for token in tokens:
    if token.startswith('__STR_'):
        idx = int(token[6:-2])
        final_output.append(strings[idx])
    elif token.startswith('__CMT_'):
        idx = int(token[6:-2])
        cmt = strings[idx]
        final_output.append(cmt.replace('//', '#', 1))
    else:
        # Apply word replacements like null -> None
        # Use regex to be safe about word boundaries
        t = token
        t = re.sub(r'\bnull\b', 'None', t)
        final_output.append(t)

# Helper function removal? 'export function getSportComparison...'
# We can convert that function to Python too!
# But regex based translation of function logic is risky.
# Let's try to just comment it out or leave it for manual fix?
# Or just accept we are porting data.
# The user asked to "convert the full backend".
# Converting the function `getSportComparison` via regex is hard.
# I will output the data objects first. 
# Then I will manually append the python equivalent of the function (since I know what it does).

final_text = "".join(final_output)

# Remove TypeScript specific artifacts left over?
# Types like `Record<Sport, SportData>` are gone due to top-level regex.
# But `export function...` might still be there (now quoted "export": "function"...)

# Let's just truncate after the data objects are defined.
# We have SPORTS_DATA and SPORT_COMPARISONS.
# We can regex to keep only those.

# ... Logic ...

with open(dest_path, 'w') as f:
    f.write(final_text)

