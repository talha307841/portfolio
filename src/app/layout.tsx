import './globals.css';



export const metadata = {
  title: 'Talha Yousaf Portfolio',
  description: 'Professional Portfolio of Talha Yousaf',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Talha Yousaf</h1>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/cv" className="hover:underline">
                  CV
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
