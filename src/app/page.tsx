export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-gray-800 bg-white bg-opacity-70 p-4 rounded">
        Welcome to Talha Yousaf&#39;s Portfolio
      </h1>
      <p className="text-lg text-gray-600 mt-4 bg-white bg-opacity-70 p-4 rounded">
        Results-oriented Software Engineer specializing in AI and scalable backend systems.
      </p>
    </main>
  );
}
