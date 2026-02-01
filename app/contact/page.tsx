// contact/page.tsx (server component)
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Enquire About This Apartment
        </h2>
        <p className="text-gray-600 mb-6">
          Fill out the formy below and we'll get back to you shortly
        </p>

        <form
          name="apartment-rent-enquiry"
          method="POST"
          action="https://kolimi-heights-ulsoor-2bhk.netlify.app/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="apartment-rent-enquiry" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="Property" value="Kolimi Heights, Ulsoor" />
          <input type="hidden" name="Rent" value="₹10,000" />
          <input type="hidden" name="Deposit" value="₹1,00,000" />
          <input type="hidden" name="Config" value="2 BHK, 2 Bath, Balcony" />

          <input type="text" name="name" required placeholder="Your name" className="w-full p-3 border rounded" />
          <input type="tel" name="phone" required placeholder="Phone" className="w-full p-3 border rounded" />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded" />
          <select name="tenant_type" required className="w-full p-3 border rounded">
            <option value="">Select tenant type</option>
            <option value="Family">Family</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <textarea name="message" rows={4} placeholder="Message" className="w-full p-3 border rounded" />

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded">Send Enquiry</button>
        </form>
      </div>
    </main>
  );
}
