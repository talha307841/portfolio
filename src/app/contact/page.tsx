export default function Contact() {
    return (
      <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          Feel free to reach out via email or leave a message below!
        </p>
        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 mb-4 border rounded-md"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  