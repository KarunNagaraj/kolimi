"use client"; // <- must be first line
import { useState } from "react";

function OwnerInfo() {
  const [showOwnerInfo, setShowOwnerInfo] = useState(false);

  return (
    <div>
      <button
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded"
        onClick={() => setShowOwnerInfo(!showOwnerInfo)}
      >
        {showOwnerInfo ? "Hide Owner Info" : "Show Owner Info"}
      </button>

      {showOwnerInfo && (
        <div className="mt-8 p-6 bg-indigo-50 border-l-4 border-indigo-600 rounded-lg">
          {/* Owner Contact Info */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Contact the Owner Directly
          </h3>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:kavithanagaraj.p@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              kavithanagaraj.p@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mt-1">
            Mobile:{" "}
            <a href="tel:+919380364859" className="text-indigo-600 hover:underline">
              +91 93803 64859
            </a>
          </p>
          <a href="tel:+919380364859" className="block text-gray-600 hover:text-indigo-600">
            Kavitha Reddy
          </a>
          <a
            href="https://wa.me/919380364859?text=I'm%20interested%20in%20your%20apartment%20for%20rent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <svg className="w-4 h-4 mr-1" viewBox="0 0 32 32" fill="currentColor">
              <path d="M19.11 17.44c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

export default OwnerInfo;
