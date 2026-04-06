import type { Unit } from "./types";
import imgFirefighter from "@/assets/lessons/primary3-t2-unit3-firefighter.jpg";
import imgHeroStories from "@/assets/lessons/primary3-t2-unit3-hero-stories.jpg";
import imgCelebratingHeroes from "@/assets/lessons/primary3-t2-unit3-celebrating-heroes.jpg";

export const primary3Unit3: Unit = {
  id: "unit3",
  title: "Heroes Around Us",
  preTest: {
    title: "Pre-Test: What Do You Know About Heroes?",
    description: "Answer these questions to see what you already know before starting the unit.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: Show What You Learned About Heroes!",
    description: "Answer these 10 questions to test your understanding of Unit 3.",
    questions: [
      { id: "u3post1", type: "mcq", question: "A hero is someone who is ___.", options: ["Lazy and weak", "Brave, kind, and helpful", "Scared and shy", "Angry and loud"], correctAnswer: 1 },
      { id: "u3post2", type: "mcq", question: "What does a firefighter wear?", options: ["A suit", "A helmet and uniform", "A hat", "Sunglasses"], correctAnswer: 1 },
      { id: "u3post3", type: "truefalse", question: "Firefighters rescue people from fires.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u3post4", type: "mcq", question: "Complete: '___, he climbed the ladder. ___, he sprayed water.'", options: ["Then / First", "First / Then", "After / Before", "Last / Next"], correctAnswer: 1 },
      { id: "u3post5", type: "mcq", question: "What does 'smart' mean?", options: ["Very tall", "Solves problems well", "Runs fast", "Eats a lot"], correctAnswer: 1 },
      { id: "u3post6", type: "truefalse", question: "Police officers keep the city safe.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u3post7", type: "mcq", question: "Which word has a magic 'e'?", options: ["mad", "hop", "made", "kit"], correctAnswer: 2 },
      { id: "u3post8", type: "mcq", question: "What does 'rescue' mean?", options: ["To run away", "To save someone from danger", "To cook food", "To sleep"], correctAnswer: 1 },
      { id: "u3post9", type: "truefalse", question: "Mo Salah inspires many children to play football.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u3post10", type: "mcq", question: "The moral 'Helping others is the greatest honor' means:", options: ["Don't help anyone", "It's great to help people", "Only help yourself", "Heroes don't need help"], correctAnswer: 1 },
    ],
  },
  lessons: [
    {
      id: "lesson1",
      title: "My Hero",
      objectives: [
        "Identify the qualities of a true hero such as bravery, intelligence, and kindness.",
        "Use sequencing adverbs (First / Then) to narrate events in a logical sequence."
      ],
      activities: [
        "Write a short story about a hero you know using (First) and (Then).",
        "Discuss with your classmates the importance of being brave to help others."
      ],
      vocabulary: {
        flashcards: [
          { term: "Hero", definition: "Someone who does something special, good, or brave." },
          { term: "Brave", definition: "Shows courage in hard times." },
          { term: "Strong", definition: "Can do difficult things easily." },
          { term: "Kind", definition: "Being nice and caring about others." },
          { term: "Smart", definition: "Solves problems well." },
          { term: "Courage", definition: "The ability to do something even when you are scared." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A strong swimmer helping a child in a pool, with two boys watching and talking about heroes.", imageSrc: imgFirefighter },
        {
          type: "dialog",
          title: "Who is a Hero?",
          lines: [
            { speaker: "Karim", text: "Look at that swimmer! He is so strong." },
            { speaker: "Omar", text: "Yes, he makes swimming look easy, even when it's difficult." },
            { speaker: "Karim", text: "Do you think he is a hero?" },
            { speaker: "Omar", text: "Yes, I do. Last week he helped a girl who couldn't swim in the pool." },
            { speaker: "Karim", text: "That is very brave." },
            { speaker: "Omar", text: "He teaches children how to swim safely and uses kind words to encourage them." },
            { speaker: "Karim", text: "Yes, being kind means you show care to others." },
            { speaker: "Omar", text: "He is smart as well. If someone is in trouble, he knows what to do." },
            { speaker: "Karim", text: "Wow, strong, brave, kind, and smart." },
            { speaker: "Omar", text: "Yes, that's why everyone calls him a true hero!" },
          ],
        },
        {
          type: "grammar",
          title: "Adverbs of Sequence: First / Then",
          grammar: {
            title: "Adverbs of Sequence",
            rows: [
              { subject: "First", verb: "what happens at the beginning", example: "First, Omar trained hard." },
              { subject: "Then", verb: "what happens next", example: "Then, he climbed mountains." },
            ],
            rules: [
              "Use 'first' to show what happens at the beginning.",
              "Use 'then' to show what happens next.",
              "Example: First, he saw the fire. Then, he called for help.",
            ],
          },
        },
      ],
    },
    {
      id: "lesson2",
      title: "The Brave Firefighter",
      objectives: [
        "Learn about the firefighter's job and the equipment used for rescue.",
        "Practice pronouncing words with (Magic 'e') and its effect on vowel pronunciation."
      ],
      activities: [
        "Draw a firefighter with his equipment and write three words containing (Magic 'e').",
        "Summarize in two sentences how a firefighter rescues people using time sequencing."
      ],
      vocabulary: {
        flashcards: [
          { term: "Firefighter", definition: "A person whose job is to put out fires and rescue people." },
          { term: "Helmet", definition: "A hard hat that protects the head." },
          { term: "Uniform", definition: "Special clothes worn for a job." },
          { term: "Alarm", definition: "A loud sound that warns of danger." },
          { term: "Ladder", definition: "A piece of equipment used for climbing up and down." },
          { term: "Rescue", definition: "To save someone from danger." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A brave Egyptian firefighter climbing a ladder to rescue a child from a burning building, with a fire truck nearby.", imageSrc: imgCelebratingHeroes },
        {
          type: "reading",
          title: "The Brave Firefighter",
          body: "Khaled is a brave firefighter. Every morning, he puts on his helmet and uniform. One afternoon, the fire alarm rang loudly. Khaled jumped into the fire truck and drove quickly through the streets. There was a fire in a building and smoke filled the sky. When he arrived, the fire was big, but Khaled stayed calm. First, he climbed the ladder. Then, he sprayed water, and saved a little boy from the smoke. The family of the boy felt happy, and said 'Thank you!' Khaled smiled proudly.\n\nMoral: Helping others is the greatest honor.",
        },
        {
          type: "text",
          title: "Phonics Focus: Magic 'e'",
          body: "Some words have a magic 'e' at the end. It doesn't make a sound, but it makes the vowel before it say its name.\n\nmad → made (short /a/ becomes long /eɪ/)\nhop → hope (short /o/ becomes long /oʊ/)\nkit → kite (short /i/ becomes long /aɪ/)\n\nThe magic 'e' changes the vowel sound from short to long!",
        },
      ],
    },
    {
      id: "lesson3",
      title: "Heroes in Our Daily Life",
      objectives: [
        "Realize that heroes can be ordinary people in our lives like doctors and police.",
        "Deduce lessons about helping others and feeling grateful for their active role."
      ],
      activities: [
        "Imagine you are a journalist, write two questions you would like to ask a doctor or a policeman.",
        "Write a short thank-you note to one of the everyday heroes in your community."
      ],
      vocabulary: {
        flashcards: [
          { term: "Helpful", definition: "Willing to help others." },
          { term: "Uniform", definition: "Special clothes worn by people with certain jobs." },
          { term: "Job", definition: "Work that someone does to earn money or help others." },
          { term: "Doctor", definition: "A person who helps sick or hurt people feel better." },
          { term: "Police officer", definition: "A person who keeps us safe and protects the city." },
          { term: "Teacher", definition: "A person who teaches students at school." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Illustrations of everyday heroes — a doctor, police officer, teacher, and firefighter — all in their uniforms helping people.", imageSrc: imgHeroStories },
        {
          type: "dialog",
          title: "Meeting Doctor Ali",
          lines: [
            { speaker: "Doctor Ali", text: "Hello there! I'm Doctor Ali. My job is to help people feel better." },
            { speaker: "Student", text: "Wow! How do you do that?" },
            { speaker: "Doctor Ali", text: "I wear a special uniform. I check patients and give them the help they need." },
            { speaker: "Student", text: "Do you really rescue lives?" },
            { speaker: "Doctor Ali", text: "Yes! I help people who are very sick or hurt." },
            { speaker: "Student", text: "Do you work with others?" },
            { speaker: "Doctor Ali", text: "Sometimes I work with a team to make sure patients get the best care." },
            { speaker: "Student", text: "That's amazing! You're very helpful!" },
          ],
        },
        {
          type: "reading",
          title: "Officer Asmaa — The Helpful Policewoman",
          body: "Officer Asmaa is a policewoman in Cairo. One sunny morning, she was walking on her way to work when she saw a little child crying in the street. First, she stopped right away and spoke to him kindly, asking what was wrong. The child was lost and could not find his parents. Officer Asmaa held his hand, and told him not to be afraid. Then, she carefully searched the street until she found his parents. They were very happy. Officer Asmaa is a brave policewoman who protects people and works hard to keep the city safe.\n\nMoral: We should always be grateful for police officers who keep us safe every day.",
        },
      ],
    },
    {
      id: "lesson4",
      title: "Hero Stories",
      objectives: [
        "Learn positive qualities such as support, inspiration, and honesty through inspiring hero stories.",
        "Apply new vocabulary to write a paragraph about a personal hero whose actions inspire you."
      ],
      activities: [
        "Write a simple paragraph about an inspiring person, explaining why you admire them as a hero.",
        "Participate in a discussion with your team on how honesty can make you a hero."
      ],
      vocabulary: {
        flashcards: [
          { term: "Support", definition: "To help and encourage someone." },
          { term: "Inspire", definition: "To make someone want to do something good." },
          { term: "Leader", definition: "A person who guides and helps a team." },
          { term: "Honest", definition: "Always telling the truth." },
          { term: "Respect", definition: "To treat someone with care and value." },
          { term: "Athlete", definition: "A person who is good at sports." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Mo Salah playing football, a team leader helping others, and children inspired by their heroes.", imageSrc: imgHeroStories },
        {
          type: "list",
          title: "Hero Qualities",
          items: [
            "My friend supports me when I'm sad.",
            "Mo Salah inspires me to play football.",
            "A good leader helps his team.",
            "He shows courage in the talent show.",
            "Mourad is honest and never lies.",
          ],
        },
        {
          type: "text",
          title: "Write About Your Hero",
          body: "Think about someone you know who is a hero. It could be a family member, a teacher, or someone in your community. Write about what makes them a hero using these words: brave, smart, kind, strong, helpful, honest.\n\nUse 'first' and 'then' to describe what your hero does:\nFirst, ___. Then, ___.",
        },
      ],
    },
  ],
};
