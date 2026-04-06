import type { Unit } from "./types";
import imgWhenArtSpeaks from "@/assets/lessons/secondary2-t2-unit9-when-art-speaks.jpg";
import imgStorytelling from "@/assets/lessons/sec2-u9-storytelling.jpg";
import imgMusic from "@/assets/lessons/sec2-u9-music.jpg";
import imgDebate from "@/assets/lessons/sec2-u9-debate.jpg";
import imgOpinion from "@/assets/lessons/sec2-u9-opinion.jpg";

export const secondary2Unit3: Unit = {
  id: "unit3",
  title: "When Art Speaks",
  preTest: {
    title: "Pre-Test: When Art Speaks",
    description: "Answer these questions to check your existing knowledge.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: When Art Speaks",
    description: "Answer these 10 questions to test your understanding of Unit 9.",
    questions: [
      { id: "s2u9post1", type: "mcq", question: "Salma started painting on the walls because she ___.", options: ["wanted to win a prize", "believed art could help people feel better", "was practicing for an exam", "was asked by tourists"], correctAnswer: 1 },
      { id: "s2u9post2", type: "mcq", question: "The first image Salma painted was ___.", options: ["a colorful tree", "a group of children playing", "a white dove above the city skyline", "a school building"], correctAnswer: 2 },
      { id: "s2u9post3", type: "truefalse", question: "Uncle Farid's stories mixed history, humor, and wisdom.", options: ["True", "False"], correctAnswer: 0 },
      { id: "s2u9post4", type: "mcq", question: "Hassan believes that music can ___.", options: ["make people forget problems", "inspire environmental awareness", "replace school lessons", "stop pollution completely"], correctAnswer: 1 },
      { id: "s2u9post5", type: "mcq", question: "The main idea of 'River of Life' is ___.", options: ["the Nile needs bridges", "the Nile gives life and deserves respect", "the desert is dangerous", "music should be louder"], correctAnswer: 1 },
      { id: "s2u9post6", type: "truefalse", question: "Stative verbs can be used in continuous tenses.", options: ["True", "False"], correctAnswer: 1 },
      { id: "s2u9post7", type: "mcq", question: "Nadia believes that art ___.", options: ["only entertains people", "can deeply affect emotions and inspire change", "replaces laws completely", "is weaker than speeches"], correctAnswer: 1 },
      { id: "s2u9post8", type: "mcq", question: "Omar thinks ___ are needed for real progress.", options: ["only feelings", "murals and songs", "education and policy", "more discussions"], correctAnswer: 2 },
      { id: "s2u9post9", type: "mcq", question: "The moderator suggests that ___.", options: ["art is useless without laws", "art starts change, and society completes it", "feelings are more important than actions", "only artists can make progress"], correctAnswer: 1 },
      { id: "s2u9post10", type: "truefalse", question: "Art can speak louder than words by encouraging kinder and cleaner behavior.", options: ["True", "False"], correctAnswer: 0 },
    ],
  },
  lessons: [
    {
      id: "sec2-u9-lesson1",
      title: "Lesson 1: Voices On The Wall",
      objectives: [
        "Learn the importance of mural art in changing the community environment and inspiring positive feelings.",
        "Use vocabulary related to impact and creativity to spread a culture of peace and beauty."
      ],
      activities: [
        "Draw a simple mural or write a description of a mural you would like to paint in your school.",
        "Discuss the role of art in developing old streets through an inspiring message to others."
      ],
      vocabulary: {
        flashcards: [
          { term: "Mural", definition: "A large picture painted on a wall" },
          { term: "Skyline", definition: "The outline of buildings seen against the sky" },
          { term: "Compassion", definition: "Showing care for others who are suffering" },
          { term: "Invisible", definition: "Unable to be seen or noticed" },
          { term: "Inspiring", definition: "Something that encourages good actions or feelings" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A young female artist painting a white dove mural on a wall in Alexandria, with children helping with colors and neighborhood transformation.", imageSrc: imgWhenArtSpeaks },
        {
          type: "reading",
          title: "The Wall That Spoke for Hope",
          body: "In one of Alexandria's oldest neighborhoods, narrow streets once filled with dust and broken walls began to change. It all started with a young artist named Salma Nasser, a fine arts student who believed that art could heal people's spirits. She noticed how the gray walls made her neighbors feel sad and invisible. One day, she carried her brushes and paints to the street and began to draw a large mural of a white dove rising above the city skyline. Beneath it, she wrote the words: 'Peace begins here.'\n\nAt first, people watched in silence. Then a child offered to help her mix colors. The next day, more students joined in, painting scenes of kindness, friendship, and clean streets. Their work attracted attention on social media. Tourists and journalists began visiting the neighborhood. The once-forgotten walls became a symbol of unity and hope.\n\nSoon, the movement spread to other cities like Cairo and Fayoum. For Salma, the murals were more than decoration—they were inspiring messages that encouraged people to act with compassion. She said, 'Art can speak louder than words. When people see beauty and meaning around them, they change their behavior.' Today, Salma's neighborhood is brighter, cleaner, and more alive than ever. The walls continue to tell their story.",
        },
        {
          type: "list",
          title: "Comprehension Questions",
          items: [
            "What inspired Salma to start painting on the walls? — The gray walls made her neighbors feel sad and invisible.",
            "What did Salma mean by 'Art can speak louder than words'? — Art can change people's behavior and inspire action more powerfully than words.",
            "What kinds of scenes did the artists paint? — Scenes of kindness, friendship, and clean streets.",
            "How did social media help their project? — It attracted tourists and journalists to visit the neighborhood.",
          ],
        },
      ],
    },
    {
      id: "sec2-u9-lesson2",
      title: "Lesson 2: The Art of Storytelling",
      objectives: [
        "Understand the role of tales in transmitting culture and societal values across generations.",
        "Deduce the role of body language and changing voice tone in accurately delivering the message."
      ],
      activities: [
        "Write a short story from your imagination using traditional characters and a wisdom at the end.",
        "Tell the story in front of your classmates while changing your voice tone and using body language."
      ],
      vocabulary: {
        flashcards: [
          { term: "Gather", definition: "To come together in a group" },
          { term: "Storyteller", definition: "A person who creates and shares stories" },
          { term: "Gestures", definition: "Movements of hands or body used to express meaning" },
          { term: "Echo", definition: "A sound or idea that is repeated or continued" },
          { term: "Tradition", definition: "Something repeated or passed down through generations" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "An old Egyptian storyteller in a traditional cafe telling stories.", imageSrc: imgStorytelling },
        {
          type: "text",
          title: "Before You Listen",
          body: "Why do people tell stories? What kind of stories are common in Egyptian culture (folk tales, legends)?",
        },
        {
          type: "list",
          title: "Listening: Uncle Farid — The Storyteller",
          items: [
            "Uncle Farid's storytelling was special because he changed his voice and gestures based on the audience.",
            "Farid often included brave soldiers, honest merchants, and clever children in his tales.",
            "Modern storytellers continue the tradition by sharing stories on YouTube and podcasts.",
            "Stories remind us that courage and honesty stay important over time.",
            "The empty chair in the café means: he is gone, yet his spirit lives on.",
          ],
        },
        {
          type: "list",
          title: "True or False",
          items: [
            "Uncle Farid began every story by saying, 'Listen, and you will travel without moving.' → True",
            "Uncle Farid's stories mixed history, humor, and wisdom. → True",
            "Modern storytellers no longer share stories online. → False",
            "Storytelling never dies; it finds new stages. → True",
          ],
        },
      ],
    },
    {
      id: "sec2-u9-lesson3",
      title: "Lesson 3: The Language of Music",
      objectives: [
        "Realize the impact of music in spreading environmental awareness and stimulating positive change.",
        "Distinguish between stative verbs and action verbs."
      ],
      activities: [
        "Rewrite three sentences about a song you like using Stative verbs correctly.",
        "Propose a message for a new song that encourages keeping the environment clean around you."
      ],
      vocabulary: {
        flashcards: [
          { term: "Environmental awareness", definition: "Understanding of issues affecting the natural world" },
          { term: "Rhythm", definition: "A strong, regular pattern of sounds or beats" },
          { term: "Lyrics", definition: "The words of a song" },
          { term: "Concert", definition: "A public performance of music" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A young Egyptian musician playing guitar by the Nile.", imageSrc: imgMusic },
        {
          type: "list",
          title: "Listening: Hassan — Music for Change",
          items: [
            "Hassan believes music can inspire environmental awareness.",
            "'River of Life' is a song about the Nile giving life and deserving respect.",
            "After the school concerts, students organized clean-up days.",
            "Hassan wants his listeners to feel hope.",
            "Songs help students remember messages because rhythm makes the message memorable.",
          ],
        },
        {
          type: "grammar",
          title: "Stative Verbs vs Action Verbs",
          grammar: {
            title: "Stative and Action Verbs",
            rows: [
              { subject: "Stative (feelings)", verb: "like, love, miss, wish, want, hate", example: "I believe this song carries a strong message." },
              { subject: "Stative (possessions)", verb: "belong, have, own, possess", example: "He owns a small farm." },
              { subject: "Stative (thoughts)", verb: "think, believe, know, mean", example: "I know what you mean." },
              { subject: "Action", verb: "run, write, play, cook", example: "She is running in the school yard." },
            ],
            rules: [
              "Stative verbs describe a state rather than an action.",
              "We cannot use stative verbs in continuous tenses (no -ing form).",
              "Some verbs can be both stative and action depending on context:",
              "• think: 'I think it's true' (stative) vs. 'I'm thinking about my homework' (action).",
              "• have: 'I have a bike' (stative) vs. 'I'm having lunch' (action).",
              "• see: 'I see what you mean' (stative) vs. 'I'm seeing friends tomorrow' (action).",
            ],
          },
        },
        {
          type: "list",
          title: "Practice: Choose the Correct Form",
          items: [
            "I (believe / am believing) this song carries a strong message. → believe",
            "The perfume (smells / is smelling) nice. → smells",
            "We (are having / have) a science test tomorrow. → are having",
            "She (thinks / is thinking) her community needs more recycling bins. → thinks",
            "The students (remember / are remembering) the song very well. → remember",
          ],
        },
      ],
    },
    {
      id: "sec2-u9-lesson4",
      title: "Lesson 4: Can Art Change Society?",
      objectives: [
        "Analyze arguments in a debate about the impact of art on society versus laws.",
        "Think critically about the complementarity of roles between art's inspiration and serious policy making."
      ],
      activities: [
        "Write your personal opinion supported by reasons on the stronger side of the debate.",
        "Discuss with your classmate how community work can complement what art has started."
      ],
      vocabulary: {
        flashcards: [
          { term: "Awareness", definition: "Understanding or knowledge about an issue" },
          { term: "Admire", definition: "To appreciate or look at something with approval" },
          { term: "Respect", definition: "To honor or value someone's opinion" },
          { term: "Promote", definition: "To encourage or support something" },
          { term: "Moderator", definition: "A person who leads and manages a discussion" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "Two students debating about art and society at a youth forum.", imageSrc: imgDebate },
        {
          type: "dialog",
          title: "Debate: Can Art Change Society?",
          lines: [
            { speaker: "Moderator", text: "Welcome to our youth forum! Today we ask: can art truly change society? Our speakers are Nadia and Omar." },
            { speaker: "Nadia", text: "I believe it absolutely can. Art touches emotions in ways that speeches and laws cannot. Think of the murals after the revolution or songs that promote unity. When people feel inspired, they act differently. Art opens the heart before it changes the mind." },
            { speaker: "Omar", text: "I respect that, but I think change needs more than feelings. A painting can raise awareness, but only education and policies make real progress. People admire a mural for a week and then forget." },
            { speaker: "Nadia", text: "But art keeps ideas alive! It starts conversations. A movie or a song can reach millions in one day. Isn't that powerful?" },
            { speaker: "Omar", text: "True, but not every listener takes action. Some just enjoy the music and move on." },
            { speaker: "Moderator", text: "So, perhaps art plants the seed, and society must water it. Both emotion and action matter." },
            { speaker: "Nadia", text: "Agreed — art begins the change." },
            { speaker: "Omar", text: "And people must finish it." },
          ],
        },
        {
          type: "list",
          title: "Discussion Questions",
          items: [
            "What is Nadia's main argument? — Art touches emotions and inspires change.",
            "What is Omar's point of view? — Education and policies are needed for real progress.",
            "How does the moderator summarize the discussion? — Art plants the seed, society must water it.",
            "Which examples of art as change are mentioned? — Murals after the revolution, songs promoting unity.",
          ],
        },
      ],
    },
    {
      id: "sec2-u9-lesson5",
      title: "Lesson 5: Writing an Opinion Paragraph",
      objectives: [
        "Design and write an organized opinion paragraph supported systematically by evidence or examples.",
        "Use necessary expressions to present opinions, sequence ideas, and deduce the conclusion."
      ],
      activities: [
        "Write a paragraph (150 words) showing your opinion: should art teach us or just entertain us?",
        "Review your draft to ensure the strength of arguments and the clarity of the conclusion summarizing your idea."
      ],
      vocabulary: {
        flashcards: [
          { term: "Opinion", definition: "A personal view or judgment about something" },
          { term: "Universal", definition: "Relating to or affecting all people everywhere" },
          { term: "Evidence", definition: "Facts or information that show something is true" },
          { term: "Consistent", definition: "Always behaving the same way; not changing" },
        ],
      },
      content: [
        { type: "imagePrompt", alt: "A student writing an opinion paragraph about art.", imageSrc: imgOpinion },
        {
          type: "list",
          title: "How to Write an Opinion Paragraph",
          items: [
            "1. Start with a clear topic sentence — state your opinion.",
            "2. Give at least two strong reasons. Use 'because,' 'since,' 'for example.'",
            "3. Add evidence or examples — a real event, personal experience, or something you've read.",
            "4. Keep your opinion consistent — don't switch sides.",
            "5. Use a strong concluding sentence that restates your opinion in a new way.",
          ],
        },
        {
          type: "reading",
          title: "Model: Art as a Universal Language",
          body: "I believe art is a universal language because it expresses what words cannot. When I look at a painting of a mother and child, I understand love even without translation. In the same way, a song about freedom can touch anyone who has ever felt hope. Art connects people from different cultures because emotions are shared by all humans. Since artists speak through colors, sounds, and stories, their messages travel beyond borders. Therefore, when we appreciate art, we learn to listen to each other's hearts, not just our languages.",
        },
        {
          type: "list",
          title: "Writing Task",
          items: [
            "Write an opinion paragraph (150-180 words) about: 'What responsibilities do artists have toward society?'",
            "Or: 'Should art always teach, or can it simply entertain?'",
            "Use: I believe… / In my opinion… / For these reasons…",
          ],
        },
      ],
    },
  ],
};
