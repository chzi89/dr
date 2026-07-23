import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Nav />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-emerald-100 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Treatments</p>
          <h1 className="mt-3 text-3xl font-bold text-emerald-950 sm:text-4xl">Support for a wide range of concerns</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">From respiratory support to digestive wellness, we tailor each treatment plan around the patient’s needs.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Allergies", "Gentle support for seasonal and ongoing sensitivities"],
              ["Asthma", "Breathing support with a focus on comfort and recovery"],
              ["Migraine", "Targeted care for recurring headache patterns"],
              ["Skin concerns", "Holistic support for eczema, irritation, and other issues"],
              ["Digestive wellness", "Care for reflux, discomfort, and irregularity"],
              ["Stress and fatigue", "Support for strain, low energy, and recovery"],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <h2 className="text-lg font-semibold text-emerald-900">{title}</h2>
                <p className="mt-2 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
