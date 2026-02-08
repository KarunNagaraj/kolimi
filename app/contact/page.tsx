
import OwnerInfo from "../components/OwnerInfo";
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
          {/* Owner contact card */}
          {/* <OwnerInfo />*/}
        </form>
      </div>
    </main>
  );
}
