import logo from "./NDCbannertransparent.png";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Navigation */}

      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img
              src={logo.src}
              alt="New Dawn Capital logo"
              className="h-20 w-133 object-contain"
            />
          </div>
 
          <nav className="hidden items-center gap-4 md:flex">
            <a href="#about" className="hover:underline">About</a>
            <a href="#criteria" className="hover:underline">Criteria</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a
              href="https://calendly.com/hello-newdawncapital/30min"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-white transition hover:bg-amber-600"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
              Business Acquisition & Succession
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Preserve Your Legacy.
              <br />
              Secure Your Exit.
            </h1>

            <p className="mb-8 max-w-3xl text-xl text-slate-300">
              New Dawn Capital acquires and develops established UK
              businesses whose owners are considering retirement,
              succession planning or a full business sale.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/hello-newdawncapital/30min"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                Book a Call
              </a>
              <a
                href="mailto:hello@newdawncapital.co.uk"
                className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Email Us
              </a>
              <a
                href="#criteria"
                className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Our Criteria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}

      <section className="border-b bg-slate-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 text-center md:grid-cols-3">
          <div>
            <h3 className="font-bold">Confidential</h3>
            <p className="text-slate-600">
              All enquiries handled discreetly.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Flexible</h3>
            <p className="text-slate-600">
              Full sale or phased transition options.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Long-Term Owners</h3>
            <p className="text-slate-600">
              Focused on growth, not short-term resale.
            </p>
          </div>
        </div>
      </section>

      {/* About */}

      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <h2 className="mb-6 text-4xl font-bold">
                A Responsible Succession Partner
              </h2>

              <p className="mb-5 text-lg text-slate-700">
                Many business owners have spent decades building loyal
                customers, trusted employees and valuable reputations.
              </p>

              <p className="mb-5 text-lg text-slate-700">
                We understand that selling a company is about more than
                financial value. It is also about protecting a legacy.
              </p>

              <p className="text-lg text-slate-700">
                Our objective is to acquire strong businesses and help them
                grow carefully over the long term while preserving the
                foundations already in place.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-10">
              <h3 className="mb-6 text-2xl font-bold">
                Why Choose New Dawn Capital
              </h3>

              <ul className="space-y-4">
                <li>✓ Direct decision maker</li>
                <li>✓ Confidential approach</li>
                <li>✓ Long-term ownership mindset</li>
                <li>✓ Respect for employees and customers</li>
                <li>✓ Flexible transaction structures</li>
                <li>✓ Fast and straightforward process</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Criteria */}

      <section
        id="criteria"
        className="bg-slate-950 py-16 text-white md:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Acquisition Criteria
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 p-8">
              <h3 className="mb-4 text-xl font-bold">
                Financial Profile
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>Revenue £1m - £10m</li>
                <li>EBITDA £250k+</li>
                <li>Consistent profitability</li>
                <li>Recurring income preferred</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 p-8">
              <h3 className="mb-4 text-xl font-bold">
                Geography
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>United Kingdom</li>
                <li>England</li>
                <li>Wales</li>
                <li>Scotland</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 p-8">
              <h3 className="mb-4 text-xl font-bold">
                Sectors
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>B2B Services</li>
                <li>Technology</li>
                <li>Professional Services</li>
                <li>Industrial Services</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}

      <section id="process" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-16 text-center text-4xl font-bold">
            Our Process
          </h2>

          <div className="grid gap-6 md:grid-cols-6">

            {[
              "Initial Discussion",
              "Confidentiality Agreement",
              "Business Review",
              "Indicative Offer",
              "Due Diligence",
              "Completion",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-xl border p-6 text-center"
              >
                <div className="mb-3 text-3xl font-bold text-amber-500">
                  {index + 1}
                </div>

                <p>{step}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Founder */}

      <section className="bg-slate-100 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            About Garry Newsham
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-700">
            New Dawn Capital was established to provide business owners
            with a straightforward, confidential and responsible route
            to succession. We believe successful businesses deserve
            patient stewardship that protects employees, customers and
            the reputation built by their founders.
          </p>

        </div>
      </section>

      {/* CTA */}

      <section
        id="contact"
        className="bg-amber-500 py-16 text-center md:py-20"
      >
        <div className="mx-auto max-w-4xl px-6">

          <h2 className="mb-6 text-5xl font-bold">
            Start a Confidential Conversation
          </h2>

          <p className="mb-10 text-xl">
            If you are considering retirement, succession planning
            or a potential sale, we'd be pleased to speak with you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/hello-newdawncapital/30min"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Book a Call
            </a>
            <a
              href="mailto:hello@newdawncapital.co.uk"
              className="rounded-lg border border-black px-8 py-4 font-semibold text-black transition hover:bg-slate-900 hover:text-white"
            >
              Email Us
            </a>
          </div>

        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-center text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} New Dawn Capital Ltd. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}