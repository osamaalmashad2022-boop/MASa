import type { Unit } from "./types";
import imgDesertAnimals from "@/assets/lessons/prep3-u10-desert-animals.jpg";
import imgArcticAnimals from "@/assets/lessons/prep3-u10-arctic-animals.jpg";

export const preparatory3Unit4: Unit = {
  id: "prep3-unit4",
  title: "Unit 10: Animal Adaptations",
  preTest: {
    title: "Unit 10 Pre-Test",
    description: "Test your knowledge before starting Unit 10.",
    questions: [],
  },
  postTest: {
    title: "Unit 10 Post-Test",
    description: "Test your understanding after completing Unit 10.",
    questions: [
      {
        id: "p3u10-post-1",
        type: "mcq",
        question: "The fennec fox uses its large ears to ..................... .",
        options: ["keep sand out", "store water", "lose heat and hear prey", "hide from predators"],
        correctAnswer: 2,
      },
      {
        id: "p3u10-post-2",
        type: "mcq",
        question: "What protects the fennec fox's feet from hot sand?",
        options: ["Long nails", "Thick fur", "Wide toes", "Sand holes"],
        correctAnswer: 1,
      },
      {
        id: "p3u10-post-3",
        type: "mcq",
        question: "Desert tortoises can survive without food for a long time because they ..................... .",
        options: ["have large shells", "move very fast", "can slow down their use of energy", "eat other animals"],
        correctAnswer: 2,
      },
      {
        id: "p3u10-post-4",
        type: "mcq",
        question: "The camel's hump is mainly used to ..................... .",
        options: ["store water", "store fat for energy", "protect against predators", "keep balance"],
        correctAnswer: 1,
      },
      {
        id: "p3u10-post-5",
        type: "mcq",
        question: "Camels are able to walk easily on sand because of their ..................... .",
        options: ["strong tails", "long eyelashes", "wide feet", "short fur"],
        correctAnswer: 2,
      },
      {
        id: "p3u10-post-6",
        type: "mcq",
        question: "She asked me if I ..................... to the party that evening.",
        options: ["would go", "will go", "went", "go"],
        correctAnswer: 0,
      },
      {
        id: "p3u10-post-7",
        type: "mcq",
        question: "Ahmed asked Hana if she ..................... a new job.",
        options: ["finds", "find", "had found", "finding"],
        correctAnswer: 2,
      },
      {
        id: "p3u10-post-8",
        type: "mcq",
        question: "Lions are ..................... that hunt other animals for food.",
        options: ["predators", "farmers", "plants", "travelers"],
        correctAnswer: 0,
      },
      {
        id: "p3u10-post-9",
        type: "mcq",
        question: "A chameleon uses ..................... to hide from danger.",
        options: ["running", "camouflage", "music", "laughing"],
        correctAnswer: 1,
      },
      {
        id: "p3u10-post-10",
        type: "mcq",
        question: "Polar bears ..................... to the cold by growing thick fur.",
        options: ["adapt", "dance", "cry", "melt"],
        correctAnswer: 0,
      },
    ],
  },
  lessons: [
    {
      id: "prep3-u10-l1",
      title: "Lesson 1: Desert Animals",
      objectives: [
        "Understand how animals adapt and survive in the harsh desert environment.",
        "Deduce examples of adaptation in some animals like the fennec fox, tortoises, and camels."
      ],
      activities: [
        "Choose a desert animal and briefly explain how it adapted to survive in this environment.",
        "Search for a picture of one of these animals and write its main adaptation feature below it."
      ],
      vocabulary: {
        flashcards: [
          { term: "Adaptations", definition: "Changes that help living things survive in their environment" },
          { term: "Harsh", definition: "Rough or severe (like very hot, cold, or tough conditions)" },
          { term: "Conservation", definition: "Protecting nature and natural resources" },
          { term: "Predators", definition: "Animals that hunt and eat other animals" },
          { term: "Camouflage", definition: "The ability to blend in with the surroundings to hide" },
          { term: "Prey", definition: "An animal that is hunted by other animals for food" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Masters of Adaptation",
          body: "Life in the desert is extremely challenging. Too much heat during the day and freezing cold at night create harsh conditions that would kill most animals. However, some amazing creatures have developed incredible adaptations to survive in these tough environments.\n\nThe fennec fox is perfectly adapted to desert life. Its large ears help it lose heat and hear prey moving underground. This small fox has thick fur on its feet to protect against hot sand and excellent hearing to locate insects and small animals. During the hot day, it stays cool in underground holes.\n\nDesert tortoises are masters of water conservation. They can store water in their bodies for months and get water from the plants they eat. Their hard shells protect them from predators and extreme temperatures. When food becomes scarce, they can slow down their use of energy and survive without eating.\n\nCamels are famous for their survival skills. They can drink huge amounts of water quickly and store it. Their humps contain fat which provides energy during long journeys. Their wide feet prevent them from sinking into sand, and their long eyelashes protect their eyes from sandstorms.",
        },
        {
          type: "imagePrompt",
          title: "Desert Animals",
          alt: "Desert animals - fennec fox, camel, and desert tortoise in a sandy desert landscape showing animal adaptations.",
          imageSrc: imgDesertAnimals,
        },
      ],
    },
    {
      id: "prep3-u10-l2",
      title: "Lesson 2: Wildlife Experts",
      objectives: [
        "Learn about modern research methods used to monitor wild animals.",
        "Practice changing direct questions into reported questions."
      ],
      activities: [
        "Write two questions in reported speech about animal behavior.",
        "Summarize in two lines the importance of using hidden cameras to monitor animals without disturbing them."
      ],
      vocabulary: {
        flashcards: [
          { term: "Fascinated", definition: "Very interested and attracted by something" },
          { term: "Migration", definition: "The movement of animals from one place to another" },
          { term: "Disturbing", definition: "Annoying or interrupting" },
          { term: "Flexible", definition: "Able to change easily to fit new conditions" },
          { term: "Tracking", definition: "Following the movements of animals using devices" },
          { term: "Generation", definition: "All the people or animals born at about the same time" },
        ],
      },
      content: [
        {
          type: "text",
          title: "Wildlife Research Methods",
          body: "Wildlife experts use various methods to study animals in their natural habitats. They use tracking devices to follow animal movements and hidden cameras to watch behavior without disturbing the animals. One surprising discovery is that animals can change their adaptations in one generation, showing how flexible nature can be.",
        },
        {
          type: "grammar",
          title: "Reported Questions",
          grammar: {
            title: "Reported Speech: Questions",
            rows: [
              { subject: "Direct", verb: "\"How do Arctic foxes survive?\"", example: "The student asked how Arctic foxes survived." },
              { subject: "Direct", verb: "\"Do penguins migrate south?\"", example: "She wanted to know if penguins migrated south." },
              { subject: "Direct", verb: "\"How do camels store water?\"", example: "He asked how camels stored water." },
              { subject: "Direct", verb: "\"Can polar bears swim long distances?\"", example: "They wondered if polar bears could swim long distances." },
            ],
            rules: [
              "In reported questions, the word order changes to statement order (subject + verb).",
              "Tenses shift back: present → past, can → could, will → would.",
              "Yes/No questions use 'if' or 'whether': She asked if/whether penguins migrated.",
              "Wh-questions keep the question word: He asked where the animals lived.",
              "Remove question marks in reported questions.",
            ],
          },
        },
      ],
    },
    {
      id: "prep3-u10-l3",
      title: "Lesson 3: Arctic Animals",
      objectives: [
        "Study the ability of animals to survive in the freezing polar regions.",
        "Compare the different adaptations of Arctic animals like the bear, fox, and penguin."
      ],
      activities: [
        "Conduct brief research on another polar animal and mention how it adapts to severe cold.",
        "Discuss with your classmates the reason why the Arctic fox changing its fur color between seasons is important."
      ],
      vocabulary: {
        flashcards: [
          { term: "Remarkable", definition: "Amazing or extraordinary" },
          { term: "Seasonal", definition: "Changing with the seasons of the year" },
          { term: "Vegetation", definition: "Plants found in a particular area" },
          { term: "Demonstrate", definition: "To show or explain how something works" },
          { term: "Absorb", definition: "To take in or soak up" },
          { term: "Hollow", definition: "Having an empty space inside" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Surviving the Frozen North",
          body: "The Arctic is one of Earth's most extreme environments. With temperatures dropping to -40°C and months of total darkness. However, many remarkable animals can survive in these icy wilds.\n\nPolar bears are the best at surviving in the Arctic. Their thick, white fur provides excellent warmth and perfect camouflage against snow. Under their fur, black skin absorbs heat from the sun. Large paws work like snowshoes to walk on thin ice. These powerful hunters can smell seals from miles away.\n\nArctic foxes demonstrate amazing seasonal adaptations. In winter, their fur turns completely white and becomes much thicker for warmth. During summer, it changes to brown or gray to mix with rocks and vegetation.\n\nMale emperor penguins stand on ice for months, protecting their eggs before hatching in freezing winds. They gather to take turns moving to the warm center. Their thick feathers create natural warmth for them.",
        },
        {
          type: "imagePrompt",
          title: "Arctic Animals",
          alt: "Arctic animals - polar bear, Arctic fox, and emperor penguins in a snowy icy landscape.",
          imageSrc: imgArcticAnimals,
        },
        {
          type: "dialog",
          title: "Amazing Adaptations of Polar Bears",
          lines: [
            { speaker: "Hadeer", text: "Look at this polar bear exhibit! It's amazing how big they are." },
            { speaker: "Mona", text: "Yeah, and did you know their fur isn't actually white? Each hair is hollow and reflects light." },
            { speaker: "Hadeer", text: "Really? That's so cool! I wonder why they adapted that way." },
            { speaker: "Mona", text: "Well, it helps them hide in snow and ice when they're hunting seals. Plus, the hollow hairs keep air for extra warmth." },
            { speaker: "Hadeer", text: "That makes sense. What about their paws? They look huge." },
            { speaker: "Mona", text: "Those big paws help them walk on thin ice without falling through. It's like wearing snowshoes." },
            { speaker: "Hadeer", text: "Nature is incredible! I read that they can smell seals from really far away too." },
            { speaker: "Mona", text: "Exactly! Their sense of smell is about seven times stronger than a dog's. They can detect seals under three feet of snow." },
          ],
        },
      ],
    },
    {
      id: "prep3-u10-l4",
      title: "Lesson 4: Story Time – Twenty Thousand Leagues (Ch. 4)",
      objectives: [
        "Read and analyze chapter four and comprehend the dangers faced by the submarine.",
        "Deduce Captain Nemo's character traits and his impact on those around him through the events."
      ],
      activities: [
        "Summarize the two major challenges the submarine faced in this chapter.",
        "Describe Captain Nemo's character in three lines using your own words and justifying your opinion."
      ],
      vocabulary: {
        flashcards: [
          { term: "Desperate", definition: "Having a great need or desire for something; very serious" },
          { term: "Harpoon", definition: "A long spear used for hunting large sea creatures" },
          { term: "Indifference", definition: "Lack of interest or concern" },
          { term: "Submarine", definition: "A ship that can travel underwater" },
          { term: "Admire", definition: "To look at with respect and approval" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Twenty Thousand Leagues under the Sea – Chapter Four",
          body: "Life on the Nautilus was not without risk. Once, the submarine was attacked by a giant squid in a desperate struggle on deck, Nemo and his crew fought bravely with axes and harpoons. Ned Land, fearless as always, killed the monster. Only by great effort did they escape the danger.\n\nAnother time, the submarine became trapped beneath thick ice at the South Pole. With oxygen running low, the crew worked hard to break a path to the surface. At the last moment, the Nautilus forced its way free, and the men breathed fresh air again.\n\nWhen warships appeared on the surface, Nemo attacked them without mercy, sending them to the depths.\n\nThrough such dangers, the passengers learned more about Nemo's character. He showed calm courage and remarkable leadership, yet also a cold indifference to human life. Aronnax began to admire Nemo but at the same time feared him.\n\nThe ocean, though beautiful, was also full of threats and dangers. For Aronnax it was a school of wonder; for Nemo it was a battlefield; for Ned Land it remained a prison. The tension among them grew as the voyage continued.",
        },
      ],
    },
  ],
};
