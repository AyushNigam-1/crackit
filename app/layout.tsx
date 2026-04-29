import './globals.css';
import ShellLayout from './ShellLayout';

export const metadata = { title: 'InterviewMap', description: 'Tech interview prep — theory first.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-950">
        <ShellLayout>{children}</ShellLayout>
      </body>
    </html>
  );
}