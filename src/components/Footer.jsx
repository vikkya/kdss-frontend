

const Footer = () => {
  return (
    <footer class="border-t border-slate-800">
        <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-[11px] text-slate-500 sm:flex-row">
          <div>© 2025 Kanakadhara Software Services.</div>
          <div class="flex gap-4">
            <a href="#" class="hover:text-emerald-300">
              Privacy
            </a>
            <a href="#" class="hover:text-emerald-300">
              Terms
            </a>
            <a href="#" class="hover:text-emerald-300" data-popover-target="popover-default">
              Socials
            </a>
          </div>
        </div>
        
      </footer>
  );
}
export default Footer;