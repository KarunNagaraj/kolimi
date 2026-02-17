// app/components/PropertyFeatures.tsx
import { 
  HomeIcon, 
  BuildingOffice2Icon, 
  TruckIcon, 
  Square3Stack3DIcon, 
  ArrowRightIcon,
  ArrowUpIcon, 
  CubeIcon, 
  BuildingStorefrontIcon, 
  RectangleStackIcon, 
  UsersIcon, 
  ArrowPathIcon, 
  BoltIcon, 
  FireIcon 
} from '@heroicons/react/24/solid';

const features = [
  { name: '3 Bedrooms - 1 Bedroom has attached Balcony', icon: HomeIcon, bg: 'bg-indigo-50', text: 'text-indigo-600' },
  { name: '2 Attached Bathroom and   1 Common Bathroom', icon: BuildingOffice2Icon, bg: 'bg-blue-50', text: 'text-blue-600' },
  { name: 'Covered Car Parking', icon: TruckIcon, bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { name: 'Ground Floor [Stilt + 4 Floors]', icon: Square3Stack3DIcon, bg: 'bg-purple-50', text: 'text-purple-600' },
  { name: 'East Facing', icon: ArrowRightIcon, bg: 'bg-amber-50', text: 'text-amber-600' },
  { name: 'Semi-furnished', icon: CubeIcon, bg: 'bg-pink-50', text: 'text-pink-600' },
  { name: 'Modular Kitchen & Wardrobes', icon: BuildingStorefrontIcon, bg: 'bg-green-50', text: 'text-green-600' },
  { name: 'Two Balconies : one attached & one common', icon: RectangleStackIcon, bg: 'bg-sky-50', text: 'text-sky-600' },
  { name: 'Gated Community', icon: UsersIcon, bg: 'bg-gray-100', text: 'text-gray-700' },
  { name: 'Lift Available', icon: ArrowPathIcon, bg: 'bg-teal-50', text: 'text-teal-600' },
  { name: 'Power Backup & Solar Water', icon: BoltIcon, bg: 'bg-yellow-50', text: 'text-yellow-600' },
  { name: 'Gym Facility', icon: FireIcon, bg: 'bg-red-50', text: 'text-red-600' },
];

const ThreeBHKPropertyFeatures = () => {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="border-l-4 border-indigo-600 pl-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Property Features</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.name} className={`flex items-center p-4 ${feature.bg} rounded-xl`}>
            <feature.icon className={`w-6 h-6 mr-3 ${feature.text}`} />
            <span className="font-medium text-gray-800">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeBHKPropertyFeatures;
