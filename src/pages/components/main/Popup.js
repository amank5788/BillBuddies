import React from "react"

function Popup ({ isOpen, onClose,children,justify='center'}) {
  return (
    <div>
      {isOpen && (
        <div className={`fixed inset-0 flex items-center justify-${justify} z-50`}>
          <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-900" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {children }
          </div>
        </div>
      )}

    </div>
  )
};

export default Popup;
