

const Contact = () => {
  return (
    <section id="contact" class="mt-20">
          <div class="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-2">
            <div>
              <h2 class="text-xl font-semibold text-slate-50 sm:text-2xl">
                Ready to automate your business?
              </h2>
              <p class="mt-3 text-sm text-slate-400">
                Tell us a bit about your company and what you&apos;d like to
                improve. We&apos;ll come back with clear recommendations and
                next steps.
              </p>
              <div class="mt-5 space-y-1 text-xs text-slate-400">
                <div>Email: info@kdss.co.in</div>
                <div>Based in India • Working with clients nationwide</div>
              </div>
            </div>

            <form class="space-y-4 text-sm">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label class="mb-1 block text-xs text-slate-400">
                    Name
                  </label>
                  <input
                    class="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none focus:border-emerald-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="mb-1 block text-xs text-slate-400">
                    Company
                  </label>
                  <input
                    class="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none focus:border-emerald-400"
                    placeholder="Business name"
                  />
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label class="mb-1 block text-xs text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    class="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none focus:border-emerald-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label class="mb-1 block text-xs text-slate-400">
                    Phone (optional)
                  </label>
                  <input
                    class="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none focus:border-emerald-400"
                    placeholder="+61…"
                  />
                </div>
              </div>

              <div>
                <label class="mb-1 block text-xs text-slate-400">
                  What do you need help with?
                </label>
                <select class="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none focus:border-emerald-400">
                  <option>Website design & development</option>
                  <option>AI automations</option>
                  <option>AI agents (chat / voice)</option>
                  <option>Custom software / internal tools</option>
                  <option>Social media automation</option>
                  <option>Not sure – need guidance</option>
                </select>
              </div>

              <div>
                <label class="mb-1 block text-xs text-slate-400">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  class="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none focus:border-emerald-400"
                  placeholder="Current challenges, goals, deadlines, budget range..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-950 hover:bg-emerald-400"
              >
                Submit enquiry
              </button>
            </form>
          </div>
        </section>
    );
};
export default Contact;