import Navbar from './components/Navbar';
import './globals.css';

export const metadata = { title: 'InterviewMap', description: 'Tech interview prep — theory first.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">{children}</main>
      </body>
    </html>
  );
}