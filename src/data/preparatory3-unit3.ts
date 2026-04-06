import type { Unit } from "./types";
import imgAiVsRobots from "@/assets/lessons/preparatory3-unit3-ai-vs-robots.jpg";
import imgAiCreativity from "@/assets/lessons/preparatory3-unit3-ai-creativity.jpg";
import imgRobotTeacher from "@/assets/lessons/preparatory3-unit3-robot-teacher.jpg";
import imgFacingChallenges from "@/assets/lessons/preparatory3-unit3-facing-challenges.jpg";

export const preparatory3Unit3: Unit = {
  id: "prep3-unit3",
  title: "Unit 3: Artificial Intelligence",
  preTest: {
    title: "Unit 3 Pre-Test",
    description: "Test your knowledge before starting Unit 3.",
    questions: [
      {
        id: "p3u3-pre-1",
        type: "mcq",
        question: "What does AI stand for?",
        options: ["Artificial Intelligence", "Automatic Information", "Advanced Internet", "Active Imagination"],
        correctAnswer: 0,
      },
      {
        id: "p3u3-pre-2",
        type: "mcq",
        question: "Which of these can AI do?",
        options: ["Feel emotions like humans", "Perform tasks and solve problems", "Replace all human jobs", "Think exactly like a person"],
        correctAnswer: 1,
      },
      {
        id: "p3u3-pre-3",
        type: "mcq",
        question: "What is a robot?",
        options: ["A type of computer game", "A machine that can perform tasks automatically", "A very smart person", "A kind of phone"],
        correctAnswer: 1,
      },
      {
        id: "p3u3-pre-4",
        type: "mcq",
        question: "What does 'compose' mean?",
        options: ["To destroy something", "To create or write something", "To copy something", "To forget something"],
        correctAnswer: 1,
      },
      {
        id: "p3u3-pre-5",
        type: "mcq",
        question: "Which is a Future Simple Passive sentence?",
        options: ["The car was fixed.", "The car will be fixed.", "The car is fixing.", "The car has been fixed."],
        correctAnswer: 1,
      },
    ],
  },
  postTest: {
    title: "Unit 3 Post-Test",
    description: "Test your understanding after completing Unit 3.",
    questions: [
      {
        id: "p3u3-post-1",
        type: "mcq",
        question: "What is the main difference between AI and robots?",
        options: [
          "AI is software that thinks; robots are physical machines",
          "There is no difference",
          "Robots are smarter than AI",
          "AI has feelings but robots don't",
        ],
        correctAnswer: 0,
      },
      {
        id: "p3u3-post-2",
        type: "truefalse",
        question: "AI can understand human emotions perfectly.",
        options: ["True", "False"],
        correctAnswer: 1,
      },
      {
        id: "p3u3-post-3",
        type: "mcq",
        question: "What does 'customize' mean?",
        options: ["To make something standard", "To change something to fit your needs", "To break something", "To copy something exactly"],
        correctAnswer: 1,
      },
      {
        id: "p3u3-post-4",
        type: "mcq",
        question: "In the story, what did Sara think about the AI teacher?",
        options: [
          "It was better than a human teacher",
          "It was helpful but couldn't replace human connection",
          "It was terrible",
          "It was exactly like a human teacher",
        ],
        correctAnswer: 1,
      },
      {
        id: "p3u3-post-5",
        type: "truefalse",
        question: "The Future Simple Passive is formed with 'will + be + past participle'.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "p3u3-post-6",
        type: "mcq",
        question: "Choose the correct passive sentence:",
        options: [
          "The homework will do by the students.",
          "The homework will be done by the students.",
          "The homework will been done by the students.",
          "The homework be will done by the students.",
        ],
        correctAnswer: 1,
      },
      {
        id: "p3u3-post-7",
        type: "mcq",
        question: "What does 'innovation' mean?",
        options: ["A new idea or method", "An old tradition", "A type of machine", "A school subject"],
        correctAnswer: 0,
      },
      {
        id: "p3u3-post-8",
        type: "truefalse",
        question: "AI can compose music and create art.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "p3u3-post-9",
        type: "mcq",
        question: "In the School Garden Project Ch.3, what problem did the team face?",
        options: ["They had too much money", "Bad weather and lack of donations", "Too many volunteers", "The principal cancelled the project"],
        correctAnswer: 1,
      },
      {
        id: "p3u3-post-10",
        type: "mcq",
        question: "What does 'initiative' mean?",
        options: ["Being lazy", "Taking action to solve a problem without being told", "Following instructions carefully", "Asking for help"],
        correctAnswer: 1,
      },
    ],
  },
  lessons: [
    {
      id: "prep3-u3-l1",
      title: "Lesson 1: AI vs Robots",
      objectives: [
        "Differentiate between the concepts of artificial intelligence and robots.",
        "Realize the limits of artificial intelligence and its lack of human emotions."
      ],
      activities: [
        "Write a short paragraph explaining the difference between AI and a robot in your own words.",
        "Search for a famous robot and state whether it uses artificial intelligence or not."
      ],
      vocabulary: {
        flashcards: [
          { term: "Artificial Intelligence (AI)", definition: "Computer systems that can perform tasks that normally need human intelligence" },
          { term: "Emotions", definition: "Strong feelings such as happiness, sadness, anger, or fear" },
          { term: "Behavior", definition: "The way a person or animal acts" },
          { term: "Advanced", definition: "Highly developed or complex" },
          { term: "Limits", definition: "The point beyond which something cannot go" },
          { term: "Tasks", definition: "Pieces of work to be done" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "AI and Robots — What's the Difference?",
          body: "People often confuse artificial intelligence (AI) with robots, but they are different things. AI is a type of computer technology that can learn, solve problems, and make decisions. It exists as software — you can't touch it. Robots, on the other hand, are physical machines that can move and perform tasks. Some robots use AI to become smarter, but not all robots have AI, and not all AI is inside a robot. For example, the voice assistant on your phone uses AI, but it's not a robot. A factory robot that puts cars together might not use AI at all — it just follows programmed instructions. AI has limits. It can process information much faster than humans, but it cannot truly understand emotions or have personal experiences. It doesn't get tired, hungry, or scared. While AI can recognize a smile in a photo, it doesn't know what happiness feels like.",
        },
        {
          type: "grammar",
          title: "Comparing AI and Robots",
          grammar: {
            title: "AI vs Robots Comparison",
            rows: [
              { subject: "AI", verb: "is software", example: "AI is software that learns and makes decisions." },
              { subject: "Robots", verb: "are machines", example: "Robots are physical machines that perform tasks." },
              { subject: "AI", verb: "can exist", example: "AI can exist without a physical body (e.g., phone assistants)." },
              { subject: "Robots", verb: "can work", example: "Some robots work without AI — they follow programmed instructions." },
            ],
            rules: [
              "AI = software/intelligence — it thinks and learns.",
              "Robot = physical machine — it moves and performs tasks.",
              "Some robots use AI, but not all robots have AI.",
              "AI has limits — it cannot feel emotions.",
            ],
          },
        },
        {
          type: "imagePrompt",
          title: "AI vs Robots",
          alt: "A split illustration showing a phone with a glowing brain icon (AI) on one side and a physical robot arm in a factory on the other side.",
          imageSrc: imgAiVsRobots,
        },
      ],
    },
    {
      id: "prep3-u3-l2",
      title: "Lesson 2: AI Technology & Creativity",
      objectives: [
        "Explore the capabilities of artificial intelligence in the fields of creativity and art.",
        "Use the Future Simple Passive tense."
      ],
      activities: [
        "Write two sentences using the passive voice in the future about future technology.",
        "Discuss with your classmates whether artificial intelligence can be as creative as humans."
      ],
      vocabulary: {
        flashcards: [
          { term: "Innovation", definition: "A new idea, method, or invention" },
          { term: "Compose", definition: "To create or write something, especially music or poetry" },
          { term: "Creative", definition: "Having the ability to produce new and original ideas" },
          { term: "Generate", definition: "To produce or create something" },
          { term: "Algorithm", definition: "A set of rules or steps a computer follows to solve a problem" },
          { term: "Data", definition: "Facts and information collected for analysis" },
        ],
      },
      content: [
        {
          type: "text",
          title: "Can AI Be Creative?",
          body: "AI technology has advanced so much that it can now compose music, paint pictures, and even write stories! But is AI truly creative? AI uses algorithms to analyze thousands of examples of music, art, or writing. Then it generates new content based on patterns it has found. For example, an AI can compose a song that sounds like Mozart because it has studied thousands of Mozart pieces. However, AI doesn't feel inspiration or emotion — it simply follows patterns. Some people think AI creativity is real innovation, while others believe true creativity requires human feelings and experiences.",
        },
        {
          type: "grammar",
          title: "Future Simple Passive",
          grammar: {
            title: "Future Simple — Active vs Passive",
            rows: [
              { subject: "Active", verb: "will + base verb", example: "Scientists will develop new AI technology." },
              { subject: "Passive", verb: "will + be + past participle", example: "New AI technology will be developed by scientists." },
              { subject: "Active", verb: "will + base verb", example: "AI will compose music for the show." },
              { subject: "Passive", verb: "will + be + past participle", example: "Music for the show will be composed by AI." },
            ],
            rules: [
              "Future Simple Active: Subject + will + base verb + object",
              "Future Simple Passive: Object + will + be + past participle (+ by agent)",
              "Use the passive when the action is more important than who does it.",
              "Example: 'The project will be completed next week.' (we don't need to say who)",
            ],
          },
        },
        {
          type: "imagePrompt",
          title: "AI Creativity",
          alt: "An illustration of a computer screen showing a colorful painting being generated, with musical notes and text floating around it.",
          imageSrc: imgAiCreativity,
        },
      ],
    },
    {
      id: "prep3-u3-l3",
      title: "Lesson 3: A Robot Teacher",
      objectives: [
        "Analyze the pros and cons of using artificial intelligence in education.",
        "Realize the importance of human connection and emotional support in learning."
      ],
      activities: [
        "Imagine your school uses a robot teacher, write two pros and two cons for that.",
        "Write a short thank-you note to your teacher highlighting their moral human role."
      ],
      vocabulary: {
        flashcards: [
          { term: "Customize", definition: "To modify or build according to individual needs" },
          { term: "Connection", definition: "A feeling of understanding and closeness with someone" },
          { term: "Instantly", definition: "Immediately; without any delay" },
          { term: "Confused", definition: "Unable to think clearly or understand something" },
          { term: "Notice", definition: "To become aware of something" },
          { term: "Encourage", definition: "To give someone support, confidence, or hope" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "A Week with a Robot Teacher",
          body: "Sara's school tried something new — a robot teacher for one week! The robot, called 'TeachBot 3000', could answer questions instantly, customize lessons for each student, and never got tired. On Monday, Sara was excited. TeachBot explained math problems step by step, and Sara understood them faster than usual. On Wednesday, Sara felt confused about a science topic. She raised her hand, and TeachBot gave a clear explanation. But something felt different. When Sara made a joke, TeachBot didn't laugh. When she felt sad about a bad grade, TeachBot said, 'Your score is below average. Try again.' It was accurate but not kind. By Friday, Sara missed her real teacher, Miss Heba. Miss Heba would notice when students were upset. She would smile, tell funny stories, and encourage them. Sara realized that while AI can teach facts, it can't replace the human connection that makes learning special.",
        },
        {
          type: "dialog",
          title: "Sara's Reflection",
          lines: [
            { speaker: "Sara", text: "The robot teacher was really smart and fast." },
            { speaker: "Friend", text: "Do you think it's better than Miss Heba?" },
            { speaker: "Sara", text: "No way! TeachBot knows a lot, but it doesn't care about us." },
            { speaker: "Friend", text: "What do you mean?" },
            { speaker: "Sara", text: "When I was confused, it just repeated the information. Miss Heba explains things in a different way and makes sure we really understand." },
            { speaker: "Friend", text: "I agree. Teachers do more than just teach facts." },
          ],
        },
        {
          type: "imagePrompt",
          title: "Robot Teacher",
          alt: "A classroom scene with a friendly-looking robot standing at the whiteboard and students sitting at desks, some looking curious and some looking confused.",
          imageSrc: imgRobotTeacher,
        },
      ],
    },
    {
      id: "prep3-u3-l4",
      title: "Lesson 4: The School Garden Project — Ch.3",
      objectives: [
        "Recognize the importance of perseverance and not giving up when facing challenges.",
        "Deduce the importance of taking initiative and looking for alternative solutions to problems."
      ],
      activities: [
        "Mention a problem you faced recently and how you managed to overcome it.",
        "If you were 'Nour', what alternative idea would you suggest to collect donations?"
      ],
      vocabulary: {
        flashcards: [
          { term: "Initiative", definition: "The ability to take action and solve problems without being told" },
          { term: "Donations", definition: "Things (especially money) given to help a cause" },
          { term: "Quit", definition: "To stop doing something; to give up" },
          { term: "Climate", definition: "The weather conditions in an area over a long period" },
          { term: "Disappointed", definition: "Feeling sad because something didn't happen as expected" },
          { term: "Persevere", definition: "To continue doing something despite difficulties" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Facing Problems",
          body: "The school garden team was excited to start, but problems appeared quickly. First, they needed money for seeds, soil, and tools. The school didn't have enough budget. Nour took the initiative and organized a bake sale, but they only raised half of what they needed. Then, the weather turned bad. Heavy rain for two weeks damaged the area where they planned to build the garden. Some team members felt disappointed. 'Maybe we should quit,' said Khaled. But Nour refused to give up. 'We've come too far to stop now,' she said. Amira had an idea: 'Let's ask local businesses for donations.' They wrote letters and visited shops in the neighborhood. A plant nursery donated seeds, and a hardware store gave them tools. Slowly, things started to improve. The team learned that facing problems doesn't mean failure — it means finding new solutions. With perseverance and teamwork, they were ready to try again.",
        },
        {
          type: "list",
          title: "Problems and Solutions",
          items: [
            "Problem: Not enough money → Solution: Organized a bake sale",
            "Problem: Still short on budget → Solution: Asked local businesses for donations",
            "Problem: Bad weather damaged the site → Solution: Waited and replanned",
            "Problem: Team members wanted to quit → Solution: Nour encouraged everyone to persevere",
          ],
        },
        {
          type: "imagePrompt",
          title: "Facing Challenges",
          alt: "Students looking at a muddy, rain-damaged garden area with determined expressions, holding letters and donation boxes.",
          imageSrc: imgFacingChallenges,
        },
      ],
    },
  ],
};
