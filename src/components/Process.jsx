
const Process = () => {
  return (
    <section id="process" class="mt-20">
          <h2 class="text-xl font-semibold text-slate-50 sm:text-2xl">
            A simple process. End-to-end delivery.
          </h2>
          <p class="mt-2 max-w-xl text-sm text-slate-400">
            We handle everything from discovery and architecture to launch and
            ongoing optimisation.
          </p>

          <ol class="mt-8 grid gap-6 md:grid-cols-4">
            
              <li
                key='01'
                class="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div class="text-xs font-semibold text-emerald-300">
                  01
                </div>
                <div class="mt-1 text-sm font-semibold text-slate-50">
                  Discovery
                </div>
                <p class="mt-2 text-xs leading-relaxed text-slate-400">
                  We understand your business model, workflows, tech stack and goals.
                </p>
              </li>
              <li
                key="02"
                class="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div class="text-xs font-semibold text-emerald-300">
                  02
                </div>
                <div class="mt-1 text-sm font-semibold text-slate-50">
                  Design
                </div>
                <p class="mt-2 text-xs leading-relaxed text-slate-400">
                  We architect your website, automations and software with clarity first.
                </p>
              </li>
              <li
                key="03"
                class="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div class="text-xs font-semibold text-emerald-300">
                  03
                </div>
                <div class="mt-1 text-sm font-semibold text-slate-50">
                  Build
                </div>
                <p class="mt-2 text-xs leading-relaxed text-slate-400">
                  We develop, integrate and test your new digital systems end-to-end.
                </p>
              </li>
              <li
                key="04"
                class="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div class="text-xs font-semibold text-emerald-300">
                  04
                </div>
                <div class="mt-1 text-sm font-semibold text-slate-50">
                  Optimise
                </div>
                <p class="mt-2 text-xs leading-relaxed text-slate-400">
                  We monitor performance and refine your setup as your business grows.
                </p>
              </li>
          </ol>
        </section>
  );
};

export default Process;