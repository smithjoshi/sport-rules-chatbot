import re
import random
from backend.app.sports_data import SPORTS_DATA, SPORT_COMPARISONS

def get_sport_comparison(sport1, sport2):
    key1 = f"{sport1} vs {sport2}"
    key2 = f"{sport2} vs {sport1}"

    if key1 in SPORT_COMPARISONS:
        return SPORT_COMPARISONS[key1]["differences"]
    elif key2 in SPORT_COMPARISONS:
        return SPORT_COMPARISONS[key2]["differences"]
    
    return None

def get_related_suggestion(sport, term):
    suggestions = {
        'Offside': 'Related: Ask about VAR, Free Kicks, or Penalty Kicks',
        'LBW': 'Related: Ask about Umpire Decisions, DRS, or Bowling Rules',
        'Traveling': 'Related: Ask about Double Dribble, Fouls, or Violations',
        'Deuce': 'Related: Ask about Tie-breaks, Sets, or Scoring',
        'Try': 'Related: Ask about Conversions, Scrums, or Scoring',
        'Home Run': 'Related: Ask about Grand Slams, RBIs, or Scoring'
    }
    return suggestions.get(term, f"Want to know more about {sport}? Just ask!")

def get_random_faq(sport_data):
    if not sport_data['faqs']:
        return ""
    faq = random.choice(sport_data['faqs'])
    return f"\n\n💡 Did you know? {faq['a']}"

def generate_offline_response(sport: str, message: str) -> str:
    sport_data = SPORTS_DATA.get(sport)
    if not sport_data:
        return f"I don't have information about {sport} yet."
        
    lower_message = message.lower()

    # Check for sport comparison queries
    comparison_patterns = [
        r'(\w+)\s+vs\s+(\w+)',
        r'compare\s+(\w+)\s+(and|to|with)\s+(\w+)',
        r'difference\s+between\s+(\w+)\s+and\s+(\w+)',
        r'(\w+)\s+versus\s+(\w+)'
    ]

    for pattern in comparison_patterns:
        match = re.search(pattern, message, re.IGNORECASE)
        if match:
            # Extract sport names
            if len(match.groups()) == 3:
                sport1 = match.group(1)
                sport2 = match.group(3)
            else:
                sport1 = match.group(1)
                sport2 = match.group(2)

            # Capitalize
            sport1 = sport1.capitalize()
            sport2 = sport2.capitalize()

            comparison = get_sport_comparison(sport1, sport2)

            if comparison:
                diff_text = "\n\n".join([f"{i+1}. {diff}" for i, diff in enumerate(comparison)])
                return f"**{sport1} vs {sport2} - Key Differences:**\n\n{diff_text}\n\n💡 Want to know more about either sport? Just ask!"

            # If comparison not found, check valid sports
            all_sports = ['Football', 'Cricket', 'Basketball', 'Tennis', 'Rugby', 'Baseball']
            if sport1 in all_sports and sport2 in all_sports:
                fallback_comp = get_sport_comparison(sport1, sport2)
                if fallback_comp:
                    diff_text = "\n\n".join([f"{i+1}. {diff}" for i, diff in enumerate(fallback_comp)])
                    return f"I can compare {sport1} and {sport2}! Here are the key differences:\n\n{diff_text}\n\n❓ Ask me more about either sport!"
                else:
                    return f"I can compare {sport1} and {sport2}! Here are the key differences:\n\nComparison data not available.\n\n❓ Ask me more about either sport!"

    # Check for greetings
    if re.search(r'^(hi|hello|hey|greetings|howdy)', lower_message):
        return f"👋 Hello! I'm your {sport} rules expert. I can help you with:\n\n• Rules and regulations\n• Key terms and definitions\n• Game scenarios\n• Common questions\n\nWhat would you like to know about {sport}?"

    # Check for thanks
    if re.search(r'(thank|thanks|thx|appreciate)', lower_message):
        return f"You're very welcome! 😊 Feel free to ask me anything else about {sport} rules. I'm here to help!"

    # Search FAQs
    for faq in sport_data['faqs']:
        faq_lower = faq['q'].lower()
        keywords = [w for w in faq_lower.split() if len(w) > 3]
        matches = [kw for kw in keywords if kw in lower_message]
        
        if len(matches) >= 2 or (len(faq_lower) > 15 and faq_lower[:15] in lower_message):
            return f"**{faq['q']}**\n\n{faq['a']}\n\n💡 Ask me more about {sport}!"

    # Search key terms
    for term, definition in sport_data['keyTerms'].items():
        if term.lower() in lower_message:
            return f"**{term}** in {sport}:\n\n{definition}\n\n{get_related_suggestion(sport, term)}"

    # Search scenarios
    for scenario, explanation in sport_data['scenarios'].items():
        scenario_words = scenario.lower().split()
        if any(len(w) > 3 and w in lower_message for w in scenario_words):
             return f"**Scenario: {scenario}**\n\n{explanation}\n\nNeed clarification on anything else?"

    # Search rules
    message_words = [w for w in lower_message.split() if len(w) > 3]
    matching_rules = [rule for rule in sport_data['rules'] if any(w in rule.lower() for w in message_words)]
    
    if matching_rules:
        top_rules = matching_rules[:2]
        rules_text = "\n\n".join([f"{i+1}. {r}" for i, r in enumerate(top_rules)])
        return f"Here's what I found about {sport}:\n\n{rules_text}\n\n❓ Want to know more?"

    # Question types
    if re.search(r'how (many|much|long)', lower_message):
        numeric_rules = [r for r in sport_data['rules'] if re.search(r'\d+', r)]
        if numeric_rules:
            return f"{numeric_rules[0]}{get_random_faq(sport_data)}"

    if re.search(r'what (is|are|does)', lower_message):
        terms = list(sport_data['keyTerms'].keys())
        if terms:
            terms_text = "\n".join([f"• {t}" for t in terms[:4]])
            return f"I can explain many {sport} terms! Try asking about:\n\n{terms_text}\n\nOr ask me a specific question!"

    if re.search(r'can (you|i|we)', lower_message):
        return f"Great question! In {sport}, there are specific rules about what's allowed. {sport_data['rules'][0]}\n\nAsk me about specific actions for detailed rules!"

    # Default response
    random_faqs = random.sample(sport_data['faqs'], min(3, len(sport_data['faqs'])))
    suggestions_text = "\n".join([f"• {f['q']}" for f in random_faqs])
    random_faq = random_faqs[0]
    
    return f"I'm your {sport} rules assistant! 🏆\n\nHere's a popular question:\n\n**{random_faq['q']}**\n{random_faq['a']}\n\nTry asking me:\n{suggestions_text}"

def generate_quiz(sport: str, difficulty: str):
    sport_data = SPORTS_DATA.get(sport)
    if not sport_data or 'offlineQuiz' not in sport_data:
        raise ValueError("Quiz data not available for this sport.")

    # Filter by difficulty
    filtered_questions = [q for q in sport_data['offlineQuiz'] if q['difficulty'] == difficulty]
    
    if not filtered_questions:
        # Fallback to all questions
        filtered_questions = sport_data['offlineQuiz']
    
    # Shuffle
    shuffled = filtered_questions.copy()
    random.shuffle(shuffled)
    
    return shuffled[:10]
