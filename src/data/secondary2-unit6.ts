import type { Unit } from "./types";
import imgTimeHabits from "@/assets/lessons/secondary2-t2-unit12-time-habits.jpg";
import imgLateAgain from "@/assets/lessons/sec2-u12-late-again.jpg";
import imgFuturePerfect from "@/assets/lessons/sec2-u12-future-perfect.jpg";
import imgTimeMoney from "@/assets/lessons/sec2-u12-time-money.jpg";

export const secondary2Unit6: Unit = {
  id: "sec2-unit6",
  title: "Unit 12: Time Habits & Punctuality",
  preTest: {
    title: "Unit 12 Pre-Test",
    description: "Test your knowledge before starting Unit 12.",
    questions: [
      {
        id: "s2u6-pre-1",
        type: "mcq",
        question: "What does 'punctual' mean?",
        options: ["Always late", "Arriving on time", "Very fast", "Very slow"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-pre-2",
        type: "mcq",
        question: "What is the Future Perfect tense used for?",
        options: [
          "Describing present habits",
          "Talking about actions completed before a future time",
          "Describing past events",
          "Making requests",
        ],
        correctAnswer: 1,
      },
      {
        id: "s2u6-pre-3",
        type: "mcq",
        question: "What does 'productivity' mean?",
        options: ["Being lazy", "Getting more tasks done in a given time", "Wasting time", "Working slowly"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-pre-4",
        type: "mcq",
        question: "Choose the correct Future Perfect: 'By next year, I ______ my exams.'",
        options: ["will take", "will have taken", "am taking", "took"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-pre-5",
        type: "mcq",
        question: "What does 'spontaneous' mean?",
        options: ["Carefully planned", "Done suddenly without much thought", "Very organized", "Always on time"],
        correctAnswer: 1,
      },
    ],
  },
  postTest: {
    title: "Unit 12 Post-Test",
    description: "Test your understanding after completing Unit 12.",
    questions: [
      {
        id: "s2u6-post-1",
        type: "mcq",
        question: "Clock People see time as ______.",
        options: ["A flexible resource", "Money that must be spent carefully", "A random event", "Something that cannot be managed"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-post-2",
        type: "mcq",
        question: "An Event Person is likely to ______.",
        options: ["Arrive too early", "Think they have more time than they really do", "Avoid making plans", "See time as a straight line"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-post-3",
        type: "truefalse",
        question: "The 'planning fallacy' means people often underestimate the time needed for tasks.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "s2u6-post-4",
        type: "mcq",
        question: "Which sentence uses the Future Perfect correctly?",
        options: [
          "Salah is late again.",
          "Salah was supposed to be here.",
          "The board will have decided on your suspension.",
          "Salah is going to take the bus.",
        ],
        correctAnswer: 2,
      },
      {
        id: "s2u6-post-5",
        type: "mcq",
        question: "By the end of this year, my father ______ a new car.",
        options: ["will buy", "will have bought", "has bought", "is buying"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-post-6",
        type: "mcq",
        question: "What is the main idea of 'Time is Money'?",
        options: [
          "Time is not valuable",
          "Time is a valuable resource that leads to success if managed well",
          "Money is more important than time",
          "Only rich people can manage time",
        ],
        correctAnswer: 1,
      },
      {
        id: "s2u6-post-7",
        type: "truefalse",
        question: "Unlike money, lost time can be earned back.",
        options: ["True", "False"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-post-8",
        type: "mcq",
        question: "The word 'efficient' means ______.",
        options: [
          "Doing something quickly but poorly",
          "Working in a way that wastes as little time as possible",
          "Being very expensive",
          "Starting many tasks at the same time",
        ],
        correctAnswer: 1,
      },
      {
        id: "s2u6-post-9",
        type: "mcq",
        question: "If an Event Person is late, the text suggests it's usually because they are ______.",
        options: ["Intentionally rude", "Spontaneous and optimistic", "Lazy and tired", "Using a broken clock"],
        correctAnswer: 1,
      },
      {
        id: "s2u6-post-10",
        type: "mcq",
        question: "______ you ______ your lunch by the time I come back?",
        options: ["Do / finish", "Will / have finished", "Are / finishing", "Have / finished"],
        correctAnswer: 1,
      },
    ],
  },
  lessons: [
    {
      id: "sec2-u6-l1",
      title: "Lesson 1: Racing the Clock",
      objectives: [
        "Identify patterns of thinking towards time (Clock People vs. Event People).",
        "Understand the psychology of the 'planning fallacy' and the reasons for frequent lateness."
      ],
      activities: [
        "Discuss with your group the pros and cons of each type of time perception.",
        "Write a short paragraph analyzing your personal style towards time and planning."
      ],
      vocabulary: {
        flashcards: [
          { term: "Punctual", definition: "Arriving or happening exactly at the arranged time" },
          { term: "Promptly", definition: "Done quickly or immediately; without waiting" },
          { term: "Optimistic", definition: "Hopeful and confident about the future" },
          { term: "Spontaneous", definition: "Done suddenly and without a lot of thought or planning" },
          { term: "Perception", definition: "The way you understand or interpret something" },
          { term: "Planning fallacy", definition: "The tendency to underestimate the time needed for tasks" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Clock People vs. Event People",
          body: "Do you ever wonder why some people always arrive promptly for everything, while others are always running late? Psychologists say that by the time we reach adulthood, we will have developed a specific perception of time.\n\nPsychologists divide people into two groups. The first group includes 'Clock People' who are usually punctual. They see time as a straight line, like a road — a valuable resource that must be managed carefully, like money. For these people, being late means losing time and showing a lack of respect.\n\nThe second group includes 'Event People' who are frequently late. This group sees time more flexibly. For them, finishing a current activity is more important than the clock. They are often optimistic and truly believe they can complete many tasks in a short time. This is called the 'planning fallacy.'\n\nWhile being late can be annoying, studies show it is not usually because the person is intentionally rude. Often, it reflects a spontaneous personality type that focuses more on what is happening now.",
        },
        {
          type: "imagePrompt",
          title: "Time Habits & Punctuality",
          alt: "A student with a clock, schedule planner, and organized desk in an Egyptian school setting.",
          imageSrc: imgTimeHabits,
        },
      ],
    },
    {
      id: "sec2-u6-l2",
      title: "Lesson 2: Late Again!",
      objectives: [
        "Realize the impact of frequent lateness on the productivity of teamwork and respect for others.",
        "Evaluate the negative consequences associated with poor punctuality in the work environment."
      ],
      activities: [
        "Imagine you are a manager and formulate a warning letter to an employee who is always late for work.",
        "Suggest two practical solutions to help a colleague who has difficulty controlling their time."
      ],
      vocabulary: {
        flashcards: [
          { term: "Attendance", definition: "The act of being present at a place or event" },
          { term: "Delay", definition: "To be late or cause lateness" },
          { term: "Consistent", definition: "Always happening in the same way" },
          { term: "Suspension", definition: "Not allowing someone to take part for some time" },
          { term: "Productivity", definition: "Getting more tasks done in a given amount of time" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Manager warning a late employee at office.", imageSrc: imgLateAgain },
        {
          type: "reading",
          title: "A Workplace Warning",
          body: "Mr. Ahmed, a manager, is worried about Salah's repeated lateness because it affects the team's productivity. Salah gives excuses about traffic and bus delays. Mr. Ahmed warns that if Salah doesn't improve, the board will have decided on his suspension by the next review. Salah promises to change — he says he will have arrived at his desk by 8:00 AM tomorrow morning. Mr. Ahmed describes a 'valuable teammate' as someone who is consistent and reliable. He tells Salah that if he improves, they will have forgotten the incident by next month.",
        },
        {
          type: "list",
          title: "Consequences of Being Late",
          items: [
            "Affects the whole team's productivity",
            "Shows a lack of respect for others' time",
            "Can lead to warnings and suspension",
            "Creates stress and pressure on yourself",
            "Damages your professional reputation",
          ],
        },
      ],
    },
    {
      id: "sec2-u6-l3",
      title: "Lesson 3: The Future Perfect Tense",
      objectives: [
        "Correctly use the Future Perfect tense to express completing tasks on time.",
        "Practice linking project goals to precise future timeframes."
      ],
      activities: [
        "Write three sentences using the Future Perfect showing your plan to finish a school project.",
        "Exchange time goals with a classmate to see what you will both accomplish before Friday."
      ],
      vocabulary: {
        flashcards: [
          { term: "Future Perfect", definition: "A tense used for actions completed before a specific future time" },
          { term: "By the time", definition: "Before a particular moment in the future" },
          { term: "Will have + past participle", definition: "The structure of the Future Perfect tense" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Future Perfect tense grammar chart.", imageSrc: imgFuturePerfect },
        {
          type: "grammar",
          title: "The Future Perfect Tense",
          grammar: {
            title: "will/won't + have + past participle",
            rows: [
              { subject: "Positive", verb: "will have + p.p.", example: "By next month, I will have saved enough money." },
              { subject: "Negative", verb: "won't have + p.p.", example: "Sara won't have gone to bed before 10 p.m." },
              { subject: "Question", verb: "Will + S + have + p.p.?", example: "Will you have finished your lunch by then?" },
              { subject: "Time markers", verb: "by / by the time / before / in ... time", example: "In two years, I will have joined university." },
            ],
            rules: [
              "Use for actions completed BEFORE a specific time in the future.",
              "Structure: Subject + will + have + past participle.",
              "Use 'by', 'by the time', or 'before' + future time: 'By Friday, I will have finished.'",
              "Use 'in (X days/years) time' to mean at the end of that period.",
              "Example: 'By the time the guests arrive, Ali will have cleaned the house.'",
              "Negative: 'Mom won't have done all the housework before I get home.'",
            ],
          },
        },
        {
          type: "text",
          title: "Planning for the Big Day",
          body: "Ziad and Mazen are planning a school project. By Thursday, they will have spent three full days working on it. Ziad will have completed the research by tomorrow evening. Mazen is worried about the printing shop closing early. By Friday morning, they will have submitted their project to the Principal. By the end of the project, they will have earned a sense of accomplishment and teamwork.",
        },
      ],
    },
    {
      id: "sec2-u6-l4",
      title: "Lesson 4: Time is Money",
      objectives: [
        "Understand the value of time as the most important resource to support success, achievement, and improve lifestyle.",
        "Extract effective strategies for time management and reducing distractions."
      ],
      activities: [
        "Design a schedule to manage your day's tasks, setting break times for each task.",
        "Discuss the harms of multitasking and suggest a method to increase focus."
      ],
      vocabulary: {
        flashcards: [
          { term: "Resource", definition: "Something useful that can be used to achieve a goal" },
          { term: "Efficient", definition: "Working in a way that wastes as little time as possible" },
          { term: "Deadline", definition: "A time limit by which something must be completed" },
          { term: "Disappointment", definition: "A feeling of unhappiness when hopes are not met" },
          { term: "Master", definition: "To become very skilled or knowledgeable in something" },
          { term: "Organized", definition: "Well planned and neatly arranged" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Student managing time wisely with planner and checklist.", imageSrc: imgTimeMoney },
        {
          type: "reading",
          title: "Time is Money",
          body: "The famous phrase 'Time is money' means that time is a valuable resource that, if managed well, can lead to success and wealth. Unlike money, which you can earn back, lost time is gone forever. This idea is central to good time management. When you are organized, you reduce stress and increase your productivity.\n\nTo value your time, you must treat it like money in your bank account. Experts suggest that if you start managing your time today, by this time next year, you will have achieved your most important goals. Wasting time often happens because we don't plan. Spending hours checking social media or starting too many tasks at once is simply not efficient. However, if you set firm deadlines now, by the end of the month, you will have finished all your difficult projects.\n\nFinally, take short, planned breaks to keep your focus sharp. By valuing and managing your time, you invest in your future and ensure a longer, happier lifespan. If you follow these habits, by the time you graduate, you will have mastered the art of productivity.",
        },
        {
          type: "list",
          title: "Time Management Tips",
          items: [
            "Treat time like money — don't waste it",
            "Set firm deadlines for important tasks",
            "Avoid spending too long on social media",
            "Focus on one task at a time instead of multitasking",
            "Take short, planned breaks to keep focus sharp",
            "Plan your day to reduce stress and increase productivity",
          ],
        },
      ],
    },
  ],
};
