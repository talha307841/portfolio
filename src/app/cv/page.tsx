export default function CV() {
    return (
      <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-4">My CV</h1>
        <iframe
          src="/cv_talha.pdf"
          className="w-full h-[600px] border rounded-md mb-4"
        ></iframe>
        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download CV
        </a>
      </section>
    );
  }
  