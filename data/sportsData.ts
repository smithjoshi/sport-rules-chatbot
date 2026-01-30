
import { Sport, QuizQuestion } from '../types';

export interface SportData {
    rules: string[];
    keyTerms: Record<string, string>;
    scenarios: Record<string, string>;
    offlineQuiz: QuizQuestion[];
    faqs: { q: string; a: string }[];
}

export const SPORTS_DATA: Record<Sport, SportData> = {
    Football: {
        rules: [
            "The game is played between two teams of 11 players each on a rectangular field.",
            "Match duration is 90 minutes, divided into two 45-minute halves with a 15-minute halftime break.",
            "Stoppage time is added at the end of each half to compensate for injuries, substitutions, and other delays.",
            "Players cannot touch the ball with their hands or arms, except the goalkeeper within their penalty area.",
            "A goal is scored when the entire ball crosses the goal line between the goalposts and under the crossbar.",
            "Offside Rule: A player is offside if nearer to the opponent's goal than both the ball and second-last opponent when the ball is played to them (doesn't apply to throw-ins, goal kicks, or corner kicks).",
            "Yellow cards are cautions for unsporting behavior; two yellows equal a red card and dismissal.",
            "Red cards result in immediate dismissal; the team plays with 10 players for the remainder of the match.",
            "VAR (Video Assistant Referee) reviews clear errors in: goals, penalty decisions, direct red cards, and mistaken identity.",
            "Kickoff starts the match and restarts after goals, taken from the center circle.",
            "Substitutions: Most competitions allow 5 substitutions (3 stoppages), though rules vary by competition.",
            "Extra time: Two 15-minute halves in knockout matches if tied after 90 minutes.",
            "Penalty shootout: If still tied after extra time, teams take alternating penalty kicks (best of 5, then sudden death).",
            "Throw-ins: Both hands must be used, ball thrown from behind the head, both feet on ground.",
            "Corner kicks: Awarded when ball crosses goal line off a defender; taken from corner arc.",
            "Goal kicks: Awarded when ball crosses goal line off an attacker; taken from goal area.",
            "Penalty kicks: Awarded for fouls committed in the penalty area; taken from penalty spot (12 yards).",
            "Free kicks can be direct (can score directly) or indirect (must touch another player first).",
            "The advantage rule allows play to continue if stopping would benefit the team that committed the foul.",
            "Goalkeeper can handle the ball only within their penalty area; cannot pick up deliberate back-passes from teammates.",
            "Field dimensions: 100-130 yards long, 50-100 yards wide (international: 110-120 x 70-80 yards).",
            "Ball must be spherical, circumference 68-70 cm, weight 410-450 grams.",
            "Players must wear: jersey, shorts, socks, shin guards, and footwear.",
            "Dangerous play (high kicks, sliding tackles endangering opponents) results in free kicks.",
            "Persistent infringement of rules leads to yellow card cautions.",
            "Professional fouls (tactical fouls stopping promising attacks) typically result in yellow cards.",
            "Denying obvious goal-scoring opportunities (DOGSO) results in red cards.",
            "Serious foul play, violent conduct, or offensive language results in red cards.",
            "Injured players must leave the field for treatment unless seriously injured.",
            "The referee's decision is final; only the captain may approach the referee to seek clarification.",
            "Coin toss determines which team kicks off and which end teams defend initially.",
            "Teams switch ends at halftime.",
            "A match cannot start or continue with fewer than 7 players per team."
        ],
        keyTerms: {
            "Offside": "A player is in an offside position if nearer to opponent's goal than both ball and second-last opponent when ball is played to them. Not offside from throw-ins, goal kicks, or corners.",
            "Penalty Kick": "Direct free kick from penalty spot (12 yards) awarded for fouls in penalty area. Only goalkeeper may defend.",
            "Corner Kick": "Restart when ball crosses goal line (not in goal) last touched by defender. Taken from corner arc.",
            "Free Kick": "Restart after foul. Direct (can score directly) or Indirect (must touch another player before goal).",
            "VAR": "Video Assistant Referee - reviews clear errors in goals, penalties, red cards, and mistaken identity.",
            "Handball": "Deliberate contact with ball using hand/arm. Accidental handball by attackers leading to goals is also penalized.",
            "Throw-in": "Restart when ball crosses touchline. Thrown with both hands from behind head, both feet on ground.",
            "Goal Kick": "Restart when ball crosses goal line (not in goal) last touched by attacker. Taken from goal area.",
            "Yellow Card": "Caution for unsporting behavior, dissent, persistent fouling, delaying restart, or tactical fouls. Two yellows = red.",
            "Red Card": "Dismissal for serious foul play, violent conduct, spitting, DOGSO, or second yellow. Team plays with 10.",
            "DOGSO": "Denying an Obvious Goal-Scoring Opportunity - results in red card (or yellow if genuine attempt to play ball in penalty area).",
            "Advantage": "Referee allows play to continue after foul if stopping would benefit the fouling team.",
            "Stoppage Time": "Time added at end of each half for injuries, substitutions, time-wasting, and other delays.",
            "Clean Sheet": "When a goalkeeper/team doesn't concede any goals in a match.",
            "Hat Trick": "When a player scores three goals in a single match.",
            "Nutmeg": "Passing the ball through an opponent's legs.",
            "Bicycle Kick": "Overhead kick where player strikes ball in mid-air while upside down.",
            "Volley": "Striking the ball before it touches the ground.",
            "Chip": "Lofting the ball over an opponent, usually the goalkeeper.",
            "Through Ball": "Pass between defenders into space for a teammate to run onto.",
            "Cross": "Pass from wide area toward the goal area.",
            "Tackle": "Attempt to take the ball from an opponent using feet.",
            "Dribbling": "Moving with the ball under close control.",
            "Formation": "Tactical arrangement of players (e.g., 4-4-2, 4-3-3, 3-5-2).",
            "Sweeper": "Defensive player positioned behind the main defensive line.",
            "Wingback": "Defender who also attacks down the flanks.",
            "Striker": "Forward player whose primary role is scoring goals.",
            "Playmaker": "Creative midfielder who controls team's attacking play.",
            "Box-to-Box": "Midfielder who contributes both defensively and offensively.",
            "False Nine": "Forward who drops deep to create space and link play."
        },
        scenarios: {
            "Ball hits hand accidentally": "If unintentional and doesn't directly lead to goal/chance, play continues. Attackers: any handball before goal is penalized. Defenders: only deliberate handball is penalized.",
            "Last man tackle": "DOGSO (Denying Obvious Goal-Scoring Opportunity) - red card unless in penalty area with genuine attempt to play ball (then yellow + penalty).",
            "Goalkeeper handling outside box": "Free kick to opposition. Yellow card if DOGSO, red if denying clear goal.",
            "Two yellow cards": "Second yellow = automatic red card. Player dismissed, team plays with 10 players.",
            "Offside from rebound": "If player is offside when shot is taken, they're offside even if ball rebounds from post/goalkeeper.",
            "Goalkeeper back-pass": "Goalkeeper cannot handle deliberate kick from teammate. Results in indirect free kick.",
            "Ball hits referee": "Play continues. If ball enters goal after hitting referee, goal doesn't count - drop ball restart.",
            "Player injured": "Play stops only if injury is serious. Otherwise, player must leave field for treatment.",
            "Penalty kick saved and rebounds": "If goalkeeper saves and ball rebounds to penalty taker before another player touches it, indirect free kick to defending team.",
            "Goalkeeper releasing ball": "Once goalkeeper releases ball from hands, they cannot pick it up again until another player touches it.",
            "Encroachment on penalty": "If attacker encroaches and scores: retake. If defender encroaches and save: retake. If both: retake.",
            "Goal scored during advantage": "Goal stands even if foul occurred before. Yellow/red cards can still be issued after.",
            "Substitution during play": "Substitute can only enter at halfway line during stoppage with referee permission.",
            "Player sent off before kickoff": "Team starts with 11 players but cannot replace sent-off player.",
            "Goalkeeper sent off": "Outfield player must be substituted to bring on replacement goalkeeper (if subs available).",
            "Ball burst during play": "Play stopped, restarted with drop ball where burst occurred.",
            "Extra time golden goal": "No longer used. Full 30 minutes played regardless of goals scored.",
            "Penalty shootout order": "Teams alternate. If tied after 5 each, sudden death continues.",
            "Player bleeding": "Must leave field immediately for treatment and cannot return until bleeding stopped.",
            "Deliberate handball on goal line": "Red card + penalty kick (DOGSO).",
            "Offside in own half": "Cannot be offside in your own half of the field.",
            "Goalkeeper punching ball": "Legal as long as goalkeeper doesn't punch opponent.",
            "Slide tackle from behind": "Not automatically a foul if player wins ball cleanly without endangering opponent.",
            "Throw-in directly into goal": "Cannot score directly from throw-in. If enters opponent's goal: goal kick. Own goal: corner.",
            "Corner kick directly into goal": "Valid goal. Can score directly from corner.",
            "Indirect free kick into goal": "Must touch another player first. If direct: goal kick (opponent's goal) or corner (own goal).",
            "Player leaving field without permission": "Yellow card for leaving/entering field without referee permission.",
            "Excessive celebration": "Yellow card for removing shirt, climbing fence, or inciting crowd.",
            "Feigning injury/diving": "Yellow card for simulation to deceive referee.",
            "Time-wasting": "Yellow card for deliberately delaying restart of play.",
            "Dissent": "Yellow card for verbal or physical protest against referee decisions.",
            "VAR review process": "Referee signals review, checks monitor for clear error, makes final decision. Play stopped during review.",
            "Offside interfering with play": "Only penalized if player touches ball, obstructs opponent, or gains advantage from position."
        },
        faqs: [
            { q: "How many players are on a football team?", a: "11 players." },
            { q: "How long is a football match?", a: "90 minutes." },
            { q: "What is offside?", a: "Attacker ahead of defenders during pass." },
            { q: "Who can use hands?", a: "Goalkeeper (in penalty area)." },
            { q: "What is a goal?", a: "Ball crosses goal line fully." },
            { q: "What is a yellow card?", a: "Warning to a player." },
            { q: "What is a red card?", a: "Player sent off." },
            { q: "What is a free kick?", a: "Restart after foul." },
            { q: "What is a penalty kick?", a: "Kick from penalty spot." },
            { q: "What causes handball?", a: "Deliberate hand contact." },
            { q: "What is a corner kick?", a: "Ball crosses goal line by defender." },
            { q: "What is a throw-in?", a: "Restart from sideline." },
            { q: "What is extra time?", a: "Additional play after draw." },
            { q: "What is stoppage time?", a: "Added minutes for delays." },
            { q: "What is VAR?", a: "Video Assistant Referee." },
            { q: "What is a foul?", a: "Illegal play." },
            { q: "What is a header?", a: "Playing ball with head." },
            { q: "What is a clean sheet?", a: "No goals conceded." },
            { q: "What is a hat-trick?", a: "Three goals by one player." },
            { q: "What is a derby?", a: "Match between local rivals." },
            { q: "What is kickoff?", a: "Start of match." },
            { q: "What is advantage rule?", a: "Play continues after foul." },
            { q: "What is a defender's role?", a: "Stop opponent scoring." },
            { q: "What is pressing?", a: "Applying pressure high up." },
            { q: "What is a striker?", a: "Main attacking player." },
            { q: "What is a draw?", a: "Match ends tied." },
            { q: "What is relegation?", a: "Moving to lower league." },
            { q: "What is promotion?", a: "Moving to higher league." },
            { q: "What is a referee's job?", a: "Enforce rules." },
            { q: "What is goal kick?", a: "Restart after attacker touches ball last." },
            { q: "What is the offside rule?", a: "Player is offside if nearer to opponent's goal than both ball and second-last opponent when ball is played to them. Not offside from throw-ins, goal kicks, corners, or in own half." },
            { q: "Can a goalkeeper score a goal?", a: "Yes! Goalkeepers can score from anywhere. Usually from long kicks or set pieces. Rare but legal." },
            { q: "What happens if ball hits the referee?", a: "Play continues normally. Ball remains in play. If ball enters goal after hitting referee, goal doesn't count - drop ball restart." },
            { q: "How many substitutions are allowed?", a: "Most competitions allow 5 substitutions (made in 3 stoppages). Some allow 3. Rules vary by competition. Unused subs cannot be used after match ends." },
            { q: "What is VAR?", a: "Video Assistant Referee - reviews clear errors in: goals, penalty decisions, direct red cards, and mistaken identity. Referee makes final decision after review." },
            { q: "Can you be offside from a throw-in?", a: "No. Cannot be offside from throw-ins, goal kicks, or corner kicks. Also cannot be offside in own half." },
            { q: "What's the difference between yellow and red cards?", a: "Yellow = caution/warning. Two yellows = red. Red = immediate dismissal, team plays with 10 players. Player suspended for next match(es)." },
            { q: "What are the player positions?", a: "Goalkeeper (1), Defenders (2-5), Midfielders (3-5), Forwards/Strikers (1-3). Specific roles: center-back, full-back, winger, striker, etc." },
            { q: "What is a penalty shootout?", a: "Tiebreaker after extra time in knockout matches. Teams alternate taking penalties (5 each). If still tied, sudden death. Goalkeeper must stay on line until ball kicked." },
            { q: "Can you score from a throw-in?", a: "No. Cannot score directly from throw-in. If ball enters goal: goal kick (opponent's) or corner (own goal)." },
            { q: "What is stoppage time?", a: "Time added at end of each half for injuries, substitutions, VAR reviews, time-wasting. Referee determines amount (typically 2-5 minutes)." },
            { q: "What is a hat trick?", a: "When a player scores three goals in a single match. Perfect hat trick = one with right foot, left foot, and header." },
            { q: "What happens if goalkeeper handles outside the box?", a: "Free kick to opposition. Yellow card if stopping attack, red card if DOGSO (denying obvious goal-scoring opportunity)." },
            { q: "Can goalkeeper pick up back-pass?", a: "No. Goalkeeper cannot handle deliberate kick from teammate's foot. Can handle from teammate's head, chest, knee. Violation = indirect free kick." },
            { q: "What is the advantage rule?", a: "Referee allows play to continue after foul if stopping would benefit the fouling team. Can still issue cards after play stops." },
            { q: "How big is a football field?", a: "100-130 yards long, 50-100 yards wide. International: 110-120 x 70-80 yards. Goal: 8 yards wide, 8 feet tall." },
            { q: "What is DOGSO?", a: "Denying an Obvious Goal-Scoring Opportunity. Red card offense (or yellow + penalty if genuine attempt to play ball in penalty area)." },
            { q: "Can you be offside if you're behind the ball?", a: "No. If you're behind or level with the ball when it's played, you cannot be offside." },
            { q: "What is a clean sheet?", a: "When goalkeeper/team doesn't concede any goals in a match. Important stat for defenders and goalkeepers." },
            { q: "What are common formations?", a: "4-4-2 (balanced), 4-3-3 (attacking), 3-5-2 (wing-backs), 4-2-3-1 (defensive mid), 3-4-3 (very attacking). Numbers = defenders-midfielders-forwards." },
            { q: "What is a direct vs indirect free kick?", a: "Direct: can score directly. Awarded for contact fouls. Indirect: must touch another player first. Awarded for non-contact fouls (offside, back-pass, dangerous play)." },
            { q: "What happens if player gets injured?", a: "Play continues unless injury is serious. Injured player must leave field for treatment, can return when ball is out of play with referee permission." },
            { q: "Can you substitute a sent-off player?", a: "No. If player is sent off (red card), team plays with 10 players. Cannot be replaced even if substitutions available." },
            { q: "What is a professional foul?", a: "Tactical foul to stop promising attack. Usually yellow card. If DOGSO, red card." },
            { q: "How does extra time work?", a: "In knockout matches: if tied after 90 minutes, play two 15-minute halves (30 minutes total). If still tied, penalty shootout." },
            { q: "What is the golden goal rule?", a: "No longer used. Previously, first goal in extra time won match immediately. Now full extra time is played." },
            { q: "Can you score an own goal?", a: "Yes. If player puts ball into their own goal, it counts. Credited to opponent. Cannot score own goal from throw-in (corner awarded instead)." },
            { q: "What is a bicycle kick?", a: "Acrobatic overhead kick where player strikes ball while upside down in mid-air. Spectacular but difficult technique." },
            { q: "What are the major competitions?", a: "FIFA World Cup (every 4 years), UEFA Champions League, UEFA Europa League, domestic leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1), continental championships (Euros, Copa America, AFCON)." },
            { q: "What is injury time vs stoppage time?", a: "Same thing. Time added at end of each half to compensate for stoppages. Referee determines amount based on delays during half." },
            { q: "Can you tackle the goalkeeper?", a: "No. Cannot charge or tackle goalkeeper while they have possession in their hands. Can challenge fairly when ball is loose." },
            { q: "What is a nutmeg?", a: "Passing or dribbling the ball through opponent's legs. Considered skillful and slightly humiliating for defender." },
            { q: "What happens if ball hits crossbar/post?", a: "Play continues if ball stays in field. Goal kick if ball goes out over goal line. Goal only if entire ball crosses line." },
            { q: "Can you pass backwards from kickoff?", a: "Yes (since 2016 rule change). Previously ball had to go forward. Now can pass in any direction from kickoff." },
            { q: "What is a false nine?", a: "Forward who drops deep into midfield instead of staying high. Creates space for wingers/midfielders to attack. Popularized by Barcelona/Messi." },
            { q: "What equipment is required?", a: "Jersey/shirt, shorts, socks, shin guards (mandatory), footwear. Goalkeeper wears different color. No jewelry allowed." },
            { q: "What is simulation/diving?", a: "Feigning injury or exaggerating contact to deceive referee. Yellow card offense. Unsporting behavior." },
            { q: "Can you score from kickoff?", a: "Yes. Can score directly from kickoff into opponent's goal (very rare). If into own goal, corner to opponents." },
            { q: "What is a sweeper?", a: "Defensive player positioned behind main defensive line. Clears loose balls and covers for defenders. Less common in modern football." },
            { q: "What happens if teams are tied in league?", a: "Tiebreakers vary by league: goal difference, goals scored, head-to-head record, or playoff match. Check specific league rules." }
        ],
        offlineQuiz: [
            // EASY LEVEL (12 questions)
            {
                question: "How many players are on the field for one team?",
                options: ["10", "11", "15", "9"],
                correctAnswer: "11",
                explanation: "A standard football team has 11 players, including the goalkeeper.",
                difficulty: "Easy"
            },
            {
                question: "How long is a football match?",
                options: ["60 minutes", "90 minutes", "120 minutes", "80 minutes"],
                correctAnswer: "90 minutes",
                explanation: "A football match lasts 90 minutes, divided into two 45-minute halves.",
                difficulty: "Easy"
            },
            {
                question: "What happens if a player gets a red card?",
                options: ["Sent off for 10 mins", "Warning given", "Dismissed for rest of game", "Substituted immediately"],
                correctAnswer: "Dismissed for rest of game",
                explanation: "A red card means immediate dismissal from the field and the team must play with one less player.",
                difficulty: "Easy"
            },
            {
                question: "Where is a penalty kick taken from?",
                options: ["The corner flag", "12 yards out", "The halfway line", "6 yards out"],
                correctAnswer: "12 yards out",
                explanation: "The penalty spot is located 12 yards (11 meters) from the goal line.",
                difficulty: "Easy"
            },
            {
                question: "How many points is a goal worth?",
                options: ["1 point", "2 points", "3 points", "5 points"],
                correctAnswer: "1 point",
                explanation: "Each goal scores 1 point in football.",
                difficulty: "Easy"
            },
            {
                question: "What color card is a warning?",
                options: ["Red", "Yellow", "Green", "Blue"],
                correctAnswer: "Yellow",
                explanation: "A yellow card is a caution/warning. Two yellows equal a red card.",
                difficulty: "Easy"
            },
            {
                question: "Can goalkeepers use their hands?",
                options: ["Yes, anywhere on field", "Yes, only in penalty area", "No, never", "Only during penalties"],
                correctAnswer: "Yes, only in penalty area",
                explanation: "Goalkeepers can handle the ball only within their own penalty area.",
                difficulty: "Easy"
            },
            {
                question: "How many substitutions are typically allowed?",
                options: ["3", "5", "7", "Unlimited"],
                correctAnswer: "5",
                explanation: "Most modern competitions allow 5 substitutions, though this varies by competition.",
                difficulty: "Easy"
            },
            {
                question: "What starts the game?",
                options: ["Free kick", "Penalty", "Kickoff", "Throw-in"],
                correctAnswer: "Kickoff",
                explanation: "The game starts with a kickoff from the center circle.",
                difficulty: "Easy"
            },
            {
                question: "How many halves are in a match?",
                options: ["2", "3", "4", "1"],
                correctAnswer: "2",
                explanation: "A football match has two 45-minute halves.",
                difficulty: "Easy"
            },
            {
                question: "What is it called when the ball goes out over the sideline?",
                options: ["Corner kick", "Goal kick", "Throw-in", "Free kick"],
                correctAnswer: "Throw-in",
                explanation: "When the ball crosses the touchline, play restarts with a throw-in.",
                difficulty: "Easy"
            },
            {
                question: "Can you score directly from a throw-in?",
                options: ["Yes", "No", "Only in extra time", "Only if goalkeeper touches it"],
                correctAnswer: "No",
                explanation: "You cannot score directly from a throw-in. If it enters the goal, it's a goal kick or corner.",
                difficulty: "Easy"
            },

            // MEDIUM LEVEL (12 questions)
            {
                question: "What does VAR stand for?",
                options: ["Video Assistant Referee", "Visual Analysis Review", "Verified Action Replay", "Video Analysis Referee"],
                correctAnswer: "Video Assistant Referee",
                explanation: "VAR (Video Assistant Referee) reviews clear errors in goals, penalties, red cards, and mistaken identity.",
                difficulty: "Medium"
            },
            {
                question: "What is the offside rule?",
                options: ["Can't be in opponent's half", "Nearer to goal than ball and second-last opponent", "Can't be behind goalkeeper", "Must stay 10 yards from ball"],
                correctAnswer: "Nearer to goal than ball and second-last opponent",
                explanation: "A player is offside if nearer to opponent's goal than both ball and second-last opponent when ball is played.",
                difficulty: "Medium"
            },
            {
                question: "How long is extra time in knockout matches?",
                options: ["15 minutes", "20 minutes", "30 minutes", "45 minutes"],
                correctAnswer: "30 minutes",
                explanation: "Extra time consists of two 15-minute halves (30 minutes total).",
                difficulty: "Medium"
            },
            {
                question: "What is DOGSO?",
                options: ["Double Goal Scoring Opportunity", "Denying Obvious Goal-Scoring Opportunity", "Direct Offensive Goal Shot Opportunity", "Defensive Obstruction Goal Stop"],
                correctAnswer: "Denying Obvious Goal-Scoring Opportunity",
                explanation: "DOGSO results in a red card (or yellow + penalty if genuine attempt to play ball in penalty area).",
                difficulty: "Medium"
            },
            {
                question: "Can you be offside from a corner kick?",
                options: ["Yes", "No", "Only if in penalty area", "Only in last 10 minutes"],
                correctAnswer: "No",
                explanation: "You cannot be offside from corner kicks, throw-ins, or goal kicks.",
                difficulty: "Medium"
            },
            {
                question: "What happens if goalkeeper handles ball outside penalty area?",
                options: ["Nothing", "Indirect free kick", "Direct free kick", "Penalty"],
                correctAnswer: "Direct free kick",
                explanation: "Handling outside the box is a foul, resulting in a direct free kick and possible card.",
                difficulty: "Medium"
            },
            {
                question: "How many yellow cards equal a red card?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "2",
                explanation: "Receiving two yellow cards in the same match results in a red card and dismissal.",
                difficulty: "Medium"
            },
            {
                question: "What is a direct free kick?",
                options: ["Must touch another player first", "Can score directly", "Only goalkeeper can take", "Taken from penalty spot"],
                correctAnswer: "Can score directly",
                explanation: "A direct free kick can score directly into the goal without touching another player.",
                difficulty: "Medium"
            },
            {
                question: "Can goalkeeper pick up deliberate back-pass from teammate's foot?",
                options: ["Yes", "No", "Only outside penalty area", "Only in last 5 minutes"],
                correctAnswer: "No",
                explanation: "Goalkeeper cannot handle deliberate kick from teammate. Results in indirect free kick.",
                difficulty: "Medium"
            },
            {
                question: "What is stoppage time?",
                options: ["Time for substitutions", "Extra time at end of half", "Halftime break", "Injury timeout"],
                correctAnswer: "Extra time at end of half",
                explanation: "Stoppage time is added at end of each half to compensate for injuries, substitutions, and delays.",
                difficulty: "Medium"
            },
            {
                question: "What happens if ball hits referee and goes in goal?",
                options: ["Goal counts", "Goal doesn't count - drop ball", "Retake from where it hit", "Penalty to other team"],
                correctAnswer: "Goal doesn't count - drop ball",
                explanation: "If ball enters goal after hitting referee, goal doesn't count and play restarts with drop ball.",
                difficulty: "Medium"
            },
            {
                question: "How many players minimum to continue a match?",
                options: ["9", "8", "7", "6"],
                correctAnswer: "7",
                explanation: "A match cannot start or continue with fewer than 7 players per team.",
                difficulty: "Medium"
            },

            // HARD LEVEL (12 questions)
            {
                question: "What happens if attacker encroaches on penalty and goal is scored?",
                options: ["Goal stands", "Retake penalty", "Indirect free kick to defender", "Goal kick"],
                correctAnswer: "Retake penalty",
                explanation: "If attacker encroaches and scores, penalty is retaken. If defender encroaches and save, also retaken.",
                difficulty: "Hard"
            },
            {
                question: "Can you score an own goal from a throw-in?",
                options: ["Yes", "No - corner to opponents", "No - goal kick", "No - retake throw-in"],
                correctAnswer: "No - corner to opponents",
                explanation: "Cannot score own goal from throw-in. If ball enters own goal, corner kick awarded to opponents.",
                difficulty: "Hard"
            },
            {
                question: "What is the advantage rule?",
                options: ["Stronger team gets extra player", "Referee allows play to continue after foul", "Home team kicks off", "Winning team gets extra time"],
                correctAnswer: "Referee allows play to continue after foul",
                explanation: "Advantage allows play to continue if stopping would benefit the fouling team. Cards can still be issued.",
                difficulty: "Hard"
            },
            {
                question: "If goalkeeper saves penalty and ball rebounds to penalty taker before another player touches it, what happens?",
                options: ["Play continues", "Retake penalty", "Indirect free kick to defending team", "Goal kick"],
                correctAnswer: "Indirect free kick to defending team",
                explanation: "Penalty taker cannot touch ball again until another player touches it. Violation = indirect free kick.",
                difficulty: "Hard"
            },
            {
                question: "What happens if player is sent off before kickoff?",
                options: ["Team starts with 10 players", "Team starts with 11, can't replace later", "Match postponed", "Automatic 3-0 loss"],
                correctAnswer: "Team starts with 11, can't replace later",
                explanation: "Team starts with 11 players but cannot replace the sent-off player during the match.",
                difficulty: "Hard"
            },
            {
                question: "Can you pass backwards from kickoff?",
                options: ["No, must go forward", "Yes, since 2016 rule change", "Only in extra time", "Only if losing"],
                correctAnswer: "Yes, since 2016 rule change",
                explanation: "Since 2016, the ball can be passed in any direction from kickoff, including backwards.",
                difficulty: "Hard"
            },
            {
                question: "What happens if ball bursts during play?",
                options: ["Play continues", "Stop and drop ball where burst", "Retake from last restart", "Penalty to non-offending team"],
                correctAnswer: "Stop and drop ball where burst",
                explanation: "Play is stopped and restarted with a drop ball at the location where the ball burst.",
                difficulty: "Hard"
            },
            {
                question: "In a penalty shootout, if tied after 5 kicks each, what happens?",
                options: ["Retake all 5", "Sudden death continues", "Coin toss", "Team with more corners wins"],
                correctAnswer: "Sudden death continues",
                explanation: "After 5 kicks each, shootout continues in sudden death format until one team leads.",
                difficulty: "Hard"
            },
            {
                question: "Can you be offside in your own half?",
                options: ["Yes", "No", "Only if goalkeeper is forward", "Only in last 10 minutes"],
                correctAnswer: "No",
                explanation: "You cannot be offside in your own half of the field, regardless of other players' positions.",
                difficulty: "Hard"
            },
            {
                question: "What is the golden goal rule?",
                options: ["Still used - first goal in extra time wins", "No longer used - full extra time played", "Only used in World Cup", "Goal from 30+ yards"],
                correctAnswer: "No longer used - full extra time played",
                explanation: "Golden goal (first goal wins) is no longer used. Full 30 minutes of extra time is played.",
                difficulty: "Hard"
            },
            {
                question: "If player leaves field without permission during play, what happens?",
                options: ["Nothing", "Yellow card when returns", "Immediate red card", "Team plays with one less"],
                correctAnswer: "Yellow card when returns",
                explanation: "Leaving or entering field without referee permission results in yellow card.",
                difficulty: "Hard"
            },
            {
                question: "What happens if indirect free kick goes directly into opponent's goal?",
                options: ["Goal counts", "Goal kick to defending team", "Corner to attacking team", "Retake free kick"],
                correctAnswer: "Goal kick to defending team",
                explanation: "Indirect free kick must touch another player before goal. If direct into opponent's goal, it's a goal kick.",
                difficulty: "Hard"
            }
        ]
    },
    Cricket: {
        rules: [
            "Played between two teams of 11 players each on a cricket field with a 22-yard pitch in the center.",
            "The game consists of innings where one team bats and the other bowls and fields.",
            "The aim is to score more runs than the opponent while dismissing their batsmen.",
            "An over consists of 6 legal deliveries bowled by one bowler from one end.",
            "Bowlers must bowl with a straight arm; throwing is illegal and called a no-ball.",
            "Test matches: Up to 5 days, two innings per team, unlimited overs, no time limit per innings.",
            "ODI (One Day International): 50 overs per side, one innings each, typically lasts 7-8 hours.",
            "T20 (Twenty20): 20 overs per side, one innings each, typically lasts 3 hours.",
            "Batsmen score runs by hitting the ball and running between wickets, or by hitting boundaries (4 or 6 runs).",
            "A boundary scores 4 runs if the ball touches the ground before crossing the rope, 6 runs if it clears the rope without bouncing.",
            "Dismissal methods: Bowled, Caught, LBW, Run Out, Stumped, Hit Wicket, Hit Ball Twice, Obstructing Field, Handled Ball, Timed Out.",
            "LBW (Leg Before Wicket): Batsman out if ball would have hit stumps but is blocked by body/leg.",
            "Extras (runs not scored off bat): Wides, No-balls, Byes, Leg-byes. These add to the batting team's total.",
            "Wide: Ball bowled too far from batsman to hit. Batting team gets 1 run, ball must be re-bowled.",
            "No-ball: Illegal delivery (overstepping, throwing, bouncer above head height). Batting team gets 1 run, next ball is Free Hit.",
            "Free Hit: After no-ball, batsman cannot be dismissed except by run out. Encourages aggressive batting.",
            "Powerplay (ODI): First 10 overs with only 2 fielders outside 30-yard circle. Overs 11-40: max 4 outside. Overs 41-50: max 5 outside.",
            "Powerplay (T20): First 6 overs with only 2 fielders outside 30-yard circle.",
            "DRS (Decision Review System): Teams can challenge umpire decisions using technology (limited reviews per innings).",
            "Test cricket declarations: Batting team can voluntarily end their innings to give themselves time to bowl out opponents.",
            "Follow-on (Test): If team trails by 200+ runs, opponents can force them to bat again immediately.",
            "Duckworth-Lewis-Stern (DLS): Mathematical method to adjust target scores in rain-affected limited-overs matches.",
            "Bowlers cannot bowl consecutive overs; must alternate ends.",
            "Fielding restrictions: Certain number of fielders must be inside the circle during powerplays.",
            "Batsmen must ground bat or body behind crease to be safe; otherwise can be run out or stumped.",
            "New ball available after 80 overs in Test cricket; helps fast bowlers with swing and seam.",
            "Umpires can call dead ball if unfair play, dangerous conditions, or interruptions occur.",
            "Third umpire reviews close decisions using TV replays for run outs, stumpings, boundaries, and catches.",
            "Bowlers limited to maximum overs in ODI (10 overs) and T20 (4 overs).",
            "Mankading: Bowler can run out non-striker if they leave crease before ball is bowled (controversial but legal).",
            "Retired hurt: Batsman can leave field due to injury and return later; doesn't count as dismissal.",
            "Nightwatchman (Test): Lower-order batsman sent in late in day to protect specialist batsmen.",
            "Drinks breaks: Scheduled intervals for player hydration, typically every hour.",
            "Innings break: 10 minutes between innings in T20, 20 minutes in ODI, 40 minutes in Test.",
            "Super Over: Tiebreaker in limited overs - each team faces 6 balls; most runs wins."
        ],
        keyTerms: {
            "LBW": "Leg Before Wicket - batsman out if ball would have hit stumps but is blocked by leg/body. Must pitch in line, impact in line, and be hitting stumps.",
            "Powerplay": "Fielding restrictions in limited-overs cricket. ODI: first 10 overs (2 fielders outside circle). T20: first 6 overs (2 outside).",
            "Duckworth-Lewis-Stern": "Mathematical formula to calculate revised targets in rain-interrupted limited-overs matches based on overs and wickets remaining.",
            "Wicket": "Three stumps with two bails on top that bowler aims to hit. Also means dismissal of batsman.",
            "Century": "Batsman scoring 100+ runs in one innings. Double century = 200+, triple = 300+.",
            "Maiden Over": "Over where no runs are scored off the bat (extras don't count). Dot ball = delivery with no runs.",
            "Bouncer": "Short-pitched delivery rising toward batsman's head/chest. Limited to 2 per over in limited-overs cricket.",
            "Yorker": "Full delivery aimed at batsman's toes/base of stumps. Very difficult to score from.",
            "Duck": "Batsman dismissed for zero runs. Golden duck = out on first ball. Diamond duck = out without facing a ball (run out).",
            "Hat-trick": "Bowler taking three wickets on consecutive deliveries (can span multiple overs/matches).",
            "Five-for": "Bowler taking 5+ wickets in an innings. Ten-for = 10 wickets in a match (Test).",
            "All-rounder": "Player skilled in both batting and bowling.",
            "Swing": "Ball moving sideways through air. Conventional swing (with seam), reverse swing (against seam).",
            "Seam": "Ball deviating off pitch due to seam position. Seam bowlers exploit pitch conditions.",
            "Spin": "Ball turning off pitch. Off-spin (turns into right-hander), leg-spin (turns away).",
            "Googly": "Leg-spinner's delivery that turns opposite direction (like off-spin).",
            "Doosra": "Off-spinner's delivery that turns opposite direction (like leg-spin).",
            "Carrom Ball": "Flicked delivery using middle finger, creates unpredictable spin.",
            "Crease": "Lines on pitch. Batting crease (where batsman stands), bowling crease (where stumps are), popping crease (batsman must be behind).",
            "Run Out": "Batsman dismissed when running between wickets and fielder hits stumps before batsman grounds bat/body behind crease.",
            "Stumped": "Wicketkeeper removes bails while batsman is out of crease and not attempting a run.",
            "Caught": "Batsman out if fielder catches ball before it touches ground after being hit by bat.",
            "Bowled": "Batsman out if ball hits stumps and dislodges bails.",
            "Hit Wicket": "Batsman out if they hit their own stumps with bat or body while playing shot or setting off for run.",
            "DRS": "Decision Review System - technology (ball tracking, hot spot, snicko) to review umpire decisions. Limited reviews per innings.",
            "Sledging": "Verbal intimidation/banter between players (within limits of fair play).",
            "Death Overs": "Final overs of limited-overs innings (typically last 5-10 overs) when batsmen attack aggressively.",
            "Slog": "Aggressive, cross-batted shot attempting to hit ball for six, often risky.",
            "Drive": "Classical batting shot played along ground through covers, mid-off, or mid-on.",
            "Pull/Hook": "Shots played to short-pitched deliveries, hitting to leg side.",
            "Cut": "Shot played to short, wide delivery, hitting square or behind point on off side.",
            "Sweep": "Shot played to spin bowling, hitting from off to leg side while kneeling.",
            "Reverse Sweep": "Sweep shot played in opposite direction, switching hands.",
            "Helicopter Shot": "Unorthodox shot with wrists rolling over, popularized by MS Dhoni.",
            "Dilscoop": "Audacious shot scooping ball over wicketkeeper's head for boundary."
        },
        scenarios: {
            "Tie match in limited overs": "Super Over played - each team faces 6 balls. Most runs wins. If still tied, another Super Over or boundary count (controversial).",
            "Free Hit after no-ball": "Batsman cannot be dismissed except by run out. Can play aggressive shots without risk.",
            "Rain interruption in ODI/T20": "DLS method calculates revised target based on overs lost and wickets in hand. Par score shown on scoreboard.",
            "Ball hitting helmet on ground": "5 penalty runs awarded to batting team. Helmet belongs to fielding team.",
            "LBW review": "Batsman can review if they think ball missing stumps, pitched outside leg, or impact outside off (if not playing shot).",
            "Caught behind appeal": "Wicketkeeper appeals for edge. Umpire can use Snicko/Hot Spot to detect faint edges.",
            "Run out at both ends": "If both batsmen in middle of pitch when stumps broken, batsman running toward broken stumps is out.",
            "Obstructing the field": "Batsman out if deliberately obstructing fielder from making play (rare dismissal).",
            "Handled the ball": "Batsman out if touching ball with hand not holding bat (now merged with obstructing field).",
            "Timed out": "New batsman must arrive within 3 minutes of previous dismissal or they're out (very rare).",
            "Hit ball twice": "Illegal to hit ball twice except to protect stumps. Results in dismissal.",
            "Mankading": "Bowler runs out non-striker who leaves crease before delivery. Legal but controversial 'spirit of cricket' debate.",
            "Follow-on in Test": "If team trails by 200+ runs (150 in 3-day), opponents can enforce follow-on, making them bat again.",
            "Declaration in Test": "Captain ends innings voluntarily to have time to bowl out opponents and win match.",
            "New ball in Test": "Available after 80 overs. Helps fast bowlers with swing and seam movement.",
            "Bouncer limit": "Maximum 2 bouncers per over in limited-overs cricket. Umpire calls wide if above head height.",
            "Wide down leg side": "Ball passing down leg side is wide unless batsman hits it or it's within reach.",
            "No-ball for overstepping": "Front foot must land behind popping crease. If not, no-ball called and free hit awarded.",
            "No-ball for height": "Full toss above waist height is no-ball (dangerous delivery).",
            "Leg-bye runs": "Runs scored when ball hits batsman's body (not bat) and they run. Credited as extras.",
            "Bye runs": "Runs scored when ball misses bat and body, and batsmen run. Wicketkeeper's error.",
            "Caught and bowled": "Bowler catches ball hit back to them. Credited as caught and bowled.",
            "Stumped off spin": "Batsman advances down pitch to spinner, misses, wicketkeeper removes bails before batsman returns.",
            "Run out backing up": "Non-striker too far out of crease when bowler delivers. Can be run out (Mankading).",
            "DRS umpire's call": "Ball tracking shows marginal decision. Original umpire decision stands. Review not lost.",
            "Soft signal": "On-field umpire gives initial decision (out/not out) before third umpire review. Controversial, being phased out.",
            "Boundary count in tied match": "Previously used tiebreaker (2019 World Cup). Now Super Overs continue until winner found.",
            "Retired hurt vs retired out": "Retired hurt: batsman leaves due to injury, can return. Retired out: voluntary retirement, counts as dismissal (rare).",
            "Substitute fielder": "Allowed for injured player but cannot bat, bowl, or keep wicket. Can catch and run out.",
            "Concussion substitute": "Like-for-like replacement if player suffers concussion. Can bat and bowl.",
            "Dead ball": "Ball is dead when in umpire's/bowler's hands, boundary scored, batsman out, or umpire calls it.",
            "Ball lost": "If ball lost, umpire replaces with similar condition ball. Rare but can happen.",
            "Drinks break": "Scheduled every hour for player hydration. Strategic timeout in IPL T20.",
            "Bad light": "In Test cricket, play can be suspended if light too poor for safe batting against fast bowling.",
            "Dangerous pitch": "Umpires can suspend play if pitch too dangerous (excessive bounce, cracks). Match may be abandoned."
        },
        faqs: [
            { q: "What does LBW stand for?", a: "Leg Before Wicket." },
            { q: "How many players are on a cricket team?", a: "11 players." },
            { q: "How many balls are in one over?", a: "6 balls." },
            { q: "What is a no-ball?", a: "An illegal delivery by the bowler." },
            { q: "What is a wide ball?", a: "A ball too wide for the batter to reach." },
            { q: "What happens if a batter is bowled?", a: "The batter is out." },
            { q: "What is a boundary worth?", a: "4 runs." },
            { q: "What is a six?", a: "Ball clears boundary without touching ground." },
            { q: "What is a run-out?", a: "Batter fails to reach crease in time." },
            { q: "What is stumping?", a: "Wicketkeeper removes bails when batter is out of crease." },
            { q: "Who decides LBW decisions?", a: "The umpire." },
            { q: "What is powerplay?", a: "Period with fielding restrictions." },
            { q: "What is a maiden over?", a: "Over with zero runs conceded." },
            { q: "What is an all-rounder?", a: "Player who bats and bowls." },
            { q: "What is a free hit?", a: "Delivery after a no-ball." },
            { q: "What is a yorker?", a: "Ball pitched at batter's feet." },
            { q: "What is swing bowling?", a: "Ball moves in air." },
            { q: "What is spin bowling?", a: "Ball turns after pitching." },
            { q: "What is DRS?", a: "Decision Review System." },
            { q: "What is a duck?", a: "Batter dismissed for zero." },
            { q: "What is a bouncer?", a: "Short-pitched delivery." },
            { q: "What is follow-on?", a: "Team forced to bat again." },
            { q: "What is strike rotation?", a: "Changing batting ends." },
            { q: "What is fielding restriction?", a: "Limit on fielders outside circle." },
            { q: "What is an appeal?", a: "Request to umpire for out." },
            { q: "What is an overthrow?", a: "Extra runs due to misfield." },
            { q: "What is a substitute fielder?", a: "Temporary field replacement." },
            { q: "What is match referee's role?", a: "Enforce code of conduct." },
            { q: "What is super over?", a: "Tiebreaker over." },
            { q: "What is a dead ball?", a: "Ball not in play." }
        ],
        offlineQuiz: [
            // EASY LEVEL (10 questions)
            {
                question: "How many balls are in an over?",
                options: ["4", "5", "6", "8"],
                correctAnswer: "6",
                explanation: "A standard over in cricket consists of 6 legal deliveries.",
                difficulty: "Easy"
            },
            {
                question: "What does LBW stand for?",
                options: ["Leg Before Wicket", "Long Ball Wide", "Left Batsman Win", "Leg By Wicket"],
                correctAnswer: "Leg Before Wicket",
                explanation: "LBW implies the batsman used their leg to stop the ball from hitting the stumps.",
                difficulty: "Easy"
            },
            {
                question: "What is a 'Duck' in cricket?",
                options: ["A slow ball", "Scoring 0 runs", "Dropping a catch", "Winning by 10 wickets"],
                correctAnswer: "Scoring 0 runs",
                explanation: "A batsman is said to be out for a duck if they are dismissed without scoring any runs.",
                difficulty: "Easy"
            },
            {
                question: "How many players are in a cricket team?",
                options: ["9", "10", "11", "12"],
                correctAnswer: "11",
                explanation: "Each cricket team has 11 players on the field.",
                difficulty: "Easy"
            },
            {
                question: "How many runs is a boundary worth if the ball touches the ground?",
                options: ["2", "4", "6", "8"],
                correctAnswer: "4",
                explanation: "A boundary scores 4 runs if the ball touches the ground before crossing the rope.",
                difficulty: "Easy"
            },
            {
                question: "How many runs is a six worth?",
                options: ["4", "5", "6", "8"],
                correctAnswer: "6",
                explanation: "A six is scored when the ball clears the boundary rope without bouncing.",
                difficulty: "Easy"
            },
            {
                question: "What is a century in cricket?",
                options: ["50 runs", "75 runs", "100 runs", "150 runs"],
                correctAnswer: "100 runs",
                explanation: "A century is when a batsman scores 100 or more runs in a single innings.",
                difficulty: "Easy"
            },
            {
                question: "What happens when a batsman hits the ball and it goes over the boundary without bouncing?",
                options: ["4 runs", "6 runs", "Out", "No runs"],
                correctAnswer: "6 runs",
                explanation: "When the ball clears the boundary without touching the ground, it's a six (6 runs).",
                difficulty: "Easy"
            },
            {
                question: "How many stumps are there at each end of the pitch?",
                options: ["2", "3", "4", "5"],
                correctAnswer: "3",
                explanation: "There are 3 stumps at each end of the pitch, with 2 bails on top.",
                difficulty: "Easy"
            },
            {
                question: "What is it called when a bowler takes a wicket on their first ball?",
                options: ["Golden ball", "First strike", "Opening wicket", "New ball wicket"],
                correctAnswer: "Golden ball",
                explanation: "Taking a wicket on the first ball of a spell is often called a golden ball.",
                difficulty: "Easy"
            },

            // MEDIUM LEVEL (10 questions)
            {
                question: "How many overs are in a T20 match per side?",
                options: ["10", "15", "20", "25"],
                correctAnswer: "20",
                explanation: "T20 cricket has 20 overs per side, making it the shortest format.",
                difficulty: "Medium"
            },
            {
                question: "What is a hat-trick in cricket?",
                options: ["3 sixes in a row", "3 wickets in consecutive balls", "3 centuries in a series", "3 catches in an over"],
                correctAnswer: "3 wickets in consecutive balls",
                explanation: "A hat-trick is when a bowler takes three wickets on consecutive deliveries.",
                difficulty: "Medium"
            },
            {
                question: "What does DRS stand for?",
                options: ["Direct Run System", "Decision Review System", "Delivery Rating Score", "Dismissal Recording System"],
                correctAnswer: "Decision Review System",
                explanation: "DRS allows teams to challenge umpire decisions using technology.",
                difficulty: "Medium"
            },
            {
                question: "How many overs are in an ODI match per side?",
                options: ["20", "40", "50", "60"],
                correctAnswer: "50",
                explanation: "One Day International (ODI) cricket has 50 overs per side.",
                difficulty: "Medium"
            },
            {
                question: "What is a maiden over?",
                options: ["First over of match", "Over with no runs scored", "Over with a wicket", "Over bowled by a woman"],
                correctAnswer: "Over with no runs scored",
                explanation: "A maiden over is when no runs are scored off the bat during an over.",
                difficulty: "Medium"
            },
            {
                question: "What happens after a no-ball in limited overs cricket?",
                options: ["Nothing special", "Free hit on next ball", "Batsman gets out", "Bowler is banned"],
                correctAnswer: "Free hit on next ball",
                explanation: "After a no-ball, the next delivery is a free hit where the batsman cannot be dismissed except by run out.",
                difficulty: "Medium"
            },
            {
                question: "What is the Powerplay in ODI cricket?",
                options: ["Last 10 overs", "First 10 overs with fielding restrictions", "Drinks break", "Extra time"],
                correctAnswer: "First 10 overs with fielding restrictions",
                explanation: "The Powerplay is the first 10 overs in ODI where only 2 fielders are allowed outside the 30-yard circle.",
                difficulty: "Medium"
            },
            {
                question: "What is a yorker?",
                options: ["A bouncer", "Full delivery at batsman's toes", "Wide delivery", "Slow ball"],
                correctAnswer: "Full delivery at batsman's toes",
                explanation: "A yorker is a full delivery aimed at the batsman's toes or base of stumps, very difficult to score from.",
                difficulty: "Medium"
            },
            {
                question: "How many runs are awarded for a wide ball?",
                options: ["0", "1", "2", "4"],
                correctAnswer: "1",
                explanation: "A wide ball awards 1 run to the batting team and must be re-bowled.",
                difficulty: "Medium"
            },
            {
                question: "What is a five-for in cricket?",
                options: ["5 runs", "5 overs", "5 wickets in an innings", "5 catches"],
                correctAnswer: "5 wickets in an innings",
                explanation: "A five-for is when a bowler takes 5 or more wickets in a single innings, an excellent performance.",
                difficulty: "Medium"
            },

            // HARD LEVEL (10 questions)
            {
                question: "What is Mankading in cricket?",
                options: ["A type of spin bowling", "Running out non-striker before delivery", "A fielding position", "A batting technique"],
                correctAnswer: "Running out non-striker before delivery",
                explanation: "Mankading is when the bowler runs out the non-striker who leaves the crease before the ball is bowled. It's legal but controversial.",
                difficulty: "Hard"
            },
            {
                question: "What is a googly?",
                options: ["A fast bouncer", "Leg-spinner's ball that turns opposite direction", "A wide delivery", "A yorker"],
                correctAnswer: "Leg-spinner's ball that turns opposite direction",
                explanation: "A googly is a deceptive delivery by a leg-spinner that spins in the opposite direction, like an off-spin.",
                difficulty: "Hard"
            },
            {
                question: "When is the new ball available in Test cricket?",
                options: ["After 50 overs", "After 60 overs", "After 80 overs", "After 100 overs"],
                correctAnswer: "After 80 overs",
                explanation: "In Test cricket, the fielding team can take a new ball after 80 overs, which helps fast bowlers with swing and seam.",
                difficulty: "Hard"
            },
            {
                question: "What does DLS stand for in rain-affected matches?",
                options: ["Direct Line System", "Duckworth-Lewis-Stern", "Delivery Limit Standard", "Day Light Saving"],
                correctAnswer: "Duckworth-Lewis-Stern",
                explanation: "DLS is a mathematical method to calculate revised targets in rain-interrupted matches.",
                difficulty: "Hard"
            },
            {
                question: "What is a Super Over?",
                options: ["Extra long over", "Tiebreaker with 6 balls per team", "Over with 8 balls", "Bonus over for winning team"],
                correctAnswer: "Tiebreaker with 6 balls per team",
                explanation: "A Super Over is used to break ties in limited-overs cricket, where each team faces 6 balls.",
                difficulty: "Hard"
            },
            {
                question: "What is the follow-on rule in Test cricket?",
                options: ["Batting team can bat again", "Team trailing by 200+ runs can be forced to bat again", "Bowler bowls consecutive overs", "Extra innings for winning team"],
                correctAnswer: "Team trailing by 200+ runs can be forced to bat again",
                explanation: "If a team trails by 200+ runs in Test cricket, the opposing team can enforce the follow-on, making them bat again immediately.",
                difficulty: "Hard"
            },
            {
                question: "What is a doosra?",
                options: ["Second innings", "Off-spinner's ball that turns opposite direction", "Second bouncer", "Two runs"],
                correctAnswer: "Off-spinner's ball that turns opposite direction",
                explanation: "A doosra is an off-spinner's deceptive delivery that turns in the opposite direction, like a leg-spin.",
                difficulty: "Hard"
            },
            {
                question: "How many reviews does each team get per innings in Test cricket?",
                options: ["1", "2", "3", "Unlimited"],
                correctAnswer: "3",
                explanation: "In Test cricket, each team gets 3 reviews per innings (2 in limited overs). Successful reviews are retained.",
                difficulty: "Hard"
            },
            {
                question: "What is reverse swing?",
                options: ["Swinging bat in reverse", "Ball swinging opposite to conventional swing with old ball", "Bowling backwards", "Reverse batting order"],
                correctAnswer: "Ball swinging opposite to conventional swing with old ball",
                explanation: "Reverse swing occurs with an older ball, swinging in the opposite direction to conventional swing. A devastating weapon.",
                difficulty: "Hard"
            },
            {
                question: "What is a nightwatchman?",
                options: ["Night security", "Lower-order batsman sent in late to protect specialist batsmen", "Umpire at night", "Captain's role"],
                correctAnswer: "Lower-order batsman sent in late to protect specialist batsmen",
                explanation: "A nightwatchman is a lower-order batsman sent in late in the day to protect specialist batsmen from getting out in fading light.",
                difficulty: "Hard"
            }
        ]
    },
    Basketball: {
        rules: [
            "Played by two teams of 5 players on the court.",
            "The objective is to shoot the ball through the opponent's hoop.",
            "Points: 2 points for field goals inside the arc, 3 points for outside the arc, 1 point for free throws.",
            "Dribbling: You must bounce the ball to move with it. Double dribble and traveling are violations.",
            "Shot Clock: The offense has 24 seconds to attempt a shot that hits the rim.",
            "Fouls: Players are allowed a limited number of personal fouls (usually 5 or 6) before fouling out.",
            "Game duration: 4 quarters of 12 minutes (NBA) or 10 minutes (FIBA).",
            "Overtime periods are 5 minutes if the game is tied.",
            "The ball must be advanced past half-court within 8 seconds.",
            "Defensive 3-second violation: Defenders can't stay in the paint for more than 3 seconds without guarding someone."
        ],
        keyTerms: {
            "Traveling": "Taking more than two steps without dribbling the ball.",
            "Double Dribble": "Dribbling the ball with both hands or stopping and then dribbling again.",
            "Goaltending": "Interfering with the ball while it is on its downward flight to the basket or on the rim.",
            "Alley-oop": "A pass thrown near the basket that a teammate catches mid-air and immediately dunks or tips in.",
            "Fast Break": "A quick offensive play where the team tries to score before the defense can set up.",
            "Pick and Roll": "An offensive play where a player sets a screen (pick) for a teammate and then moves (rolls) toward the basket.",
            "Rebound": "Gaining possession of the ball after a missed shot.",
            "Assist": "A pass that directly leads to a teammate scoring."
        },
        scenarios: {
            "Foul on 3-pointer": "If the shooter misses, they get 3 free throws. If they make it, the basket counts and they get 1 free throw (4-point play attempt).",
            "Technical foul": "Results in 1 free throw for the opposing team and possession of the ball.",
            "Flagrant foul": "Excessive or violent contact results in free throws and possession.",
            "Shot clock violation": "Ball is turned over to the opposing team."
        },
        faqs: [
            { q: "How long is a basketball game?", a: "NBA: 4 quarters of 12 minutes (48 min total). FIBA/College: 4 quarters of 10 minutes (40 min total)." },
            { q: "What is traveling?", a: "Taking more than 2 steps without dribbling the ball. It's a violation that results in a turnover." },
            { q: "How many points is a 3-pointer worth?", a: "3 points - it's a shot made from beyond the three-point arc." },
            { q: "What happens if you foul out?", a: "After 6 personal fouls (NBA) or 5 (FIBA/College), you must leave the game and cannot return." },
            { q: "What is the shot clock?", a: "24 seconds (NBA/FIBA) to attempt a shot. If time expires, it's a turnover." },
            { q: "Can you dunk on a free throw?", a: "No, you must release the ball before crossing the free-throw line." },
            { q: "What's a double-double?", a: "Achieving double digits in two statistical categories (e.g., 10+ points and 10+ rebounds)." },
            { q: "What are the five positions?", a: "Point Guard (PG), Shooting Guard (SG), Small Forward (SF), Power Forward (PF), Center (C)." },
            { q: "What is a triple-double?", a: "Double digits in three categories (points, rebounds, assists, steals, or blocks). Rare achievement." },
            { q: "What's the 3-second rule?", a: "Offensive player can't stay in paint for 3+ seconds. Defensive 3-second in NBA only." },
            { q: "What is goaltending?", a: "Touching ball on downward flight to basket or while on rim. Basket counts for opponent." },
            { q: "What's a flagrant foul?", a: "Excessive/violent contact. Flagrant 1: unnecessary contact. Flagrant 2: ejection." },
            { q: "Can you block a dunk?", a: "Yes, as long as you don't goaltend (ball on downward flight or touching rim)." },
            { q: "What's the difference between NBA and FIBA?", a: "NBA: 48 min, 24s shot clock, 6 fouls. FIBA: 40 min, 24s shot clock, 5 fouls." },
            { q: "What is a technical foul?", a: "Unsportsmanlike conduct, arguing with refs, delay of game. 1 free throw + possession." },
            { q: "What's an and-one?", a: "Scoring while being fouled. Basket counts + 1 free throw attempt." },
            { q: "What is the bonus/penalty?", a: "After team commits certain fouls, opponent shoots free throws on all subsequent fouls." },
            { q: "What's a jump ball?", a: "Two players jump for ball tossed by ref. Used at game start and tie-up situations." },
            { q: "Can you call timeout?", a: "Yes, teams have limited timeouts (6-7 in NBA). Can be called by player with possession or coach." },
            { q: "What is a backcourt violation?", a: "Once ball crosses half-court, offense can't bring it back. Results in turnover." },
            { q: "What's a carry/palming?", a: "Dribbling violation where hand goes under ball. Turnover to opponent." },
            { q: "What is a charge?", a: "Offensive foul when player runs into defender with established position." },
            { q: "What's a block vs charge?", a: "Block: defender moving. Charge: defender set before contact. Controversial calls." },
            { q: "What are the major leagues?", a: "NBA (USA), EuroLeague (Europe), CBA (China), NBL (Australia), NCAA (college)." },
            { q: "What is March Madness?", a: "NCAA Division I men's basketball tournament. 68 teams, single elimination." },
            { q: "What's a buzzer beater?", a: "Shot made as game/quarter clock expires. Often decides close games." },
            { q: "What is a posterize?", a: "Dunking over a defender dramatically. Named after poster-worthy highlight." },
            { q: "What's the paint/key?", a: "Rectangular area near basket. 3-second violations occur here." }
        ],
        offlineQuiz: [
            // EASY LEVEL (6 questions)
            {
                question: "How many points is a shot from outside the arc worth?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "3",
                explanation: "Shots made from beyond the three-point line count for 3 points.",
                difficulty: "Easy"
            },
            {
                question: "What is 'Traveling'?",
                options: ["Visiting another stadium", "Taking too many steps without dribbling", "Passing the ball twice", "Fouling a moving player"],
                correctAnswer: "Taking too many steps without dribbling",
                explanation: "Traveling is a violation where a player takes more than the allowed number of steps without dribbling.",
                difficulty: "Easy"
            },
            {
                question: "How many players are on the court for each team?",
                options: ["4", "5", "6", "7"],
                correctAnswer: "5",
                explanation: "Each basketball team has 5 players on the court at a time.",
                difficulty: "Easy"
            },
            {
                question: "How many points is a free throw worth?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "1",
                explanation: "A free throw is worth 1 point.",
                difficulty: "Easy"
            },
            {
                question: "How many quarters are in an NBA game?",
                options: ["2", "3", "4", "5"],
                correctAnswer: "4",
                explanation: "An NBA game consists of 4 quarters of 12 minutes each.",
                difficulty: "Easy"
            },
            {
                question: "What is a double dribble?",
                options: ["Dribbling with both hands", "Dribbling twice as fast", "Two players dribbling", "Dribbling for 2 seconds"],
                correctAnswer: "Dribbling with both hands",
                explanation: "Double dribble is dribbling with both hands simultaneously or stopping and then dribbling again.",
                difficulty: "Easy"
            },
            {
                question: "How many points is a regular field goal worth?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "2",
                explanation: "A field goal made inside the three-point arc is worth 2 points.",
                difficulty: "Easy"
            },
            {
                question: "What happens when the ball goes out of bounds?",
                options: ["Free throw", "Jump ball", "Opposing team gets possession", "Game restarts"],
                correctAnswer: "Opposing team gets possession",
                explanation: "When the ball goes out of bounds, the opposing team gets possession for an inbound pass.",
                difficulty: "Easy"
            },
            {
                question: "Can you dribble with both hands at the same time?",
                options: ["Yes, always", "No, it's a violation", "Only during jump ball", "Only in the paint"],
                correctAnswer: "No, it's a violation",
                explanation: "Dribbling with both hands simultaneously is a double dribble violation.",
                difficulty: "Easy"
            },
            {
                question: "How long is each quarter in the NBA?",
                options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
                correctAnswer: "12 minutes",
                explanation: "NBA quarters are 12 minutes long (FIBA uses 10-minute quarters).",
                difficulty: "Easy"
            },
            {
                question: "What is a slam dunk?",
                options: ["Shooting from far away", "Forcefully putting ball through hoop from above", "Blocking a shot", "Stealing the ball"],
                correctAnswer: "Forcefully putting ball through hoop from above",
                explanation: "A slam dunk is when a player jumps and forcefully puts the ball through the hoop from above.",
                difficulty: "Easy"
            },

            // MEDIUM LEVEL (11 questions)
            {
                question: "How long is the shot clock in NBA?",
                options: ["14 seconds", "20 seconds", "24 seconds", "30 seconds"],
                correctAnswer: "24 seconds",
                explanation: "The NBA shot clock is 24 seconds, requiring teams to attempt a shot within that time.",
                difficulty: "Medium"
            },
            {
                question: "What is goaltending?",
                options: ["Blocking a shot", "Interfering with ball on downward flight to basket", "Guarding the goal", "Standing near the basket"],
                correctAnswer: "Interfering with ball on downward flight to basket",
                explanation: "Goaltending is touching the ball while it's on its downward flight to the basket or on the rim.",
                difficulty: "Medium"
            },
            {
                question: "How many personal fouls before a player fouls out in NBA?",
                options: ["4", "5", "6", "7"],
                correctAnswer: "6",
                explanation: "In the NBA, a player fouls out after committing 6 personal fouls.",
                difficulty: "Medium"
            },
            {
                question: "What is an 'and-one'?",
                options: ["Scoring 1 point", "Scoring while being fouled", "Passing to one player", "Playing one-on-one"],
                correctAnswer: "Scoring while being fouled",
                explanation: "An 'and-one' is when a player scores a basket while being fouled and gets a free throw attempt.",
                difficulty: "Medium"
            },
            {
                question: "What is a triple-double?",
                options: ["3 three-pointers", "Double digits in 3 categories", "3 double-doubles in a row", "Scoring 30 points"],
                correctAnswer: "Double digits in 3 categories",
                explanation: "A triple-double is achieving double digits in three statistical categories like points, rebounds, and assists.",
                difficulty: "Medium"
            },
            {
                question: "How long must the ball cross half-court in NBA?",
                options: ["5 seconds", "8 seconds", "10 seconds", "12 seconds"],
                correctAnswer: "8 seconds",
                explanation: "In the NBA, the offensive team must advance the ball past half-court within 8 seconds.",
                difficulty: "Medium"
            },
            {
                question: "What is a pick and roll?",
                options: ["Picking up the ball and rolling it", "Screen then roll to basket", "Picking teams", "Rolling the ball inbounds"],
                correctAnswer: "Screen then roll to basket",
                explanation: "A pick and roll is when a player sets a screen (pick) for a teammate, then rolls toward the basket for a pass.",
                difficulty: "Medium"
            },
            {
                question: "What is a double-double?",
                options: ["Two 3-pointers", "Double digits in 2 categories", "Two overtimes", "Scoring 20 points"],
                correctAnswer: "Double digits in 2 categories",
                explanation: "A double-double is achieving double digits in two statistical categories (e.g., 10 points and 10 rebounds).",
                difficulty: "Medium"
            },
            {
                question: "What is the key or paint?",
                options: ["Three-point line", "Rectangular area near basket", "Half-court line", "Out of bounds area"],
                correctAnswer: "Rectangular area near basket",
                explanation: "The key (or paint) is the rectangular area near the basket where the 3-second violation applies.",
                difficulty: "Medium"
            },
            {
                question: "What is a fast break?",
                options: ["Quick timeout", "Quick offensive play before defense sets up", "Breaking the backboard", "Fast dribbling"],
                correctAnswer: "Quick offensive play before defense sets up",
                explanation: "A fast break is a quick offensive transition where the team tries to score before the defense can set up.",
                difficulty: "Medium"
            },
            {
                question: "What is an alley-oop?",
                options: ["High arc shot", "Pass caught mid-air for dunk/layup", "Loop around defender", "Overhead pass"],
                correctAnswer: "Pass caught mid-air for dunk/layup",
                explanation: "An alley-oop is a pass thrown near the basket that a teammate catches mid-air and immediately dunks or lays in.",
                difficulty: "Medium"
            },

            // HARD LEVEL (11 questions)
            {
                question: "What is the defensive 3-second violation?",
                options: ["Defender can't guard for 3 seconds", "Defender can't stay in paint for 3+ seconds without guarding", "Offense has 3 seconds to shoot", "Defense gets 3 seconds to set up"],
                correctAnswer: "Defender can't stay in paint for 3+ seconds without guarding",
                explanation: "Defensive 3-second violation occurs when a defender stays in the paint for more than 3 seconds without actively guarding an opponent.",
                difficulty: "Hard"
            },
            {
                question: "What is a flagrant 2 foul?",
                options: ["2 fouls at once", "Excessive contact resulting in ejection", "Fouling twice in a row", "2-point foul"],
                correctAnswer: "Excessive contact resulting in ejection",
                explanation: "A flagrant 2 foul involves excessive or violent contact and results in immediate ejection from the game.",
                difficulty: "Hard"
            },
            {
                question: "What happens during a jump ball situation in NBA?",
                options: ["Actual jump ball", "Possession arrow determines possession", "Coin toss", "Fastest player gets ball"],
                correctAnswer: "Possession arrow determines possession",
                explanation: "In the NBA, after the opening tip, jump ball situations are resolved using the possession arrow system.",
                difficulty: "Hard"
            },
            {
                question: "What is a charge in basketball?",
                options: ["Running fast", "Offensive foul when running into set defender", "Charging the basket", "Fast break"],
                correctAnswer: "Offensive foul when running into set defender",
                explanation: "A charge is an offensive foul called when a player runs into a defender who has established position.",
                difficulty: "Hard"
            },
            {
                question: "How long is overtime in NBA?",
                options: ["3 minutes", "5 minutes", "10 minutes", "12 minutes"],
                correctAnswer: "5 minutes",
                explanation: "NBA overtime periods are 5 minutes long. Multiple overtimes can be played if needed.",
                difficulty: "Hard"
            },
            {
                question: "What is a technical foul?",
                options: ["Foul on technique", "Unsportsmanlike conduct or arguing with refs", "Touching the ball technically", "Technical error"],
                correctAnswer: "Unsportsmanlike conduct or arguing with refs",
                explanation: "A technical foul is called for unsportsmanlike behavior, arguing with referees, or delay of game, resulting in 1 free throw and possession.",
                difficulty: "Hard"
            },
            {
                question: "What is the restricted area (semicircle under basket)?",
                options: ["No shooting zone", "Area where charges can't be called on defenders", "Free throw area", "Coach's box"],
                correctAnswer: "Area where charges can't be called on defenders",
                explanation: "The restricted area is the semicircle under the basket where defensive players cannot draw charging fouls.",
                difficulty: "Hard"
            },
            {
                question: "What is a clear path foul?",
                options: ["Foul in open court", "Foul stopping fast break with no defender between attacker and basket", "Foul with clear intent", "Foul on clear shot"],
                correctAnswer: "Foul stopping fast break with no defender between attacker and basket",
                explanation: "A clear path foul occurs when a defender fouls to stop a fast break when there's no defender between the offensive player and the basket.",
                difficulty: "Hard"
            },
            {
                question: "What is the bonus or penalty situation?",
                options: ["Extra points", "Free throws awarded after team reaches foul limit", "Bonus timeout", "Penalty shot"],
                correctAnswer: "Free throws awarded after team reaches foul limit",
                explanation: "In the bonus/penalty, after a team commits a certain number of fouls in a quarter, the opponent shoots free throws on all subsequent fouls.",
                difficulty: "Hard"
            },
            {
                question: "What is a Euro step?",
                options: ["European style shot", "Two-step move changing direction to avoid defender", "Step back shot", "European league rule"],
                correctAnswer: "Two-step move changing direction to avoid defender",
                explanation: "A Euro step is a two-step move where the player takes a step in one direction then quickly steps in another direction to avoid a defender.",
                difficulty: "Hard"
            },
            {
                question: "What is the difference between a block and a charge?",
                options: ["No difference", "Block: defender moving, Charge: defender set before contact", "Block: offense, Charge: defense", "Block: legal, Charge: illegal"],
                correctAnswer: "Block: defender moving, Charge: defender set before contact",
                explanation: "A blocking foul is called when the defender is still moving. A charge is called when the defender has established position before contact.",
                difficulty: "Hard"
            }
        ]
    },
    Tennis: {
        rules: [
            "Played on a rectangular court with a net across the center.",
            "Scoring: Love (0), 15, 30, 40, Game. Deuce occurs at 40-40.",
            "Server must serve diagonally into the opponent's service box.",
            "Fault: If the serve misses the box. Double fault loses the point.",
            "Sets: Usually first to 6 games (winning by 2). Tie-break at 6-6.",
            "Matches: Best of 3 or 5 sets depending on the tournament.",
            "The ball can bounce once before being returned.",
            "Players switch ends after odd-numbered games.",
            "Let: If the serve touches the net but lands in, it's replayed."
        ],
        keyTerms: {
            "Deuce": "A score of 40-40. One player must win two consecutive points to win the game (Advantage -> Game).",
            "Let": "A serve that hits the net cord but lands in the service box. The serve is replayed.",
            "Ace": "A legal serve that is not touched by the receiver.",
            "Break Point": "A point where the receiver can win the game if they win the next point.",
            "Grand Slam": "The four major tennis tournaments: Australian Open, French Open, Wimbledon, US Open.",
            "Volley": "Hitting the ball before it bounces.",
            "Baseline": "The back boundary line of the court.",
            "Drop Shot": "A softly hit shot that barely clears the net and lands close to it."
        },
        scenarios: {
            "Ball lands on line": "The ball is considered 'in' and play continues.",
            "Double fault": "The server loses the point after two consecutive faults.",
            "Foot fault": "Stepping on or over the baseline before hitting the serve. Results in a fault.",
            "Hindrance": "If a player is distracted or hindered, the point may be replayed."
        },
        faqs: [
            { q: "What does 'Love' mean?", a: "Love means zero in tennis scoring. Origin possibly from French 'l'oeuf' (egg), which looks like zero." },
            { q: "How do you win a set?", a: "First to 6 games, must win by 2. At 6-6, tiebreak played (first to 7 points, win by 2)." },
            { q: "What is Deuce?", a: "Score of 40-40. Player must win 2 consecutive points to win game (Advantage then Game)." },
            { q: "Can the ball bounce twice?", a: "No, must hit before second bounce on your side. Otherwise, you lose the point." },
            { q: "What's a fault vs let?", a: "Fault: serve misses box (counts against server). Let: serve hits net but lands in (replayed, no penalty)." },
            { q: "How many sets in a match?", a: "Best of 3 sets (most matches) or best of 5 (men's Grand Slams)." },
            { q: "What are the Grand Slams?", a: "Australian Open (hard), French Open (clay), Wimbledon (grass), US Open (hard). Most prestigious tournaments." },
            { q: "What's a tiebreak?", a: "At 6-6 in set, first to 7 points wins (must win by 2). Server alternates every 2 points." },
            { q: "What's an ace?", a: "Legal serve that receiver doesn't touch. Immediate point for server." },
            { q: "Can you touch the net?", a: "No, touching net during point loses you the point. Even clothing/racket touching counts." },
            { q: "What's a break point?", a: "Point where receiver can win server's game. Breaking serve is significant advantage." },
            { q: "What's a double fault?", a: "Two consecutive serve faults. Server loses the point." },
            { q: "What surfaces are there?", a: "Hard court (fast), clay (slow, high bounce), grass (fastest, low bounce). Each favors different styles." },
            { q: "What's a volley?", a: "Hitting ball before it bounces. Usually done near net for quick points." },
            { q: "Can you challenge calls?", a: "Yes, using Hawk-Eye technology. Limited challenges per set (usually 3, reset after tiebreak)." },
            { q: "What's advantage?", a: "After deuce, winning next point gives advantage. Win next point = game. Lose = back to deuce." },
            { q: "What's a drop shot?", a: "Softly hit shot barely clearing net. Used to catch opponent off guard when they're back." },
            { q: "How long are matches?", a: "Varies greatly. Best of 3: 1-3 hours. Best of 5: 2-5+ hours. Longest was 11 hours 5 minutes!" },
            { q: "What's a foot fault?", a: "Stepping on/over baseline before hitting serve. Counts as fault." },
            { q: "Can you serve underhand?", a: "Yes, it's legal but rare. Considered unsportsmanlike by some traditionalists." }
        ],
        offlineQuiz: [
            // EASY LEVEL (6 questions)
            {
                question: "What is the score 'Love' equivalent to?",
                options: ["10", "1", "0", "15"],
                correctAnswer: "0",
                explanation: "In tennis scoring, 'Love' represents a score of zero.",
                difficulty: "Easy"
            },
            {
                question: "What happens at 'Deuce'?",
                options: ["Game ends", "Tie-break starts", "Need to win by 2 points", "Change sides"],
                correctAnswer: "Need to win by 2 points",
                explanation: "At Deuce (40-40), a player must win two consecutive points to win the game.",
                difficulty: "Easy"
            },
            {
                question: "How many sets are typically played in a men's Grand Slam match?",
                options: ["Best of 1", "Best of 3", "Best of 5", "Best of 7"],
                correctAnswer: "Best of 5",
                explanation: "Men's Grand Slam matches are best of 5 sets, while most other matches are best of 3.",
                difficulty: "Easy"
            },
            {
                question: "What is an ace in tennis?",
                options: ["Best player", "Serve not touched by receiver", "Winning shot", "First serve"],
                correctAnswer: "Serve not touched by receiver",
                explanation: "An ace is a legal serve that the receiver doesn't touch, resulting in an immediate point.",
                difficulty: "Easy"
            },
            {
                question: "How many games do you need to win a set?",
                options: ["4", "5", "6", "7"],
                correctAnswer: "6",
                explanation: "You need to win 6 games to win a set, but must win by at least 2 games.",
                difficulty: "Easy"
            },
            {
                question: "What is a let in tennis?",
                options: ["Losing the point", "Serve that hits net but lands in", "Winning serve", "Double fault"],
                correctAnswer: "Serve that hits net but lands in",
                explanation: "A let is when the serve touches the net cord but lands in the service box, and the serve is replayed.",
                difficulty: "Easy"
            },
            {
                question: "How many serves does a player get per point?",
                options: ["1", "2", "3", "Unlimited"],
                correctAnswer: "2",
                explanation: "A player gets two serves per point. If both are faults, it's a double fault and the point is lost.",
                difficulty: "Easy"
            },
            {
                question: "What is the scoring sequence in a game?",
                options: ["0, 1, 2, 3", "Love, 15, 30, 40", "1, 2, 3, 4", "0, 10, 20, 30"],
                correctAnswer: "Love, 15, 30, 40",
                explanation: "Tennis scoring goes Love (0), 15, 30, 40, Game.",
                difficulty: "Easy"
            },
            {
                question: "Can the ball bounce twice on your side?",
                options: ["Yes", "No, you lose the point", "Only in doubles", "Only on serve"],
                correctAnswer: "No, you lose the point",
                explanation: "The ball can only bounce once on your side before you must hit it, or you lose the point.",
                difficulty: "Easy"
            },
            {
                question: "How many players are on the court in singles?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "2",
                explanation: "Singles tennis has 2 players (one on each side), while doubles has 4 players.",
                difficulty: "Easy"
            },
            {
                question: "What happens if the ball lands on the line?",
                options: ["Out", "In", "Replay point", "Opponent's choice"],
                correctAnswer: "In",
                explanation: "If the ball lands on any part of the line, it is considered in and play continues.",
                difficulty: "Easy"
            },

            // MEDIUM LEVEL (11 questions)
            {
                question: "What happens at 6-6 in a set?",
                options: ["Set continues", "Tie-break is played", "Player with more points wins", "Match ends"],
                correctAnswer: "Tie-break is played",
                explanation: "At 6-6 in a set, a tie-break is played where the first to 7 points (win by 2) wins the set.",
                difficulty: "Medium"
            },
            {
                question: "What are the four Grand Slam tournaments?",
                options: ["Wimbledon, US Open, French Open, Australian Open", "Wimbledon, Olympics, Davis Cup, ATP Finals", "US Open, French Open, Italian Open, Spanish Open", "Australian Open, Asian Open, European Open, American Open"],
                correctAnswer: "Wimbledon, US Open, French Open, Australian Open",
                explanation: "The four Grand Slams are Wimbledon (grass), US Open (hard), French Open (clay), and Australian Open (hard).",
                difficulty: "Medium"
            },
            {
                question: "What is a break point?",
                options: ["Time for a break", "Point where receiver can win server's game", "Breaking your racket", "Tie-break point"],
                correctAnswer: "Point where receiver can win server's game",
                explanation: "A break point is when the receiver is one point away from winning the server's game, which is a significant advantage.",
                difficulty: "Medium"
            },
            {
                question: "What is a double fault?",
                options: ["Two fouls", "Two consecutive serve faults", "Fault by both players", "Serving twice"],
                correctAnswer: "Two consecutive serve faults",
                explanation: "A double fault occurs when both the first and second serves are faults, resulting in the server losing the point.",
                difficulty: "Medium"
            },
            {
                question: "Can you touch the net during a point?",
                options: ["Yes, anytime", "No, you lose the point", "Only after hitting the ball", "Only with your racket"],
                correctAnswer: "No, you lose the point",
                explanation: "Touching the net at any time during a point results in losing that point.",
                difficulty: "Medium"
            },
            {
                question: "What surface is Wimbledon played on?",
                options: ["Hard court", "Clay", "Grass", "Carpet"],
                correctAnswer: "Grass",
                explanation: "Wimbledon is the only Grand Slam played on grass courts, which is the fastest surface.",
                difficulty: "Medium"
            },
            {
                question: "What is a bagel in tennis?",
                options: ["Circular racket", "Winning a set 6-0", "Type of serve", "Round tournament"],
                correctAnswer: "Winning a set 6-0",
                explanation: "A bagel is when a player wins a set 6-0, with the zero resembling a bagel shape.",
                difficulty: "Medium"
            },
            {
                question: "What is the French Open played on?",
                options: ["Grass", "Hard court", "Clay", "Carpet"],
                correctAnswer: "Clay",
                explanation: "The French Open (Roland Garros) is played on red clay courts, the slowest surface.",
                difficulty: "Medium"
            },
            {
                question: "What is a topspin shot?",
                options: ["Shot hit from the top", "Forward rotation making ball dip", "Spinning the racket", "Overhead smash"],
                correctAnswer: "Forward rotation making ball dip",
                explanation: "Topspin is forward rotation on the ball that makes it dip quickly and bounce high, a key shot in modern tennis.",
                difficulty: "Medium"
            },
            {
                question: "How many points do you need to win a tie-break?",
                options: ["5", "6", "7", "10"],
                correctAnswer: "7",
                explanation: "You need 7 points to win a tie-break, but must win by at least 2 points.",
                difficulty: "Medium"
            },
            {
                question: "What is a service box?",
                options: ["Box for storing rackets", "Area where serve must land", "Server's standing area", "Scoring box"],
                correctAnswer: "Area where serve must land",
                explanation: "The service box is the rectangular area diagonally opposite the server where the serve must land to be valid.",
                difficulty: "Medium"
            },

            // HARD LEVEL (11 questions)
            {
                question: "What is advantage in tennis?",
                options: ["Leading in sets", "Winning point after deuce", "Better player", "Home court advantage"],
                correctAnswer: "Winning point after deuce",
                explanation: "After deuce, winning the next point gives you advantage. Win the next point and you win the game; lose and it's back to deuce.",
                difficulty: "Hard"
            },
            {
                question: "How many challenges does a player get per set using Hawk-Eye?",
                options: ["2", "3", "4", "5"],
                correctAnswer: "3",
                explanation: "Players typically get 3 challenges per set (reset after a tie-break). Successful challenges don't count against the limit.",
                difficulty: "Hard"
            },
            {
                question: "What is a drop shot?",
                options: ["Dropping the racket", "Softly hit shot barely clearing net", "Powerful downward shot", "Shot that drops out of bounds"],
                correctAnswer: "Softly hit shot barely clearing net",
                explanation: "A drop shot is a softly hit shot that barely clears the net and lands close to it, used to catch opponents off guard.",
                difficulty: "Hard"
            },
            {
                question: "What is a foot fault?",
                options: ["Stepping on opponent's foot", "Stepping on/over baseline before hitting serve", "Foot injury", "Wrong footwear"],
                correctAnswer: "Stepping on/over baseline before hitting serve",
                explanation: "A foot fault occurs when the server steps on or over the baseline before making contact with the ball, and it counts as a fault.",
                difficulty: "Hard"
            },
            {
                question: "Can you serve underhand in professional tennis?",
                options: ["No, it's illegal", "Yes, it's legal", "Only in tie-breaks", "Only at Grand Slams"],
                correctAnswer: "Yes, it's legal",
                explanation: "Underhand serves are legal in tennis, though rare and sometimes considered unsportsmanlike by traditionalists.",
                difficulty: "Hard"
            },
            {
                question: "What is a volley in tennis?",
                options: ["Hitting ball after it bounces twice", "Hitting ball before it bounces", "Serving the ball", "Returning a serve"],
                correctAnswer: "Hitting ball before it bounces",
                explanation: "A volley is hitting the ball before it bounces on your side of the court, usually done near the net for quick points.",
                difficulty: "Hard"
            },
            {
                question: "What is a golden set?",
                options: ["Set played at sunset", "Winning a set 6-0 without losing a point", "Gold medal match", "Final set"],
                correctAnswer: "Winning a set 6-0 without losing a point",
                explanation: "A golden set is winning a set 6-0 without losing a single point (24 consecutive points). Extremely rare.",
                difficulty: "Hard"
            },
            {
                question: "What is a moonball?",
                options: ["Night match ball", "High, slow, looping shot", "Lunar-shaped racket", "Ball hit at the moon"],
                correctAnswer: "High, slow, looping shot",
                explanation: "A moonball is a defensive shot hit high and deep with heavy topspin, giving the hitter time to recover position.",
                difficulty: "Hard"
            },
            {
                question: "What is a tweener?",
                options: ["Between sets break", "Shot hit between the legs", "Score between 15 and 30", "Player between rankings"],
                correctAnswer: "Shot hit between the legs",
                explanation: "A tweener is a trick shot where the player hits the ball between their legs, usually while running away from the net.",
                difficulty: "Hard"
            },
            {
                question: "What is the no-ad scoring system?",
                options: ["No advertising", "First to 4 points wins game, deuce is sudden death", "No advantage points", "Abbreviated scoring"],
                correctAnswer: "First to 4 points wins game, deuce is sudden death",
                explanation: "In no-ad scoring, at deuce (3-3), the next point wins the game (sudden death), speeding up matches.",
                difficulty: "Hard"
            },
            {
                question: "What is a bagel and breadstick?",
                options: ["Tennis snacks", "Winning 6-0, 6-1", "Equipment brands", "Court markings"],
                correctAnswer: "Winning 6-0, 6-1",
                explanation: "A bagel and breadstick refers to winning a match 6-0, 6-1 (the 0 looks like a bagel, the 1 like a breadstick).",
                difficulty: "Hard"
            }
        ]
    },
    Rugby: {
        rules: [
            "Played with an oval ball.",
            "The ball can be carried or kicked forward, but must be passed backward.",
            "A Try is worth 5 points (grounding the ball in the opponent's in-goal area).",
            "Conversion kick adds 2 points.",
            "Tackling: Players can tackle the ball carrier to bring them to the ground.",
            "Penalty kick: 3 points if successful.",
            "Drop goal: 3 points if kicked through the posts during open play.",
            "15 players per team in Rugby Union, 13 in Rugby League.",
            "Match duration: 80 minutes (two 40-minute halves).",
            "Ruck: Players compete for the ball on the ground after a tackle."
        ],
        keyTerms: {
            "Scrum": "A method of restarting play where players pack together and the ball is thrown in.",
            "Knock-on": "Losing possession of the ball forward. Results in a scrum to the other team.",
            "Lineout": "Restarting play after the ball goes into touch (out of bounds).",
            "Try": "Scoring by grounding the ball in the opponent's in-goal area (5 points).",
            "Maul": "When the ball carrier is held by opponents but stays on their feet, and teammates bind on.",
            "Ruck": "A phase of play where players compete for the ball on the ground.",
            "Sin Bin": "A 10-minute temporary suspension for a yellow card offense.",
            "Advantage": "The referee allows play to continue after a foul if the non-offending team benefits."
        },
        scenarios: {
            "Forward pass": "Illegal. Results in a scrum to the non-offending team.",
            "High tackle": "Tackling above the shoulders is illegal and results in a penalty.",
            "Offside": "Being in front of the ball when it's played by a teammate. Results in a penalty.",
            "Knock-on in goal": "Results in a 5-meter scrum to the defending team."
        },
        faqs: [
            { q: "Can you pass forward?", a: "No, ball must be passed backward or laterally. Forward passes illegal and result in scrum." },
            { q: "How many points is a try?", a: "5 points. After try, team can kick conversion for 2 more points (total 7)." },
            { q: "Union vs League difference?", a: "Union: 15 players, more scrums/lineouts. League: 13 players, 6-tackle rule, simpler restarts." },
            { q: "What is a scrum?", a: "8 forwards from each team bind together, compete for ball. Restarts play after minor infringements." },
            { q: "Can you tackle without ball?", a: "No, that's obstruction. Results in penalty to non-offending team." },
            { q: "What is yellow card?", a: "10-minute sin bin (temporary suspension). Team plays with one less player. Two yellows = red." },
            { q: "What's a conversion?", a: "Kick at goal after try. Worth 2 points. Kicked from line parallel to where try scored." },
            { q: "What's a penalty kick?", a: "3 points if successful. Awarded for serious infringements. Can kick for goal, touch, or tap-and-go." },
            { q: "What's a drop goal?", a: "3 points. Ball dropped and kicked through posts during open play. Difficult skill." },
            { q: "What's a lineout?", a: "Restart after ball goes into touch. Players lifted to catch ball thrown in." },
            { q: "What's a ruck?", a: "Players compete for ball on ground after tackle. Must stay on feet, enter from behind." },
            { q: "What's a maul?", a: "Ball carrier held by opponents but stays on feet. Teammates bind on to drive forward." },
            { q: "What's a knock-on?", a: "Losing ball forward. Results in scrum to opposition." },
            { q: "What's offside?", a: "Being ahead of ball when teammate plays it. Results in penalty." },
            { q: "What's a high tackle?", a: "Tackling above shoulders. Dangerous play, results in penalty or card." },
            { q: "How long is a match?", a: "80 minutes - two 40-minute halves. Extra time in knockout matches if tied." },
            { q: "What's the Six Nations?", a: "Annual Union tournament: England, France, Ireland, Italy, Scotland, Wales. Prestigious championship." },
            { q: "What's the Rugby World Cup?", a: "Held every 4 years. Most prestigious tournament. New Zealand (All Blacks) most successful." },
            { q: "Can you kick forward?", a: "Yes, kicking forward is legal. Strategic weapon to gain territory." },
            { q: "What's a blood bin?", a: "Temporary replacement for bleeding player. Player can return after treatment." }
        ],
        offlineQuiz: [
            // EASY LEVEL (6 questions)
            {
                question: "Can you pass the ball forward?",
                options: ["Yes, anytime", "Only with feet", "No, never", "Only to the captain"],
                correctAnswer: "No, never",
                explanation: "In Rugby, the ball must be passed backward or laterally. A forward pass is a foul.",
                difficulty: "Easy"
            },
            {
                question: "How many points is a Try worth?",
                options: ["3", "5", "7", "2"],
                correctAnswer: "5",
                explanation: "A Try is scored by grounding the ball in the opponent's in-goal area and is worth 5 points.",
                difficulty: "Easy"
            },
            {
                question: "How many players are on a Rugby Union team?",
                options: ["11", "13", "15", "17"],
                correctAnswer: "15",
                explanation: "Rugby Union has 15 players per team, while Rugby League has 13.",
                difficulty: "Easy"
            },
            {
                question: "How long is a Rugby match?",
                options: ["60 minutes", "70 minutes", "80 minutes", "90 minutes"],
                correctAnswer: "80 minutes",
                explanation: "A Rugby match lasts 80 minutes, divided into two 40-minute halves.",
                difficulty: "Easy"
            },
            {
                question: "How many points is a conversion kick worth?",
                options: ["1", "2", "3", "5"],
                correctAnswer: "2",
                explanation: "A conversion kick after a try is worth 2 points, making a converted try worth 7 points total.",
                difficulty: "Easy"
            },
            {
                question: "Can you kick the ball forward?",
                options: ["No, never", "Yes, kicking forward is legal", "Only the captain", "Only in the last 10 minutes"],
                correctAnswer: "Yes, kicking forward is legal",
                explanation: "While you cannot pass forward, kicking the ball forward is a legal and strategic part of Rugby.",
                difficulty: "Easy"
            },
            {
                question: "What color card means immediate ejection?",
                options: ["Yellow", "Red", "Orange", "Black"],
                correctAnswer: "Red",
                explanation: "A red card results in immediate ejection from the game and the team plays with one less player for the rest of the match.",
                difficulty: "Easy"
            },
            {
                question: "Can you tackle a player without the ball?",
                options: ["Yes", "No, it's obstruction", "Only in scrums", "Only the captain"],
                correctAnswer: "No, it's obstruction",
                explanation: "Tackling a player without the ball is obstruction and results in a penalty to the non-offending team.",
                difficulty: "Easy"
            },
            {
                question: "What is the in-goal area?",
                options: ["Penalty area", "Area behind goal line where tries are scored", "Kicking area", "Substitution zone"],
                correctAnswer: "Area behind goal line where tries are scored",
                explanation: "The in-goal area is the zone behind the goal line where players must ground the ball to score a try.",
                difficulty: "Easy"
            },
            {
                question: "How many points is a penalty goal worth?",
                options: ["1", "2", "3", "5"],
                correctAnswer: "3",
                explanation: "A penalty goal kicked through the posts is worth 3 points.",
                difficulty: "Easy"
            },
            {
                question: "Can you throw the ball forward?",
                options: ["Yes", "No", "Only from scrums", "Only the scrum-half"],
                correctAnswer: "No",
                explanation: "The ball must be passed backward or laterally. Forward passes are illegal in rugby.",
                difficulty: "Easy"
            },

            // MEDIUM LEVEL (11 questions)
            {
                question: "What is a scrum?",
                options: ["A type of kick", "Method of restarting play with players packed together", "A penalty", "A try celebration"],
                correctAnswer: "Method of restarting play with players packed together",
                explanation: "A scrum is when 8 forwards from each team bind together to compete for the ball, restarting play after minor infringements.",
                difficulty: "Medium"
            },
            {
                question: "How many points is a penalty kick worth?",
                options: ["1", "2", "3", "5"],
                correctAnswer: "3",
                explanation: "A successful penalty kick is worth 3 points.",
                difficulty: "Medium"
            },
            {
                question: "What is a yellow card in Rugby?",
                options: ["Warning only", "10-minute sin bin", "Immediate ejection", "5-minute penalty"],
                correctAnswer: "10-minute sin bin",
                explanation: "A yellow card results in a 10-minute temporary suspension (sin bin), and the team plays with one less player.",
                difficulty: "Medium"
            },
            {
                question: "What is a lineout?",
                options: ["Players lining up for kickoff", "Restart after ball goes into touch", "Defensive formation", "Scoring celebration"],
                correctAnswer: "Restart after ball goes into touch",
                explanation: "A lineout is used to restart play after the ball goes out of bounds (into touch), with players lifted to catch the thrown ball.",
                difficulty: "Medium"
            },
            {
                question: "What is a knock-on?",
                options: ["Knocking on the door", "Losing ball forward", "Tackling technique", "Scoring method"],
                correctAnswer: "Losing ball forward",
                explanation: "A knock-on is when a player loses possession of the ball forward, resulting in a scrum to the opposition.",
                difficulty: "Medium"
            },
            {
                question: "How many points is a drop goal worth?",
                options: ["1", "2", "3", "5"],
                correctAnswer: "3",
                explanation: "A drop goal, kicked through the posts during open play, is worth 3 points.",
                difficulty: "Medium"
            },
            {
                question: "What is advantage in rugby?",
                options: ["Leading in score", "Referee allows play to continue after foul if non-offending team benefits", "Home team advantage", "Extra player"],
                correctAnswer: "Referee allows play to continue after foul if non-offending team benefits",
                explanation: "Advantage allows the referee to let play continue after a foul if stopping would disadvantage the non-offending team.",
                difficulty: "Medium"
            },
            {
                question: "What is a 22-meter drop-out?",
                options: ["Dropout from 22m line after ball made dead in-goal", "22 players drop out", "Drop goal from 22m", "22-minute timeout"],
                correctAnswer: "Dropout from 22m line after ball made dead in-goal",
                explanation: "A 22-meter drop-out restarts play from the 22-meter line after the ball is made dead in the in-goal area.",
                difficulty: "Medium"
            },
            {
                question: "What is a mark (fair catch)?",
                options: ["Marking an opponent", "Catching ball cleanly in own 22 and calling 'mark'", "Scoring mark", "Field marking"],
                correctAnswer: "Catching ball cleanly in own 22 and calling 'mark'",
                explanation: "A mark is when a player cleanly catches the ball in their own 22-meter area and calls 'mark', earning a free kick.",
                difficulty: "Medium"
            },
            {
                question: "How many forwards are in a scrum?",
                options: ["6", "7", "8", "9"],
                correctAnswer: "8",
                explanation: "A scrum consists of 8 forwards from each team binding together to compete for the ball.",
                difficulty: "Medium"
            },
            {
                question: "What is a grubber kick?",
                options: ["High kick", "Low kick along the ground", "Kick to touch", "Drop goal attempt"],
                correctAnswer: "Low kick along the ground",
                explanation: "A grubber kick is a low kick that bounces along the ground, often used to get behind the defense.",
                difficulty: "Medium"
            },

            // HARD LEVEL (11 questions)
            {
                question: "What is a ruck in Rugby?",
                options: ["A type of kick", "Players competing for ball on ground after tackle", "Scoring method", "Penalty type"],
                correctAnswer: "Players competing for ball on ground after tackle",
                explanation: "A ruck is a phase of play where players compete for the ball on the ground after a tackle, staying on their feet and entering from behind.",
                difficulty: "Hard"
            },
            {
                question: "What is a maul?",
                options: ["Tackling from behind", "Ball carrier held but stays on feet with teammates binding", "Type of scrum", "Penalty kick"],
                correctAnswer: "Ball carrier held but stays on feet with teammates binding",
                explanation: "A maul occurs when the ball carrier is held by opponents but stays on their feet, and teammates bind on to drive forward.",
                difficulty: "Hard"
            },
            {
                question: "What happens if you tackle above the shoulders?",
                options: ["Nothing", "Penalty or card for high tackle", "Scrum to opposition", "Free kick"],
                correctAnswer: "Penalty or card for high tackle",
                explanation: "Tackling above the shoulders (high tackle) is dangerous play and results in a penalty, and possibly a yellow or red card.",
                difficulty: "Hard"
            },
            {
                question: "What is offside in Rugby?",
                options: ["Being in opponent's half", "Being ahead of ball when teammate plays it", "Standing outside the field", "Not participating"],
                correctAnswer: "Being ahead of ball when teammate plays it",
                explanation: "A player is offside if they are ahead of the ball when a teammate plays it, resulting in a penalty to the opposition.",
                difficulty: "Hard"
            },
            {
                question: "What is the difference between Rugby Union and Rugby League?",
                options: ["No difference", "Union has 15 players, League has 13", "Different ball shapes", "Different field sizes only"],
                correctAnswer: "Union has 15 players, League has 13",
                explanation: "Rugby Union has 15 players with more scrums/lineouts, while Rugby League has 13 players with a 6-tackle rule and simpler restarts.",
                difficulty: "Hard"
            },
            {
                question: "What is a blood bin?",
                options: ["Penalty for bleeding", "Temporary replacement for bleeding player", "Medical room", "Red card for injury"],
                correctAnswer: "Temporary replacement for bleeding player",
                explanation: "A blood bin allows a temporary replacement for a player who is bleeding. The player can return after treatment.",
                difficulty: "Hard"
            },
            {
                question: "What is a rolling maul?",
                options: ["Rolling the ball", "Maul that moves forward with ball carrier protected", "Rolling tackle", "Rotating players"],
                correctAnswer: "Maul that moves forward with ball carrier protected",
                explanation: "A rolling maul is when the ball carrier is held but teammates bind on and drive forward together, a powerful attacking weapon.",
                difficulty: "Hard"
            },
            {
                question: "What is the Haka?",
                options: ["Rugby ball brand", "Traditional Maori war dance performed by New Zealand team", "Tackling technique", "Scoring celebration"],
                correctAnswer: "Traditional Maori war dance performed by New Zealand team",
                explanation: "The Haka is a traditional Maori war dance performed by the New Zealand All Blacks before matches to intimidate opponents.",
                difficulty: "Hard"
            },
            {
                question: "What is a box kick?",
                options: ["Kick from a box", "High tactical kick by scrum-half from base of ruck", "Kick into the box", "Square-shaped kick"],
                correctAnswer: "High tactical kick by scrum-half from base of ruck",
                explanation: "A box kick is a high, short tactical kick made by the scrum-half from the base of a ruck or maul to contest possession.",
                difficulty: "Hard"
            },
            {
                question: "What is the Six Nations Championship?",
                options: ["6-team tournament", "Annual tournament between England, France, Ireland, Italy, Scotland, Wales", "6-game series", "Tournament for 6 nations"],
                correctAnswer: "Annual tournament between England, France, Ireland, Italy, Scotland, Wales",
                explanation: "The Six Nations is an annual rugby union tournament between six European nations, one of the oldest and most prestigious competitions.",
                difficulty: "Hard"
            },
            {
                question: "What is a chip kick?",
                options: ["Kicking potato chips", "Short kick over defender's head", "Chip shot goal", "Damaged ball kick"],
                correctAnswer: "Short kick over defender's head",
                explanation: "A chip kick is a short, lofted kick over a defender's head, allowing the kicker or teammate to regather the ball.",
                difficulty: "Hard"
            }
        ]
    },
    Baseball: {
        rules: [
            "Played with a bat, ball, and glove between two teams of 9 players.",
            "The game lasts 9 innings.",
            "Teams alternate batting and fielding.",
            "Strikes and Balls: 3 strikes is an out, 4 balls is a walk.",
            "Outs: Strikeout, Force out, Tag out, Fly out.",
            "Runs: A run is scored when a player circles all bases and reaches home plate.",
            "Each team gets 3 outs per inning.",
            "The pitcher must throw from the pitcher's mound.",
            "Foul balls count as strikes (except on the 3rd strike, unless it's a bunt).",
            "Stealing bases is allowed when the ball is in play."
        ],
        keyTerms: {
            "Infield Fly Rule": "Prevents the defense from intentionally dropping a fly ball to turn a double play.",
            "Balk": "An illegal motion by the pitcher with runners on base.",
            "Home Run": "Hitting the ball over the outfield fence in fair territory.",
            "Strike Zone": "The area over home plate between the batter's knees and mid-torso.",
            "RBI": "Run Batted In - credited when a batter's action causes a run to score.",
            "Grand Slam": "A home run hit with all bases loaded (4 runs score).",
            "Double Play": "Two outs made on a single play.",
            "Sacrifice Fly": "An out that allows a runner to score from third base."
        },
        scenarios: {
            "Tie after 9 innings": "Extra innings are played until one team has more runs at the end of an inning.",
            "Caught foul ball": "The batter is out, even though it's in foul territory.",
            "Runner interference": "If a runner interferes with a fielder, the runner is out.",
            "Balk with runners on": "All runners advance one base."
        },
        faqs: [
            { q: "How many innings?", a: "9 innings. Each team bats once per inning. Tied after 9? Extra innings until winner." },
            { q: "Ball vs strike?", a: "Strike: pitch in zone or swung at. Ball: pitch outside zone not swung at. 3 strikes = out, 4 balls = walk." },
            { q: "What is home run?", a: "Ball hit over outfield fence in fair territory. Batter and all runners score." },
            { q: "Can you steal home?", a: "Yes, but rare and risky. Runner tries reaching home before pitcher delivers." },
            { q: "What happens on 4 balls?", a: "Batter gets walk (free pass to first base)." },
            { q: "What's a perfect game?", a: "Pitcher doesn't allow any batter to reach base entire game (27 up, 27 out). Extremely rare." },
            { q: "What's a grand slam?", a: "Home run with bases loaded. Scores 4 runs. Huge momentum swing." },
            { q: "What's the strike zone?", a: "Area over home plate, from knees to mid-torso. Umpire's judgment, varies slightly." },
            { q: "What's an RBI?", a: "Run Batted In. Credited when batter's action causes run to score." },
            { q: "What's a double play?", a: "Two outs on single play. Usually ground ball, throw to second, relay to first." },
            { q: "What's a balk?", a: "Illegal pitcher motion with runners on base. All runners advance one base." },
            { q: "What's the infield fly rule?", a: "Prevents defense from intentionally dropping pop-up to turn double play. Batter automatically out." },
            { q: "Can you run through first base?", a: "Yes, only base you can overrun. Must return to base after overrunning others." },
            { q: "What's a sacrifice fly?", a: "Fly ball out that allows runner to tag up and score from third. Batter gets RBI." },
            { q: "What's a no-hitter?", a: "Pitcher doesn't allow any hits entire game. Walks allowed. Rarer than perfect game." },
            { q: "What's the designated hitter?", a: "AL rule: DH bats for pitcher. NL: pitchers bat (though changing). Strategic difference." },
            { q: "What's a foul ball?", a: "Ball hit outside foul lines. Counts as strike (except can't strike out on foul unless bunt)." },
            { q: "What's a tag up?", a: "Runner must touch base after catch before advancing. Used to score from third on fly ball." },
            { q: "What's the World Series?", a: "MLB championship. Best of 7 series between AL and NL champions. Held annually since 1903." },
            { q: "How long is a game?", a: "Average 3 hours, but no clock. Game ends when 9 innings complete (or extra innings)." },
            { q: "What's a pinch hitter?", a: "Substitute batter. Often used late in game for strategic advantage. Original player can't return." },
            { q: "What's an error?", a: "Fielding mistake allowing batter to reach base or runner to advance. Doesn't count as hit." },
            { q: "What's a shutout?", a: "Pitcher/team doesn't allow any runs entire game. Complete game shutout is impressive feat." }
        ],
        offlineQuiz: [
            // EASY LEVEL (6 questions)
            {
                question: "How many innings are in a standard game?",
                options: ["6", "7", "9", "10"],
                correctAnswer: "9",
                explanation: "A standard Major League Baseball game consists of 9 innings.",
                difficulty: "Easy"
            },
            {
                question: "How many strikes equal an out?",
                options: ["2", "3", "4", "5"],
                correctAnswer: "3",
                explanation: "Three strikes result in a strikeout.",
                difficulty: "Easy"
            },
            {
                question: "How many balls result in a walk?",
                options: ["2", "3", "4", "5"],
                correctAnswer: "4",
                explanation: "Four balls result in a walk (base on balls), and the batter gets a free pass to first base.",
                difficulty: "Easy"
            },
            {
                question: "How many players are on a baseball team on the field?",
                options: ["8", "9", "10", "11"],
                correctAnswer: "9",
                explanation: "A baseball team has 9 players on the field at a time.",
                difficulty: "Easy"
            },
            {
                question: "How many outs are there per inning for each team?",
                options: ["2", "3", "4", "5"],
                correctAnswer: "3",
                explanation: "Each team gets 3 outs per inning.",
                difficulty: "Easy"
            },
            {
                question: "How many bases are there in baseball?",
                options: ["2", "3", "4", "5"],
                correctAnswer: "4",
                explanation: "There are 4 bases: first, second, third, and home plate.",
                difficulty: "Easy"
            },
            {
                question: "What is a foul ball?",
                options: ["Ball hit outside foul lines", "Bad pitch", "Dropped ball", "Illegal hit"],
                correctAnswer: "Ball hit outside foul lines",
                explanation: "A foul ball is hit outside the foul lines. It counts as a strike (except you can't strike out on a foul ball unless it's a bunt).",
                difficulty: "Easy"
            },
            {
                question: "Can you run through first base?",
                options: ["No", "Yes", "Only on home runs", "Only in extra innings"],
                correctAnswer: "Yes",
                explanation: "First base is the only base you can overrun without being tagged out. You must return to the base after overrunning other bases.",
                difficulty: "Easy"
            },
            {
                question: "What happens when you hit the ball over the fence?",
                options: ["Foul ball", "Home run", "Double", "Out"],
                correctAnswer: "Home run",
                explanation: "Hitting the ball over the outfield fence in fair territory is a home run, and all runners score.",
                difficulty: "Easy"
            },
            {
                question: "How many teams are in the field at once?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "1",
                explanation: "Only one team fields at a time while the other team bats. Teams alternate each inning.",
                difficulty: "Easy"
            },
            {
                question: "What is home plate?",
                options: ["Pitcher's mound", "Fourth base where runs are scored", "Dugout", "Outfield fence"],
                correctAnswer: "Fourth base where runs are scored",
                explanation: "Home plate is the fourth base. A run is scored when a player touches all bases and returns to home plate.",
                difficulty: "Easy"
            },

            // MEDIUM LEVEL (11 questions)
            {
                question: "What is a home run?",
                options: ["Running home quickly", "Ball hit over outfield fence in fair territory", "Scoring from third base", "Hitting the ball to the infield"],
                correctAnswer: "Ball hit over outfield fence in fair territory",
                explanation: "A home run is when the ball is hit over the outfield fence in fair territory, allowing the batter and all runners to score.",
                difficulty: "Medium"
            },
            {
                question: "What is a grand slam?",
                options: ["4 home runs in a game", "Home run with bases loaded", "Winning by 10 runs", "Perfect game"],
                correctAnswer: "Home run with bases loaded",
                explanation: "A grand slam is a home run hit when all three bases are loaded, scoring 4 runs.",
                difficulty: "Medium"
            },
            {
                question: "What does RBI stand for?",
                options: ["Run Base Inning", "Run Batted In", "Runner Base Indicator", "Runs Before Innings"],
                correctAnswer: "Run Batted In",
                explanation: "RBI (Run Batted In) is credited when a batter's action causes a run to score.",
                difficulty: "Medium"
            },
            {
                question: "What is a double play?",
                options: ["Playing twice", "Two outs on single play", "Two runs scored", "Two hits in a row"],
                correctAnswer: "Two outs on single play",
                explanation: "A double play is when two outs are made on a single play, usually a ground ball with a throw to second then first.",
                difficulty: "Medium"
            },
            {
                question: "What happens if a game is tied after 9 innings?",
                options: ["Game ends in tie", "Extra innings are played", "Coin toss decides", "Team with more hits wins"],
                correctAnswer: "Extra innings are played",
                explanation: "If tied after 9 innings, extra innings are played until one team has more runs at the end of an inning.",
                difficulty: "Medium"
            },
            {
                question: "What is the strike zone?",
                options: ["Where strikes happen", "Area over home plate between knees and mid-torso", "Pitcher's mound area", "Batter's box"],
                correctAnswer: "Area over home plate between knees and mid-torso",
                explanation: "The strike zone is the area over home plate, from the batter's knees to mid-torso, where pitches are called strikes.",
                difficulty: "Medium"
            },
            {
                question: "What is a no-hitter?",
                options: ["No runs scored", "Pitcher doesn't allow any hits entire game", "No strikes", "No outs"],
                correctAnswer: "Pitcher doesn't allow any hits entire game",
                explanation: "A no-hitter is when a pitcher doesn't allow any hits for the entire game. Walks are allowed, making it less rare than a perfect game.",
                difficulty: "Medium"
            },
            {
                question: "What is a tag up?",
                options: ["Tagging a runner", "Runner must touch base after catch before advancing", "High five", "Tagging home plate"],
                correctAnswer: "Runner must touch base after catch before advancing",
                explanation: "After a fly ball is caught, runners must touch their base (tag up) before advancing. Often used to score from third base.",
                difficulty: "Medium"
            },
            {
                question: "What is a pinch hitter?",
                options: ["Pitcher who can hit", "Substitute batter", "Backup catcher", "Emergency player"],
                correctAnswer: "Substitute batter",
                explanation: "A pinch hitter is a substitute batter used strategically, often late in the game. The original player cannot return to the game.",
                difficulty: "Medium"
            },
            {
                question: "What is an error?",
                options: ["Wrong call", "Fielding mistake allowing batter/runner to advance", "Pitching mistake", "Umpire mistake"],
                correctAnswer: "Fielding mistake allowing batter/runner to advance",
                explanation: "An error is a fielding mistake that allows a batter to reach base or a runner to advance. It doesn't count as a hit.",
                difficulty: "Medium"
            },
            {
                question: "What is a shutout?",
                options: ["Closed stadium", "Team/pitcher doesn't allow any runs entire game", "No hits allowed", "Perfect game"],
                correctAnswer: "Team/pitcher doesn't allow any runs entire game",
                explanation: "A shutout is when a pitcher or team doesn't allow any runs for the entire game. A complete game shutout is an impressive achievement.",
                difficulty: "Medium"
            },

            // HARD LEVEL (11 questions)
            {
                question: "What is a balk?",
                options: ["Bad pitch", "Illegal pitcher motion with runners on base", "Foul ball", "Missed catch"],
                correctAnswer: "Illegal pitcher motion with runners on base",
                explanation: "A balk is an illegal motion by the pitcher with runners on base, resulting in all runners advancing one base.",
                difficulty: "Hard"
            },
            {
                question: "What is a perfect game?",
                options: ["No runs allowed", "No hits allowed", "No batter reaches base entire game", "Winning by 10+ runs"],
                correctAnswer: "No batter reaches base entire game",
                explanation: "A perfect game is when a pitcher doesn't allow any batter to reach base for the entire game (27 up, 27 out). Extremely rare.",
                difficulty: "Hard"
            },
            {
                question: "What is the infield fly rule?",
                options: ["Any fly ball in infield", "Prevents defense from intentionally dropping pop-up for double play", "Fly ball over infield", "First fly ball of game"],
                correctAnswer: "Prevents defense from intentionally dropping pop-up for double play",
                explanation: "The infield fly rule prevents the defense from intentionally dropping a pop-up to turn a double play. The batter is automatically out.",
                difficulty: "Hard"
            },
            {
                question: "Can you steal home plate?",
                options: ["No, it's illegal", "Yes, but rare and risky", "Only in extra innings", "Only with permission"],
                correctAnswer: "Yes, but rare and risky",
                explanation: "Stealing home is legal but very rare and risky, as the runner tries to reach home before the pitcher delivers the ball.",
                difficulty: "Hard"
            },
            {
                question: "What is a sacrifice fly?",
                options: ["Fly ball that's an out but allows runner to score", "Missing a fly ball", "Fly ball for a home run", "Foul fly ball"],
                correctAnswer: "Fly ball that's an out but allows runner to score",
                explanation: "A sacrifice fly is a fly ball out that allows a runner to tag up and score from third base. The batter gets an RBI.",
                difficulty: "Hard"
            },
            {
                question: "What is the designated hitter (DH) rule?",
                options: ["Best hitter bats twice", "Player bats for pitcher", "Hitter chosen by fans", "Emergency replacement"],
                correctAnswer: "Player bats for pitcher",
                explanation: "The DH rule (used in American League) allows a designated hitter to bat for the pitcher, who doesn't bat.",
                difficulty: "Hard"
            },
            {
                question: "What is a triple play?",
                options: ["Three runs", "Three outs on single play", "Three strikes", "Three bases"],
                correctAnswer: "Three outs on single play",
                explanation: "A triple play is when three outs are made on a single play. Extremely rare and exciting.",
                difficulty: "Hard"
            },
            {
                question: "What is a cycle?",
                options: ["Pitching rotation", "Batter hits single, double, triple, and home run in one game", "9 innings", "Base running pattern"],
                correctAnswer: "Batter hits single, double, triple, and home run in one game",
                explanation: "Hitting for the cycle means a batter gets a single, double, triple, and home run all in the same game. Very rare.",
                difficulty: "Hard"
            },
            {
                question: "What is the World Series?",
                options: ["International tournament", "MLB championship between AL and NL champions", "All-star game", "Spring training"],
                correctAnswer: "MLB championship between AL and NL champions",
                explanation: "The World Series is the MLB championship, a best-of-7 series between the American League and National League champions.",
                difficulty: "Hard"
            },
            {
                question: "What is a pickoff?",
                options: ["Picking up the ball", "Pitcher throws to base to tag out runner", "Catching a fly ball", "Selecting a player"],
                correctAnswer: "Pitcher throws to base to tag out runner",
                explanation: "A pickoff is when the pitcher throws to a base (instead of home plate) to try to tag out a runner who has strayed too far.",
                difficulty: "Hard"
            },
            {
                question: "What is the Green Monster?",
                options: ["Team mascot", "37-foot left field wall at Fenway Park", "Type of pitch", "Baseball nickname"],
                correctAnswer: "37-foot left field wall at Fenway Park",
                explanation: "The Green Monster is the famous 37-foot high left field wall at Boston's Fenway Park, one of baseball's most iconic features.",
                difficulty: "Hard"
            }
        ]
    }
};

