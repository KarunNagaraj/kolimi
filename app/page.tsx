export const metadata = {
  title: "2 BHK Apartment for Rent in Ulsoor – Kolimi Heights | Owner",
  description:
    "2 BHK apartment for rent in Kolimi Heights, Ulsoor. 1290 sqft, 2 bathrooms, balcony, lift, gated community, car parking. Owner listing.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          {/* Title */}
          <div className="border-l-4 border-indigo-600 pl-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              2 BHK Apartment for Rent in Ulsoor
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Well-maintained <strong>2 BHK apartment</strong> available for rent in
            <strong> Kolimi Heights, Ulsoor</strong>. Ideal for families or female
            tenants.
          </p>

          {/* Details Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Rent</p>
                <p className="text-2xl font-bold text-gray-900">₹58,000</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Security Deposit</p>
                <p className="text-2xl font-bold text-gray-900">₹3,00,000</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Area</p>
                <p className="text-2xl font-bold text-gray-900">1290 sqft</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Configuration</p>
                <p className="text-xl font-bold text-gray-900">2 Bath, Balcony</p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Amenities</p>
                  <p className="text-gray-600">Lift, Gated Community</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Parking</p>
                  <p className="text-gray-600">1 Car Parking</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Preferred</p>
                  <p className="text-gray-600">Family / Female tenants</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>
                  <p className="font-semibold text-gray-900">Owner Details</p>

                  {/* Phone */}
                  <a
                    href="tel:+919380364859"
                    className="block text-gray-600 hover:text-indigo-600"
                  >
                    Kavitha Reddy – 9380364859
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919380364859?text=I'm%20interested%20in%20your%20flat%20for%20rent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M19.11 17.44c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="border-l-4 border-indigo-600 pl-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Enquire About This Apartment
            </h2>
            <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly</p>
          </div>

          <form
            name="apartment-rent-enquiry"
            method="POST"
            action="https://kolimi-heights-ulsoor-2bhk.netlify.app/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="apartment-rent-enquiry" />
            <input type="hidden" name="redirect" value="/thank-you" />
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
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
                placeholder="Enter your full name"
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
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
                placeholder="Enter your email address"
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
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Enquiry
              </span>
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Your information is safe and will only be used to contact you regarding this property
          </p>
        </div>
      </div>
    </main>
  );
}