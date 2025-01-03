const AboutPage = () => {
  return (

    <div className="flex flex-col items-start justify-center px-6 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-6 self-center">
       <span className="hover:text-pink-300">About</span>  <span className="text-pink-600">Kids story Blog</span>
      </h1>

      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-justify">
        Welcome to <span className="font-bold hover:text-pink-400">Kids story Blog</span>Hi there! 👋
        I’m Aatfa siddiqui, and I love telling magical stories that take you to faraway lands filled with wonder, excitement, and laughter. 🌈✨

        Ever since I was a kid, I’ve been fascinated by fairy tales, talking animals, and brave little heroes who overcome big challenges. Now, I share those stories with YOU! 🐻🦋

        On this blog, you’ll find:

        🧚‍♀️ Enchanting fairy tales
        🐾 Adventures of friendly animals
        🎉 Fun lessons hidden in every story
        So, grab your favorite snack, snuggle up, and let’s dive into a world of imagination together! 🌟
      </p>

      <div className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 hover:text-pink-400"> Welcome to the World of kids Stories!</h2>
        <p className="leading-relaxed text-justify">
          Welcome to the World of Stories!
          Hello, little dreamers! 🌟
          Do you know what makes stories so special? They’re like magical doors that can take you anywhere you want to go! 🚪✨

          Want to fly with fairies in the sky? 🧚‍♀️ Or maybe dive deep under the sea to meet a talking fish? 🐠 How about joining a brave hero on an exciting treasure hunt? 🗺️💎 Here, every story is a new adventure waiting just for you.

          So, are you ready to imagine, dream, and explore? Let’s turn the page and see where the magic takes us! 📖🌈


        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 hover:text-pink-400">Why  choose Aatfa kids story Blog?</h2>
        <ul className="list-disc list-inside space-y-2 text-start">
        <li>
      <strong>Magical and Imaginative Stories:</strong> Step into a world of talking animals, brave heroes, and enchanting adventures that inspire creativity.
    </li>
    <li>
      <strong>Fun and Educational Content:</strong> Each story not only entertains but also teaches valuable lessons like kindness and teamwork.
    </li>
    <li>
      <strong>Engaging Writing Style:</strong> Simple, friendly, and interactive tone that makes kids excited to read more.
    </li>
    <li>
      <strong>Colorful Visuals and Themes:</strong> Vibrant designs create an enchanting experience for young readers.
    </li>
    <li>
      <strong>Tailored for Young Readers:</strong> Age-appropriate content that sparks a love for reading from an early age.
    </li>
        </ul>
      </div>

      <div className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 hover:text-pink-400">Get in Touch 📬</h2>
        <p className="text-justify">
        Do you have a magical idea, feedback, or just want to say hi? 🌟  
        I’d love to hear from you! Let’s make storytelling even more fun together.  
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
