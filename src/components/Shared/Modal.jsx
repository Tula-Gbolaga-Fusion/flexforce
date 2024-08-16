import React from "react";
import { Button } from "../UI";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col">
        <div className="m-2 p-5 bg-white rounded-lg shadow-xl flex-grow overflow-auto">
          <div className="flex justify-center my-3">
            <Button title={"Close"} onClick={onClose} />
          </div>
          {/* <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
