import Image from "next/image"; 
import { layout } from "../styles/mainStyles";
import ThreeBHKPropertyFeatures from "../components/ThreeBHKPropertyFeatures";
 

//MENU:  label: "2BHK Flat ⭐ ", href: "/2bhk-apartment-for-rent-ulsoor"
/* Page 2  PropertyFeatures*/
export default function Page() {
    return (
        <main className={layout.page}>

            <div className="mx-auto max-w-3xl">
                {/* SEO H1 */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Owner Listed 3BHK Flat for Rent in Ulsoor Bangalore
                </h1>

                {/* Supporting content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">

                    {/* Property Features */}
                    <ThreeBHKPropertyFeatures />
                </div>

                {/* Floor Plan image*/}

                <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">3D Floor Plan of  3BHK for Rent in Ulsoor</h2>
                <h2 className="text-2xl font-bold text-gray-900">Area: 1740 SQFT</h2>
                    <div className="mt-6">
                        <Image
                            src="/images/G4/3D apartment floor plan A4.png"
                            alt="2 BHK apartment for rent in Ulsoor Bangalore"
                            width={1200}
                            height={800}
                            className="h-80 w-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                
                <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Floor Plan of  3BHK for Rent in Ulsoor</h2> 
                    <div className="mt-6">
                        <Image
                            src="/images/G4/3BHK Ulsoor Apartment Floor Plan Rent.gif"
                            alt="3 BHK apartment for rent in Ulsoor Bangalore"
                            width={1200}
                            height={800}
                            className="h-80 w-full object-cover rounded-lg"
                        />
                    </div>
                </div>

               
            </div>
        </main>
    );
}
