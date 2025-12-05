import ThemeToggle from "./ThemeToggle";


const Header = () => {
  return (
    <header class="border-b border-slate-800">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/40">
              <span class="text-xs font-semibold tracking-wide text-emerald-400">
                K
              </span>
            </div>
            <div>
              <div class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Kanakadhara
              </div>
              <div class="text-xs text-slate-500">Software Services</div>
            </div>
          </div>

          <nav class="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" class="hover:text-emerald-400">
              Services
            </a>
            <a href="#cases" class="hover:text-emerald-400">
              Case Studies
            </a>
            <a href="#process" class="hover:text-emerald-400">
              Process
            </a>
            <a href="#contact" class="hover:text-emerald-400">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            class="rounded-full border border-emerald-500 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-emerald-300 hover:bg-emerald-500/20"
          >
            Book a free consult
          </a>
        </div>
      </header>
    );
};
export default Header;