import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/Treatments", label: "Treatments" },
  { href: "/research", label: "Research" },
  { href: "/PatientPortal", label: "Appointments" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-emerald-900">
          Dr. Amanullah
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-emerald-700">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/PatientPortal" className="rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Book visit
        </Link>
      </nav>
    </header>
  );
}
