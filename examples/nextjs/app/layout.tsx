import './app.css';

export const metadata = {
  title: 'Tailwind + StyleX',
  description: 'Write Tailwind classes, compile to optimized StyleX CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
