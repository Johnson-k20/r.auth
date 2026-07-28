import Navbar from "./Navbar";

function AuthLayout({
  badge,
  title,
  subtitle,
  children,
  maxWidth = "max-w-7xl",
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main
        className={`mx-auto flex min-h-screen ${maxWidth} flex-col px-6 py-8 lg:px-8`}
      >
        <Navbar />

        <section className="flex flex-1 flex-col items-center justify-center py-12">
          <div className="w-full">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                {badge}
              </span>

              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                {title}
              </h1>

              <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
            </div>

            <div className="mx-auto max-w-2xl">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AuthLayout;
