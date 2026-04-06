import type { Unit } from "./types";
import imgHealthyChoices from "@/assets/lessons/secondary2-t2-unit11-healthy-choices.jpg";
import imgWater from "@/assets/lessons/sec2-u11-water.jpg";
import imgPastHabits from "@/assets/lessons/sec2-u11-past-habits.jpg";
import imgPositive from "@/assets/lessons/sec2-u11-positive.jpg";

export const secondary2Unit5: Unit = {
  id: "sec2-unit5",
  title: "Unit 11: Healthy Choices, Healthy Life",
  preTest: {
    title: "Unit 11 Pre-Test",
    description: "Test your knowledge before starting Unit 11.",
    questions: [
      {
        id: "s2u5-pre-1",
        type: "mcq",
        question: "What does 'dehydrated' mean?",
        options: ["Very hungry", "Not having enough water in the body", "Very tired", "Having too much energy"],
        correctAnswer: 1,
      },
      {
        id: "s2u5-pre-2",
        type: "mcq",
        question: "What is the 'immune system'?",
        options: ["The digestive system", "The system that fights infection and disease", "The nervous system", "The muscular system"],
        correctAnswer: 1,
      },
      {
        id: "s2u5-pre-3",
        type: "mcq",
        question: "Which sentence uses 'used to' correctly?",
        options: ["She use to walk to school.", "She used to walk to school.", "She is used walk to school.", "She used walk to school."],
        correctAnswer: 1,
      },
      {
        id: "s2u5-pre-4",
        type: "mcq",
        question: "What does 'optimist' mean?",
        options: ["A person who expects the worst", "A person who is hopeful and confident", "A person who doesn't care", "A person who is always late"],
        correctAnswer: 1,
      },
      {
        id: "s2u5-pre-5",
        type: "mcq",
        question: "What does 'lifespan' mean?",
        options: ["A type of exercise", "The length of time something lives", "A medical test", "A healthy meal"],
        correctAnswer: 1,
      },
    ],
  },
  postTest: {
    title: "Unit 11 Post-Test",
    description: "Test your understanding after completing Unit 11.",
    questions: [
      {
        id: "s2u5-post-1",
        type: "mcq",
        question: "Why does Leen think Bassem feels bad after the workout?",
        options: ["He's eating too much food", "He's working out too hard", "He's a little dehydrated", "He's not sleeping enough"],
        correctAnswer: 2,
      },
      {
        id: "s2u5-post-2",
        type: "mcq",
        question: "Water helps your body temperature by ______.",
        options: ["Making you hotter", "Cooling you down when you sweat", "Making you shiver", "Changing your skin color"],
        correctAnswer: 1,
      },
      {
        id: "s2u5-post-3",
        type: "truefalse",
        question: "We use 'would' with stative verbs to talk about past habits.",
        options: ["True", "False"],
        correctAnswer: 1,
      },
      {
        id: "s2u5-post-4",
        type: "mcq",
        question: "In the past, Ahmed ______ skip breakfast every morning.",
        options: ["used to", "would be", "is used to", "used"],
        correctAnswer: 0,
      },
      {
        id: "s2u5-post-5",
        type: "mcq",
        question: "What happens when you think positively according to the text?",
        options: ["Your body has more energy only", "Your body has less stress", "You become physically stronger", "You need less sleep"],
        correctAnswer: 1,
      },
      {
        id: "s2u5-post-6",
        type: "truefalse",
        question: "Optimists often have better heart health and a longer lifespan.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "s2u5-post-7",
        type: "mcq",
        question: "We use 'would' to talk about ______.",
        options: ["Past habits and repeated actions", "Past states and situations", "Present routines", "Future plans"],
        correctAnswer: 0,
      },
      {
        id: "s2u5-post-8",
        type: "mcq",
        question: "What body part cleans your system with the help of water?",
        options: ["The stomach", "The joints", "The kidneys", "The teeth"],
        correctAnswer: 2,
      },
      {
        id: "s2u5-post-9",
        type: "mcq",
        question: "What does the text suggest about practicing gratitude?",
        options: ["Write three good things every morning", "Write three good things every night", "Write three good things every week", "Write three good things every month"],
        correctAnswer: 1,
      },
      {
        id: "s2u5-post-10",
        type: "mcq",
        question: "Which is correct? 'There ______ be a cinema here.'",
        options: ["used to", "would", "would be", "is used to"],
        correctAnswer: 0,
      },
    ],
  },
  lessons: [
    {
      id: "sec2-u5-l1",
      title: "Lesson 1: Staying Healthy",
      objectives: [
        "Identify healthy lifestyle choices and their impact on academic focus.",
        "Extract good daily practices such as balanced food and adequate sleep."
      ],
      activities: [
        "Write a proposed daily routine for a student aiming to improve their health and focus.",
        "Discuss with your team the harms of fast food on learning and suggest healthy alternatives."
      ],
      vocabulary: {
        flashcards: [
          { term: "Nutrition", definition: "The process of providing or obtaining food necessary for health and growth" },
          { term: "Essential", definition: "Absolutely necessary; extremely important" },
          { term: "Energetic", definition: "Having or showing a lot of energy and enthusiasm" },
          { term: "Routine", definition: "A regular series of actions followed each day" },
          { term: "Vitamins", definition: "Substances found in food that the body needs to stay healthy" },
          { term: "Exercise", definition: "Physical activity done to stay fit and healthy" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Healthy Living for Students",
          body: "Staying healthy is one of the most important things a student can do. Good health helps you focus in class, sleep better at night, and feel happier every day. A healthy lifestyle includes eating balanced meals rich in vitamins and minerals, drinking enough water, exercising regularly, and getting at least 8 hours of sleep. Many students skip breakfast or eat too much fast food, which can lead to low energy and poor concentration. Simple changes like adding fruits and vegetables to your diet, walking or jogging for 30 minutes daily, and reducing screen time before bed can make a significant difference in your overall health and academic performance.",
        },
        {
          type: "imagePrompt",
          title: "Healthy Choices",
          alt: "An educational poster about healthy lifestyle choices including drinking water, eating fruits, exercising, and sleeping well.",
          imageSrc: imgHealthyChoices,
        },
      ],
    },
    {
      id: "sec2-u5-l2",
      title: "Lesson 2: Benefits of Drinking Water",
      objectives: [
        "Realize the importance of drinking water to support vital body functions after exercising.",
        "Understand how to regulate body temperature and healthily purify it from toxins."
      ],
      activities: [
        "Participate in designing a simple illustration showing the benefits of water for the body.",
        "Give oral advice of not less than two sentences to a friend who forgets to drink water."
      ],
      vocabulary: {
        flashcards: [
          { term: "Dehydrated", definition: "Not having enough water in the body" },
          { term: "Stiff", definition: "Hard to bend or move; not flexible" },
          { term: "Joints", definition: "Parts of the body where two bones meet and allow movement" },
          { term: "Kidneys", definition: "Organs that clean the blood and produce urine" },
          { term: "Confused", definition: "Unable to understand something; feeling uncertain" },
          { term: "Wash out", definition: "To clean something completely using water" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Student drinking water with benefits diagram.", imageSrc: imgWater },
        {
          type: "reading",
          title: "Why Water is Essential",
          body: "After a workout, Bassem felt sleepy and tired. His friend Leen explained that he was a little dehydrated — he hadn't drunk enough water. Water is essential for the body: it helps blood move air and food to all parts of the body. When you exercise, water cools you down when you sweat, regulating your body temperature. Water also makes your joints slippery so you can move easily without stiffness. It helps your brain function properly so you don't feel confused. Your kidneys need water to wash out bad things (toxins) from your body. Doctors recommend drinking at least 8 glasses of water every day to stay healthy and energetic.",
        },
        {
          type: "list",
          title: "Key Benefits of Water",
          items: [
            "Helps blood carry air and food to body parts",
            "Cools the body when you sweat during exercise",
            "Makes joints slippery for easy movement",
            "Helps the brain think clearly and avoid confusion",
            "Helps kidneys wash out toxins from the body",
          ],
        },
      ],
    },
    {
      id: "sec2-u5-l3",
      title: "Lesson 3: Past Habits (used to / would)",
      objectives: [
        "Review and differentiate between the use of (used to) and (would) to express past habits.",
        "Apply these rules to connect health changes between the past and present."
      ],
      activities: [
        "Rewrite two sentences describing a bad eating habit you used to do and quit.",
        "Talk about the development of your physical fitness compared to the past using (used to)."
      ],
      vocabulary: {
        flashcards: [
          { term: "Used to", definition: "Describes past habits or states that no longer exist" },
          { term: "Would", definition: "Describes repeated past actions (not states)" },
          { term: "Had to", definition: "Describes past obligation or necessity" },
          { term: "Prioritize", definition: "To treat something as more important than other things" },
          { term: "Skip", definition: "To miss or not do something that you usually do" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Grammar poster showing used to and would for past habits.", imageSrc: imgPastHabits },
        {
          type: "grammar",
          title: "Used to / Would / Had to",
          grammar: {
            title: "Talking About Past Habits",
            rows: [
              { subject: "used to + infinitive", verb: "past habits & states", example: "I used to skip breakfast. / There used to be a cinema here." },
              { subject: "didn't use to", verb: "negative past habit", example: "People didn't use to prioritize sleep." },
              { subject: "would + infinitive", verb: "repeated past actions only", example: "She would stay up late playing games. / We would buy the best clothes." },
              { subject: "had to + infinitive", verb: "past obligation", example: "I had to walk to school every day." },
            ],
            rules: [
              "'Used to' describes past habits OR past states: 'She used to live in Cairo.'",
              "'Would' describes repeated past ACTIONS only (not states).",
              "Do NOT use 'would' with stative verbs: 'There used to be a cinema here.' NOT 'There would be...'",
              "Compare past and present: 'Sama used to walk to school, but now she takes the bus.'",
              "'Had to' expresses past obligation: 'I had to follow certain rules.'",
              "Common mistake: 'didn't used to' ✗ → 'didn't use to' ✓",
            ],
          },
        },
        {
          type: "text",
          title: "Changing Habits Over Time",
          body: "Ahmed used to skip breakfast every morning and didn't use to drink enough water. He often got headaches. Sara used to eat too much fast food and would stay up late. When she felt stressed, she would eat unhealthy snacks. But over time, they both changed their habits. Now Ahmed eats a healthy breakfast every day, and Sara exercises regularly and eats balanced meals. Their experiences show that past habits can be changed with effort and awareness.",
        },
      ],
    },
    {
      id: "sec2-u5-l4",
      title: "Lesson 4: The Power of Positive Thinking",
      objectives: [
        "Understand the relationship between positive thinking, strengthening the immune system, and improving health.",
        "Practice gratitude and change negative self-talk to relieve stress."
      ],
      activities: [
        "Write three things you feel grateful for today and share them with your classmates.",
        "Turn a negative sentence you say to yourself into a positive, motivating sentence."
      ],
      vocabulary: {
        flashcards: [
          { term: "Mental attitude", definition: "A way of thinking and feeling connected with the mind" },
          { term: "Stress", definition: "Pressure or worry caused by problems or having too much to do" },
          { term: "Immune system", definition: "The system in your body that fights against infection and disease" },
          { term: "Lifespan", definition: "The length of time that something is likely to live" },
          { term: "Gratitude", definition: "The feeling of being thankful and appreciative" },
          { term: "Optimist", definition: "A person who is hopeful and confident about the future" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Student practicing positive thinking and gratitude.", imageSrc: imgPositive },
        {
          type: "reading",
          title: "The Power of Positive Thinking",
          body: "Positive thinking is more than just feeling happy; it is a mental attitude where you focus on good and helpful things, even when times are hard. Research shows that this kind of thinking is not just good for your mood—it can seriously affect your health.\n\nWhen you think positively, your body has less stress because you worry less. High stress can weaken your immune system, making you sick easily. Positive thinking helps keep your immune system strong. Studies show that optimists often have better heart health and a longer lifespan. They also recover faster from illness or surgery.\n\nWe all have negative thoughts sometimes, but we can change this habit. Practice Gratitude: every night, write down three good things that happened that day. Use positive self-talk: change 'I can't do this' to 'I can try this.' Stay connected: spend time with people who make you feel happy and energetic. By practicing these simple ideas, you can use the power of your mind to live a happier and healthier life.",
        },
        {
          type: "list",
          title: "Tips for Positive Thinking",
          items: [
            "Practice Gratitude — Write three good things every night",
            "Use Positive Self-Talk — Change 'I can't' to 'I can try'",
            "Stay Connected — Spend time with supportive, happy people",
            "Focus on solutions, not problems",
            "Be your own best friend and cheer yourself on",
          ],
        },
      ],
    },
  ],
};
