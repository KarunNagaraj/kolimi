// app/page.tsx
import Image from "next/image";
import { ReactNode } from "react";
import { cta, layout, card, typography, featureCard, grid, section, buttons, icons } from "./styles/mainStyles";

// index.tsx or _app.tsx
//MENU: { label: "2BHK Ulsoor 🏠", href: "/" },
import './styles/friendly-pastel-gradients.css';

export const metadata = {
  title: "2 BHK Apartment for Rent in Ulsoor, Bangalore | Owner | Near Metro",
  description:
    "Owner-listed 2 BHK apartment for rent in Ulsoor, Bangalore. 1290 sqft with 2 bathrooms, balcony, gated community, lift & car parking. Near Ulsoor Metro.",
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
    <div className={`${featureCard.wrapper} ${bg}`}>
      <div className={`${featureCard.iconWrapper} ${textColor}`}>
        {icon}
      </div>
      <div>
        {value ? (
          <>
            <p className={featureCard.label}>{label}</p>
            <p className={featureCard.value}>{value}</p>
          </>
        ) : (
          <span className={featureCard.textOnly}>{label}</span>
        )}
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <main className={layout.page}>
      <div className={layout.container}>
        {/* Header Card */}
        <div className={`${card.base} ${card.padded} mb-8`}>
          {/* Title */}
          <div className={section.borderedLeft}>
            <h1 className={typography.h1}>
              2 BHK Apartment for Rent in Ulsoor, Bangalore
            </h1>
          </div>

          {/* Apartment Image */}
          <div className={card.imageWrapper}>
            <Image
              src="/images/2BHK FLAT RENT ULSOOR.jpg"
              alt="2 BHK Apartment for Rent at Kolimi Heights, Ulsoor, Bangalore"
              width={1200}
              height={640}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>


          {/* Details Grid */}
          <div className={grid.features}>
            <FeatureCard
              label="Monthly Rent & Maintenance"
              value="₹53,000 + ₹2,400(Maintenance)"
              bg="bg-gradient-indigo"
              icon={
                <div className={featureCard.iconWrapper}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3h12M6 7h12M9 21l6-8H9a5 5 0 110-10" />
                  </svg>
                </div>
              }
            />
            <FeatureCard
              label="Security Deposit"
              value="₹2,50,000"
              bg="bg-gradient-to-br from-amber-50 to-orange-50"
              icon={
                <div className={featureCard.iconWrapper}>
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
                <div className={featureCard.iconWrapper}>
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
                <div className={featureCard.iconWrapper}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              }
            />
            <FeatureCard
              label="Availability"
              value="4th March 2026"
              bg="bg-pastel-lavender"
              icon={
                <div className={featureCard.iconWrapper}>
                  <svg
                    className="w-6 h-6 text-white"
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
              bg="bg-pastel-pink"
              icon={
                <div className={featureCard.iconWrapper}>
                  <svg
                    className="w-6 h-6 text-white"
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

          {/* Contact Owner */}
          <div className="mt-6">
            <a
              href="/contact"
              className={buttons.primary}
            >
              Contact Owner
            </a>
          </div>

          {/* Additional Details */}
          <div className={section.mutedBox}>
            <div className={grid.details}>
              {/* Amenity example */}
              <DetailItem label="Amenities" value="Lift, Gated Community, 24 Hour Security, Power Baackup" />
              <DetailItem label="Parking" value="1 Car Parking" />
              <DetailItem label="Preferred" value="Family / Female tenants" />
              <OwnerDetails />
            </div>
          </div>
          {/* Property Features */}
          <br></br>
          {/* Description */}
          <p className={typography.body}>
            Well-ventilated <strong>2 BHK apartment on Third Floor</strong> available for rent in
            <strong> Kolimi Heights, Ulsoor</strong>.<strong>Gated Society</strong> Ideal for families and female tenants.
            Searching for a 2 BHK apartment for rent in Ulsoor, Bangalore? Ulsoor is one of the most preferred residential localities in central Bangalore, offering excellent metro connectivity, green surroundings, and proximity to major business hubs.
            Renting a 2BHK flat in Ulsoor is ideal for families and professionals who want a peaceful neighborhood without compromising on connectivity.
          </p>
          <br></br>
          <h2 className={typography.h2}>Why Choose Ulsoor for a 2 BHK Apartment?</h2>
          <p className={typography.body}>
            Ulsoor is known for its balanced lifestyle — quiet residential streets combined with quick access to commercial areas. The locality is close to Indiranagar, MG Road, Domlur, and CBD, making daily commuting simple.
            The presence of Ulsoor Metro Station on the Purple Line significantly increases demand for 2 BHK apartments for rent in Ulsoor.
          </p>
          <br></br>
          <h2 className={typography.h2}>Connectivity, Schools & Daily Conveniences</h2>
          <p className={typography.body}>
            Ulsoor offers seamless connectivity via metro, bus routes, and arterial roads. Leading schools, hospitals, supermarkets, and restaurants are located nearby.
            This makes Ulsoor a preferred choice for tenants looking for spacious 2 BHK flats near metro stations in Bangalore.
          </p>
          <br></br>
          <p className={typography.body}>
            Apartment Tour & Google Map: <a href="/owner-2bhk-flat-for-rent-bangalore" className="text-indigo-600 font-medium">
              owner-listed 2 BHK apartment for rent in Ulsoor</a> with zero brokerage.
          </p>
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
    <svg className={icons.detail} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />

    </svg>
    <div>
      <p className={typography.label}>{label}</p>
      <p className={typography.value}>{value}</p>
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

