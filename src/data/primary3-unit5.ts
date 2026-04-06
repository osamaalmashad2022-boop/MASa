import type { Unit } from "./types";
import imgHabitats from "@/assets/lessons/primary3-t2-unit5-habitats.jpg";

export const primary3Unit5: Unit = {
  id: "unit5",
  title: "Animals & Habitats",
  preTest: {
    title: "Pre-Test: What Do You Know About Animals?",
    description: "Answer these questions to see what you already know before starting the unit.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: Show What You Learned About Animals!",
    description: "Answer these 10 questions to test your understanding of Unit 5.",
    questions: [
      { id: "u5post1", type: "mcq", question: "Where do fish live?", options: ["In the desert", "In water", "In trees", "On mountains"], correctAnswer: 1 },
      { id: "u5post2", type: "mcq", question: "What is a 'habitat'?", options: ["A type of food", "A place where animals live", "A kind of animal", "A game"], correctAnswer: 1 },
      { id: "u5post3", type: "truefalse", question: "Camels live in the desert.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u5post4", type: "mcq", question: "Complete: 'The bird can fly ___ it has wings.'", options: ["but", "or", "because", "so"], correctAnswer: 2 },
      { id: "u5post5", type: "mcq", question: "Which animal lives in the sea?", options: ["Lion", "Dolphin", "Monkey", "Cat"], correctAnswer: 1 },
      { id: "u5post6", type: "truefalse", question: "Penguins live in hot places.", options: ["True", "False"], correctAnswer: 1 },
      { id: "u5post7", type: "mcq", question: "What does 'endangered' mean?", options: ["Very common", "In danger of disappearing", "Very big", "Very fast"], correctAnswer: 1 },
      { id: "u5post8", type: "mcq", question: "'The cat is small ___ the lion is big.'", options: ["and", "but", "because", "or"], correctAnswer: 1 },
      { id: "u5post9", type: "truefalse", question: "We should protect animals and their habitats.", options: ["True", "False"], correctAnswer: 0 },
      { id: "u5post10", type: "mcq", question: "Which animal has fur to keep warm?", options: ["Fish", "Snake", "Bear", "Frog"], correctAnswer: 2 },
    ],
  },
  lessons: [
    {
      id: "lesson1",
      title: "Animals and Where They Live",
      objectives: [
        "Identify different natural habitats for animals around the world.",
        "Classify animals according to their environments (desert, forest, ocean, farm)."
      ],
      activities: [
        "Draw a habitat of your choice and place three animals that live in it.",
        "Match the names of five animals and their habitats in a game or a small schedule."
      ],
      vocabulary: {
        flashcards: [
          { term: "Habitat", definition: "The natural place where an animal lives." },
          { term: "Desert", definition: "A hot, dry place with lots of sand." },
          { term: "Forest", definition: "A large area with many trees." },
          { term: "Ocean", definition: "A very large area of sea water." },
          { term: "Farm", definition: "A place where people grow food and keep animals." },
          { term: "Wild", definition: "Living in nature, not kept by people." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Four habitats shown side by side — desert with camels, forest with monkeys, ocean with dolphins, and a farm with cows and chickens.", imageSrc: imgHabitats },
        {
          type: "dialog",
          title: "Where Do Animals Live?",
          lines: [
            { speaker: "Teacher", text: "Today we will learn about animal habitats. Who knows what a habitat is?" },
            { speaker: "Youssef", text: "Is it the place where animals live?" },
            { speaker: "Teacher", text: "Exactly! Different animals live in different habitats." },
            { speaker: "Layla", text: "Camels live in the desert because they can survive the heat." },
            { speaker: "Teacher", text: "Very good! And fish live in water — rivers, lakes, and oceans." },
            { speaker: "Youssef", text: "Monkeys live in forests because they like to climb trees!" },
            { speaker: "Teacher", text: "That's right! Every animal lives where it can find food and stay safe." },
          ],
        },
        {
          type: "list",
          title: "Animals and Their Habitats",
          items: [
            "Desert → Camels, snakes, lizards",
            "Forest → Monkeys, birds, bears",
            "Ocean → Fish, dolphins, whales",
            "Farm → Cows, chickens, horses",
            "Arctic → Penguins, polar bears, seals",
            "Savanna → Lions, elephants, giraffes",
          ],
        },
      ],
    },
    {
      id: "lesson2",
      title: "Animal Bodies",
      objectives: [
        "Distinguish different body parts that animals adapt with to live.",
        "Use conjunctions (and, but, because, or) to form useful sentences."
      ],
      activities: [
        "Write about a marine creature using (because) to explain its need for fins.",
        "Compare a bird's body and a camel's body using (but)."
      ],
      vocabulary: {
        flashcards: [
          { term: "Fur", definition: "Soft hair that covers an animal's body to keep it warm." },
          { term: "Feathers", definition: "Light, soft things that cover a bird's body." },
          { term: "Scales", definition: "Small, flat pieces that cover fish and reptiles." },
          { term: "Wings", definition: "Parts of a bird or insect used for flying." },
          { term: "Tail", definition: "The part at the back of an animal's body." },
          { term: "Fins", definition: "Flat parts of a fish that help it swim." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Illustrations of animal body parts — a bird with feathers and wings, a fish with scales and fins, a cat with fur and a tail.", imageSrc: imgHabitats },
        {
          type: "reading",
          title: "Amazing Animal Bodies",
          body: "Animals have special body parts that help them live in their habitats. Birds have feathers and wings to fly. Fish have scales and fins to swim in water. Bears have thick fur to stay warm in cold places. Camels have wide feet to walk on sand. Each animal's body is perfect for where it lives!\n\nBirds can fly because they have wings. Fish can swim because they have fins. Camels can walk in the desert because they have wide feet. Every animal is special!",
        },
        {
          type: "grammar",
          title: "Conjunctions: and, but, because, or",
          grammar: {
            title: "Conjunctions",
            rows: [
              { subject: "and", verb: "adds information", example: "The bird has wings and feathers." },
              { subject: "but", verb: "shows difference", example: "The cat is small but the lion is big." },
              { subject: "because", verb: "gives a reason", example: "Fish live in water because they have fins." },
              { subject: "or", verb: "gives a choice", example: "Do you like cats or dogs?" },
            ],
            rules: [
              "'And' joins two similar ideas together.",
              "'But' shows a difference or contrast between two things.",
              "'Because' tells us the reason for something.",
              "'Or' gives us a choice between two things.",
            ],
          },
        },
      ],
    },
    {
      id: "lesson3",
      title: "Taking Care of Animals",
      objectives: [
        "Realize the importance of protecting animals and natural habitats from pollution and extinction.",
        "Practice pronouncing words containing the vowel sound (oo)."
      ],
      activities: [
        "Write two pieces of advice to your classmates on keeping clean environments for animals.",
        "Find 3 words in your lesson containing the letters 'oo' and write them."
      ],
      vocabulary: {
        flashcards: [
          { term: "Protect", definition: "To keep safe from harm or danger." },
          { term: "Endangered", definition: "In danger of disappearing forever." },
          { term: "Nature", definition: "The world of plants, animals, and natural things." },
          { term: "Clean", definition: "Free from dirt and pollution." },
          { term: "Feed", definition: "To give food to an animal or person." },
          { term: "Shelter", definition: "A place that protects from weather or danger." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Children helping animals — feeding birds, cleaning a beach, planting trees, and putting up a birdhouse.", imageSrc: imgHabitats },
        {
          type: "reading",
          title: "Let's Protect Animals",
          body: "Animals need our help. Some animals are endangered because people cut down trees and pollute the water. We must protect animals and their habitats. We can help by keeping the environment clean, planting trees, and not throwing rubbish in rivers and seas. We should be kind to all animals — big and small. When we take care of nature, we help animals stay safe and happy.\n\nMoral: We must protect animals and take care of the world we live in.",
        },
        {
          type: "list",
          title: "How Can We Help Animals?",
          items: [
            "Keep the environment clean.",
            "Don't throw rubbish in rivers or seas.",
            "Plant trees so animals have homes.",
            "Be kind to all animals.",
            "Don't hurt wild animals.",
            "Learn about endangered animals and tell others.",
          ],
        },
        {
          type: "text",
          title: "Phonics Focus: /oo/ sound",
          body: "The letters 'oo' can make two sounds:\n\nLong /uː/ — zoo, food, moon, cool, school\nShort /ʊ/ — book, look, good, wood, foot\n\n'I read a good book about animals at the zoo.'\n'The moon looks cool at night.'",
        },
      ],
    },
    {
      id: "lesson4",
      title: "My Favourite Animal",
      objectives: [
        "Practice describing favorite animals and mentioning their features and environments.",
        "Apply vocabulary and conjunction rules in writing a complete paragraph."
      ],
      activities: [
        "Describe your favorite animal to your classmates in about 4 simplified sentences.",
        "Exchange your favorite animal drawings with your classmate and talk about their features."
      ],
      vocabulary: {
        flashcards: [
          { term: "Favourite", definition: "The one you like the most." },
          { term: "Describe", definition: "To tell what something looks like or is like." },
          { term: "Fast", definition: "Moving quickly." },
          { term: "Slow", definition: "Not moving quickly." },
          { term: "Strong", definition: "Having a lot of power." },
          { term: "Gentle", definition: "Soft and careful, not rough." },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A child presenting a poster about their favourite animal — an elephant — with facts and drawings.", imageSrc: imgHabitats },
        {
          type: "dialog",
          title: "Talking About Our Favourite Animals",
          lines: [
            { speaker: "Teacher", text: "Tell us about your favourite animal, Mona." },
            { speaker: "Mona", text: "My favourite animal is the dolphin because it is smart and friendly." },
            { speaker: "Teacher", text: "Great! What about you, Ahmed?" },
            { speaker: "Ahmed", text: "I like lions because they are strong and brave." },
            { speaker: "Layla", text: "I love cats because they are gentle and cute." },
            { speaker: "Teacher", text: "Every animal is special! Can you describe your animal's habitat?" },
            { speaker: "Mona", text: "Dolphins live in the ocean. They swim fast and jump high!" },
            { speaker: "Ahmed", text: "Lions live in the savanna. They are the kings of the jungle!" },
          ],
        },
        {
          type: "text",
          title: "Write About Your Favourite Animal",
          body: "Write 4-5 sentences about your favourite animal. Use these questions to help you:\n\n1. What is your favourite animal?\n2. Where does it live? (habitat)\n3. What does it look like? (fur, feathers, scales)\n4. What can it do? (fly, swim, run)\n5. Why do you like it?\n\nUse 'because', 'and', and 'but' in your sentences!",
        },
      ],
    },
  ],
};
