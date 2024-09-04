import React from "react";

/* 
   This component allows the user to fill out the form and then when 
   they hit send it will open the users defqault mailto client such 
   as outlook with the info inserted into the email and ready to send 
   to my email address which i have used here.
*/
const ContactUsForm: React.FC = () => {
  const handleSubmit = () => {
    // Constructs the mailto link with the information entered in the form
    const fullName = (document.getElementById("fullName") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLInputElement)
      .value;

    // Where the email will be send to.
    const mailToLink = `mailto:jcampbell2033@qub.ac.uk?subject=Contact%20Form&body=Full%20Name:%20${encodeURIComponent(
      fullName
    )}%0D%0AEmail:%20${encodeURIComponent(
      email
    )}%0D%0AMessage:%20${encodeURIComponent(message)}`;

    // Opens default email client with the mailto link
    window.location.href = mailToLink;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <div>
        <label htmlFor="fullName" className="block text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your message"
        />
      </div>
      <button
        type="submit"
        className="bg-primary-500 hover:bg-green-200 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
    </form>
  );
};

export default ContactUsForm;
