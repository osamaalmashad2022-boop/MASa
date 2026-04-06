import type { Unit } from "./types";
import imgFindPassion from "@/assets/lessons/secondary2-t2-unit10-find-passion.jpg";
import imgNewHobbies from "@/assets/lessons/sec2-u10-new-hobbies.jpg";
import imgSemiModals from "@/assets/lessons/sec2-u10-semi-modals.jpg";
import imgHobbyIncome from "@/assets/lessons/sec2-u10-hobby-income.jpg";

export const secondary2Unit4: Unit = {
  id: "sec2-unit4",
  title: "Unit 10: Find Your Passion!",
  preTest: {
    title: "Unit 10 Pre-Test",
    description: "Test your knowledge before starting Unit 10.",
    questions: [
      {
        id: "s2u4-pre-1",
        type: "mcq",
        question: "What does 'overwhelmed' mean?",
        options: ["Too tired", "Unable to cope because of too much pressure", "Very bored", "Extremely excited"],
        correctAnswer: 1,
      },
      {
        id: "s2u4-pre-2",
        type: "mcq",
        question: "What is a hobby?",
        options: ["A school subject", "An activity done for enjoyment in free time", "A type of job", "A sport competition"],
        correctAnswer: 1,
      },
      {
        id: "s2u4-pre-3",
        type: "mcq",
        question: "What does 'entrepreneurship' mean?",
        options: ["Giving up what you do", "Becoming a student", "Starting a small business", "Buying school supplies"],
        correctAnswer: 2,
      },
      {
        id: "s2u4-pre-4",
        type: "mcq",
        question: "Which sentence uses a semi-modal correctly?",
        options: [
          "She supposed to come early.",
          "The test was supposed to be easy.",
          "He seem to like it.",
          "They meant being helpful.",
        ],
        correctAnswer: 1,
      },
      {
        id: "s2u4-pre-5",
        type: "mcq",
        question: "What does 'customized' mean?",
        options: ["Designs copied from the internet", "Designs made specially for someone", "Designs made for free", "Designs everyone has"],
        correctAnswer: 1,
      },
    ],
  },
  postTest: {
    title: "Unit 10 Post-Test",
    description: "Test your understanding after completing Unit 10.",
    questions: [
      {
        id: "s2u4-post-1",
        type: "mcq",
        question: "Why did the writer consider the hobby idea unnecessary at first?",
        options: ["They disliked creative activities", "They thought hobbies would waste study time", "They didn't know where to go", "The cousin discouraged them"],
        correctAnswer: 1,
      },
      {
        id: "s2u4-post-2",
        type: "mcq",
        question: "What helped the writer relax during the ceramic workshop?",
        options: ["Listening to music", "Talking to friends", "Focusing on a single creative task", "Finishing homework early"],
        correctAnswer: 2,
      },
      {
        id: "s2u4-post-3",
        type: "truefalse",
        question: "By the end of the month, the writer discovered that hobbies give you balance.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "s2u4-post-4",
        type: "mcq",
        question: "What surprised the writer when they brought key chains to school?",
        options: ["Teachers refused to buy them", "Students said they were too expensive", "Classmates wanted to order custom key chains", "No one noticed them"],
        correctAnswer: 2,
      },
      {
        id: "s2u4-post-5",
        type: "mcq",
        question: "What message did the writer learn about hobbies?",
        options: ["Hobbies are a waste of time", "Only adults can start businesses", "Hobbies can become opportunities with effort", "School is more important than hobbies"],
        correctAnswer: 2,
      },
      {
        id: "s2u4-post-6",
        type: "mcq",
        question: "Choose the correct option: 'Jogging ______ be simple for the narrator.'",
        options: ["supposed to", "seemed to", "meant being", "appear to"],
        correctAnswer: 1,
      },
      {
        id: "s2u4-post-7",
        type: "mcq",
        question: "What does 'encouraged' mean?",
        options: ["Forced", "Advised strongly and positively", "Ignored", "Interrupted"],
        correctAnswer: 1,
      },
      {
        id: "s2u4-post-8",
        type: "truefalse",
        question: "Semi-modals like 'supposed to', 'meant to', and 'seemed to' express expectations.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "s2u4-post-9",
        type: "mcq",
        question: "According to the text, what is one benefit of exploring new hobbies?",
        options: ["It guarantees perfect results", "It helps students learn new things about themselves", "It prepares students to become professionals", "It prevents all stress"],
        correctAnswer: 1,
      },
      {
        id: "s2u4-post-10",
        type: "mcq",
        question: "What does 'balance' mean in the context of hobbies?",
        options: ["Money", "Physical strength", "A healthy emotional state", "Extra time to sleep"],
        correctAnswer: 2,
      },
    ],
  },
  lessons: [
    {
      id: "sec2-u4-l1",
      title: "Lesson 1: The Importance of Having a Hobby",
      objectives: [
        "Realize the importance of hobbies in relieving stress and achieving psychological balance alongside studying.",
        "Understand how patience and creativity can contribute to personal growth and self-discovery."
      ],
      activities: [
        "Talk with your classmates about your hobby and how it helps you relax and get away from stress.",
        "Write three steps you can take to start a new hobby this week."
      ],
      vocabulary: {
        flashcards: [
          { term: "Overwhelmed", definition: "Unable to cope because of too much pressure" },
          { term: "Encouraged", definition: "Advised strongly and positively to continue" },
          { term: "Balance", definition: "A healthy emotional state; stability between different aspects of life" },
          { term: "Personal growth", definition: "Improving as a person through new experiences" },
          { term: "Intense", definition: "Very strong, serious, or demanding" },
          { term: "Disconnect", definition: "To stop thinking about something; to take a mental break" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "A Personal Experience",
          body: "When I entered Grade 11, I realized that schoolwork had become more intense than ever. My days were filled with deadlines, revision sessions, and exam pressure. One afternoon, after feeling unusually overwhelmed, my older cousin advised me to develop a hobby. At first, I thought the idea was unnecessary. How could spending time on a hobby possibly help when I had so much to study?\n\nHowever, a week later, I decided to give it a try and joined a small weekend workshop on ceramic art. On the first day, I struggled. The clay was supposed to be easy to shape, yet my hands couldn't control it. Still, as the instructor encouraged me to continue, I began to notice something unexpected: my mind slowly relaxed. Creating something with my hands allowed me to disconnect from stress and focus on one simple task.\n\nBy the end of the month, I had not only made a few bowls but also discovered that having a hobby gives you balance. It reminds you that your identity is more than grades, and that personal growth can come from patience, creativity, and learning something entirely new.",
        },
        {
          type: "imagePrompt",
          title: "Find Your Passion",
          alt: "A teenager discovering hobbies like ceramic art, photography, baking, and music in a warm Egyptian school setting.",
          imageSrc: imgFindPassion,
        },
      ],
    },
    {
      id: "sec2-u4-l2",
      title: "Lesson 2: New Hobbies",
      objectives: [
        "Explore various hobbies such as photography, baking, and playing musical instruments.",
        "Recognize the benefits of learning new skills, discovering talents, and overcoming challenges."
      ],
      activities: [
        "Choose a hobby you haven't tried before and write why you'd like to try it and what you expect to learn.",
        "Participate in a discussion about the challenges the characters faced when trying new hobbies."
      ],
      vocabulary: {
        flashcards: [
          { term: "Photography", definition: "The art of taking and processing photographs" },
          { term: "Baking", definition: "Cooking food by dry heat in an oven" },
          { term: "Ukulele", definition: "A small four-stringed musical instrument" },
          { term: "Patience", definition: "The ability to wait or endure without complaining" },
          { term: "Discover", definition: "To find or learn something new" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Students trying new hobbies: photography, baking, and ukulele.", imageSrc: imgNewHobbies },
        {
          type: "reading",
          title: "Trying New Hobbies for a Week",
          body: "A group of students decided to try new hobbies for one week. The narrator chose photography and planned to take photos of nature around the school, but the weather changed their original plan. Salma tried baking, thinking it was supposed to be easy, but she found it harder than expected because it required patience and careful measuring. Omar chose to learn the ukulele and felt that he improved a little each day. At the end of the week, the students agreed that trying new hobbies helped them learn new things about themselves.",
        },
        {
          type: "list",
          title: "Benefits of Trying New Hobbies",
          items: [
            "Learning new skills and discovering hidden talents",
            "Building confidence through practice and improvement",
            "Meeting new people who share similar interests",
            "Reducing stress and improving mental health",
            "Developing patience and perseverance",
          ],
        },
      ],
    },
    {
      id: "sec2-u4-l3",
      title: "Lesson 3: Semi-Modals (Expectation Structures)",
      objectives: [
        "Understand and use semi-modals to express expectations (supposed to, meant to).",
        "Apply the rules in sentences describing unexpected situations or different from what we thought."
      ],
      activities: [
        "Rewrite two sentences describing something you planned but didn't go as expected using (supposed to).",
        "Discuss how what we think is easy differs from reality using (seemed to)."
      ],
      vocabulary: {
        flashcards: [
          { term: "Supposed to", definition: "Expected or required to do something" },
          { term: "Meant to", definition: "Intended or planned for a purpose" },
          { term: "Seemed to", definition: "Appeared to be; gave the impression of" },
          { term: "Appeared to", definition: "Looked like; seemed" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Grammar chart showing semi-modals.", imageSrc: imgSemiModals },
        {
          type: "grammar",
          title: "Semi-Modals: Expectation Structures",
          grammar: {
            title: "Using Semi-Modals to Express Expectations",
            rows: [
              { subject: "supposed to", verb: "expected / required", example: "Jogging was supposed to be easy. / People were supposed to use their free time wisely." },
              { subject: "meant to", verb: "intended / planned", example: "The language lessons were meant to help Mariam learn Turkish." },
              { subject: "seemed to", verb: "appeared / gave impression", example: "Jogging seemed to be simple for the narrator." },
              { subject: "appeared to", verb: "looked like", example: "The task appeared to be difficult at first." },
            ],
            rules: [
              "'Supposed to' expresses what is expected or required: 'She was supposed to arrive at 8.'",
              "'Meant to' expresses intention or purpose: 'The exercise was meant to be relaxing.'",
              "'Seemed to' / 'Appeared to' express how something looked: 'He seemed to enjoy the class.'",
              "Common mistake: 'was meant being' ✗ → 'was meant to be' ✓",
              "Common mistake: 'she supposed to' ✗ → 'she was supposed to' ✓",
            ],
          },
        },
        {
          type: "text",
          title: "Making the Most of Free Time",
          body: "A neighborhood decided to use their free time better. The narrator chose jogging, which seemed to be simple but turned out to be challenging. Mariam tried learning Turkish, discovering that pronunciation needs effort. Hossam's gym training was harder than expected. Everyone agreed that using free time doesn't always go as planned, but the experience itself is valuable.",
        },
      ],
    },
    {
      id: "sec2-u4-l4",
      title: "Lesson 4: When a Hobby Becomes Income",
      objectives: [
        "Learn the concept of entrepreneurship and how a hobby can be developed into an income-generating project.",
        "Realize the importance of practice, creativity, and perseverance in turning a skill into a real opportunity."
      ],
      activities: [
        "Imagine a small project based on your hobby and write a simple plan to promote it.",
        "Discuss the importance of setting aside time for creativity and how it can turn into an opportunity in the future."
      ],
      vocabulary: {
        flashcards: [
          { term: "Entrepreneurship", definition: "The activity of starting and running a small business" },
          { term: "Customized", definition: "Made or changed to suit someone's individual needs" },
          { term: "Tutorial", definition: "A lesson or guide that teaches how to do something" },
          { term: "Income", definition: "Money earned from work or business" },
          { term: "Handmade", definition: "Made by hand, not by machine" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A teenager making handmade keychains as a small business.", imageSrc: imgHobbyIncome },
        {
          type: "reading",
          title: "A Small Idea That Became Something Bigger",
          body: "When I started Grade 11, I often felt that school took up all my time. Between homework, projects, and exams, my days felt the same. One evening, while scrolling through videos online, I saw a tutorial on making handmade key chains using beads and threads. It looked fun, so I tried it just to relax.\n\nAt first, the key chains were supposed to be simple, but mine kept coming out uneven. Still, I enjoyed the process. Every evening, I practiced a little, and my designs slowly improved. One day, I brought a few key chains to school, and my friends were surprised that I had made them myself. Two classmates asked if I could make key chains with their initials—and they offered to pay.\n\nI didn't expect to earn money from something I did for fun, but soon teachers and other students began requesting customized designs. I created a small price list and even started making special key chains for school events. What began as a way to relax became a small source of income.\n\nBy the end of the term, I learned that hobbies are not just for enjoyment. With creativity, practice, and effort, a hobby can grow into an opportunity. Sometimes, what you do in your free time can become your first step toward entrepreneurship.",
        },
      ],
    },
  ],
};
