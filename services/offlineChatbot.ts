import { Sport } from '../types';
import { SPORTS_DATA, SPORT_COMPARISONS, getSportComparison } from '../data/sportsData';

export function generateOfflineResponse(sport: Sport, message: string): string {
    const sportData = SPORTS_DATA[sport];
    const lowerMessage = message.toLowerCase();

    // Check for sport comparison queries (e.g., "Football vs Cricket", "compare football and cricket")
    const comparisonPatterns = [
        /(\w+)\s+vs\s+(\w+)/i,
        /compare\s+(\w+)\s+(and|to|with)\s+(\w+)/i,
        /difference\s+between\s+(\w+)\s+and\s+(\w+)/i,
        /(\w+)\s+versus\s+(\w+)/i
    ];

    for (const pattern of comparisonPatterns) {
        const match = message.match(pattern);
        if (match) {
            // Extract sport names from the match
            let sport1 = match[1];
            let sport2 = match[2] === 'and' || match[2] === 'to' || match[2] === 'with' ? match[3] : match[2];

            // Capitalize first letter
            sport1 = sport1.charAt(0).toUpperCase() + sport1.slice(1).toLowerCase();
            sport2 = sport2.charAt(0).toUpperCase() + sport2.slice(1).toLowerCase();

            // Try to get comparison
            const comparison = getSportComparison(sport1 as Sport, sport2 as Sport);

            if (comparison) {
                return `**${sport1} vs ${sport2} - Key Differences:**\n\n${comparison.map((diff, i) => `${i + 1}. ${diff}`).join('\n\n')}\n\n💡 Want to know more about either sport? Just ask!`;
            }

            // If comparison not found, check if it's a valid sport comparison request
            const allSports = ['Football', 'Cricket', 'Basketball', 'Tennis', 'Rugby', 'Baseball'];
            if (allSports.includes(sport1) && allSports.includes(sport2)) {
                return `I can compare ${sport1} and ${sport2}! Here are the key differences:\n\n${getSportComparison(sport1 as Sport, sport2 as Sport)?.map((diff, i) => `${i + 1}. ${diff}`).join('\n\n') || 'Comparison data not available.'}\n\n❓ Ask me more about either sport!`;
            }
        }
    }

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings|howdy)/)) {
        return `👋 Hello! I'm your ${sport} rules expert. I can help you with:\n\n• Rules and regulations\n• Key terms and definitions\n• Game scenarios\n• Common questions\n\nWhat would you like to know about ${sport}?`;
    }

    // Check for thanks
    if (lowerMessage.match(/(thank|thanks|thx|appreciate)/)) {
        return `You're very welcome! 😊 Feel free to ask me anything else about ${sport} rules. I'm here to help!`;
    }

    // Search FAQs first (most specific)
    for (const faq of sportData.faqs) {
        const faqLower = faq.q.toLowerCase();
        const keywords = faqLower.split(' ').filter(w => w.length > 3);
        const matches = keywords.filter(kw => lowerMessage.includes(kw));

        if (matches.length >= 2 || lowerMessage.includes(faqLower.slice(0, 15))) {
            return `**${faq.q}**\n\n${faq.a}\n\n💡 Ask me more about ${sport}!`;
        }
    }

    // Search for key terms
    for (const [term, definition] of Object.entries(sportData.keyTerms)) {
        if (lowerMessage.includes(term.toLowerCase())) {
            return `**${term}** in ${sport}:\n\n${definition}\n\n${getRelatedSuggestion(sport, term)}`;
        }
    }

    // Search for scenarios
    for (const [scenario, explanation] of Object.entries(sportData.scenarios)) {
        const scenarioWords = scenario.toLowerCase().split(' ');
        if (scenarioWords.some(word => word.length > 3 && lowerMessage.includes(word))) {
            return `**Scenario: ${scenario}**\n\n${explanation}\n\nNeed clarification on anything else?`;
        }
    }

    // Search in rules with better matching
    const messageWords = lowerMessage.split(' ').filter(w => w.length > 3);
    const matchingRules = sportData.rules.filter(rule =>
        messageWords.some(word => rule.toLowerCase().includes(word))
    );

    if (matchingRules.length > 0) {
        const topRules = matchingRules.slice(0, 2);
        return `Here's what I found about ${sport}:\n\n${topRules.map((r, i) => `${i + 1}. ${r}`).join('\n\n')}\n\n❓ Want to know more?`;
    }

    // Question-type responses
    if (lowerMessage.match(/how (many|much|long)/)) {
        const numericRules = sportData.rules.filter(r => /\d+/.test(r));
        if (numericRules.length > 0) {
            return `${numericRules[0]}\n\n${getRandomFAQ(sportData)}`;
        }
    }

    if (lowerMessage.match(/what (is|are|does)/)) {
        const terms = Object.keys(sportData.keyTerms);
        if (terms.length > 0) {
            return `I can explain many ${sport} terms! Try asking about:\n\n${terms.slice(0, 4).map(t => `• ${t}`).join('\n')}\n\nOr ask me a specific question!`;
        }
    }

    if (lowerMessage.match(/can (you|i|we)/)) {
        return `Great question! In ${sport}, there are specific rules about what's allowed. ${sportData.rules[0]}\n\nAsk me about specific actions for detailed rules!`;
    }

    // Default helpful response with suggestions
    const randomFAQ = sportData.faqs[Math.floor(Math.random() * Math.min(3, sportData.faqs.length))];
    return `I'm your ${sport} rules assistant! 🏆\n\nHere's a popular question:\n\n**${randomFAQ.q}**\n${randomFAQ.a}\n\nTry asking me:\n${sportData.faqs.slice(0, 3).map(f => `• ${f.q}`).join('\n')}`;
}

function getRelatedSuggestion(sport: Sport, term: string): string {
    const suggestions = {
        'Offside': 'Related: Ask about VAR, Free Kicks, or Penalty Kicks',
        'LBW': 'Related: Ask about Umpire Decisions, DRS, or Bowling Rules',
        'Traveling': 'Related: Ask about Double Dribble, Fouls, or Violations',
        'Deuce': 'Related: Ask about Tie-breaks, Sets, or Scoring',
        'Try': 'Related: Ask about Conversions, Scrums, or Scoring',
        'Home Run': 'Related: Ask about Grand Slams, RBIs, or Scoring'
    };
    return suggestions[term as keyof typeof suggestions] || `Want to know more about ${sport}? Just ask!`;
}

function getRandomFAQ(sportData: any): string {
    const faq = sportData.faqs[Math.floor(Math.random() * sportData.faqs.length)];
    return `\n\n💡 Did you know? ${faq.a}`;
}
