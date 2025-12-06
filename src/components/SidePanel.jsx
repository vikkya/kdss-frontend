
// SidePanel Component
const SidePanel = ({ isOpen, onClose, data, children }) => {
  // Utility class for the sliding effect
  // If 'isOpen' is true, translate-x-0 slides it into view.
  // If 'isOpen' is false, translate-x-full slides it completely out of view (to the right).
  const panelClasses = `
    fixed top-0 right-0 h-full w-250 bg-slate-950 shadow-2xl z-50
    transform transition-transform ease-in-out duration-300
    overflow-y-auto
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `;

  // Utility class for the overlay/backdrop
  const overlayClasses = `
    fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300
    ${isOpen ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `;

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div 
        className={overlayClasses} 
        onClick={onClose} // Close the panel when the user clicks the overlay
      />
      
      {/* 2. Side Panel */}
      <div className={panelClasses}>
        <div className="p-4">
          <div className="flex justify-end">
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-900 text-2xl"
              aria-label="Close panel"
            >
              &times;
            </button>
          </div>
          {/* Panel Content */}
          <h2 className="font-semibold mt-4 text-emerald-400">{data['name']}</h2>
          <p className="mt-2 text-sm text-white">{data['description']}</p>
          <h2 className="font-semibold mt-4 text-emerald-400">Project Highlights</h2>
          <ul className="list-disc list-inside mt-2 ml-5 text-sm text-white">
            {data['project_highlights'].map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <h2 className="font-semibold mt-4 text-emerald-400">Key Deliverables</h2>
          <ul className="list-decimal list-inside mt-2 text-sm text-white">
            {data['key_deliverables'].map((el, index) => (

              <li key={index}>{el['name']}
                <ul className="list-disc list-inside mt-2 ml-5 text-sm text-white">
                  {el['details'].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h2 className="font-semibold mt-4 text-emerald-400">Impact</h2>
          <ul className="list-disc list-inside mt-2 ml-5 text-sm text-white">
            {data['impacts'].map((impact, index) => (
              <li key={index}>{impact}</li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </>
  );
};

export default SidePanel;