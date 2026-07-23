import "./globals.css";

export const metadata = {
  title: "Dr. Amanullah | Homeopathic Care",
  description: "A modern Next.js site for homeopathic treatment, patient appointments, and research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">{children}</body>
    </html>
  );
}
