import type { Unit } from "./types";
import imgChangeMakers from "@/assets/lessons/secondary2-t2-unit8-change-makers.jpg";
import imgRecyclobekia from "@/assets/lessons/sec2-u8-recyclobekia.jpg";
import imgFutureBuilders from "@/assets/lessons/sec2-u8-future-builders.jpg";
import imgSkills from "@/assets/lessons/sec2-u8-skills.jpg";
import imgCampaign from "@/assets/lessons/sec2-u8-campaign.jpg";

export const secondary2Unit2: Unit = {
  id: "unit2",
  title: "Creating a Better Community",
  preTest: {
    title: "Pre-Test: Creating a Better Community",
    description: "Answer these questions to check your existing knowledge.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: Creating a Better Community",
    description: "Answer these 10 questions to test your understanding of Unit 8.",
    questions: [
      { id: "s2u8post1", type: "mcq", question: "A change-maker is someone who ___.", options: ["waits for others to solve problems", "takes action to improve the community", "only talks about social issues", "avoids working with others"], correctAnswer: 1 },
      { id: "s2u8post2", type: "mcq", question: "The students in the Egyptian village showed teamwork when they ___.", options: ["created a new sports club", "transformed empty land into a community garden", "cleaned their classrooms", "designed a school logo"], correctAnswer: 1 },
      { id: "s2u8post3", type: "mcq", question: "What helps change-makers overcome challenges?", options: ["Fear and hesitation", "Luck and opportunity", "Creativity, teamwork, and determination", "Money and technology"], correctAnswer: 2 },
      { id: "s2u8post4", type: "truefalse", question: "'Delay' is a synonym of 'postpone'.", options: ["True", "False"], correctAnswer: 0 },
      { id: "s2u8post5", type: "mcq", question: "RecycloBekia was created to ___.", options: ["sell computers", "recycle electronic waste", "import phones", "close factories"], correctAnswer: 1 },
      { id: "s2u8post6", type: "mcq", question: "Sara Fathy's app helps people ___.", options: ["learn new languages", "access education and healthcare", "play online games", "travel abroad"], correctAnswer: 1 },
      { id: "s2u8post7", type: "truefalse", question: "Innovation means creating new ideas or solutions.", options: ["True", "False"], correctAnswer: 0 },
      { id: "s2u8post8", type: "mcq", question: "The communication skill helps change-makers to ___.", options: ["work alone", "share ideas and build trust", "avoid teamwork", "ignore feedback"], correctAnswer: 1 },
      { id: "s2u8post9", type: "mcq", question: "'No mountain is too high' means ___.", options: ["people can overcome challenges", "climbing is dangerous", "teamwork is impossible", "nature is powerful"], correctAnswer: 0 },
      { id: "s2u8post10", type: "mcq", question: "The main message of the change-maker text is ___.", options: ["only adults can create change", "big changes happen by chance", "every small action can lead to a better world", "people must compete to make a difference"], correctAnswer: 2 },
    ],
  },
  lessons: [
    {
      id: "sec2-u8-lesson1",
      title: "Lesson 1: Change-Maker Stories",
      objectives: [
        "Draw inspiration from stories of change-makers who made a positive impact on their communities.",
        "Understand new vocabulary related to passion, perseverance, and determination in community work."
      ],
      activities: [
        "Write about a simple idea you can implement as a change-maker in your school.",
        "Discuss the role of youth in facing societal challenges using the lesson's words."
      ],
      vocabulary: {
        flashcards: [
          { term: "Change-maker", definition: "A person who creates positive change in the community" },
          { term: "Determination", definition: "Strong will to do something despite difficulties" },
          { term: "Persistence", definition: "The ability to continue despite difficulties" },
          { term: "Passion", definition: "A very strong feeling of love, enthusiasm, or dedication" },
          { term: "Give access to", definition: "To allow someone to enter, use, or get information from something" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Young Egyptian change-makers: students transforming unused land into a green garden, a young engineer with a water filter, community recycling initiative.", imageSrc: imgChangeMakers },
        {
          type: "reading",
          title: "Change-Maker Stories",
          body: "Around the world, ordinary people are turning into extraordinary change-maker individuals who take positive action to make their communities better places to live in. A change-maker might begin with a simple idea, such as organizing a neighborhood clean-up, planting trees, or collecting plastic bottles for recycling. Others launch projects that teach children digital skills, support small farmers, or protect endangered wildlife. True change-makers do not wait for someone else to solve problems; instead, they use creativity, teamwork, and determination to bring about real solutions. Even when they face difficulties like a lack of money, time, or support, they continue because they believe in the power of persistence. They understand that every major movement begins with a single step taken by a brave individual.\n\nIn one Egyptian village, for example, students transformed a piece of unused land into a green community garden where families now grow vegetables together. In another city, a young engineer invented a low-cost water-filtering system to give poor households access to clean drinking water. These inspiring efforts prove that age, background, or nationality show that while backgrounds may differ, passion and action allow individuals to achieve meaningful goals regardless of their starting point.\n\nChange-makers remind us that hope grows through action. Every small deed, when done with care and courage, contributes to building a fairer, healthier, and brighter world for everyone.",
        },
        {
          type: "list",
          title: "Discussion: Making Change",
          items: [
            "What change would you like to make in your school or community?",
            "Use: I will…, We can…, Our goal is…",
            "Use strong action verbs: build, organize, protect, create, support.",
            "Use sequence words: first, next, then, finally.",
          ],
        },
      ],
    },
    {
      id: "sec2-u8-lesson2",
      title: "Lesson 2: An Egyptian Change-Maker — RecycloBekia",
      objectives: [
        "Study a successful Egyptian experience in innovating environmental solutions for recycling electronic waste.",
        "Analyze the challenges facing startups and the impact of teamwork on success."
      ],
      activities: [
        "Summarize how Mostafa Hemdan turned a serious environmental problem into an economic opportunity.",
        "Suggest an idea for a school project based on recycling to protect the facility."
      ],
      vocabulary: {
        flashcards: [
          { term: "Light a spark of hope", definition: "To create a small, new feeling of hope, especially in a difficult situation" },
          { term: "Teamwork", definition: "Working together toward one goal" },
          { term: "Innovation", definition: "Creating new ideas or solutions" },
          { term: "E-waste", definition: "Electronic waste — old phones, computers, and TVs that are thrown away" },
          { term: "Funding", definition: "Money that is given to support a project, business, or activity" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Young Egyptian man recycling electronic waste.", imageSrc: imgRecyclobekia },
        {
          type: "text",
          title: "Before You Listen",
          body: "What happens to old phones, computers, or TVs in your home or school? Why do you think electronic waste can be dangerous to people and the environment?",
        },
        {
          type: "list",
          title: "Listening: Mostafa Hemdan & RecycloBekia",
          items: [
            "RecycloBekia was created to recycle electronic waste.",
            "The main challenge at the beginning was lack of support and funding.",
            "'Light a spark of hope' means to inspire people.",
            "RecycloBekia's success shows that teamwork and innovation create real change.",
            "Mostafa's vision combines business and social responsibility.",
          ],
        },
        {
          type: "list",
          title: "Discussion Questions",
          items: [
            "What problem did Mostafa notice, and how did he solve it?",
            "How does his company help both the people and the environment?",
            "What personal qualities helped him succeed?",
            "How can Egyptian youth be inspired by Mostafa's story?",
          ],
        },
      ],
    },
    {
      id: "sec2-u8-lesson3",
      title: "Lesson 3: The Future Builders",
      objectives: [
        "Learn the importance of technical innovation and women's participation in technology to serve society.",
        "Use modals of obligation and necessity."
      ],
      activities: [
        "Search and provide a brief overview of a local technological application that solves a daily problem for people.",
        "Rewrite three sentences about the school library rules using modals of obligation."
      ],
      vocabulary: {
        flashcards: [
          { term: "App", definition: "A software application, especially for mobile devices" },
          { term: "Coding", definition: "The process of writing computer programs" },
          { term: "Mentoring", definition: "Giving advice and support to a less experienced person" },
          { term: "Female participation", definition: "Women being actively involved in an activity or field" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Egyptian woman tech entrepreneur presenting a mobile app.", imageSrc: imgFutureBuilders },
        {
          type: "list",
          title: "Listening: Sara Fathy — Tech Innovator",
          items: [
            "Sara Fathy's app helps people access education and healthcare.",
            "'Innovation meets purpose' means using technology to solve real problems.",
            "Sara believes technology needs more female participation.",
            "Sara is creative and socially responsible.",
            "Sara's app translates voice commands into Arabic and English.",
          ],
        },
        {
          type: "grammar",
          title: "Modals of Obligation and Necessity",
          grammar: {
            title: "Must / Have to / Had to / Should have",
            rows: [
              { subject: "must", verb: "strong obligation (present)", example: "Sara must work very hard at university to achieve her goals." },
              { subject: "have to", verb: "external obligation", example: "You have to believe in yourself to make a difference." },
              { subject: "had to", verb: "past obligation", example: "Last year, Sara had to learn several new coding languages." },
              { subject: "don't have to", verb: "no obligation", example: "Her team didn't have to spend much money because free tools were available." },
              { subject: "mustn't", verb: "prohibition", example: "Engineers mustn't share user data; it's against the rules." },
              { subject: "should have", verb: "past advice (not followed)", example: "The designers should have checked their code more carefully." },
            ],
            rules: [
              "'Must' expresses strong personal obligation or necessity.",
              "'Have to' expresses external obligation (rules, laws).",
              "'Had to' is the past form of 'have to'.",
              "'Don't have to' means it's not necessary (you have a choice).",
              "'Mustn't' means it is prohibited or forbidden.",
              "'Should have + past participle' expresses regret about a past action.",
            ],
          },
        },
        {
          type: "list",
          title: "Practice: Rewrite Using Modals",
          items: [
            "It was a must to clean my bedroom. → I had to clean my bedroom.",
            "Ali didn't buy his dad the magazine. → Ali should have bought his dad the magazine.",
            "It's banned to smoke in hospitals. → You mustn't smoke in hospitals.",
            "It was unnecessary to buy extra items. → I didn't need to buy extra items.",
            "Doctors' duty is to help patients. → Doctors must help patients.",
          ],
        },
      ],
    },
    {
      id: "sec2-u8-lesson4",
      title: "Lesson 4: The Skills of a Change-Maker",
      objectives: [
        "Identify the essential skills needed for change, such as communication and creative thinking.",
        "Read an analytical text linking personal skills to the success of a team."
      ],
      activities: [
        "Evaluate your personal skills, identify the strongest ones, and what you need to develop further.",
        "Explain how effective communication can be a solution to difficulties during times of crisis."
      ],
      vocabulary: {
        flashcards: [
          { term: "Enthusiasm", definition: "Eagerness and lively interest or enjoyment in doing something" },
          { term: "Obstacle", definition: "Something that hinders or prevents progress" },
          { term: "Perseverance", definition: "The ability to keep trying and not give up, even when facing difficulties" },
          { term: "Separate", definition: "To divide or distinguish one thing from another" },
          { term: "Communication", definition: "The sharing of information, ideas, or feelings between people" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Students working on communication, teamwork, and creative thinking skills.", imageSrc: imgSkills },
        {
          type: "reading",
          title: "The Skills of a Change-Maker",
          body: "Becoming a change-maker is not only about having great ideas; it's about developing the right skills to make those ideas real. Around the world, young people are discovering that passion alone is not enough — they must also learn how to plan, cooperate, and stay strong when facing challenges. Successful change-makers combine enthusiasm with practical abilities that turn vision into action.\n\nFirst, they need excellent communication skills. They have to express their ideas clearly, listen carefully to others, and build trust within their teams. Without communication, even the most brilliant idea can be lost or misunderstood.\n\nSecond, creative thinking is essential. Many social or environmental problems don't have simple answers. By using imagination and curiosity, change-makers can discover new solutions where others see obstacles.\n\nTeamwork is another key to success. Real change doesn't have to happen alone; it grows through cooperation. Good leaders inspire others, share responsibilities, and celebrate every small success together.\n\nFinally, perseverance - the strength to continue despite failure or fear - separates dreamers from achievers. True change-makers need to learn from mistakes and keep moving forward with courage.\n\nWhen these skills work together, amazing things happen. Change-makers prove that no mountain is too high when communication, creativity, and cooperation walk side by side. The future belongs to those who are brave enough to act.",
        },
        {
          type: "list",
          title: "Key Skills of a Change-Maker",
          items: [
            "Communication — Express ideas clearly, listen, and build trust.",
            "Creative Thinking — Find new solutions where others see obstacles.",
            "Teamwork — Inspire others, share responsibilities, cooperate.",
            "Perseverance — Continue despite failure or fear.",
          ],
        },
      ],
    },
    {
      id: "sec2-u8-lesson5",
      title: "Lesson 5: Writing a Campaign Poster",
      objectives: [
        "Practice designing and writing texts for an impactful community awareness campaign poster.",
        "Use imperatives and appropriate motivating phrases."
      ],
      activities: [
        "Design a promotional poster for a clean-up campaign in your neighborhood, motivating youth to participate.",
        "Use short sentences like (Join us, We should) in formulating your instructions."
      ],
      vocabulary: {
        flashcards: [
          { term: "Campaign", definition: "An organized effort to achieve a goal, often involving public action" },
          { term: "Volunteer", definition: "A person who does work without being paid" },
          { term: "Awareness", definition: "Knowledge or understanding of a situation or issue" },
          { term: "Imperative", definition: "A command or instruction (e.g., 'Join us!', 'Don't waste!')" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Campaign poster for village clean-up initiative.", imageSrc: imgCampaign },
        {
          type: "list",
          title: "How to Write a Campaign Poster",
          items: [
            "1. Choose a clear and powerful title: e.g., 'Save Water Today!' or 'Protect Our Planet!'",
            "2. Use short, direct sentences — posters must be easy to read quickly.",
            "3. Use imperative forms (commands): Join us! / Don't waste! / Keep our city clean!",
            "4. Add key details: time, place, goal, contact info.",
            "5. Use positive and motivating language: Together we can make a difference!",
            "6. Make it attractive: use bullets, icons, or short slogans!",
          ],
        },
        {
          type: "reading",
          title: "Model: 'Clean Future' Campaign Poster",
          body: "Join the 'Clean Future' Campaign!\n\nLet's make our community a greener and cleaner place.\n\nEvery year, tons of waste harm our beautiful environment.\n\nJoin our recycling and clean-up campaign this Saturday!\n\nWe should protect our city and keep it clean for future generations.\n\nBring your friends and family — everyone is welcome!\n\nTogether we can build a cleaner, healthier, and happier Egypt.",
        },
        {
          type: "text",
          title: "Target Language",
          body: "Use these expressions in your poster:\n\nLet's… / We should… / Don't forget to… / Join us to… / Together we can…\n\nWriting Task: Imagine you are living in a village. It rained heavily yesterday. The streets became muddy. Write a campaign poster persuading young people to gather to discuss the problem and take measures to clean these streets.",
        },
      ],
    },
  ],
};
