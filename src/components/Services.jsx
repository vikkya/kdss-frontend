
const Services = () => {
    return (
      <section id="services" class="mt-20">
          <div class="flex items-end justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-slate-50 sm:text-2xl">
                Services built around how you actually work.
              </h2>
              <p class="mt-2 max-w-xl text-sm text-slate-400">
                From first impressions to backend systems, we design websites,
                automations and software that fit naturally into your existing
                business operations.
              </p>
            </div>
          </div>

          <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div
                key="Website Design & Development"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <h3 class="text-sm font-semibold text-slate-50">
                    Website Design & Development
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-slate-400">
                    Modern, responsive and high-conversion websites built on WordPress, Webflow or custom stacks.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300">
                  Learn more →
                </div>
              </div>
              <div
                key="AI Automations"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <h3 class="text-sm font-semibold text-slate-50">
                    AI Automations
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-slate-400">
                    Automate repetitive tasks with AI and Make.com workflows across your entire business.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300">
                  Learn more →
                </div>
              </div>
              <div
                key="AI Agents"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <h3 class="text-sm font-semibold text-slate-50">
                    AI Agents
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-slate-400">
                    Custom chat and voice agents for sales, support, bookings and internal operations.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300">
                  Learn more →
                </div>
              </div>
              <div
                key="Custom Software"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <h3 class="text-sm font-semibold text-slate-50">
                    Custom Software
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-slate-400">
                    CRMs, portals, dashboards and internal tools tailor-made for your workflows.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300">
                  Learn more →
                </div>
              </div>
              <div
                key="Social Media Automation"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <h3 class="text-sm font-semibold text-slate-50">
                    Social Media Automation
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-slate-400">
                    AI-assisted content, scheduling and basic engagement to keep your brand active.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300">
                  Learn more →
                </div>
              </div>
              <div
                key="Integrations & APIs"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <h3 class="text-sm font-semibold text-slate-50">
                    Integrations & APIs
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-slate-400">
                    Connect your existing tools so data flows automatically between systems.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300">
                  Learn more →
                </div>
              </div>
          </div>
        </section>
    );
};

export default Services;
