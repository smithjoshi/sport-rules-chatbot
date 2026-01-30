import re
import os

source_path = '/Users/smithjoshi/vscode/project/clg project/ai/sports-rules-assistant-ai/data/sportsData.ts'
dest_path = '/Users/smithjoshi/vscode/project/clg project/ai/sports-rules-assistant-ai/backend/app/sports_data.py'

if not os.path.exists(os.path.dirname(dest_path)):
    os.makedirs(os.path.dirname(dest_path))

with open(source_path, 'r') as f:
    content = f.read()

# Pattern to capture strings (double, single, backtick)
string_pattern = r'("(?:\\[\s\S]|[^"\\])*"|\'(?:\\[\s\S]|[^\'\\])*\'|`(?:\\[\s\S]|[^`\\])*`)'

strings = []
def store_string(match):
    strings.append(match.group(0))
    # Use non-identifier chars to prevent regex matching as buffer key
    return f'<<<STR_{len(strings)-1}>>>'

# Mask strings
masked_content = re.sub(string_pattern, store_string, content)

# Mask comments (// ...)
comments = []
def store_comment(match):
    comments.append(match.group(0))
    return f'<<<CMT_{len(comments)-1}>>>'

masked_content = re.sub(r'//.*', store_comment, masked_content)

# Slice content to start from SPORTS_DATA
start_marker = 'export const SPORTS_DATA'
start_idx = masked_content.find(start_marker)
if start_idx != -1:
    masked_content = masked_content[start_idx:]

# Remove TypeScript artifacts
masked_content = re.sub(r'export\s+const\s+(\w+)\s*:[^=]+=', r'\1 =', masked_content)
masked_content = re.sub(r'import\s+.*;', '', masked_content)

# Quote keys
# Any identifier followed by colon
masked_content = re.sub(r'\b([a-zA-Z_]\w*)\s*:', r'"\1":', masked_content)

# Replace null -> None
masked_content = re.sub(r'\bnull\b', 'None', masked_content)

# Restore strings
def restore_token(match):
    token = match.group(0)
    if token.startswith('<<<STR_'):
        idx = int(token[7:-3])
        return strings[idx]
    if token.startswith('<<<CMT_'):
        idx = int(token[7:-3])
        return comments[idx].replace('//', '#', 1)
    return token

final_content = re.sub(r'(<<<STR_\d+>>>|<<<CMT_\d+>>>)', restore_token, masked_content)

# Clean up empty lines
lines = [line for line in final_content.splitlines() if line.strip()]

result_lines = []
for line in lines:
    if 'export function' in line or 'getSportComparison' in line:
        break
    result_lines.append(line)

final_text = "\n".join(result_lines)

with open(dest_path, 'w') as f:
    f.write(final_text)
