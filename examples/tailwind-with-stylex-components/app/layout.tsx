import './app.css';

export const metadata = {
  title: 'Tailwind + StyleX Components',
  description: 'Use Tailwind for layout with StyleX component library',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
