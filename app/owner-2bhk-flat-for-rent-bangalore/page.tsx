import Image from "next/image";
import { layout } from "../styles/mainStyles";
import BHKCarousal from "../components/BHKCarousal";

//MENU: label: "Bangalore Flat ▶️", href: "/owner-2bhk-flat-for-rent-bangalore" },
/* Page 3 Youitube Video Google Sites and Map*/
export default function TwoBHKVideoPage() {
    return (
        <main className={layout.page}>
            <div className="mx-auto max-w-3xl">
                {/* SEO H1 */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Owner Listed 2BHK Flat for Rent in Bangalore
                </h1>

                {/* Supporting content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ExternalLinks />
                </div>

                {/* Internal link to main page */}
                <p className="mt-6 text-gray-700">
                    Advertised Sites{" "}
                    <a
                        href="https://www.99acres.com/2-bhk-bedroom-apartment-flat-for-rent-in-sandeep-kolimi-heights-ulsoor-bangalore-central-1525-sq-ft-spid-D88553648"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        owner-listed 2 BHK apartment for rent in Ulsoor, Bangalore
                    </a>.
                </p>

                {/* SEO image */}
                <div className="mt-6">
                    <Image
                        src="/images/ulsoor-2bhk-dining1.jpg"
                        alt="2 BHK apartment for rent in Ulsoor Bangalore"
                        width={800}
                        height={400}
                        className="h-40 w-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </main>
    );
}

const ExternalLinks = () => (
    <div className="mt-6 space-y-4">


        {/* YouTube video */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Property Video
            </h3>
            <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/tOYPJdxeOIs"
                    title="2BHK Apartment Ulsoor Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>

        <BHKCarousal />

        {/* Google map embed */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Property Location
            </h3>
            <div
                className="relative overflow-hidden rounded-lg"
                style={{ paddingBottom: "56.25%" }}
            >
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps?q=Kolimi+Heights+Ulsoor+Bangalore&output=embed"
                    loading="lazy"
                    style={{ border: 0 }}
                />
            </div>
        </div> 

        {/* Google Maps link */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600">
                Google Map:
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
