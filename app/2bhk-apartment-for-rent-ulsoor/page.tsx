import Image from "next/image";
import PropertyFeatures from "../components/PropertyFeatures";

/* Page 2  PropertyFeatures*/
export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl">
                {/* SEO H1 */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Owner 2 BHK Flat for Rent in Bangalore
                </h1>

                {/* Supporting content */}
                   <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
     
                    {/* Property Features */}
                    <PropertyFeatures />
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
