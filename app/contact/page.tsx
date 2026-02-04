
import { inputClass, textareaClass, selectClass, buttonClass, labelClass } from "../styles/formStyles";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Contact Form Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="border-l-4 border-indigo-600 pl-4 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Enquire About This Apartment
          </h2>
          <p className="text-gray-600 mt-2">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        {/* === Form === */}
        <form
          name="apartment-rent-enquiry"
          method="POST"
          action="/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          {/* Netlify hidden fields */}
          <input type="hidden" name="form-name" value="apartment-rent-enquiry" />
          <input type="hidden" name="bot-field" />

          {/* Property metadata */}
          <input type="hidden" name="Property" value="Kolimi Heights, Ulsoor" />
          <input type="hidden" name="Rent" value="₹10,000" />
          <input type="hidden" name="Deposit" value="₹1,00,000" />
          <input type="hidden" name="Config" value="2 BHK, 2 Bath, Balcony" />


          {/* === Fields === */}
          <div className="group">
            <label className={labelClass}>
              Name <span className="text-red-500">*</span>
            </label>
            <input type="text" name="name" required placeholder="Enter your full name" className={inputClass} />
          </div>

           <div className="group">
            <label className={labelClass}>
              Age <span className="text-red-500">*</span>
            </label>
            <input type="text" name="age" required placeholder="Enter your age" className={inputClass} />
          </div>

          <div className="group">
            <label className={labelClass}>
              Phone <span className="text-red-500">*</span>
            </label>
            <input type="tel" name="phone" required placeholder="Enter your phone number" className={inputClass} />
          </div>

          <div className="group">
            <label className={labelClass}>
              Email<span className="text-red-500">*</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email address" className={inputClass} />
          </div>

          <div className="group">
            <label className={labelClass}>
              Educational Qualification<span className="text-red-500">*</span>
            </label>
            <input type="text" name="education" placeholder="Enter your Educational Qualification/Designation" className={inputClass} />
          </div>

          <div className="group">
            <label className={labelClass}>
              Company Name<span className="text-red-500">*</span>
            </label>
            <input type="text" name="company" placeholder="Enter Company Name where you work" className={inputClass} />
          </div>

          <div className="group">
            <label className={labelClass}>
              Tenant Type <span className="text-red-500">*</span>
            </label>
            <select name="tenant_type" required className={selectClass}>
              <option value="">Select</option>
              <option value="Family">Family</option>
              <option value="Female">Female</option>
              <option value="Other">Male</option>
            </select>
          </div>

          <div className="group">
            <label className={labelClass}>Message</label>
            <textarea name="message" rows={4} placeholder="Preferred Visit Time, Move-in date, number of occupants,pets etc." className={textareaClass} />
          </div>

          <button
            type="submit"
            className={buttonClass}
          >
            Send Enquiry
          </button>

        </form>
        {/* Owner Contact Info */}
        <div className="mt-8 p-6 bg-indigo-50 border-l-4 border-indigo-600 rounded-lg">
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
          <a href="tel:+919380364859" className="block text-gray-600 hover:text-indigo-600">Kavitha Reddy </a>
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

      </div>
    </main>
  );
}
