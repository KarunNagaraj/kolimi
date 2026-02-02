// app/page.tsx
import Image from "next/image";
import { ReactNode } from "react";
import PropertyFeatures from "./components/PropertyFeatures";

export const metadata = {
  title: "2 BHK Apartment for Rent in Ulsoor – Kolimi Heights | Owner",
  description:
    "2 BHK apartment for rent in Kolimi Heights, Ulsoor. 1290 sqft, 2 bathrooms, balcony, lift, gated community, car parking. Owner listing.",
};

type FeatureCardProps = {
  icon: ReactNode;
  label: string;
  value?: string;
  bg?: string;
  textColor?: string;
};

function FeatureCard({
  icon,
  label,
  value,
  bg = "bg-gray-100",
  textColor = "text-gray-800",
}: FeatureCardProps) {
  return (
    <div className={`flex items-center p-4 ${bg} rounded-xl`}>
      <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center mr-4 ${textColor}`}>
        {icon}
      </div>
      <div>
        {value ? (
          <>
            <p className="text-sm font-medium text-gray-600">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </>
        ) : (
          <span className="font-medium text-gray-800">{label}</span>
        )}
      </div>
    </div>
  );
}

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

          {/* Apartment Image */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-8">
            <Image
              src="/images/2BHK FLAT RENT ULSOOR.jpg"
              alt="2 BHK Apartment for Rent at Kolimi Heights, Ulsoor, Bangalore"
              width={1200}
              height={640}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Well-ventilated <strong>2 BHK apartment on Third Floor</strong> available for rent in
            <strong> Kolimi Heights, Ulsoor</strong>.<strong>Gated Society</strong> Ideal for families and female tenants.
          </p>

          {/* Details Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              label="Monthly Rent (Maintenance Included)"
              value="₹58,000"
              bg="bg-gradient-to-br from-indigo-50 to-blue-50"
              icon={
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3h12M6 7h12M9 21l6-8H9a5 5 0 110-10" />
                  </svg>
                </div>
              }
            />
            <FeatureCard
              label="Security Deposit"
              value="₹3,00,000"
              bg="bg-gradient-to-br from-amber-50 to-orange-50"
              icon={
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              }
            />
            <FeatureCard
              label="Area"
              value="1290 sqft"
              bg="bg-gradient-to-br from-emerald-50 to-green-50"
              icon={
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
              }
            />
            <FeatureCard
              label="Configuration"
              value="2 Bath, Balcony"
              bg="bg-gradient-to-br from-purple-50 to-pink-50"
              icon={
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              }
            />
            <FeatureCard
              label="Availability"
              value="4th March 2026"
              bg="bg-gradient-to-br from-blue-50 to-indigo-50"
              icon={
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              }
            />
            <FeatureCard
              label="Brokerage Fee"
              value="Zero"
              bg="bg-gradient-to-br from-emerald-50 to-green-50"
              icon={
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br from-emerald-50 to-green-50">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              }
            />


          </div>

          {/* Additional Details */}
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Amenity example */}
              <DetailItem label="Amenities" value="Lift, Gated Community, 24 Hour Security, Power Baackup" />
              <DetailItem label="Parking" value="1 Car Parking" />
              <DetailItem label="Preferred" value="Family / Female tenants" />
              <OwnerDetails />
            </div>
          </div>

          {/* Google Sites & YouTube Links */}
          <ExternalLinks />
        </div>

        {/* Property Features */}
        <PropertyFeatures />

        {/* Contact Owner */}
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Owner
          </a>
        </div>
      </div>
      <form
      name="apartment-rent-enquiry"
      method="POST"
      data-netlify="true"
      hidden
    >
      <input type="hidden" name="form-name" value="apartment-rent-enquiry" />
    </form>
    </main>
  );
}

// Reusable components

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start">
    <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <div>
      <p className="font-semibold text-gray-900">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const OwnerDetails = () => (
  <div className="flex items-start">
    <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <div>
      <p className="font-semibold text-gray-900">Contact Owner</p>
      <a href="tel:+919380364859" className="block text-gray-600 hover:text-indigo-600">Kavitha Reddy – 9380364859</a>
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
);

const ExternalLinks = () => (
  <div className="mt-6 space-y-4">
    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
      <p className="mt-2 text-sm text-gray-600">
        Further info:
        <a
          href="https://sites.google.com/view/flat-rent-ulsoor-bangalore/2bhk-flat-for-rent-in-ulsoor-near-metro"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 overflow-hidden rounded-xl border hover:shadow-lg transition"
        >
          <img
            src="/images/ulsoor-2bhk-dining1.jpg"
            alt="2BHK Flat in Ulsoor"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-gray-900">
              2BHK Flat for Rent – Ulsoor
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Near metro, Indiranagar and Behind Ashram • Spacious • Well Ventilated
            </p>
            <span className="text-sm font-medium text-indigo-600 mt-2 inline-block">
              View full property details →
            </span>
          </div>
        </a>

      </p>
    </div>
    <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Video</h3>
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/tOYPJdxeOIs"
          title="2BHK Apartment Ulsoor Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Property Location
      </h3>

      <div className="relative overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps?q=Kolimi+Heights+Ulsoor+Bangalore&output=embed"
          loading="lazy"
          style={{ border: 0 }}
        />
      </div>
    </div>

    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">

      <p className="mt-2 text-sm text-gray-600">
        GOOGLE MAP:
        <a
          href="https://goo.gl/maps/UKXqUScK3b92"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-indigo-600 hover:underline font-medium"
        >
          Kolimi Heights
        </a>
      </p>
    </div>
  </div>
  
); 