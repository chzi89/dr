import Nav from "../../components/nav";
import Footer from "../../components/footer";

const highlights = [
  {
    title: "Fast triage",
    description: "Share your concern and we will match it to the right clinical pathway.",
  },
  {
    title: "Personalized care",
    description: "Each consultation is designed around your history, symptoms, and goals.",
  },
  {
    title: "Thoughtful follow-up",
    description: "Receive guidance on the next steps with clear communication throughout.",
  },
];

export default function PatientPortalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Nav />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-emerald-100 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Patient portal</p>
            <h1 className="mt-3 text-3xl font-bold text-emerald-950 sm:text-4xl">Schedule your consultation</h1>
            <p className="mt-4 text-lg text-slate-600">Share your details and we will reach out to help design the right care plan.</p>
          </div>

          <form className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Phone number</label>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none" placeholder="+1 555 000" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Concern</label>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none" placeholder="Migraine, asthma, etc." />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
              <textarea className="min-h-32 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none" placeholder="Tell us what you would like help with."></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                Submit request
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