// Sport-to-Sport Comparisons
export const SPORT_COMPARISONS: Record<string, { sports: [Sport, Sport]; differences: string[] }> = {
    "Football vs Cricket": {
        sports: ["Football", "Cricket"],
        differences: [
            "Team Size: Football has 11 players on field, Cricket has 11 players but only 2 batsmen active at once",
            "Duration: Football is 90 minutes (2 halves), Cricket varies by format (T20: 3 hours, ODI: 8 hours, Test: up to 5 days)",
            "Scoring: Football scores goals (1 point each), Cricket scores runs (1-6 per hit)",
            "Ball Contact: Football uses feet (except goalkeeper), Cricket uses bat and can use any body part",
            "Playing Surface: Football on grass field with goals, Cricket on oval field with pitch and wickets",
            "Objective: Football aims to score in opponent's goal, Cricket aims to score more runs while dismissing opponents",
            "Continuous Play: Football has continuous play with stoppages, Cricket has discrete deliveries (balls)",
            "Equipment: Football uses round ball and goals, Cricket uses bat, ball, stumps, and protective gear"
        ]
    },
    "Football vs Basketball": {
        sports: ["Football", "Basketball"],
        differences: [
            "Team Size: Football has 11 players, Basketball has 5 players on court",
            "Duration: Football is 90 minutes, Basketball is 48 minutes (NBA) or 40 minutes (FIBA)",
            "Scoring: Football scores 1 point per goal, Basketball scores 1-3 points per basket",
            "Ball Handling: Football uses feet, Basketball uses hands with dribbling required",
            "Playing Surface: Football on large grass field, Basketball on indoor hardwood court",
            "Contact: Football allows tackling for ball, Basketball has strict foul rules for contact",
            "Substitutions: Football allows 5 subs (limited), Basketball allows unlimited substitutions",
            "Shot Clock: Football has no time limit per possession, Basketball has 24-second shot clock"
        ]
    },
    "Football vs Tennis": {
        sports: ["Football", "Tennis"],
        differences: [
            "Team Size: Football is 11v11 team sport, Tennis is 1v1 or 2v2 (doubles)",
            "Duration: Football is 90 minutes, Tennis has no time limit (match ends when sets won)",
            "Scoring: Football counts goals, Tennis uses unique scoring (15-30-40-game-set-match)",
            "Equipment: Football uses feet and ball, Tennis uses racket and ball",
            "Playing Surface: Football on grass field, Tennis on court (hard/clay/grass) with net",
            "Objective: Football scores in goal, Tennis hits ball over net into opponent's court",
            "Contact: Football is contact sport, Tennis is non-contact",
            "Substitutions: Football allows subs, Tennis has no substitutions"
        ]
    },
    "Football vs Rugby": {
        sports: ["Football", "Rugby"],
        differences: [
            "Team Size: Football has 11 players, Rugby has 15 (Union) or 13 (League)",
            "Ball Shape: Football uses spherical ball, Rugby uses oval ball",
            "Ball Handling: Football uses feet (except goalkeeper), Rugby allows carrying and passing ball with hands",
            "Passing: Football can pass in any direction, Rugby must pass backward (can kick forward)",
            "Contact: Football limits contact, Rugby encourages tackling and physical play",
            "Scoring: Football has goals (1 point), Rugby has tries (5), conversions (2), penalties (3), drop goals (3)",
            "Protective Gear: Football uses shin guards, Rugby uses minimal protection (mouthguard)",
            "Stoppages: Football has flowing play, Rugby has scrums, lineouts, rucks, and mauls"
        ]
    },
    "Football vs Baseball": {
        sports: ["Football", "Baseball"],
        differences: [
            "Team Size: Football has 11 players on field, Baseball has 9 players",
            "Duration: Football is 90 minutes timed, Baseball is 9 innings (no time limit)",
            "Scoring: Football scores goals, Baseball scores runs by circling bases",
            "Ball Handling: Football uses feet, Baseball uses bat and glove",
            "Playing Surface: Football on rectangular field, Baseball on diamond-shaped infield",
            "Continuous Play: Football has continuous action, Baseball has discrete pitches and at-bats",
            "Offense/Defense: Football both teams play both roles simultaneously, Baseball alternates innings",
            "Contact: Football allows tackling, Baseball is non-contact sport"
        ]
    },
    "Cricket vs Basketball": {
        sports: ["Cricket", "Basketball"],
        differences: [
            "Duration: Cricket varies (T20: 3h, ODI: 8h, Test: 5 days), Basketball is 48/40 minutes",
            "Scoring: Cricket scores runs (1-6 per hit), Basketball scores 1-3 points per basket",
            "Playing Surface: Cricket on oval grass field, Basketball on indoor court",
            "Equipment: Cricket uses bat and ball, Basketball uses ball and hoops",
            "Ball Handling: Cricket uses bat to hit, Basketball uses hands to dribble and shoot",
            "Team Roles: Cricket has batsmen and bowlers/fielders, Basketball all players play both offense and defense",
            "Pace: Cricket has slower, strategic pace, Basketball is fast-paced with constant action",
            "Shot Clock: Cricket has no time limit per ball, Basketball has 24-second shot clock"
        ]
    },
    "Cricket vs Tennis": {
        sports: ["Cricket", "Tennis"],
        differences: [
            "Team Size: Cricket is 11v11 team sport, Tennis is 1v1 or 2v2",
            "Duration: Cricket varies by format (3h to 5 days), Tennis has no time limit",
            "Scoring: Cricket counts runs, Tennis uses 15-30-40-game-set-match system",
            "Equipment: Cricket uses bat and ball, Tennis uses racket and ball",
            "Playing Surface: Cricket on oval field with pitch, Tennis on court with net",
            "Ball Delivery: Cricket has bowler delivering to batsman, Tennis has serve and rally",
            "Objective: Cricket scores runs and dismisses batsmen, Tennis wins points/games/sets",
            "Formats: Cricket has 3 main formats (Test/ODI/T20), Tennis has singles/doubles"
        ]
    },
    "Cricket vs Rugby": {
        sports: ["Cricket", "Rugby"],
        differences: [
            "Team Size: Both have 11-15 players, but Cricket has 2 batsmen active, Rugby all 15 play",
            "Duration: Cricket varies (3h to 5 days), Rugby is 80 minutes",
            "Contact: Cricket is non-contact, Rugby is full-contact sport",
            "Ball Shape: Cricket uses spherical ball, Rugby uses oval ball",
            "Scoring: Cricket scores runs, Rugby scores tries/conversions/penalties/drop goals",
            "Equipment: Cricket uses bat and protective gear, Rugby uses minimal protection",
            "Pace: Cricket has slower strategic pace, Rugby has continuous physical action",
            "Playing Surface: Cricket on oval field, Rugby on rectangular field"
        ]
    },
    "Cricket vs Baseball": {
        sports: ["Cricket", "Baseball"],
        differences: [
            "Duration: Cricket varies by format, Baseball is 9 innings (typically 3 hours)",
            "Batting: Cricket batsmen protect wickets and score runs, Baseball batters circle bases",
            "Dismissals: Cricket has 10 ways to get out, Baseball has 3 outs per inning",
            "Ball Delivery: Cricket bowler bowls with straight arm, Baseball pitcher throws overhand",
            "Field Shape: Cricket has oval field, Baseball has diamond infield",
            "Runs: Cricket runs between wickets (22 yards), Baseball runs between bases (90 feet)",
            "Innings: Cricket has 1-2 innings per team, Baseball has 9 innings with alternating at-bats",
            "Boundaries: Cricket has rope boundary (4 or 6 runs), Baseball has fence (home run)"
        ]
    },
    "Basketball vs Tennis": {
        sports: ["Basketball", "Tennis"],
        differences: [
            "Team Size: Basketball is 5v5, Tennis is 1v1 or 2v2",
            "Duration: Basketball is 48/40 minutes timed, Tennis has no time limit",
            "Scoring: Basketball scores 1-3 points per basket, Tennis uses unique scoring system",
            "Contact: Basketball allows some contact, Tennis is non-contact",
            "Playing Surface: Basketball on indoor court with hoops, Tennis on court with net",
            "Equipment: Basketball uses ball and hoops, Tennis uses racket and ball",
            "Pace: Basketball is fast-paced team sport, Tennis is individual endurance sport",
            "Substitutions: Basketball allows unlimited subs, Tennis has no substitutions"
        ]
    },
    "Basketball vs Rugby": {
        sports: ["Basketball", "Rugby"],
        differences: [
            "Team Size: Basketball has 5 players, Rugby has 15 (Union) or 13 (League)",
            "Duration: Basketball is 48/40 minutes, Rugby is 80 minutes",
            "Contact: Basketball limits contact with foul rules, Rugby encourages physical tackling",
            "Ball Shape: Basketball uses spherical ball, Rugby uses oval ball",
            "Scoring: Basketball scores 1-3 points per basket, Rugby has tries/conversions/penalties",
            "Playing Surface: Basketball on indoor court, Rugby on grass field",
            "Ball Handling: Basketball requires dribbling, Rugby allows carrying and passing backward",
            "Protective Gear: Basketball uses none, Rugby uses minimal (mouthguard)"
        ]
    },
    "Basketball vs Baseball": {
        sports: ["Basketball", "Baseball"],
        differences: [
            "Duration: Basketball is 48/40 minutes timed, Baseball is 9 innings (no time limit)",
            "Scoring: Basketball scores 1-3 points per basket, Baseball scores runs",
            "Playing Surface: Basketball on indoor court, Baseball on outdoor diamond field",
            "Pace: Basketball is continuous fast-paced, Baseball has discrete pitches and at-bats",
            "Team Roles: Basketball all players play both ways, Baseball alternates offense/defense",
            "Contact: Basketball allows some contact, Baseball is non-contact",
            "Equipment: Basketball uses ball and hoops, Baseball uses bat, ball, and gloves",
            "Shot Clock: Basketball has 24-second clock, Baseball has no time limit per pitch"
        ]
    },
    "Tennis vs Rugby": {
        sports: ["Tennis", "Rugby"],
        differences: [
            "Team Size: Tennis is 1v1 or 2v2, Rugby is 15v15 (Union) or 13v13 (League)",
            "Contact: Tennis is non-contact, Rugby is full-contact sport",
            "Duration: Tennis has no time limit, Rugby is 80 minutes",
            "Equipment: Tennis uses racket and ball, Rugby uses oval ball",
            "Scoring: Tennis uses 15-30-40-game-set-match, Rugby scores tries/conversions/penalties",
            "Playing Surface: Tennis on court with net, Rugby on grass field",
            "Pace: Tennis is individual endurance sport, Rugby is team contact sport",
            "Protective Gear: Tennis uses none, Rugby uses minimal protection"
        ]
    },
    "Tennis vs Baseball": {
        sports: ["Tennis", "Baseball"],
        differences: [
            "Team Size: Tennis is 1v1 or 2v2, Baseball is 9v9",
            "Duration: Tennis has no time limit, Baseball is 9 innings",
            "Scoring: Tennis uses unique scoring system, Baseball scores runs",
            "Equipment: Tennis uses racket, Baseball uses bat and glove",
            "Playing Surface: Tennis on court with net, Baseball on diamond field",
            "Ball Delivery: Tennis has serve and rally, Baseball has pitcher throwing to batter",
            "Contact: Both are non-contact sports",
            "Pace: Tennis is continuous rally-based, Baseball has discrete pitches"
        ]
    },
    "Rugby vs Baseball": {
        sports: ["Rugby", "Baseball"],
        differences: [
            "Contact: Rugby is full-contact, Baseball is non-contact",
            "Duration: Rugby is 80 minutes, Baseball is 9 innings (no time limit)",
            "Ball Shape: Rugby uses oval ball, Baseball uses spherical ball",
            "Scoring: Rugby scores tries/conversions/penalties, Baseball scores runs by circling bases",
            "Playing Surface: Rugby on rectangular grass field, Baseball on diamond field",
            "Team Roles: Rugby all players active, Baseball alternates offense/defense",
            "Ball Handling: Rugby carries and passes backward, Baseball hits with bat",
            "Protective Gear: Rugby uses minimal protection, Baseball uses gloves and helmets"
        ]
    }
};

// Helper function to get comparison between two sports
export function getSportComparison(sport1: Sport, sport2: Sport): string[] | null {
    const key1 = `${sport1} vs ${sport2}`;
    const key2 = `${sport2} vs ${sport1}`;

    if (SPORT_COMPARISONS[key1]) {
        return SPORT_COMPARISONS[key1].differences;
    } else if (SPORT_COMPARISONS[key2]) {
        return SPORT_COMPARISONS[key2].differences;
    }

    return null;
}
