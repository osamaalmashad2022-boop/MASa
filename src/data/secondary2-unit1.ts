import type { Stage } from "./types";
import { secondary2Unit2 } from "./secondary2-unit2";
import { secondary2Unit3 } from "./secondary2-unit3";
import { secondary2Unit4 } from "./secondary2-unit4";
import { secondary2Unit5 } from "./secondary2-unit5";
import { secondary2Unit6 } from "./secondary2-unit6";
import imgCaringCommunities from "@/assets/lessons/secondary2-t2-unit7-caring-communities.jpg";
import imgFairness from "@/assets/lessons/sec2-u7-fairness.jpg";
import imgGratitude from "@/assets/lessons/sec2-u7-gratitude.jpg";
import imgConflict from "@/assets/lessons/sec2-u7-conflict.jpg";
import imgProblemSolution from "@/assets/lessons/sec2-u7-problem-solution.jpg";

export const secondary2Data: Stage = {
  id: "secondary2",
  name: "Secondary 2",
  subject: "English",
  description: "Advanced English for Secondary 2 — Term 2: Caring Communities, Creating a Better Community, When Art Speaks, Find Your Passion, Healthy Choices, and Time Habits & Punctuality.",
  units: [
    {
      id: "unit1",
      title: "Caring Communities",
      preTest: {
        title: "Pre-Test: Caring Communities",
        description: "Answer these questions to check your existing knowledge.",
        questions: [],
      },
      postTest: {
        title: "Post-Test: Caring Communities",
        description: "Answer these 10 questions to check what you've learned about caring communities, inclusion, and conflict resolution.",
        questions: [
          { id: "s2u7post1", type: "mcq", question: "An inclusive playground is a place where students feel ___.", options: ["tired", "ignored", "valued", "confused"], correctAnswer: 2 },
          { id: "s2u7post2", type: "mcq", question: "Students show fairness by ___.", options: ["taking turns", "shouting loudly", "playing alone", "competing only"], correctAnswer: 0 },
          { id: "s2u7post3", type: "mcq", question: "Diversity in the passage means ___.", options: ["having the same skills", "winning every game", "having no rules to follow", "having different abilities and backgrounds"], correctAnswer: 3 },
          { id: "s2u7post4", type: "truefalse", question: "Gratitude challenges only involve writing notes.", options: ["True", "False"], correctAnswer: 1 },
          { id: "s2u7post5", type: "mcq", question: "The purpose of 'Inclusive Play Hour' is to make students feel ___.", options: ["fast", "welcome", "tired", "competitive"], correctAnswer: 1 },
          { id: "s2u7post6", type: "truefalse", question: "Small acts of appreciation can improve moods and relationships.", options: ["True", "False"], correctAnswer: 0 },
          { id: "s2u7post7", type: "mcq", question: "Who acted as mediators in the Cairo neighborhood?", options: ["Community council members", "Elders, teachers, and shopkeepers", "Only children", "Police officers"], correctAnswer: 1 },
          { id: "s2u7post8", type: "mcq", question: "One of the mediators' rules was ___.", options: ["interrupt the other person", "blame others for mistakes", "express feelings politely", "compete to win"], correctAnswer: 2 },
          { id: "s2u7post9", type: "truefalse", question: "Resolving conflicts respectfully helps everyone feel they belong.", options: ["True", "False"], correctAnswer: 0 },
          { id: "s2u7post10", type: "mcq", question: "The main idea of the inclusive playground passage is ___.", options: ["how to win games", "why sports are important", "the value of inclusive play", "how to avoid taking turns"], correctAnswer: 2 },
        ],
      },
      lessons: [
        {
          id: "sec2-u7-lesson1",
          title: "Lesson 1: Everyone Belongs to the Playground",
      objectives: [
        "Realize the importance of building inclusive and fair communities that accept differences.",
        "Read and analyze a text about the role of inclusion and cooperation in the school environment."
      ],
      activities: [
        "Write a short essay on how to make your school a more inclusive environment for everyone.",
        "Prepare a list of three rules that can be applied in the playground to ensure everyone's participation."
      ],
          vocabulary: {
            flashcards: [
              { term: "Inclusive", definition: "Creating a friendly, welcoming place where all people are included" },
              { term: "Valued", definition: "Given importance or respect" },
              { term: "Diversity", definition: "Having different backgrounds or abilities" },
              { term: "Fairness", definition: "Treating people equally" },
              { term: "Cooperation", definition: "Working together peacefully" },
              { term: "Invite", definition: "To ask someone politely to come somewhere or take part in an activity" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "An inclusive school playground where students of different abilities play together, share equipment, and a teacher guides mixed groups.", imageSrc: imgCaringCommunities },
            {
              type: "reading",
              title: "Everyone Belongs to the Playground",
              body: "A caring community is a place where everyone belongs, no matter their background, abilities, or personalities. One of the best examples of this is a school playground. Every day, students meet, play, and learn how to build friendships. But an inclusive playground is more than swings and slides—it is a space where everyone feels safe, respected, and valued.\n\nIn an inclusive playground, students take turns, share equipment, and invite others to join. When a new student arrives or someone is shy, classmates make an effort to speak kindly and offer help. These small actions create a friendly environment where no one feels left out. It is also a place where students learn to appreciate diversity. Some children may be good at sports, others at drawing, and some may have different needs. When students celebrate these differences, they begin to understand that diversity makes the community stronger.\n\nTeachers also play a role. They encourage students to work in mixed groups so everyone can participate. When conflicts happen, they guide students to solve problems fairly. Fairness means giving each student a chance to play, listen, speak, or lead. Through these experiences, children learn important life skills like empathy, cooperation, and responsibility.\n\nInclusive play and learning prepare students for life. When we include others and treat them with fairness, we help create a community where everyone feels they truly belong.",
            },
            {
              type: "list",
              title: "Comprehension Questions",
              items: [
                "Why is an inclusive playground important? — It's a space where everyone feels safe, respected, and valued.",
                "How can students help new or shy classmates? — By speaking kindly, offering help, and inviting them to join.",
                "What does fairness mean in the passage? — Giving each student a chance to play, listen, speak, or lead.",
                "How do teachers support inclusive learning? — They encourage mixed groups and guide students to solve problems fairly.",
              ],
            },
          ],
        },
        {
          id: "sec2-u7-lesson2",
          title: "Lesson 2: Fairness & Taking Turns",
      objectives: [
        "Enhance concepts of fairness and taking turns through active listening.",
        "Discuss strategies to integrate new or shy individuals into group activities."
      ],
      activities: [
        "Discuss with your group a situation where you showed fairness and cooperation.",
        "Listen to the story and summarize how the girl helped her new classmate integrate."
      ],
          vocabulary: {
            flashcards: [
              { term: "Encourage", definition: "To give support, confidence, or hope to someone" },
              { term: "Confident", definition: "Feeling or showing certainty about something; self-assured" },
              { term: "Include", definition: "To make someone or something part of a group or total" },
              { term: "Belong", definition: "To be a member of a particular group; to feel comfortable and accepted" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Children playing fair games in a school playground, taking turns on a swing set.", imageSrc: imgFairness },
            {
              type: "text",
              title: "Before You Listen",
              body: "Think and discuss: When do you feel included in a group? Why is it important to give everyone a chance to join an activity?",
            },
            {
              type: "list",
              title: "Listening: Inclusive Play Hour",
              items: [
                "The purpose of 'Inclusive Play Hour' is to make students feel welcome.",
                "In 'Circle Challenge,' students could pass the ball when another student encouraged them.",
                "Maya felt unsure because she was new.",
                "Hana helped Maya by inviting her to join.",
                "By the end, students learned the value of taking turns.",
              ],
            },
            {
              type: "list",
              title: "Discussion Questions",
              items: [
                "Describe a time when someone helped you feel included.",
                "What can you do if you see a classmate standing alone during a game?",
                "How does fairness make activities more enjoyable for everyone?",
              ],
            },
          ],
        },
        {
          id: "sec2-u7-lesson3",
          title: "Lesson 3: Acts of Gratitude",
      objectives: [
        "Recognize the power of thanks and gratitude in improving community relations.",
        "Review and accurately apply conditional sentences (Zero & First Conditionals)."
      ],
      activities: [
        "Write a short thank-you note to one of your teachers expressing your gratitude for their efforts.",
        "Practice formulating three conditional sentences showing the impact of positive actions."
      ],
          vocabulary: {
            flashcards: [
              { term: "Gratitude", definition: "The quality of being thankful and showing appreciation" },
              { term: "Appreciate", definition: "To recognize the value of something or someone" },
              { term: "Notice", definition: "To become aware of something" },
              { term: "Thank", definition: "To express gratitude to someone" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Students writing thank-you cards and showing gratitude to teachers.", imageSrc: imgGratitude },
            {
              type: "list",
              title: "Gratitude Challenge — Key Points",
              items: [
                "The 'Gratitude Challenge' helped students feel happier and included.",
                "Writing notes to staff is an example of gratitude.",
                "When students practiced gratitude, conflicts decreased.",
                "The main message: small acts of kindness and gratitude can create big positive changes.",
                "Gratitude is powerful and costs nothing.",
              ],
            },
            {
              type: "grammar",
              title: "Language in Context: If Clauses (Conditionals)",
              grammar: {
                title: "Zero & First Conditional",
                rows: [
                  { subject: "Zero Conditional", verb: "If + present simple → present simple", example: "If you boil water, it evaporates." },
                  { subject: "Zero Conditional", verb: "General truth", example: "If you don't say thank you, people feel unappreciated." },
                  { subject: "First Conditional", verb: "If + present simple → will + base verb", example: "If you study hard, you will pass the exam." },
                  { subject: "First Conditional", verb: "Future possibility", example: "If we show gratitude, people will feel valued." },
                ],
                rules: [
                  "Zero Conditional: If + present simple → present simple. Used for facts or general truths.",
                  "First Conditional: If + present simple → will + base verb. Used for real/possible future situations.",
                  "Both clauses can be swapped: 'Water evaporates if you boil it.'",
                ],
              },
            },
            {
              type: "list",
              title: "Practice: Rewrite Using If Clauses",
              items: [
                "When you don't say thank you, people feel unappreciated. → If you don't say thank you, people feel unappreciated.",
                "She is a polite girl so her friends love her. → If she is polite, her friends will love her.",
                "When you boil water, it evaporates. → If you boil water, it evaporates.",
              ],
            },
          ],
        },
        {
          id: "sec2-u7-lesson4",
          title: "Lesson 4: Conflict Resolution",
      objectives: [
        "Explore the causes of conflicts and ways to resolve them peacefully through community mediators.",
        "Read a realistic text to deduce basic rules of coexistence and facing disagreements."
      ],
      activities: [
        "Imagine a potential conflict in your area and propose a fair solution that meets the needs of the parties.",
        "Summarize the basic rules for resolving conflicts mentioned, including the importance of listening."
      ],
          vocabulary: {
            flashcards: [
              { term: "Argue over", definition: "To talk in an angry way because you don't agree about something" },
              { term: "Gathering", definition: "A meeting of people in one place" },
              { term: "Interrupt", definition: "To stop someone while they are speaking or doing something" },
              { term: "Mediators", definition: "People who help two sides solve a disagreement" },
              { term: "Misunderstanding", definition: "When people do not understand each other correctly" },
              { term: "Resident", definition: "A person who lives in a particular place" },
              { term: "Take on", definition: "To accept a job, task, or responsibility" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Students resolving a conflict peacefully with a mediator helping.", imageSrc: imgConflict },
            {
              type: "reading",
              title: "Resolving Conflicts to Keep Everyone Included",
              body: "Conflicts happen in every community, including neighborhoods. Children may argue over football games in the local park, neighbors may disagree about using shared spaces, or misunderstandings can happen during community events. How conflicts are handled can make a community stronger and more inclusive.\n\nIn a Cairo neighborhood, residents noticed that disagreements were common in the local park and during weekend gatherings. To address this, respected members of the community, such as elders, teachers, and shopkeepers, took on the role of mediators. They helped people discuss problems calmly and fairly.\n\nFor example, two children argued over who would play first in a football match. A local elder listened to both sides, encouraged them to explain their feelings politely, and suggested a solution: taking turns and sharing equipment. Neighbors also learned to communicate respectfully when deciding how to care for public spaces, like keeping the park clean or organizing community celebrations.\n\nThe mediators taught simple rules: listen without interrupting, express your feelings politely, and find a solution that benefits everyone. Over time, conflicts decreased, and children and adults felt more included.\n\nThe neighborhood realized that resolving conflicts respectfully helps everyone feel they belong. Role models – like patient elders, fair shopkeepers, or teachers – show others how to handle disagreements kindly, creating a happier and more cooperative Egyptian community.",
            },
            {
              type: "list",
              title: "Rules for Resolving Conflicts",
              items: [
                "Listen without interrupting.",
                "Express your feelings politely.",
                "Find a solution that benefits everyone.",
                "Use role models to guide the process.",
              ],
            },
          ],
        },
        {
          id: "sec2-u7-lesson5",
          title: "Lesson 5: Problem-Solution Paragraph",
      objectives: [
        "Practice writing a coherent paragraph that presents a community problem and proposes an effective solution.",
        "Use logical linking words to sequence ideas and reach desired results."
      ],
      activities: [
        "Choose a problem from your school environment and write a paragraph explaining the problem, the solution, and the result.",
        "Exchange your writing draft with a classmate and apply their feedback to improve your writing."
      ],
          vocabulary: {
            flashcards: [
              { term: "Social isolation", definition: "Being separated from other people and having little social contact" },
              { term: "Intergenerational", definition: "Relating to or involving people of different generations" },
              { term: "Empathy", definition: "The ability to understand and share the feelings of others" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "A student writing a problem-solution paragraph at a desk.", imageSrc: imgProblemSolution },
            {
              type: "reading",
              title: "Model: Problem-Solution Paragraph",
              body: "[Problem] Many neighborhoods face the challenge of social isolation, especially among elderly residents who live alone and may rarely interact with others—leading to loneliness, depression, and reduced community connection.\n\n[Solution] One effective way to address this is through intergenerational volunteer programs, where students or young adults regularly visit elderly people to share stories, assist with small tasks (like grocery pickup or tech help), or simply enjoy a cup of tea together.\n\n[Result] As a result, elderly people feel valued and less alone. Meanwhile younger volunteers gain empathy, life wisdom, and a stronger sense of belonging—strengthening the entire community, one conversation at a time.",
            },
            {
              type: "list",
              title: "How to Write a Problem-Solution Paragraph",
              items: [
                "Step 1: Introduce the problem clearly.",
                "Step 2: Explain one main solution in detail.",
                "Step 3: End with a positive result.",
                "Use linking words: because, as a result, so, therefore, in order to.",
                "Keep the focus on one main problem and one main solution.",
              ],
            },
            {
              type: "list",
              title: "Writing Task — Choose a Topic",
              items: [
                "Littering in public areas",
                "Traffic and noise in cities",
                "Food waste in your school or neighborhood",
                "Lack of green spaces in your community",
              ],
            },
          ],
        },
      ],
    },
    secondary2Unit2,
    secondary2Unit3,
    secondary2Unit4,
    secondary2Unit5,
    secondary2Unit6,
  ],
};
