import type { Unit } from "./types";
import imgHonestChoice from "@/assets/lessons/primary3-t2-unit6-honest-choice.jpg";
import imgHonestHeroes from "@/assets/lessons/primary3-t2-unit6-honest-heroes.jpg";

export const primary3Unit6: Unit = {
  id: "unit6",
  title: "The Honest Choice",
  preTest: {
    title: "Pre-Test: What Do You Know About Honesty?",
    description: "Answer these questions to see what you already know before starting the unit.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: Show What You Learned About Honesty!",
    description: "Answer these 10 questions to test your understanding of Unit 6.",
    questions: [
      { id: "u6post1", type: "mcq", question: "Being honest means ___.", options: ["Always telling the truth", "Copying from others", "Hiding things", "Being mean"], correctAnswer: 0 },
      { id: "u6post2", type: "truefalse", question: "Cheating is never the right choice.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u6post3", type: "mcq", question: "What does 'whisper' mean?", options: ["To shout", "To speak very quietly", "To sing", "To cry"], correctAnswer: 1 },
      { id: "u6post4", type: "mcq", question: "If your friend asks you to copy their work, you should ___.", options: ["Say yes", "Say no, it's cheating", "Copy quickly", "Tell everyone"], correctAnswer: 1 },
      { id: "u6post5", type: "truefalse", question: "Telling the truth can sometimes be hard but it is always right.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u6post6", type: "mcq", question: "What does 'backpack' mean?", options: ["A type of shoe", "A bag you carry on your back", "A lunchbox", "A pencil case"], correctAnswer: 1 },
      { id: "u6post7", type: "mcq", question: "'She shook her head' means she said ___.", options: ["Yes", "No", "Maybe", "Please"], correctAnswer: 1 },
      { id: "u6post8", type: "truefalse", question: "Making the honest choice makes you feel proud of yourself.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u6post9", type: "mcq", question: "What does 'choice' mean?", options: ["A question", "A decision between two or more things", "A problem", "A mistake"], correctAnswer: 1 },
      { id: "u6post10", type: "mcq", question: "The moral of 'The Honest Choice' is ___.", options: ["Cheating helps you win", "Honesty is always the best choice", "It's OK to copy sometimes", "Don't study for tests"], correctAnswer: 1 },
    ],
  },
  lessons: [
    {
      id: "lesson1",
      title: "What is Honesty?",
      objectives: [
        "Understand the meaning of honesty and its importance as a moral value and choosing the right behavior.",
        "Deduce principles related to not cheating and self-reliance."
      ],
      activities: [
        "Write about a situation where you were honest despite it being difficult.",
        "Discuss with your classmate Nada's feeling after she refused the cheating attempt and was honest with her teacher."
      ],
      vocabulary: {
        flashcards: [
          { term: "Honest", definition: "Always telling the truth and doing the right thing." },
          { term: "Truth", definition: "What really happened; facts." },
          { term: "Choice", definition: "A decision between two or more things." },
          { term: "Cheating", definition: "Breaking the rules to get an unfair advantage." },
          { term: "Nervous", definition: "Feeling worried and a little scared." },
          { term: "Whisper", definition: "To speak very quietly." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A classroom scene where a girl looks at a test paper thinking about whether to copy or do it honestly.", imageSrc: imgHonestChoice },
        {
          type: "reading",
          title: "The Honest Choice",
          body: "Nada sat in class. It was test time. She felt nervous because she didn't study much. Her friend Hana whispered, 'Do you want to copy my answers?' Nada thought about it. She wanted a good grade, but she knew copying was cheating. Nada shook her head and said, 'No, thank you. I want to be honest.' She tried her best on the test. After class, the teacher said, 'Nada, I'm proud of you for being honest.' Nada smiled. She made the right choice.\n\nMoral: Honesty is always the best choice, even when it's hard.",
        },
        {
          type: "list",
          title: "Being Honest Means...",
          items: [
            "Always telling the truth.",
            "Not copying from others.",
            "Admitting when you make a mistake.",
            "Returning things that aren't yours.",
            "Doing your own work.",
          ],
        },
      ],
    },
    {
      id: "lesson2",
      title: "Making Good Choices",
      objectives: [
        "Distinguish between good and bad choices in daily situations at school and on the street.",
        "Practice using vocabulary related to keeping trusts and returning properties."
      ],
      activities: [
        "Make a list of three good behaviors and three bad behaviors that can happen at school.",
        "Imagine you found a lost item in the yard, what are your steps to return it to its owner?"
      ],
      vocabulary: {
        flashcards: [
          { term: "Backpack", definition: "A bag you carry on your back." },
          { term: "Copy", definition: "To write the same thing as someone else." },
          { term: "Break", definition: "To damage something so it doesn't work." },
          { term: "Shook her head", definition: "Moved her head from side to side to say 'no'." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Children in a school playground making honest choices — returning a lost backpack, telling the truth to a teacher.", imageSrc: imgHonestChoice },
        {
          type: "dialog",
          title: "The Lost Backpack",
          lines: [
            { speaker: "Ali", text: "Look! Someone left a backpack on the bench." },
            { speaker: "Omar", text: "Maybe we should take it. It has nice colours!" },
            { speaker: "Ali", text: "No, that's not honest. We should give it back." },
            { speaker: "Omar", text: "You're right. Let's take it to the teacher." },
            { speaker: "Teacher", text: "Thank you, boys! This belongs to Salma. She was looking for it." },
            { speaker: "Salma", text: "Thank you so much! You're very kind and honest." },
            { speaker: "Ali", text: "We're happy we did the right thing!" },
          ],
        },
        {
          type: "list",
          title: "Good Choices vs Bad Choices",
          items: [
            "Good: Telling the truth → Bad: Telling a lie",
            "Good: Returning lost things → Bad: Keeping what isn't yours",
            "Good: Doing your own work → Bad: Copying from others",
            "Good: Saying sorry when wrong → Bad: Blaming someone else",
          ],
        },
      ],
    },
    {
      id: "lesson3",
      title: "Honesty Makes Us Proud",
      objectives: [
        "Realize the impact of honesty on building trust, feeling proud, and respecting others.",
        "Apply concepts to write personal thoughts on the importance of honesty."
      ],
      activities: [
        "Express in three lines why gaining people's trust as a result of your honesty is important.",
        "Draw a simple design for a certificate of pride for being an honest student today."
      ],
      vocabulary: {
        flashcards: [
          { term: "Proud", definition: "Feeling happy about something good you did." },
          { term: "Integrity", definition: "Doing the right thing even when no one is watching." },
          { term: "Trust", definition: "Believing that someone is honest and good." },
          { term: "Respect", definition: "Treating others with care and kindness." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A child feeling proud after making an honest choice, with a teacher and friends smiling approvingly.", imageSrc: imgHonestChoice },
        {
          type: "reading",
          title: "Why Honesty Matters",
          body: "When we are honest, people trust us. They know we will always tell the truth. Being honest makes us feel proud of ourselves. Sometimes telling the truth is hard, but it is always the right thing to do. Honest people earn respect from others. They are good friends, good students, and good people. Remember: honesty is not just about telling the truth — it's about doing the right thing, even when no one is watching.",
        },
        {
          type: "text",
          title: "Write About a Time You Were Honest",
          body: "Think about a time when you made an honest choice. Maybe you told the truth even though it was hard. Maybe you returned something that wasn't yours. Write 3-4 sentences about what happened and how you felt.",
        },
      ],
    },
    {
      id: "lesson4",
      title: "Honest Heroes Around Us",
      objectives: [
        "Learn from real-life situations and apply the steps of admitting mistakes and apologizing.",
        "Understand that forgiveness and tolerance are important when others admit their mistakes."
      ],
      activities: [
        "Briefly state the steps of dealing with a mistake based on Yasmin's story.",
        "Write a short apology to a friend for an unintended mistake."
      ],
      vocabulary: {
        flashcards: [
          { term: "Admit", definition: "To say that something is true, especially when it is hard." },
          { term: "Apologise", definition: "To say you are sorry for doing something wrong." },
          { term: "Forgive", definition: "To stop being angry at someone who did something wrong." },
          { term: "Promise", definition: "To say that you will definitely do something." },
          { term: "Mistake", definition: "Something wrong that you did without meaning to." },
          { term: "Fair", definition: "Treating everyone equally and in the right way." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Children in different situations practising honesty — admitting a mistake, apologising, and forgiving a friend.", imageSrc: imgHonestHeroes },
        {
          type: "dialog",
          title: "The Broken Vase",
          lines: [
            { speaker: "Yasmin", text: "Oh no! I broke Mum's vase while playing inside!" },
            { speaker: "Brother", text: "Don't tell her. She won't know it was you." },
            { speaker: "Yasmin", text: "No, I must be honest. I will admit my mistake." },
            { speaker: "Yasmin", text: "Mum, I'm sorry. I broke the vase by accident." },
            { speaker: "Mum", text: "Thank you for telling the truth, Yasmin. I forgive you." },
            { speaker: "Mum", text: "Being honest is more important than any vase." },
            { speaker: "Yasmin", text: "I promise to be more careful next time!" },
          ],
        },
        {
          type: "reading",
          title: "Karim's Promise",
          body: "Karim found a pencil case on the playground. It was very nice with colourful pens inside. He thought about keeping it, but then he remembered what his father always said: 'Always be fair and honest.' Karim took the pencil case to his teacher. The teacher smiled and said, 'This belongs to Nour. She was very worried!' Nour was so happy. She said, 'Thank you, Karim! You are a true friend.' Karim felt proud because he made the honest choice.\n\nMoral: When we are honest, we earn the trust and respect of others.",
        },
        {
          type: "list",
          title: "Steps to Being Honest",
          items: [
            "1. Admit your mistake — Say what happened.",
            "2. Apologise — Say 'I'm sorry.'",
            "3. Fix it — Try to make things right.",
            "4. Promise — Say you will try to do better.",
            "5. Be proud — You did the right thing!",
          ],
        },
      ],
    },
  ],
};
