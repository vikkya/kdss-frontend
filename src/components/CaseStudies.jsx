import { useState } from 'react';
import SidePanel from './SidePanel.jsx';

const CaseStudies = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleOpen = () => {
    
    setIsPanelOpen(true);}
  const handleClose = () => setIsPanelOpen(false);
  const data = {'quick_inspect': {
    'name': 'Quick Inspect',
    'description': 'Quick Inspect is an Australia-based automotive inspection company providing fast, reliable, and tech-enabled vehicle assessment services. They approached us to modernize their digital presence, streamline operations, and build a fully automated inspection workflow from start to finish. Through a combination of custom development, automation, and mobile app solutions, we delivered a complete ecosystem that supports their business at scale.',
    'project_highlights': ['Complete website design and development (desktop + mobile responsive)', 'End-to-end workflow automation using Make.com',
      'Domain setup and mapping for a seamless web experience', 'Custom invoice generation system', 'Android & iOS mobile apps built using .NET MAUI / Xamarin (depending on your stack)', 'Integrated tools supporting inspectors, admin staff, and customer interactions'],
    'key_deliverables': [
      {'name': 'Website Development', 'details': ['Modern, mobile-first UI/UX', 'Optimized for speed, SEO, and accessibility', 'Responsive layouts tailored for desktop, tablet, and mobile users']},
  {'name': 'Domain & Hosting Setup', 'details': ['Domain mapping and DNS configuration', 'Smooth deployment pipeline for continuous updates']},
{'name': 'Invoice Generation Tool', 'details': ['Automated invoice creation', 'Custom templates aligned with Quick Inspect branding', 'Easy download and email functionality']},
{'name': 'Mobile Applications (Android & iOS)', 'details': ['Developed using .NET', 'Real-time job updates and inspection data input', 'Secure login, profile management, and workflow syncing']},
{'name': 'End-to-End Workflow Automation (Make.com)', 'details': ['Automatic task assignments', 'Integrated notifications and reminders', 'Seamless data flow between web, apps, and admin systems', 'Reduced manual workload and improved operational efficiency']}],
'impacts': ['40–60% reduction in manual admin work', 'Faster inspection turnaround time', 'Better customer experience through intuitive digital touchpoints', 'Scalable systems ready for future expansion']
  }};
  return (
    <>
    <section id="cases" class="mt-20">
          <h2 class="text-xl font-semibold text-slate-50 sm:text-2xl">
            Case studies & recent work.
          </h2>
          <p class="mt-2 max-w-xl text-sm text-slate-400">
            We work with real estate, automotive, construction and service
            businesses across Australia to modernise their digital operations.
          </p>

          <div class="mt-8 grid gap-6 md:grid-cols-3">
            
              <div
                key="Quick Inspect"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <div class="text-xs uppercase tracking-wide text-emerald-300">
                    Automotive inspections
                  </div>
                  <h3 class="mt-1 text-sm font-semibold text-slate-50">
                    Quick Inspect
                  </h3>
                  <p class="mt-3 text-xs leading-relaxed text-slate-400">
                    Platform-style website and automation for car inspection bookings and inspector workflows.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300" onClick={handleOpen}>
                  View full case study →
                </div>
              </div>
              <div
                key="Formis Residential"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <div class="text-xs uppercase tracking-wide text-emerald-300">
                    Real estate
                  </div>
                  <h3 class="mt-1 text-sm font-semibold text-slate-50">
                    Formis Residential
                  </h3>
                  <p class="mt-3 text-xs leading-relaxed text-slate-400">
                    Refined digital presence with a modern property-focused website and ongoing updates.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300" onClick={handleOpen}>
                  View full case study →
                </div>
              </div>
              <div
                key="Burdetts"
                class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div>
                  <div class="text-xs uppercase tracking-wide text-emerald-300">
                    Construction materials
                  </div>
                  <h3 class="mt-1 text-sm font-semibold text-slate-50">
                    Burdetts
                  </h3>
                  <p class="mt-3 text-xs leading-relaxed text-slate-400">
                    Digital strategy and proposals for website renewal and workflow automation.
                  </p>
                </div>
                <div class="mt-4 text-xs font-medium text-emerald-300" onClick={handleOpen}>
                  View full case study →
                </div>
              </div>
          </div>
        </section>
        <SidePanel isOpen={isPanelOpen} 
        onClose={handleClose} data={data['quick_inspect']}>
          <div className="mt-8">
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Close Case Study
          </button>
        </div>
      </SidePanel>
    </>
  );
}
export default CaseStudies;