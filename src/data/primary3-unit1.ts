import type { Stage } from "./types";
import { primary3Unit2 } from "./primary3-unit2";
import { primary3Unit3 } from "./primary3-unit3";
import { primary3Unit4 } from "./primary3-unit4";
import { primary3Unit5 } from "./primary3-unit5";
import { primary3Unit6 } from "./primary3-unit6";
import imgSafetyHome from "@/assets/lessons/primary3-t2-unit1-safety-home.jpg";
import imgSafetyStreet from "@/assets/lessons/primary3-t2-unit1-safety-street.jpg";
import imgSafetyEverywhere from "@/assets/lessons/primary3-t2-unit1-safety-everywhere.jpg";
import imgSafetyGuide from "@/assets/lessons/primary3-t2-unit1-safety-guide.jpg";

export const primary3Data: Stage = {
  id: "primary3",
  name: "Primary 3",
  subject: "English",
  description: "English language for Primary 3 students — Term 2: Safety, Food & Health, Heroes, Technology, Animals & Nature, and The Honest Choice.",
  units: [
    {
      id: "unit1",
      title: "Safety",
      preTest: {
        title: "Pre-Test: What Do You Know About Safety?",
        description: "Answer these questions to see what you already know before starting the unit.",
        questions: [],
      },
      postTest: {
        title: "Post-Test: Show What You Learned About Safety!",
        description: "Answer these 10 questions to test your understanding of Unit 1.",
        questions: [
          { id: "u1post1", type: "mcq", question: "What does 'dangerous' mean?", options: ["Safe and fun", "Something that can hurt you", "Slow and boring", "Easy to do"], correctAnswer: 1 },
          { id: "u1post2", type: "mcq", question: "Complete: 'You ___ wear a helmet when riding a bike.'", options: ["mustn't", "don't", "must", "can't"], correctAnswer: 2 },
          { id: "u1post3", type: "truefalse", question: "Leaving toys on the floor can be dangerous.", options: ["True", "False"], correctAnswer: 0 },
          { id: "u1post4", type: "mcq", question: "Which is a negative imperative?", options: ["Stop!", "Don't run!", "Be careful!", "Wait!"], correctAnswer: 1 },
          { id: "u1post5", type: "mcq", question: "Who keeps us safe on the street?", options: ["A baker", "A farmer", "A policeman", "A teacher"], correctAnswer: 2 },
          { id: "u1post6", type: "truefalse", question: "You mustn't touch hot things.", options: ["True", "False"], correctAnswer: 0 },
          { id: "u1post7", type: "mcq", question: "What does 'first aid' help?", options: ["Hungry people", "Lost animals", "Injured people", "Tired students"], correctAnswer: 2 },
          { id: "u1post8", type: "mcq", question: "Which blend is in the word 'stop'?", options: ["/sl/", "/gr/", "/st/", "/tr/"], correctAnswer: 2 },
          { id: "u1post9", type: "truefalse", question: "You must wait for the green light before crossing the street.", options: ["True", "False"], correctAnswer: 0 },
          { id: "u1post10", type: "mcq", question: "What should you do in an emergency?", options: ["Run away", "Stay calm and call for help", "Shout loudly", "Hide under the bed"], correctAnswer: 1 },
        ],
      },
      lessons: [
        {
          id: "lesson1",
          title: "Safety at Home",
          objectives: [
            "Learn about safety rules inside the home to prevent accidents.",
            "Practice giving commands using affirmative and negative imperatives."
          ],
          activities: [
            "Write two safety rules you follow in your room or kitchen.",
            "Draw a sign expressing a warning command using (Don't)."
          ],
          vocabulary: {
            flashcards: [
              { term: "Safety", definition: "Being protected from danger or harm." },
              { term: "Dangerous", definition: "Something that can hurt you." },
              { term: "Emergency", definition: "A serious situation that needs quick action." },
              { term: "Rules", definition: "Instructions that tell us what to do or not to do." },
              { term: "Careful", definition: "Paying attention so you don't get hurt." },
              { term: "Hurt", definition: "To feel pain or be injured." },
              { term: "Safe", definition: "Free from danger." },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "A warm Egyptian home with a mother teaching her son about safety rules — putting toys away, being careful in the kitchen.", imageSrc: imgSafetyHome },
            {
              type: "dialog",
              title: "Safety Rules at Home",
              lines: [
                { speaker: "Mother", text: "Ali, we have rules at home to keep us safe." },
                { speaker: "Ali", text: "Yes, Mom. If I follow the rules, I will not get hurt." },
                { speaker: "Mother", text: "That's right! Always be careful when you play." },
                { speaker: "Ali", text: "I put my toys in the box so no one falls." },
                { speaker: "Mother", text: "Very good. That keeps the house safe for everyone." },
                { speaker: "Ali", text: "Yes, Mom. Not following rules can be dangerous!" },
                { speaker: "Mother", text: "And in an emergency, you must stay calm and call me." },
              ],
            },
            {
              type: "grammar",
              title: "Imperatives — Giving Instructions",
              grammar: {
                title: "Imperative Sentences",
                rows: [
                  { subject: "Positive", verb: "Stop!", example: "Stop! Don't move!" },
                  { subject: "Positive", verb: "Be careful!", example: "Be careful when you play." },
                  { subject: "Negative", verb: "Don't touch!", example: "Don't touch the hot stove!" },
                  { subject: "Negative", verb: "Don't run!", example: "Don't run inside the house!" },
                ],
                rules: [
                  "Use the base form of the verb for positive instructions.",
                  "Add 'Don't' before the verb for negative commands.",
                  "Use an exclamation point (!) for strong instructions.",
                ],
              },
            },
            {
              type: "reading",
              title: "Reading: Safety at Home",
              body: "Ali was reading a book in his room. When he finished, he left the book on the floor. His mother said, 'Don't leave the book here. Someone may fall!' Ali listened to his mother and put the book back on the shelf. He followed the rules and was careful at home.\n\nMoral: Always follow safety rules at home to keep everyone safe.",
            },
          ],
        },
        {
          id: "lesson2",
          title: "Safety in the Street",
          objectives: [
            "Learn how to cross the street safely and follow traffic signs.",
            "Practice pronouncing and forming words containing consonant blends (sl, st, gr, tr)."
          ],
          activities: [
            "Mention three important steps you must take before crossing the street.",
            "Write four words containing the blend (st) or (sl)."
          ],
          vocabulary: {
            flashcards: [
              { term: "Street", definition: "A road in a town or city." },
              { term: "Cross", definition: "To go from one side to the other." },
              { term: "Stop", definition: "To not move or go forward." },
              { term: "Wait", definition: "To stay in one place until something happens." },
              { term: "Helmet", definition: "A hard hat that protects your head." },
              { term: "Signs", definition: "Pictures or words that give information or warnings." },
              { term: "Stranger", definition: "A person you do not know." },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "A busy Egyptian street with crosswalks, traffic lights, stop signs, and a father teaching his daughter about road safety.", imageSrc: imgSafetyStreet },
            {
              type: "dialog",
              title: "Crossing the Street Safely",
              lines: [
                { speaker: "Mona", text: "What should I do before I cross the street?" },
                { speaker: "Dad", text: "You should always look both ways before you cross the street." },
                { speaker: "Mona", text: "Do I need to wear something when I ride my bike?" },
                { speaker: "Dad", text: "Yes! Always wear a helmet to protect your head." },
                { speaker: "Mona", text: "How do I know where to walk safely?" },
                { speaker: "Dad", text: "Follow the signs." },
                { speaker: "Mona", text: "What if someone I don't know talks to me?" },
                { speaker: "Dad", text: "Don't talk to strangers. Always stay safe!" },
              ],
            },
            {
              type: "text",
              title: "Phonics Focus: Consonant Blends /sl/ /st/ /gr/ /tr/",
              body: "A consonant blend is when two or more consonants are joined together, and you can still hear each sound.\n\n/sl/ — slide, slow, slip, sleep\n/st/ — star, stop, step, stone, stand\n/gr/ — green, grow, grass, grab\n/tr/ — tree, train, trip, truck, trap\n\nExample: 'Be careful! You might slip on the ice.' 'When the light turns red, you must stop.'",
            },
            {
              type: "reading",
              title: "Reading: Crossing the Street Safely",
              body: "Sama stood at the corner of the street. She saw the big red stop sign. Her father said: 'Stop! Wait for the green light before you cross.' Sama looked left and right. She saw cars waiting. She waited carefully and did not walk on the street. When the green light turned on, her father said, 'Now, it is safe. You can cross the street.' Sama walked slowly and looked both ways. She crossed the street safely. Her father smiled and said, 'Well done, Sama! You followed the safety rules.'",
            },
          ],
        },
        {
          id: "lesson3",
          title: "Staying Safe Everywhere",
          objectives: [
            "Learn about the roles of policemen and paramedics, and how to call them in times of need.",
            "Use (Must/Mustn't) to express important rules and obligations for protection."
          ],
          activities: [
            "Imagine you are in an emergency, who will you call and what will you say?",
            "Write three sentences using Must or Mustn't about car safety rules."
          ],
          vocabulary: {
            flashcards: [
              { term: "Policeman", definition: "A person who keeps us safe and protects the law." },
              { term: "Seat belt", definition: "A strap in a car that keeps you safe." },
              { term: "Ambulance", definition: "A vehicle that takes sick or injured people to the hospital." },
              { term: "First aid", definition: "Basic help given to an injured person before the doctor comes." },
              { term: "Scared", definition: "Feeling afraid or frightened." },
              { term: "Quickly", definition: "Doing something fast." },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Emergency services — a policeman, ambulance, first aid kit, and a child wearing a seat belt in a car.", imageSrc: imgSafetyEverywhere },
            {
              type: "grammar",
              title: "Modals for Rules: Must / Mustn't",
              grammar: {
                title: "Must and Mustn't",
                rows: [
                  { subject: "Must", verb: "important / necessary", example: "You must wear a helmet when riding a bike." },
                  { subject: "Must", verb: "important / necessary", example: "You must call for help in an emergency." },
                  { subject: "Must", verb: "important / necessary", example: "You must follow the rules to stay safe." },
                  { subject: "Mustn't", verb: "not allowed", example: "You mustn't talk to strangers." },
                  { subject: "Mustn't", verb: "not allowed", example: "You mustn't run in the street." },
                  { subject: "Mustn't", verb: "not allowed", example: "You mustn't leave anything on the floor." },
                ],
                rules: [
                  "Use 'must' to say something is very important or necessary.",
                  "Use 'mustn't' to say something is not allowed.",
                  "Form: must / mustn't + base form of the verb.",
                ],
              },
            },
            {
              type: "reading",
              title: "Help is Here!",
              body: "Lina was in the kitchen when she saw some smoke near the stove. She felt a little scared but remembered the safety rule: 'You must call an adult if something doesn't seem right.' Lina quickly called her mother from the other room and said, 'Mom, there's smoke in the kitchen!' Her mother came right away and turned off the stove. She checked everything and made sure it was safe. Lina stayed calm and didn't go near the stove. Her mother smiled and said, 'Good job, Lina! You did the right thing.'\n\nMoral: Stay calm in an emergency, and ask for help when needed.",
            },
            {
              type: "list",
              title: "Emergency Helpers",
              items: [
                "Ambulance → Takes sick people to the hospital",
                "Policeman → Keeps us safe",
                "Seat belt → Protects us in the car",
                "First aid → Helps the injured",
              ],
            },
          ],
        },
        {
          id: "lesson4",
          title: "My Safety Guide",
          objectives: [
            "Review and recall various safety rules in a simple and comprehensive way.",
            "Practice reading instructions aloud emphasizing exclamation marks."
          ],
          activities: [
            "Design a small poster summarizing the most important safety rules you learned in the unit.",
            "Read the story of the two girls with your classmate and extract all warning phrases contained in it."
          ],
          vocabulary: {
            flashcards: [
              { term: "Guide", definition: "A set of instructions that helps you know what to do." },
              { term: "Protect", definition: "To keep safe from danger." },
              { term: "Calm", definition: "Quiet and not worried or afraid." },
              { term: "Follow", definition: "To do what the rules say." },
              { term: "Nodded", definition: "Moved the head up and down to say 'yes'." },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Two children creating a colorful safety guide poster with rules about helmets, traffic lights, and emergency numbers.", imageSrc: imgSafetyGuide },
            {
              type: "reading",
              title: "Let's Stay Safe",
              body: "Tia and Sally are friends. One day, they went outside to play. Before they left the house, Tia said, 'Remember, safety comes first. You must wear your helmet when you ride your bike.' Sally nodded and said, 'Yes, and you mustn't talk to strangers. If there is an emergency, you must call for help.'\n\nAs they walked to the park, Sally saw a stop sign. She said, 'Stop! Wait for the green light before you cross the street.' Tia looked both ways and said, 'Be careful! Don't run near the street.' Tia smiled, 'This is our safety guide. We must always follow these rules to stay safe.'",
            },
            {
              type: "list",
              title: "Our Safety Rules",
              items: [
                "You must wear a helmet when riding a bike.",
                "You mustn't talk to strangers.",
                "You must call for help in an emergency.",
                "You must wait for the green light before crossing.",
                "You mustn't run near the street.",
                "You must follow the rules to stay safe.",
              ],
            },
            {
              type: "text",
              title: "Punctuation: Exclamation Point (!)",
              body: "We use exclamation points after instructions that are very important, and to show strong feelings like surprise, excitement, or warning.\n\nExamples: Stop! Don't run! Be careful! Watch out! That's amazing!",
            },
          ],
        },
      ],
    },
    primary3Unit2,
    primary3Unit3,
    primary3Unit4,
    primary3Unit5,
    primary3Unit6,
  ],
};
