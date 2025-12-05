
const Hero = () => {
    return (
       <section class="grid gap-10 md:grid-cols-[minmax(0,2fr),minmax(0,1.5fr)] md:items-center">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-400">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              AI, Automation & Custom Software for Australian Businesses
              
            </div>

            <h1 class="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              We design systems
              <span class="block text-emerald-300">
                that work while you sleep.
              </span>
            </h1>

            <p class="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Kanakadhara Software Services builds high-conversion websites,
              powerful software and AI automations that remove repetitive work
              from your business — so your team can focus on growth.
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                class="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Book a free consultation
              </a>
              <a
                href="#cases"
                class="text-sm font-medium text-slate-300 hover:text-emerald-300"
              >
                View case studies →
              </a>
            </div>

            <div class="mt-10 space-y-2 text-xs text-slate-500">
              <div class="font-medium text-slate-400">
                Trusted by Australian businesses
              </div>
              <div class="flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] uppercase tracking-wide">
                <span>Formis Residential</span>
                <span class="h-1 w-1 rounded-full bg-slate-600"></span>
                <span>Quick Inspect</span>
                <span class="h-1 w-1 rounded-full bg-slate-600"></span>
                <span>Burdetts</span>
                <span class="h-1 w-1 rounded-full bg-slate-600"></span>
                <span>And more</span>
              </div>
            </div>
          </div>
        </section>
    )
};

export default Hero;