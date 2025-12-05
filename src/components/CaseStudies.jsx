import { useState } from 'react';
import SidePanel from './SidePanel.jsx';

const CaseStudies = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleOpen = () => setIsPanelOpen(true);
  const handleClose = () => setIsPanelOpen(false);
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
        onClose={handleClose}>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Product Details</h2>
        <p>This is the content of your sliding side panel. You can put forms, navigation, or more details here.</p>
        <div className="mt-8">
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Close Panel
          </button>
        </div>
      </SidePanel>
    </>
  );
}
export default CaseStudies;