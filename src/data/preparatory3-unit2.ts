import type { Unit } from "./types";
import imgFamilyCommunication from "@/assets/lessons/preparatory3-unit2-family-communication.jpg";
import imgWorkingTogether from "@/assets/lessons/preparatory3-unit2-working-together.jpg";
import imgPhoneFreeDinner from "@/assets/lessons/preparatory3-unit2-phone-free-dinner.jpg";
import imgTheTeam from "@/assets/lessons/preparatory3-unit2-the-team.jpg";
import imgFriendlyChat from "@/assets/lessons/preparatory3-unit2-friendly-chat.jpg";

export const preparatory3Unit2: Unit = {
  id: "prep3-unit2",
  title: "Unit 2: Communication with Family and Friends",
  preTest: {
    title: "Unit 2 Pre-Test",
    description: "Test your knowledge before starting Unit 2.",
    questions: [
      {
        id: "p3u2-pre-1",
        type: "mcq",
        question: "What does 'communication' mean?",
        options: ["Sharing ideas and feelings with others", "Cooking food", "Playing sports", "Reading books"],
        correctAnswer: 0,
      },
      {
        id: "p3u2-pre-2",
        type: "mcq",
        question: "What is a 'bond' between people?",
        options: ["A type of food", "A strong connection", "A school subject", "A kind of sport"],
        correctAnswer: 1,
      },
      {
        id: "p3u2-pre-3",
        type: "mcq",
        question: "Which word means 'brothers and sisters'?",
        options: ["Parents", "Cousins", "Siblings", "Neighbours"],
        correctAnswer: 2,
      },
      {
        id: "p3u2-pre-4",
        type: "mcq",
        question: "What does 'resolve' mean?",
        options: ["To create a problem", "To find a solution", "To ignore someone", "To run away"],
        correctAnswer: 1,
      },
      {
        id: "p3u2-pre-5",
        type: "mcq",
        question: "Complete: If he had studied harder, he _____ passed.",
        options: ["will have", "would have", "is going to", "can"],
        correctAnswer: 1,
      },
    ],
  },
  postTest: {
    title: "Unit 2 Post-Test",
    description: "Test your understanding after completing Unit 2.",
    questions: [
      {
        id: "p3u2-post-1",
        type: "mcq",
        question: "What keeps relationships strong?",
        options: ["Ignoring each other", "Good communication and respect", "Arguing all the time", "Never talking"],
        correctAnswer: 1,
      },
      {
        id: "p3u2-post-2",
        type: "truefalse",
        question: "Being supportive means helping others when they need it.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "p3u2-post-3",
        type: "mcq",
        question: "In the story 'The Silent Dinner', what did Omar's family decide to do?",
        options: ["Watch more TV", "Put away their phones during dinner", "Eat separately", "Stop talking"],
        correctAnswer: 1,
      },
      {
        id: "p3u2-post-4",
        type: "mcq",
        question: "What does 'misunderstood' mean?",
        options: ["Understood clearly", "Not understood correctly", "Spoken loudly", "Written down"],
        correctAnswer: 1,
      },
      {
        id: "p3u2-post-5",
        type: "truefalse",
        question: "The Third Conditional talks about imaginary situations in the past.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "p3u2-post-6",
        type: "mcq",
        question: "Complete: If she had called, I _____ answered.",
        options: ["will have", "would have", "am going to", "had"],
        correctAnswer: 1,
      },
      {
        id: "p3u2-post-7",
        type: "mcq",
        question: "What does 'reconnect' mean?",
        options: ["To connect again", "To disconnect", "To forget", "To argue"],
        correctAnswer: 0,
      },
      {
        id: "p3u2-post-8",
        type: "truefalse",
        question: "A 'gesture' can be a movement of the hand to show meaning.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "p3u2-post-9",
        type: "mcq",
        question: "In the School Garden Project Ch.2, what did the team need?",
        options: ["Money only", "Courage and determination", "New uniforms", "A holiday"],
        correctAnswer: 1,
      },
      {
        id: "p3u2-post-10",
        type: "mcq",
        question: "Which sentence uses the Third Conditional correctly?",
        options: [
          "If I study, I will pass.",
          "If I had studied, I would have passed.",
          "If I studied, I passed.",
          "If I study, I would pass.",
        ],
        correctAnswer: 1,
      },
    ],
  },
  lessons: [
    {
      id: "prep3-u2-l1",
      title: "Lesson 1: Stay Connected",
      objectives: [
        "Understand the foundations of building strong relationships and effective communication with family.",
        "Deduce practical tips for improving communication and applying them."
      ],
      activities: [
        "Write three tips from the lesson you find most important for improving communication.",
        "Talk to a family member for 10 minutes without using your phone."
      ],
      vocabulary: {
        flashcards: [
          { term: "Communication", definition: "Sharing ideas, feelings, or information with others" },
          { term: "Connection", definition: "A relationship or link between people" },
          { term: "Siblings", definition: "Brothers and sisters" },
          { term: "Misunderstood", definition: "Not understood correctly" },
          { term: "Respectful", definition: "Showing politeness and consideration for others" },
          { term: "Supportive", definition: "Giving help and encouragement" },
          { term: "Bond", definition: "A strong feeling of connection between people" },
          { term: "Resolve", definition: "To find a solution to a problem or disagreement" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Building Strong Relationships",
          body: "Strong relationships are built on good communication, trust, and respect. When family members talk openly and listen to each other, they create a supportive environment. It's important to express your feelings respectfully and try to understand others' points of view. Even when disagreements happen, resolving them calmly strengthens the bond between people. Remember, every family is unique, but the foundation of any strong family is love, communication, and mutual respect.",
        },
        {
          type: "imagePrompt",
          title: "Family Communication",
          alt: "A warm illustration of a family sitting together in a living room, talking and listening to each other with smiles, showing a supportive and loving atmosphere.",
          imageSrc: imgFamilyCommunication,
        },
        {
          type: "list",
          title: "Tips for Better Communication",
          items: [
            "Listen carefully before you speak.",
            "Use polite words and a calm voice.",
            "Try to understand the other person's feelings.",
            "Say sorry when you make a mistake.",
            "Spend quality time with your family.",
          ],
        },
      ],
    },
    {
      id: "prep3-u2-l2",
      title: "Lesson 2: Communication Challenges",
      objectives: [
        "Identify common communication challenges and misunderstandings.",
        "Learn the importance of honesty and direct speaking to solve problems."
      ],
      activities: [
        "Summarize Mariam and Hana's story in your own words and how they solved their problem.",
        "Write about a situation where you felt misunderstood and how you dealt with it."
      ],
      vocabulary: {
        flashcards: [
          { term: "Challenge", definition: "A difficult task or situation" },
          { term: "Solution", definition: "An answer to a problem" },
          { term: "Perspective", definition: "A particular way of looking at something" },
          { term: "Empathy", definition: "Understanding and sharing the feelings of another person" },
          { term: "Frustration", definition: "A feeling of being upset because you cannot do something" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Mariam's Misunderstanding",
          body: "Mariam was excited about her school project. She wanted to make a poster about Egyptian landmarks. She asked her friend Hana to help, but Hana thought Mariam wanted her to do all the work. Hana felt frustrated and said no. Mariam was hurt because she only wanted help with the drawings. Later, they sat down and talked about it. Mariam explained what she actually meant, and Hana apologized for jumping to conclusions. They worked on the poster together and it turned out amazing!",
        },
        {
          type: "dialog",
          title: "Think-Pair-Share: Solving the Problem",
          lines: [
            { speaker: "Teacher", text: "What caused the problem between Mariam and Hana?" },
            { speaker: "Student 1", text: "Hana misunderstood what Mariam wanted." },
            { speaker: "Teacher", text: "How did they solve it?" },
            { speaker: "Student 2", text: "They sat down and talked about it calmly." },
            { speaker: "Teacher", text: "What can we learn from this?" },
            { speaker: "Student 3", text: "We should always explain ourselves clearly and listen to others." },
          ],
        },
        {
          type: "imagePrompt",
          title: "Working Together",
          alt: "Two girls sitting at a table working on a colorful poster about Egyptian landmarks, smiling and cooperating.",
          imageSrc: imgWorkingTogether,
        },
      ],
    },
    {
      id: "prep3-u2-l3",
      title: "Lesson 3: The Silent Dinner",
      objectives: [
        "Realize the negative effects of being distracted by phones during family gatherings.",
        "Use the Third Conditional to express imaginary past situations."
      ],
      activities: [
        "Write two sentences using the Third Conditional about past events that did not happen.",
        "Suggest an activity the family can do without using phones."
      ],
      vocabulary: {
        flashcards: [
          { term: "Distracted", definition: "Unable to concentrate because your mind is on something else" },
          { term: "Frustrated", definition: "Feeling upset or annoyed because of being unable to change something" },
          { term: "Gesture", definition: "A movement of the hand, head, or body to express an idea or meaning" },
          { term: "Meaningful", definition: "Having a serious, important, or useful quality" },
          { term: "Reconnect", definition: "To connect again with someone after a period of being apart" },
          { term: "Silence", definition: "Complete absence of sound; not speaking" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "The Silent Dinner",
          body: "Omar noticed something strange at dinner. Everyone in his family was looking at their phones instead of talking to each other. His mother was scrolling through social media, his father was reading the news, and his sister was texting her friends. Omar felt frustrated. He missed the days when they would share stories about their day. One evening, Omar made a suggestion: 'Let's put our phones away during dinner and just talk.' At first, everyone was surprised, but they agreed to try it. That night, they shared funny stories, laughed together, and really listened to each other. Omar's father said, 'This was the best dinner we've had in a long time.' From that day on, the family made 'phone-free dinners' a new tradition.",
        },
        {
          type: "grammar",
          title: "Third Conditional",
          grammar: {
            title: "Third Conditional — Imaginary Past Situations",
            rows: [
              { subject: "If I", verb: "had studied harder", example: "If I had studied harder, I would have passed the exam." },
              { subject: "If she", verb: "had called me", example: "If she had called me, I would have answered." },
              { subject: "If they", verb: "had left earlier", example: "If they had left earlier, they wouldn't have missed the bus." },
              { subject: "If we", verb: "had known", example: "If we had known about the party, we would have come." },
            ],
            rules: [
              "Structure: If + subject + had + past participle, subject + would have + past participle",
              "Used to talk about imaginary or unreal situations in the past.",
              "The situation did NOT happen — we imagine what the result would have been.",
              "Example: If Omar hadn't suggested phone-free dinners, the family wouldn't have reconnected.",
            ],
          },
        },
        {
          type: "imagePrompt",
          title: "Phone-Free Dinner",
          alt: "A family of four sitting around a dinner table, talking and laughing together with no phones in sight, food on the table.",
          imageSrc: imgPhoneFreeDinner,
        },
      ],
    },
    {
      id: "prep3-u2-l4",
      title: "Lesson 4: The School Garden Project — Ch.2",
      objectives: [
        "Recognize the importance of teamwork and assigning roles to accomplish projects.",
        "Extract vocabulary related to research, planning, and cooperation."
      ],
      activities: [
        "Choose a role in the teamwork from the story and write why you prefer it.",
        "Design a simple promotional poster for the school garden project."
      ],
      vocabulary: {
        flashcards: [
          { term: "Research", definition: "Careful study to discover new facts or information" },
          { term: "Courage", definition: "The ability to do something brave or difficult" },
          { term: "Talent", definition: "A natural ability to do something well" },
          { term: "Proposal", definition: "A plan or suggestion put forward for consideration" },
          { term: "Determination", definition: "The quality of being firm in your purpose" },
          { term: "Shared", definition: "Used or experienced by more than one person" },
          { term: "Deserves", definition: "To be worthy of something, to have earned it" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Building a Team",
          body: "After Nour came up with the idea of a school garden, she knew she couldn't do it alone. She needed a team. She talked to her classmates about her vision. At first, some of them weren't sure. 'It sounds like a lot of work,' said Khaled. But Nour showed them her research about how school gardens help students learn about science and nutrition. Slowly, more students got excited. Amira offered to help with the design because she loved art. Youssef said he could help with the heavy lifting. Even Khaled changed his mind and said, 'I'll help with the planting!' Together, they wrote a proposal and presented it to the school principal. It took courage and determination, but the principal was impressed. 'Every student deserves a space to learn and grow,' she said. 'Let's make this happen!'",
        },
        {
          type: "list",
          title: "Team Roles",
          items: [
            "Nour — Team leader and researcher",
            "Amira — Garden designer (art and layout)",
            "Youssef — Builder and heavy lifting",
            "Khaled — Planter and soil preparation",
          ],
        },
        {
          type: "imagePrompt",
          title: "The Team",
          alt: "A group of students presenting a garden proposal poster to a school principal in an office, looking excited and determined.",
          imageSrc: imgTheTeam,
        },
      ],
    },
    {
      id: "prep3-u2-l5",
      title: "Lesson 5: Proper Communication Skills",
      objectives: [
        "Practice conversation and understand the importance of active listening.",
        "Use appropriate body language and tone while speaking with others."
      ],
      activities: [
        "Roleplay a conversation with a classmate and make sure to use 'I feel...' instead of blaming.",
        "List three good communication skills and how they affect your relationship with others."
      ],
      vocabulary: {
        flashcards: [
          { term: "Apologize", definition: "To say sorry for something you have done" },
          { term: "Interrupt", definition: "To stop someone while they are speaking" },
          { term: "Active listening", definition: "Paying full attention to the speaker and showing you understand" },
          { term: "Body language", definition: "Communicating through movements and gestures instead of words" },
          { term: "Tone", definition: "The way someone speaks that shows their feelings" },
        ],
      },
      content: [
        {
          type: "dialog",
          title: "Mona and Naglaa's Conversation",
          lines: [
            { speaker: "Mona", text: "Naglaa, can I talk to you about something?" },
            { speaker: "Naglaa", text: "Of course! I'm all ears." },
            { speaker: "Mona", text: "I felt a bit hurt when you didn't invite me to your study group last week." },
            { speaker: "Naglaa", text: "Oh, I'm so sorry, Mona! I thought you were busy with your art class. I should have asked you first." },
            { speaker: "Mona", text: "That's okay. I understand. Next time, just check with me, please." },
            { speaker: "Naglaa", text: "I will, I promise. And you're always welcome to join!" },
            { speaker: "Mona", text: "Thanks, Naglaa. I'm glad we talked about it." },
          ],
        },
        {
          type: "list",
          title: "Good Communication Tips",
          items: [
            "Use 'I feel...' statements instead of blaming others.",
            "Make eye contact when speaking.",
            "Don't interrupt — wait for your turn.",
            "Use a calm and friendly tone.",
            "Show you're listening by nodding or saying 'I understand'.",
          ],
        },
        {
          type: "imagePrompt",
          title: "Friendly Chat",
          alt: "Two teenage girls sitting on a bench in a school courtyard, having a friendly and open conversation.",
          imageSrc: imgFriendlyChat,
        },
      ],
    },
    {
      id: "prep3-u2-l6",
      title: "Lesson 6: Staying Close — Writing",
      objectives: [
        "Develop the ability to write a well-organized opinion paragraph.",
        "Apply the Third Conditional in writing to clarify possible past consequences."
      ],
      activities: [
        "Write a short paragraph expressing your opinion on the importance of communication among friends.",
        "Review your paragraph with a classmate to ensure it has a topic sentence and supporting details."
      ],
      vocabulary: {
        flashcards: [
          { term: "Opinion", definition: "A personal belief or judgment about something" },
          { term: "Paragraph", definition: "A section of writing that deals with one main idea" },
          { term: "Topic sentence", definition: "The first sentence that tells the reader the main idea" },
          { term: "Supporting details", definition: "Facts or examples that back up the main idea" },
          { term: "Conclusion", definition: "The final part that sums up the writing" },
        ],
      },
      content: [
        {
          type: "text",
          title: "Writing an Opinion Paragraph",
          body: "An opinion paragraph expresses your personal view on a topic. Start with a topic sentence that states your opinion clearly. Then add 2-3 supporting details with reasons and examples. End with a concluding sentence that restates your opinion in a different way.",
        },
        {
          type: "reading",
          title: "Example: Why Communication Is Important",
          body: "In my opinion, good communication is the most important skill for a happy family. First, when family members talk openly, they understand each other better. For example, if a child is having trouble at school, telling their parents helps them find a solution together. Second, communication prevents misunderstandings. If Omar hadn't talked to his family about putting phones away, they would never have started their phone-free dinner tradition. In conclusion, families that communicate well are stronger, happier, and closer.",
        },
        {
          type: "grammar",
          title: "Using the Third Conditional in Writing",
          grammar: {
            title: "Third Conditional in Opinion Writing",
            rows: [
              { subject: "If they", verb: "had communicated", example: "If they had communicated better, they wouldn't have argued." },
              { subject: "If she", verb: "had listened", example: "If she had listened carefully, she would have understood the problem." },
              { subject: "If we", verb: "had spent more time", example: "If we had spent more time together, our bond would have been stronger." },
            ],
            rules: [
              "Use the Third Conditional to give examples of what could have happened differently in the past.",
              "It adds depth to your opinion by showing consequences of actions.",
            ],
          },
        },
      ],
    },
  ],
};
