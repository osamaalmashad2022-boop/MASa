import type { Unit } from "./types";
import imgTechnology from "@/assets/lessons/primary3-t2-unit4-technology.jpg";
import imgTechLearning from "@/assets/lessons/primary3-t2-unit4-tech-learning.jpg";
import imgTechSafety from "@/assets/lessons/primary3-t2-unit4-tech-safety.jpg";
import imgFutureTech from "@/assets/lessons/primary3-t2-unit4-future-tech.jpg";

export const primary3Unit4: Unit = {
  id: "unit4",
  title: "Living with Technology",
  preTest: {
    title: "Pre-Test: What Do You Know About Technology?",
    description: "Answer these questions to see what you already know before starting the unit.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: Show What You Learned About Technology!",
    description: "Answer these 10 questions to test your understanding of Unit 4.",
    questions: [
      { id: "u4post1", type: "mcq", question: "What is technology?", options: ["A type of food", "Tools and machines that help us", "A sport", "A place"], correctAnswer: 1 },
      { id: "u4post2", type: "mcq", question: "Which device helps us learn online?", options: ["A fridge", "A computer", "A chair", "A spoon"], correctAnswer: 1 },
      { id: "u4post3", type: "truefalse", question: "We can use the internet to find information.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u4post4", type: "mcq", question: "Complete: 'I ___ use the computer to do my homework tomorrow.'", options: ["am", "was", "will", "did"], correctAnswer: 2 },
      { id: "u4post5", type: "mcq", question: "What should you NOT do online?", options: ["Learn new things", "Share your password with strangers", "Read stories", "Watch educational videos"], correctAnswer: 1 },
      { id: "u4post6", type: "truefalse", question: "Too much screen time is bad for your eyes.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u4post7", type: "mcq", question: "Which is a technology tool?", options: ["A tablet", "A tree", "A ball", "A rock"], correctAnswer: 0 },
      { id: "u4post8", type: "mcq", question: "'She ___ send an email to her teacher.'", options: ["will", "is", "was", "did"], correctAnswer: 0 },
      { id: "u4post9", type: "truefalse", question: "We should always ask a parent before going online.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u4post10", type: "mcq", question: "In the future, robots will ___.", options: ["Eat our food", "Help people in many ways", "Go to school like children", "Stop working"], correctAnswer: 1 },
    ],
  },
  lessons: [
    {
      id: "lesson1",
      title: "What is Technology?",
      objectives: [
        "Define technology and learn about everyday devices and their applications.",
        "Distinguish between different devices like computers and tablets and their uses."
      ],
      activities: [
        "Draw three technological devices you use at home and write the function of each.",
        "Discuss with your classmate what our daily lives would be like without these devices."
      ],
      vocabulary: {
        flashcards: [
          { term: "Technology", definition: "Tools, machines, and devices that help us do things." },
          { term: "Computer", definition: "An electronic machine used for work, learning, and playing." },
          { term: "Tablet", definition: "A flat, portable computer with a touchscreen." },
          { term: "Internet", definition: "A network that connects computers around the world." },
          { term: "Device", definition: "A machine or tool made for a special purpose." },
          { term: "Screen", definition: "The flat part of a computer or phone that shows pictures and words." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Children using different technology devices — a computer, a tablet, and a smartphone — in a classroom setting.", imageSrc: imgTechnology },
        {
          type: "dialog",
          title: "Technology Around Us",
          lines: [
            { speaker: "Teacher", text: "Good morning, class! Today we will learn about technology." },
            { speaker: "Hana", text: "What is technology, teacher?" },
            { speaker: "Teacher", text: "Technology is tools and machines that help us do things." },
            { speaker: "Ali", text: "Like computers and tablets?" },
            { speaker: "Teacher", text: "Yes! We use computers to learn, play, and talk to people far away." },
            { speaker: "Hana", text: "I use a tablet to read stories!" },
            { speaker: "Teacher", text: "That's great! Technology helps us learn new things every day." },
          ],
        },
        {
          type: "list",
          title: "Technology We Use Every Day",
          items: [
            "Computer → For learning and homework",
            "Tablet → For reading and games",
            "Phone → For talking to family and friends",
            "Television → For watching programmes",
            "Camera → For taking photos",
            "Internet → For finding information",
          ],
        },
      ],
    },
    {
      id: "lesson2",
      title: "Technology and Learning",
      objectives: [
        "Explore how technology helps in searching and accessing information.",
        "Use the future tense (Will) to express future matters and plans."
      ],
      activities: [
        "Write three sentences using (Will) about what you intend to learn using the internet soon.",
        "Imagine you are looking for new information, which website would you visit and why?"
      ],
      vocabulary: {
        flashcards: [
          { term: "Search", definition: "To look for something, especially on the internet." },
          { term: "Website", definition: "A place on the internet with information." },
          { term: "Video", definition: "A recording of moving pictures and sound." },
          { term: "Download", definition: "To save something from the internet to your device." },
          { term: "Online", definition: "Connected to the internet." },
          { term: "Programme", definition: "A show on TV or a set of instructions for a computer." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A child watching an educational video on a tablet while taking notes, with a bookshelf in the background.", imageSrc: imgTechLearning },
        {
          type: "reading",
          title: "Learning with Technology",
          body: "Nour loves learning new things. She uses her tablet to search for information on the internet. She watches videos about animals and plants. She also reads stories on websites. Her teacher says, 'Technology helps us learn, but we must use it wisely.' Nour agrees. She uses the computer for one hour, then she reads a book or plays outside. Nour knows that technology is a great tool for learning.",
        },
        {
          type: "grammar",
          title: "Future Tense: Will",
          grammar: {
            title: "Future with 'will'",
            rows: [
              { subject: "I", verb: "will learn", example: "I will learn about robots." },
              { subject: "You", verb: "will use", example: "You will use the computer." },
              { subject: "He/She", verb: "will watch", example: "She will watch a video." },
              { subject: "We", verb: "will search", example: "We will search the internet." },
              { subject: "They", verb: "will download", example: "They will download the app." },
              { subject: "Negative", verb: "will not (won't)", example: "I won't share my password." },
            ],
            rules: [
              "Use 'will' + base verb to talk about the future.",
              "Use 'won't' (will not) for negative sentences.",
              "We use 'will' for plans, predictions, and promises.",
              "Example: 'I will study hard tomorrow.'",
            ],
          },
        },
      ],
    },
    {
      id: "lesson3",
      title: "Staying Safe Online",
      objectives: [
        "Realize the importance of protecting privacy and following basic rules to stay safe online.",
        "Practice reading and pronouncing words ending with the suffix (tion)."
      ],
      activities: [
        "Design a small instruction card containing the three most important internet safety rules.",
        "Extract two words ending in (tion) from the lesson and write them in useful sentences."
      ],
      vocabulary: {
        flashcards: [
          { term: "Password", definition: "A secret word or phrase used to protect your account." },
          { term: "Safe", definition: "Protected from danger." },
          { term: "Stranger", definition: "A person you do not know." },
          { term: "Share", definition: "To give or show something to others." },
          { term: "Private", definition: "Something personal that you keep to yourself." },
          { term: "Permission", definition: "When someone says it is OK to do something." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A child using a computer safely with a parent nearby, showing a lock icon on screen representing online safety.", imageSrc: imgTechSafety },
        {
          type: "dialog",
          title: "Online Safety Rules",
          lines: [
            { speaker: "Dad", text: "Tarek, do you know how to stay safe online?" },
            { speaker: "Tarek", text: "I think so. I must not talk to strangers." },
            { speaker: "Dad", text: "That's right! And you must never share your password." },
            { speaker: "Tarek", text: "What about photos?" },
            { speaker: "Dad", text: "Don't share your photos or private information online." },
            { speaker: "Tarek", text: "Should I always ask you before going online?" },
            { speaker: "Dad", text: "Yes! Always get permission from a parent before using the internet." },
            { speaker: "Tarek", text: "I will follow these rules to stay safe!" },
          ],
        },
        {
          type: "list",
          title: "Internet Safety Rules",
          items: [
            "Don't share your password with anyone.",
            "Don't talk to strangers online.",
            "Don't share personal photos or information.",
            "Always ask a parent before going online.",
            "Tell an adult if something online makes you feel scared.",
            "Don't spend too much time on screens.",
          ],
        },
        {
          type: "text",
          title: "Phonics Focus: /tion/ ending",
          body: "Many words end with '-tion'. This makes a /ʃən/ sound.\n\nExamples: information, station, education, question, invention, protection\n\n'I found important information on the internet.'\n'Education is very important for everyone.'",
        },
      ],
    },
    {
      id: "lesson4",
      title: "Technology in the Future",
      objectives: [
        "Think creatively about future technological development and the uses of robots.",
        "Practice forming (Yes/No) questions using (Will)."
      ],
      activities: [
        "Draw a technological invention you wish to see in the future and briefly describe its role.",
        "Ask your classmate two questions using (Will) about what future technology will look like."
      ],
      vocabulary: {
        flashcards: [
          { term: "Robot", definition: "A machine that can do tasks like a human." },
          { term: "Invention", definition: "Something new that someone creates." },
          { term: "Future", definition: "The time that has not happened yet." },
          { term: "Smart", definition: "Able to think and learn quickly." },
          { term: "Electric", definition: "Powered by electricity." },
          { term: "Fly", definition: "To move through the air." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A futuristic scene with a friendly robot helping a child study, a flying car in the sky, and a smart home.", imageSrc: imgFutureTech },
        {
          type: "reading",
          title: "The World in the Future",
          body: "In the future, technology will change our lives. Robots will help us at home and at work. Smart cars will drive themselves. Children will learn from robots and computers. People will use clean energy from the sun. Doctors will use technology to help more people get better. What do you think the future will look like? Write about what you think will happen!\n\nMoral: Technology can make the world a better place if we use it wisely.",
        },
        {
          type: "grammar",
          title: "Questions with 'Will'",
          grammar: {
            title: "Yes/No Questions with Will",
            rows: [
              { subject: "Question", verb: "Will + subject + verb", example: "Will you use a computer?" },
              { subject: "Yes answer", verb: "Yes, I will.", example: "Yes, I will use a computer." },
              { subject: "No answer", verb: "No, I won't.", example: "No, I won't use a computer." },
              { subject: "Wh- question", verb: "What will + subject + verb", example: "What will robots do?" },
            ],
            rules: [
              "To make a question, put 'Will' before the subject.",
              "Short answers: Yes, I will. / No, I won't.",
              "Wh- questions: What/Where/When + will + subject + verb?",
            ],
          },
        },
        {
          type: "list",
          title: "What Will Happen in the Future?",
          items: [
            "Robots will help people at home.",
            "Cars will drive themselves.",
            "Children will learn with smart tablets.",
            "People will travel to space easily.",
            "Doctors will cure more diseases.",
            "We will use clean energy from the sun.",
          ],
        },
      ],
    },
  ],
};
