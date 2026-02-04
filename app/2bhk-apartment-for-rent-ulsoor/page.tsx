import Image from "next/image";
import PropertyFeatures from "../components/PropertyFeatures";
import { layout } from "../styles/mainStyles";

//MENU:  label: "2BHK Flat ⭐ ", href: "/2bhk-apartment-for-rent-ulsoor"
/* Page 2  PropertyFeatures*/
export default function Page() {
    return (
        <main className={layout.page}>

            <div className="mx-auto max-w-3xl">
                {/* SEO H1 */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Owner 2 BHK Flat for Rent in Ulsoor Bangalore
                </h1>

                {/* Supporting content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">

                    {/* Property Features */}
                    <PropertyFeatures />
                </div>

                {/* Floor Plan image */}
                <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Floor Plan of  2BHK for Rent in Ulsoor</h2>
                    <div className="mt-6">
                        <Image
                            src="/images/2BHK REnt Bangalore Floor Plan.jpeg"
                            alt="2 BHK apartment for rent in Ulsoor Bangalore"
                            width={1200}
                            height={800}
                            className="h-80 w-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                <p className="mt-6 text-gray-700">
                    Back to Main Page  {" "}
                    <a
                        href="/"
                        className="inline-block px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
                    >
                        owner-listed 2 BHK apartment for rent in Ulsoor, Bangalore
                    </a>.
                </p>
            </div>
        </main>
    );
}
