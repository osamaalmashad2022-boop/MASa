import type { Stage } from "./types";
import { preparatory3Unit2 } from "./preparatory3-unit2";
import { preparatory3Unit3 } from "./preparatory3-unit3";
import { preparatory3Unit4 } from "./preparatory3-unit4";
import { preparatory3Unit5 } from "./preparatory3-unit5";
import { preparatory3Unit6 } from "./preparatory3-unit6";
import imgHistoryOfSport from "@/assets/lessons/prep3-t2-u7-history-of-sport.jpg";
import imgTrueChampion from "@/assets/lessons/prep3-t2-u7-true-champion.jpg";
import imgOlympicSpirit from "@/assets/lessons/prep3-t2-u7-olympic-spirit.jpg";

export const preparatory3Data: Stage = {
  id: "preparatory3",
  name: "Preparatory 3",
  subject: "English",
  description: "Intermediate English for Preparatory 3 — Term 2: Sports, Cultures & Traditions, Courage & Survival, Animal Adaptations, Stories on the Move, and Leadership & Teamwork.",
  units: [
    {
      id: "unit1",
      title: "Unit 7: Sports",
      preTest: {
        title: "Pre-Test: Unit 7",
        description: "Test your knowledge before starting Unit 7.",
        questions: [],
      },
      postTest: {
        title: "Post-Test: Unit 7",
        description: "Test your understanding after completing Unit 7.",
        questions: [
          {
            id: "p3u7-post-1",
            type: "mcq",
            question: "Rashwan showed _____ when he refused to attack his opponent's injury.",
            options: ["selfishness", "respect", "anger", "weakness"],
            correctAnswer: 1,
          },
          {
            id: "p3u7-post-2",
            type: "mcq",
            question: "The five Olympic rings represent _____.",
            options: ["medals", "continents", "athletes", "sports"],
            correctAnswer: 1,
          },
          {
            id: "p3u7-post-3",
            type: "mcq",
            question: "A team cannot win without _____.",
            options: ["luck", "talent", "teamwork", "mistakes"],
            correctAnswer: 2,
          },
          {
            id: "p3u7-post-4",
            type: "mcq",
            question: "Sports teach us _____ play and friendship.",
            options: ["fire", "fear", "fair", "fare"],
            correctAnswer: 2,
          },
          {
            id: "p3u7-post-5",
            type: "mcq",
            question: "_____ from many countries come together to compete in the Olympic Games.",
            options: ["Teachers", "Athletes", "Actors", "Soldiers"],
            correctAnswer: 1,
          },
          {
            id: "p3u7-post-6",
            type: "mcq",
            question: "He _____ (use) to play judo every day.",
            options: ["use", "used", "using", "uses"],
            correctAnswer: 1,
          },
          {
            id: "p3u7-post-7",
            type: "mcq",
            question: "Did he _____ to win many matches?",
            options: ["used", "use", "using", "uses"],
            correctAnswer: 1,
          },
          {
            id: "p3u7-post-8",
            type: "truefalse",
            question: "The Olympic Games began in Greece more than 2,700 years ago.",
            options: ["True", "False"],
            correctAnswer: 0,
          },
          {
            id: "p3u7-post-9",
            type: "mcq",
            question: "In which Olympic Games did Mohamed Rashwan compete?",
            options: ["1980 Moscow", "1984 Los Angeles", "1988 Seoul", "1992 Barcelona"],
            correctAnswer: 1,
          },
          {
            id: "p3u7-post-10",
            type: "truefalse",
            question: "Egypt has proudly joined the modern Olympics since 1912.",
            options: ["True", "False"],
            correctAnswer: 0,
          },
        ],
      },
      lessons: [
        {
          id: "prep3-u7-l1",
          title: "Lesson 1: The History of Sport",
          objectives: [
            "Learn about the history and evolution of sports from ancient to modern times.",
            "Understand the importance of sports in promoting teamwork and fair play."
          ],
          activities: [
            "Summarize the history of one ancient sport you prefer in three lines.",
            "Research the modern Olympic Games and state when and where they first began."
          ],
          vocabulary: {
            flashcards: [
              { term: "Knight", definition: "A soldier in the Middle Ages who served a king" },
              { term: "Chariot", definition: "A cart pulled by horses, used in ancient races" },
              { term: "Fair play", definition: "Treating others honestly in games and competitions" },
              { term: "Compete", definition: "To take part in a contest or game against others" },
              { term: "Strength", definition: "The quality of being physically strong" },
              { term: "Wrestling", definition: "A sport where two people fight by holding and pushing each other" },
            ],
          },
          content: [
            {
              type: "reading",
              title: "The History of Sport",
              body: "Sport has been part of human life for thousands of years. In ancient times, people competed to show strength, speed, and skill. For example, the Olympic Games began in Greece more than 2,700 years ago. They included running, wrestling, and discus throwing. These games were not only for fun, but also to bring communities together.\n\nLater, the Romans enjoyed sports such as gladiator fights and chariot racing. Although some of these were dangerous, they showed how important sport was in Roman culture. In the Middle Ages, people in Europe practiced archery, horse riding, and fencing. These activities prepared knights for battles, and they also became forms of competition.\n\nModern sports started to grow in the 19th century. Football, tennis, and cricket became popular in England and soon spread across the world. The modern Olympic Games were restarted in 1896 in Athens, and today they are a global event where athletes from many countries compete in peace.\n\nSport is now practiced not only for winning, but also for teamwork, fair play, and health. It continues to connect people, create friendships, and inspire new generations.",
            },
            {
              type: "imagePrompt",
              title: "Ancient Sports",
              alt: "Ancient Greek athletes competing in a stadium with spectators watching wrestling and discus throwing.",
              imageSrc: imgHistoryOfSport,
            },
          ],
        },
        {
          id: "prep3-u7-l2",
          title: "Lesson 2: A True Champion",
          objectives: [
            "Understand the concept of sportsmanship and respecting opponents.",
            "Use 'used to' to talk about past habits."
          ],
          activities: [
            "Write three sentences using 'used to' about habits you had in childhood.",
            "Discuss with your classmates a situation demonstrating true sportsmanship in a sport you follow."
          ],
          vocabulary: {
            flashcards: [
              { term: "Honor", definition: "Great respect and admiration for someone" },
              { term: "Respect", definition: "A feeling of admiration for someone because of their qualities" },
              { term: "Admiration", definition: "A feeling of great respect and approval" },
              { term: "Champion", definition: "A person who has won a competition" },
              { term: "Focus", definition: "To concentrate attention on something" },
              { term: "Sportsmanship", definition: "Fair and generous behavior in sport" },
            ],
          },
          content: [
            {
              type: "reading",
              title: "Mohamed Rashwan — A True Champion",
              body: "Mohamed Rashwan is an Egyptian judo player who competed in the 1984 Los Angeles Olympic Games. In the final match, Rashwan's Japanese opponent had an injured leg. Instead of attacking the injury to win easily, Rashwan chose to compete fairly and avoided targeting the weak spot.\n\nAlthough Rashwan won the silver medal instead of gold, his act of sportsmanship earned him worldwide admiration. The Japanese people were so impressed that they gave him a special award for fair play after the Olympics.\n\nRashwan's story teaches us that being a true champion is not only about winning medals. It is about showing respect, honor, and fair play — even when winning is at stake.",
            },
            {
              type: "imagePrompt",
              title: "A True Champion",
              alt: "Two judo athletes shaking hands after a match, showing respect and sportsmanship.",
              imageSrc: imgTrueChampion,
            },
            {
              type: "grammar",
              title: "'Used to' for Past Habits",
              grammar: {
                title: "Used to + Infinitive",
                rows: [
                  { subject: "Affirmative", verb: "used to + inf.", example: "I used to play in the park when I was a child." },
                  { subject: "Negative", verb: "didn't use to + inf.", example: "My father didn't use to work in the bank." },
                  { subject: "Question", verb: "Did + subject + use to + inf.?", example: "Did you use to watch cartoons when you were young?" },
                ],
                rules: [
                  "We use 'used to + infinitive' to talk about habits that were true in the past but are no longer true now.",
                  "In negative sentences, we say 'didn't use to' (NOT 'didn't used to').",
                  "In questions, we say 'Did you use to...?' (NOT 'Did you used to...?').",
                  "Example: She used to live in Luxor. → She doesn't live there anymore.",
                ],
              },
            },
          ],
        },
        {
          id: "prep3-u7-l3",
          title: "Lesson 3: Sports Events",
          objectives: [
            "Identify the Olympic symbol and the values it represents.",
            "Comprehend the true value of the Olympic Games and fair competition."
          ],
          activities: [
            "Draw or print the Olympic logo and write the values it represents beneath it.",
            "Conduct a simple research on some Egyptian athletes who recently won Olympic medals."
          ],
          vocabulary: {
            flashcards: [
              { term: "Athletes", definition: "People who compete in sports" },
              { term: "Continents", definition: "The world's main large land areas (Africa, Asia, Europe, etc.)" },
              { term: "Excellence", definition: "The quality of being extremely good" },
              { term: "Opponents", definition: "People who compete against you in a game" },
              { term: "Tournament", definition: "A series of games to decide a champion" },
              { term: "Championship", definition: "A competition to find the best player or team" },
            ],
          },
          content: [
            {
              type: "reading",
              title: "The Olympic Games",
              body: "The Olympic Games are the most famous sports event in the world. Today, they are held every four years in different countries. Athletes from more than 200 nations come together to compete in many sports such as football, swimming, athletics, and gymnastics. The Olympic flag, with its five rings, represents the five continents — Africa, Asia, the Americas, Europe, and Australia — of the world united in friendship.\n\nThe Olympics are not only about winning medals. They also teach the values of excellence, respect, and friendship. Athletes are expected to compete fairly, respect their opponents, and celebrate achievements together. Egypt has proudly joined the modern Olympics since 1912 and has won medals in weightlifting, wrestling, and judo.\n\nThe Olympic spirit reminds us that sport can bring people from different countries, cultures, and languages together in peace.",
            },
            {
              type: "imagePrompt",
              title: "The Olympic Spirit",
              alt: "Olympic Games with athletes from different countries competing in various sports with the Olympic flag.",
              imageSrc: imgOlympicSpirit,
            },
          ],
        },
        {
          id: "prep3-u7-l4",
          title: "Lesson 4: Story Time — Twenty Thousand Leagues Under the Sea (Ch. 1)",
          objectives: [
            "Read and analyze the first chapter of the story, following the events with interest.",
            "Acquire new vocabulary related to the sea and adventure."
          ],
          activities: [
            "Summarize the most important event in this chapter in your own words.",
            "Design an ID card for Professor Aronnax based on the reading."
          ],
          vocabulary: {
            flashcards: [
              { term: "Monster", definition: "A large, frightening creature" },
              { term: "Voyage", definition: "A long journey, especially by sea" },
              { term: "Submarine", definition: "A ship that can travel underwater" },
              { term: "Harpooner", definition: "A person who throws harpoons to catch sea creatures" },
              { term: "Astonishment", definition: "Great surprise or amazement" },
              { term: "Crew", definition: "The group of people who work on a ship" },
            ],
          },
          content: [
            {
              type: "reading",
              title: "Chapter One: The Mystery of the Monster",
              body: "Jules Verne (1828–1905) was a French novelist and is often called the 'Father of Science Fiction.' His most famous works include Journey to the Center of the Earth, Around the World in Eighty Days, and Twenty Thousand Leagues Under the Sea.\n\nIn the mid-nineteenth century, sailors across the oceans reported a strange creature. Ships claimed to have seen a huge 'sea monster,' moving faster than whales and smashing ships with terrible force. Newspapers described it as both marvelous and terrifying. Public debate grew so intense that a voyage was launched to capture or kill the beast.\n\nProfessor Pierre Aronnax, a French marine scientist, was invited to join the voyage. His loyal servant Conseil and a Canadian harpooner named Ned Land also became part of the crew. They boarded a warship and set sail across the Pacific. For months, they searched without success.\n\nAt last, one evening, a long glowing shape appeared in the waves. The crew chased it desperately. Cannon fire and harpoons were launched. Suddenly, the 'monster' turned and hit the ship with its steel-like body. Aronnax and his companions were thrown into the sea. Struggling to survive, they swam toward the mysterious creature. To their astonishment, they discovered it was not an animal at all — but a man-made submarine of special design. Their adventure beneath the oceans was about to begin.",
            },
          ],
        },
        {
          id: "prep3-u7-l5",
          title: "Lesson 5: Let's Talk — Favorite Sports",
          objectives: [
            "Practice English conversation about hobbies and favorite sports.",
            "Learn how to express reasons for liking a specific sport."
          ],
          activities: [
            "Have a short conversation in English with a classmate about your favorite sports.",
            "Write a three-sentence paragraph describing the benefits of regular exercise."
          ],
          vocabulary: {
            flashcards: [
              { term: "Competition", definition: "An event where people try to win" },
              { term: "Refreshed", definition: "Feeling rested and full of energy again" },
              { term: "Regularly", definition: "At repeated times, on a schedule" },
              { term: "Fitness", definition: "The condition of being physically healthy and strong" },
            ],
          },
          content: [
            {
              type: "dialog",
              title: "Talking About Sports",
              lines: [
                { speaker: "Salma", text: "Hi Mona! What's your favorite sport?" },
                { speaker: "Mona", text: "My favorite sport is basketball. I play it with my friends after school, and sometimes we even join small competitions." },
                { speaker: "Salma", text: "That sounds fun! Why do you like basketball so much?" },
                { speaker: "Mona", text: "Because it's fast and exciting, and it also helps me stay fit and active. I love the feeling when we work as a team and score points. What about you?" },
                { speaker: "Salma", text: "I really enjoy swimming. For me, it's very relaxing, and I feel healthy and refreshed after I swim. It also makes me feel calm and focused." },
                { speaker: "Mona", text: "That's great! Swimming sounds like a wonderful way to stay strong. Do you go to a club or a pool near your house?" },
                { speaker: "Salma", text: "Yes, I usually go to the sports club on weekends. It's also a good place to meet new people and practice regularly." },
                { speaker: "Mona", text: "Amazing! Maybe one day we can try each other's sport." },
                { speaker: "Salma", text: "That would be fun! Trying new sports is always a good idea." },
                { speaker: "Mona", text: "Exactly! Sports are not only for fitness but also for making friends and having fun." },
              ],
            },
          ],
        },
        {
          id: "prep3-u7-l6",
          title: "Lesson 6: Writing a Sports Report",
          objectives: [
            "Develop the ability to write a comprehensive sports report.",
            "Use vocabulary that expresses enthusiasm and competition."
          ],
          activities: [
            "Use the provided tips to write a short report about a sports match or event you watched recently.",
            "Exchange your report with a classmate to get feedback on the headline and conclusion."
          ],
          vocabulary: {
            flashcards: [
              { term: "Tournament", definition: "A series of games to decide the best team or player" },
              { term: "Excitement", definition: "A feeling of great enthusiasm and eagerness" },
              { term: "Inspiration", definition: "The feeling of wanting to do something great" },
              { term: "Encouraged", definition: "Gave someone support and confidence" },
            ],
          },
          content: [
            {
              type: "reading",
              title: "The National School Championship",
              body: "Last week, our school team took part in the National School Championship, and the atmosphere was full of excitement and energy. Teams from many cities joined the tournament to show their best skills.\n\nThe players showed great respect to the winners. This event was a real inspiration for everyone. Although we didn't win in the semi-final, the experience taught us that sport is not only about winning medals, but also about friendship, teamwork, and fair play.",
            },
            {
              type: "list",
              title: "Writing Tips for a Sports Report",
              items: [
                "Headline: A title that reflects the event",
                "Introduction: Introduce the teams and players",
                "Main Events: Highlight key moments (goals, saves, etc.)",
                "Conclusion: What was learned from the event",
              ],
            },
          ],
        },
      ],
    },
    preparatory3Unit2,
    preparatory3Unit3,
    preparatory3Unit4,
    preparatory3Unit5,
    preparatory3Unit6,
  ],
};
