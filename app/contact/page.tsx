export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
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

          {/* Fields */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tenant Type <span className="text-red-500">*</span>
            </label>
            <select
              name="tenant_type"
              required
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat"
            >
              <option value="">Select</option>
              <option value="Family">Family</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Move-in date, number of occupants, etc."
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/40 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 active:scale-[0.98]"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </main>
  );
}
