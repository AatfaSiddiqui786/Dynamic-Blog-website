import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";


interface Blog {
  image: string;
  author: string;
  title: string;
  description: string;
  date: string;
  id?: string;

}

interface initialState {
  blog: Blog[];

}

const initialState: initialState = {
  blog: [
    {
      image: "/images.jpeg",
      author: "Aatfa Siddiqui",
      title: "The Magical Princess and Her Brave Journey",
      description: `This is a story about Princess Bella, a kind and beautiful princess who lives in a big, shining castle. One day, she goes on an exciting adventure that changes her life forever.?
   



Story:
Once upon a time, in a faraway kingdom, there was a kind and beautiful princess named Bella. She lived in a big, shining castle with tall towers and golden gates. Bella loved her people and spent her days helping them and spreading happiness.

One sunny morning, Bella found an old, glowing map in the castle’s library. The map showed the way to a hidden magical garden where every wish could come true. But there was a warning: the path was full of challenges.

Bella was brave and decided to go on the journey. She packed her favorite things: her magical wand, a little bag of food, and her pet bird, Sparkle, who could talk and guide her.

As Bella followed the map, she faced many challenges. First, she had to cross a dark forest where giant trees blocked her way. But Sparkle sang a magical song, and the trees moved aside.

Next, she reached a high mountain with slippery rocks. Bella felt scared, but she used her wand to create a glowing bridge and safely walked across.

Finally, she arrived at the magical garden. It was more beautiful than she ever imagined! Flowers glowed in every color, and a gentle breeze carried the sweet smell of roses.

In the garden, Bella made a wish: she wanted her kingdom to always be happy and peaceful. Suddenly, the garden sparkled with golden light, and her wish came true.

When Bella returned to her castle, she found that her kingdom was filled with joy and laughter. The people cheered for their brave princess, and Bella became even more loved.

From that day on, Bella’s story was told in every corner of the kingdom. She proved that kindness, courage, and a little bit of magic could make anything possible.

Moral:
Be kind, brave, and never give up. Magic happens when you believe in yourself!


`, date: "03/01/25 10:43",
      id: "0",
    },
    {
      image: "/sparrow.pnd",
      author: "Aatfa siddiqui",
      title: "The Little Sparrow Who Learned to Share",
      description: `This is a heartwarming story about a little sparrow named Chirpy who discovers the joy of sharing and how it can make life more beautiful.
Story:
Once upon a time, in a peaceful forest, there lived a little sparrow named Chirpy. Chirpy loved collecting shiny things—bits of colorful thread, small beads, and tiny pieces of glass. He kept all his treasures in a cozy nest high up in a big oak tree.

Chirpy was very proud of his collection and never let anyone touch it. "These are mine, and I won't share them with anyone," he would say.

One day, a strong storm came to the forest. The wind blew fiercely, and the rain poured down. Many animals' homes were damaged, and they had no place to stay. A little squirrel named Nutty knocked on Chirpy's nest and said, "Chirpy, can I stay in your nest until the storm passes? My home is gone."

Chirpy hesitated. "If Nutty comes in, he might mess up my treasures," he thought. But seeing Nutty shivering in the cold, Chirpy finally said, "Okay, come in."

As the storm continued, more animals came— a rabbit, a hedgehog, and even a tiny mouse. Chirpy's nest became crowded, but he made space for everyone.

The animals noticed Chirpy’s collection and admired it. "These are so beautiful!" said Nutty. "Where did you find them?" Chirpy beamed with pride and told them the stories behind each shiny piece.

The next morning, the storm stopped, and the sun shone brightly. The animals thanked Chirpy for his kindness and left to rebuild their homes.

A few days later, Nutty returned with a shiny acorn. "This is for your collection," he said. The rabbit brought a colorful flower petal, and the hedgehog gifted a sparkling shell. Soon, Chirpy's collection became even more amazing, filled with gifts from his friends.

Chirpy realized something important: sharing didn’t take away his happiness—it doubled it. He felt warm and joyful knowing his treasures brought smiles to others.

From that day on, Chirpy became the most loved bird in the forest. He always shared his treasures and welcomed anyone in need.

Moral:
Happiness grows when you share. Kindness and generosity make life richer for everyone.`,

      date: "03/01/25 10:43",
      id: "1",
    },
    {
      image: "/rabbit.jpg",
      author: "Aatfa siddiqui",
      title: "The Wise Tortoise and the Foolish Hare",
      description: `A timeless tale of how patience and wisdom can triumph over arrogance and haste.
",Story:
In a green forest, there lived a fast and proud hare named Speedy and a slow but thoughtful tortoise named Wise. Speedy often bragged about his speed and teased Wise for being so slow.

"Why do you even try to walk, Wise?" Speedy laughed one day. "You’ll never get anywhere with those tiny steps!"

Wise smiled calmly. "Speed isn't everything, Speedy," he said. "Sometimes, steady effort is more important."

Speedy chuckled. "If you’re so confident, let’s have a race! I’ll show you how useless your 'steady effort' is!"

Wise agreed, and the forest animals gathered to watch the race. The starting line was set, and the path ran through the forest to the top of a hill.

"Ready, set, go!" shouted the fox, who was the judge.

Speedy dashed off, leaving Wise far behind. As he ran, Speedy thought, "This is too easy! I’ll rest for a while under this tree and still win." He lay down and quickly fell asleep.

Meanwhile, Wise kept moving steadily. Step by step, he passed the sleeping hare and continued toward the finish line. He didn’t stop, even when he felt tired.

When Speedy woke up, he saw the sun low in the sky. "Oh no!" he exclaimed. He ran as fast as he could, but it was too late. Wise had already crossed the finish line, and the crowd was cheering for him.

Speedy felt embarrassed. "I lost because I was lazy and overconfident," he admitted.

Wise smiled kindly. "Remember, Speedy, slow and steady wins the race."

From that day on, Speedy stopped bragging and learned to respect others, no matter how different they were.

Moral:
Patience and persistence can overcome arrogance and haste. Always stay focused and never underestimate others.

.`,
date: "03/01/25 10:43",
      id: "2",
    },
  ],

};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blog.push({ ...action.payload, id: nanoid() });
    },
    removeBlog: (state, action: PayloadAction<{ id: string }>) => {
      state.blog = state.blog.filter((blog) => blog.id !== action.payload.id);
    },

  },
});

export const { addBlog,removeBlog,} = blogSlice.actions;
export default blogSlice.reducer;
