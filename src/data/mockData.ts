// Mock data for the humanitarian logistics platform

export const catalogItems = [
  {
    id: '1',
    name: 'HyFin Vent Chest Seal Twin Pack',
    description: 'Advanced occlusive dressing for penetrating chest wounds with one-way valve technology',
    category: 'Medical',
    supplier: 'North American Rescue',
    price: '€45.00',
    stock: 250,
    availability: 'in-stock',
    location: 'Warsaw, Poland',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300',
    nonprofit: 'Ukrainian Medical Foundation'
  },
  {
    id: '2',
    name: 'Emergency Trauma Bandage',
    description: 'Israeli bandage for immediate hemorrhage control and wound dressing',
    category: 'Medical',
    supplier: 'MedSupply Europe',
    price: '€12.00',
    stock: 500,
    availability: 'in-stock',
    location: 'Berlin, Germany',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Thermal Emergency Blankets',
    description: 'Reflective emergency blankets for hypothermia prevention and shock treatment',
    category: 'Emergency',
    supplier: 'Emergency Supplies Co',
    price: '€3.50',
    stock: 1000,
    availability: 'in-stock',
    location: 'Vienna, Austria',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Water Purification Tablets',
    description: 'Chlorine dioxide tablets for emergency water disinfection',
    category: 'Water & Sanitation',
    supplier: 'WaterTech Solutions',
    price: '€0.12',
    stock: 50,
    availability: 'limited',
    location: 'Prague, Czech Republic',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '5',
    name: 'Portable Solar Chargers',
    description: '20W foldable solar panels for emergency device charging',
    category: 'Electronics',
    supplier: 'SolarTech Ukraine',
    price: '€45.00',
    stock: 0,
    availability: 'out-of-stock',
    location: 'Kyiv, Ukraine',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '6',
    name: 'Emergency Food Rations',
    description: 'High-calorie emergency food packages with 5-year shelf life',
    category: 'Food',
    supplier: 'Food Aid International',
    price: '€8.50',
    stock: 300,
    availability: 'in-stock',
    location: 'Budapest, Hungary',
    image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const organizations = [
  {
    id: '1',
    name: 'Ukrainian Red Cross',
    location: 'Kyiv, Ukraine',
    sector: 'Emergency Response',
    verified: true,
    description: 'Leading humanitarian organization providing emergency aid and disaster relief across Ukraine.',
    members: 2847,
    partnerships: 23,
    logo: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Médecins Sans Frontières Ukraine',
    location: 'Multiple Oblasts',
    sector: 'Healthcare',
    verified: true,
    description: 'International medical humanitarian organization delivering critical healthcare in conflict zones.',
    members: 1234,
    partnerships: 18,
    logo: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Caritas Ukraine',
    location: 'Lviv, Ukraine',
    sector: 'Food Security',
    verified: true,
    description: 'Catholic charity providing humanitarian aid, food security, and social services.',
    members: 892,
    partnerships: 15,
    logo: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const wishlists = [
  {
    id: '1',
    name: 'Kyiv Children Hospital',
    location: 'Kyiv Oblast',
    type: 'Medical Facility',
    items: 15,
    urgent: 5,
    needs: 'Medical supplies, surgical equipment, generators',
    lastUpdated: '2 days ago'
  },
  {
    id: '2',
    name: 'Lviv Evacuation Center',
    location: 'Lviv Oblast',
    type: 'Shelter',
    items: 12,
    urgent: 3,
    needs: 'Winter clothing, blankets, hygiene kits',
    lastUpdated: '1 day ago'
  },
  {
    id: '3',
    name: 'Kharkiv Community School',
    location: 'Kharkiv Oblast',
    type: 'Education',
    items: 8,
    urgent: 2,
    needs: 'Educational materials, heating equipment',
    lastUpdated: '3 hours ago'
  }
];