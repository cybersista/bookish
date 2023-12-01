const PrivacyPolicy = () => {
  return (
      <div className="container mx-auto my-8 p-8 bg-[#FDF9EC] rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to Bookish.co! This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

        <p className="mb-4">
          We collect information about you during the checkout process on our store. This information may include your name, billing address, shipping address, email address, and phone number. We use this information to:
        </p>

        <ul className="list-disc ml-8 mb-4">
          <li>Process and fulfill orders</li>
          <li>Send you order confirmations</li>
          <li>Respond to your requests, including refunds and complaints</li>
          <li>Set up your account for our store</li>
        </ul>

        {/* Add more sections as needed */}

        <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>

        <p className="mb-4">
          By using our website, you agree to the collection and use of your information as described in this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>

        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at bookish@mail.co.
        </p>
      </div>
  );
};

export default PrivacyPolicy;
