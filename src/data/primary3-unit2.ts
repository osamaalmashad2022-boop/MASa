import type { Unit } from "./types";
import imgFoodEnergy from "@/assets/lessons/primary3-t2-unit2-food-energy.jpg";
import imgHealthyUnhealthy from "@/assets/lessons/primary3-t2-unit2-healthy-unhealthy.jpg";
import imgStayingHealthy from "@/assets/lessons/primary3-t2-unit2-staying-healthy.jpg";
import imgHealthyPlan from "@/assets/lessons/primary3-t2-unit2-healthy-plan.jpg";

export const primary3Unit2: Unit = {
  id: "unit2",
  title: "Food and Health",
  preTest: {
    title: "Pre-Test: What Do You Know About Food and Health?",
    description: "Answer these questions to see what you already know before starting the unit.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: Show What You Learned About Food and Health!",
    description: "Answer these 10 questions to test your understanding of Unit 2.",
    questions: [
      { id: "u2post1", type: "mcq", question: "What gives us energy to play and learn?", options: ["Sleep", "Food", "Television", "Games"], correctAnswer: 1 },
      { id: "u2post2", type: "mcq", question: "Which is an unhealthy food?", options: ["Fish", "Eggs", "Nuts", "Soda"], correctAnswer: 3 },
      { id: "u2post3", type: "truefalse", question: "Fruits and vegetables give us vitamins.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u2post4", type: "mcq", question: "Choose the correct reflexive pronoun: 'She taught ___ to play the guitar.'", options: ["himself", "herself", "myself", "yourself"], correctAnswer: 1 },
      { id: "u2post5", type: "mcq", question: "Which food is rich in calcium?", options: ["Candy", "Cheese", "Chips", "Cake"], correctAnswer: 1 },
      { id: "u2post6", type: "truefalse", question: "Exercise makes your body weak.", options: ["True", "False"], correctAnswer: 1 },
      { id: "u2post7", type: "mcq", question: "Which word has the 'ea' sound as in 'eat'?", options: ["Red", "Meat", "Pet", "Bed"], correctAnswer: 1 },
      { id: "u2post8", type: "mcq", question: "Rice is a ___ noun.", options: ["Countable", "Uncountable", "Plural", "Singular"], correctAnswer: 1 },
      { id: "u2post9", type: "truefalse", question: "Washing your hands before eating keeps you healthy.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u2post10", type: "mcq", question: "Complete: 'We enjoyed ___ at the party.'", options: ["themselves", "ourselves", "himself", "myself"], correctAnswer: 1 },
    ],
  },
  lessons: [
    {
      id: "lesson1",
      title: "Food for Energy",
      objectives: [
        "Understand the importance of food and its variety to supply the body with energy and activity.",
        "Use reflexive pronouns to express self-reliance."
      ],
      activities: [
        "Draw a complete healthy meal and write how it supplies your body with energy.",
        "Write two sentences about things you can do by yourself using (myself)."
      ],
      vocabulary: {
        flashcards: [
          { term: "Energy", definition: "The power your body needs to play, learn, and grow." },
          { term: "Protein", definition: "A nutrient in food like meat that makes us strong." },
          { term: "Vitamins", definition: "Nutrients in fruits and vegetables that keep us healthy." },
          { term: "Healthy", definition: "Good for your body." },
          { term: "Unhealthy", definition: "Not good for your body." },
          { term: "Sugar", definition: "A sweet substance; too much is bad for health." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Colourful illustrations of different foods — meat, fruits, vegetables, water — showing how they give energy to children.", imageSrc: imgFoodEnergy },
        {
          type: "reading",
          title: "Food Gives Us Energy",
          body: "Food gives us energy to play, learn, and grow. Different foods give us different kinds of energy. Meat gives our body protein to make us strong. Fruits and vegetables give us vitamins to keep us healthy. They also help us fight sickness. Sugar gives us quick energy, but too much sugar is not good for our health. Water is very important because it helps our body work well. When we eat the right food and drink enough water, we have good energy every day.",
        },
        {
          type: "grammar",
          title: "Reflexive Pronouns",
          grammar: {
            title: "Reflexive Pronouns",
            rows: [
              { subject: "I", verb: "myself", example: "I can make a sandwich by myself." },
              { subject: "You", verb: "yourself", example: "You can wash yourself." },
              { subject: "He", verb: "himself", example: "He dresses himself." },
              { subject: "She", verb: "herself", example: "She looks at herself in the mirror." },
              { subject: "It", verb: "itself", example: "The cat cleans itself." },
              { subject: "We", verb: "ourselves", example: "We built the tent ourselves." },
              { subject: "They", verb: "themselves", example: "The kids made salad themselves." },
            ],
            rules: [
              "We use reflexive pronouns when the subject and the object are the same person.",
              "Example: 'I wash myself every morning.' (I do it to myself.)",
            ],
          },
        },
        {
          type: "reading",
          title: "Seleem's Healthy Day",
          body: "Seleem wakes up early. He washes himself and smiles. 'I am hungry,' he says. Seleem eats fruit and vegetables for breakfast. He drinks water to stay hydrated. Later, Seleem plays football with his friends. He runs fast and feels strong. At lunch, he eats meat and rice. Seleem says to himself, 'I have so much energy!' His sister Leila wakes up and dresses herself. She tells herself to eat slowly. She enjoys bread and cheese with a glass of milk. Their friend Omar makes a salad for himself.\n\nMoral: Eat healthy food and drink water to have energy for the day.",
        },
      ],
    },
    {
      id: "lesson2",
      title: "Healthy and Unhealthy Food",
      objectives: [
        "Distinguish between healthy and unhealthy foods and their effect on body energy and growth.",
        "Practice reading and pronouncing words containing the long vowel sounds (ea / ee)."
      ],
      activities: [
        "Create a table and classify five foods you like into (healthy) and (unhealthy).",
        "Search for three words containing (ea) or (ee) and read them aloud."
      ],
      vocabulary: {
        flashcards: [
          { term: "Cheese", definition: "A food made from milk, rich in calcium." },
          { term: "Rice", definition: "A grain food that gives us energy." },
          { term: "Nuts", definition: "A good source of healthy fats." },
          { term: "Sweets", definition: "Sugary food that is bad for teeth." },
          { term: "Soda", definition: "A sweet fizzy drink with too much sugar." },
          { term: "Fries", definition: "Potatoes cooked in oil; not very healthy." },
          { term: "Cookies", definition: "Sweet baked snacks; not healthy." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A split image showing healthy foods (milk, eggs, fish, chicken, nuts) on one side and unhealthy foods (sweets, soda, chips, cake) on the other.", imageSrc: imgHealthyUnhealthy },
        {
          type: "list",
          title: "Healthy Foods",
          items: [
            "Milk → Good for our bones",
            "Cheese → Rich in calcium",
            "Rice → Gives us energy",
            "Nuts → Good source of fats",
            "Eggs → Full of protein",
            "Chicken → Tasty and healthy",
            "Fish → Helps our brains grow",
          ],
        },
        {
          type: "list",
          title: "Unhealthy Foods",
          items: [
            "Sweets → Bad for our teeth",
            "Soda → Has too much sugar",
            "Chips → Salty snacks",
            "Fries → Cooked in oil",
            "Cookies → Not healthy snacks",
            "Cake → Not good for your body",
            "Lollipops → Just sugar",
          ],
        },
        {
          type: "dialog",
          title: "Healthy Choices",
          lines: [
            { speaker: "Maya", text: "Good morning, Salma! What do you usually eat for breakfast?" },
            { speaker: "Salma", text: "I usually eat eggs and drink a glass of milk. They give me energy. What about you?" },
            { speaker: "Maya", text: "Hmm... I like cake and soda." },
            { speaker: "Salma", text: "Really? Cake and soda in the morning?" },
            { speaker: "Maya", text: "Yes, but I know they aren't very healthy." },
            { speaker: "Salma", text: "You're right. Eggs and milk are healthy, but cake and soda are not good for you." },
            { speaker: "Maya", text: "What do you eat for lunch?" },
            { speaker: "Salma", text: "I often eat chicken and nuts. They help me stay strong." },
            { speaker: "Maya", text: "That sounds good! Maybe I'll try chicken and nuts instead." },
          ],
        },
        {
          type: "text",
          title: "Phonics Focus: 'ea' and 'ee'",
          body: "Both 'ea' and 'ee' make the long /iː/ sound.\n\n'ea' — usually in the middle of the word: eat, meat, beans\n'ee' — can be in the middle or at the end: cheese, green, sweet, tree\n\nExamples: 'I eat meat for lunch.' 'Cheese is made from milk.'",
        },
      ],
    },
    {
      id: "lesson3",
      title: "Staying Healthy",
      objectives: [
        "Identify daily healthy habits such as personal hygiene and exercising.",
        "Realize the importance of adequate rest, water, and treatment when feeling sick."
      ],
      activities: [
        "Write three healthy habits you do daily to maintain your energy.",
        "Discuss with your classmate the importance of washing hands well before and after eating."
      ],
      vocabulary: {
        flashcards: [
          { term: "Exercise", definition: "Moving your body to keep it healthy and strong." },
          { term: "Rest", definition: "To stop and relax so your body can get energy back." },
          { term: "Medicine", definition: "Something you take when you are sick to feel better." },
          { term: "Water", definition: "A drink that keeps your body working well." },
          { term: "Wash", definition: "To clean with water and soap." },
          { term: "Clean", definition: "Free from dirt; to make something tidy." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Illustrations of healthy habits — a child exercising, washing hands, resting in bed, and taking medicine.", imageSrc: imgStayingHealthy },
        {
          type: "list",
          title: "Healthy Habits",
          items: [
            "I exercise to keep my body healthy.",
            "I wash my hands before I eat.",
            "I clean my room every day.",
            "I stay in bed when I am sick.",
            "I rest to keep my body healthy.",
            "I take medicine when I am sick.",
          ],
        },
        {
          type: "reading",
          title: "Maya Learns to Take Care of Herself",
          body: "Maya likes to play every day, but she often forgets to wash her hands and eat healthy food. One day, she felt sick. Her friend Salma said, 'You must take care of yourself. Wash your hands, eat healthy food, rest, and exercise.' Maya listened to Salma. She washed herself carefully, ate eggs and fruit, drank water, and rested when she felt tired. She also exercised a little every day. After a few days, Maya felt much better. She said, 'I learned that I must take care of myself to stay healthy.'\n\nMoral: Taking care of yourself helps you stay healthy and happy.",
        },
      ],
    },
    {
      id: "lesson4",
      title: "Our Healthy Plan",
      objectives: [
        "Form a comprehensive idea about daily main meals and the importance of their variety.",
        "Practice distinguishing between countable and uncountable nouns."
      ],
      activities: [
        "Design a favored healthy menu detailing the events of one day (breakfast, lunch, dinner).",
        "Write three countable nouns and three uncountable nouns of items found in your kitchen."
      ],
      vocabulary: {
        flashcards: [
          { term: "Breakfast", definition: "The first meal of the day." },
          { term: "Lunch", definition: "The meal you eat in the middle of the day." },
          { term: "Dinner", definition: "The meal you eat in the evening." },
          { term: "Snack", definition: "A small amount of food between meals." },
          { term: "Menu", definition: "A list of food choices." },
          { term: "Meal", definition: "An occasion when food is eaten (breakfast, lunch, dinner)." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A colourful healthy menu showing breakfast, lunch, dinner and snack options with drawings of yogurt, soup, fruits and sandwiches.", imageSrc: imgHealthyPlan },
        {
          type: "grammar",
          title: "Countable and Uncountable Nouns",
          grammar: {
            title: "Countable vs Uncountable",
            rows: [
              { subject: "Countable", verb: "a / an / numbers", example: "an apple, two eggs, three sandwiches" },
              { subject: "Uncountable", verb: "some", example: "some rice, some water, some milk" },
            ],
            rules: [
              "Countable nouns: we can count them (one, two, three...).",
              "Use 'a' or 'an' for one item: an apple, a carrot.",
              "Uncountable nouns: we cannot count them individually.",
              "Use 'some' for a part of it: some rice, some water.",
              "Examples of countable: tomato, carrot, sandwich, egg.",
              "Examples of uncountable: milk, rice, pasta, soup, honey, water.",
            ],
          },
        },
        {
          type: "reading",
          title: "Omar's Healthy Menu",
          body: "Omar loved eating snacks like chips, cake, and soda. He did not eat many fruits or vegetables. One day, he felt tired and had a stomachache. His teacher told him, 'Omar, you need to eat healthy foods like fruits, vegetables, and meat.' Omar followed the advice. For breakfast, he ate an apple and drank some milk. For lunch, he had some rice and some salad. For a snack, he had yogurt. He felt strong and happy again.\n\nMoral: Eating healthy food in the right amounts helps your body stay strong and happy.",
        },
      ],
    },
  ],
};
