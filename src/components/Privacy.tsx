const PrivacyPolicySection = () => {
  return (
    <section className="text-pink-600 body-font mt-5">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-start md:text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium text-pink-700 hover:text-white">
            Privacy Policy
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-300 mt-2">
            At Aatfa Blog, we prioritize your privacy and are dedicated to safeguarding your personal information. This policy explains how we gather, utilize, and secure your data.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-pink-300 hover:text-white">
              Information We Gather
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              We collect personal details such as your name, email address, and any other information you choose to share when you reach out to us or engage with our website.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-pink-300 hover:text-white">
              How We Use Your Information
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              We use your information to enhance and personalize our services. Your data will not be shared with third parties without your consent, unless required by law.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-pink-300 hover:text-white">
              Data Security
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              We apply standard security protocols to protect your information. However, it’s important to note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-pink-300 hover:text-white">
              Your Rights
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              You have the right to access, modify, or delete your personal information. Feel free to contact us if you wish to exercise any of these rights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
