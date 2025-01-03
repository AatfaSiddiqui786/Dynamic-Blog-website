import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="hover:text-pink-300">Contact</span> <span className="text-pink-700 hover:text-white">Aatfa Blog</span>
      </h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
        Have questions or want to get in touch? We  love to hear from you. Fill
        out the form below or use the contact information provided.
      </p>

      <div className="w-full max-w-2xl flex flex-col-reverse gap-4">
        {/* Contact Information */}
        <div className="bg-pink-200 dark:bg-pink-200 p-6 rounded-lg shadow-lg text-center text-pink-700">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">Feel free to reach out to us directly:</p>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Email:</span> shahroxyt@gmail.com
            </li>
            <li>
              <span className="font-bold">Phone:</span> +92 300 366 6930
            </li>
            <li>
              <span className="font-bold">Address:</span> Karachi, Pakistan
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-200 dark:bg-pink-200 p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-pink-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border border-white dark:border-pink-800 bg-white dark:bg-white text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-pink-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-white dark:border-pink-800 bg-white dark:bg-white text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-pink-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-md border border-white dark:border-pink-800 bg-white dark:bg-white text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-medium py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
