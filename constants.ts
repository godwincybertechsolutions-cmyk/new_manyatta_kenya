import { Itinerary } from './types';

export const APP_NAME = "New Manyatta Kenya";

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Mountain Villas', path: '/mountain-villas' },
  { name: 'Safaris', path: '/safaris' },
  { name: 'Apartments', path: '/urban-apartments' },
  { name: 'More', path: '/others' },
];

export const MOUNTAIN_VILLA_PRICING = [
  {
    title: "Family Retreat",
    price: "Ksh 60,000",
    unit: "/night",
    features: ["Accommodates 4-6 pax", "Full House Access", "Daily Housekeeping", "Fireplace Service"]
  },
  {
    title: "Couples Getaway",
    price: "USD 120",
    unit: "/person",
    features: ["Master Suite Access", "Private Dining", "Welcome Champagne", "Guided Nature Walk"]
  },
  {
    title: "Long Stay",
    price: "Ksh 270,000",
    unit: "/month",
    features: ["Dedicated Workspace", "High-speed Fiber", "Laundry Service", "Utility Management"]
  }
];

export const SAFARI_ITINERARIES: Itinerary[] = [
  {
    id: "weekend",
    title: "Weekend Escape",
    duration: "2 Nights",
    locations: ["Aberdare Park", "Ol Pejeta", "Solio Ranch"],
    description: "A quick but intense immersion into the wild, perfect for spotting Rhinos and elusive forest dwellers.",
    image: "https://picsum.photos/seed/safari1/800/600",
    pricePerPerson: "USD 850",
    days: [
      {
        day: 1,
        title: "Into the Aberdares",
        activities: ["Morning departure from Nairobi", "Lunch at The Ark", "Afternoon game drive in Aberdare National Park"],
        lodging: "The Ark Lodge"
      },
      {
        day: 2,
        title: "Rhino Sanctuary",
        activities: ["Transfer to Ol Pejeta", "Visit Chimpanzee Sanctuary", "Night game drive"],
        lodging: "Sweetwaters Tented Camp"
      }
    ]
  },
  {
    id: "mountain",
    title: "Mountain Circuit",
    duration: "3 Nights",
    locations: ["Mt. Kenya Slopes", "Samburu Reserve"],
    description: "Experience the drastic change in landscapes from lush forests to semi-arid beauty.",
    image: "https://picsum.photos/seed/safari2/800/600",
    pricePerPerson: "USD 1,450",
    days: [
      {
        day: 1,
        title: "Highland Arrival",
        activities: ["Arrival at Nanyuki", "Equator crossing ceremony", "Acclimatization walk"],
        lodging: "Fairmont Mt. Kenya"
      },
      {
        day: 2,
        title: "Samburu Special 5",
        activities: ["Travel north to Samburu", "Afternoon game drive spotting the Special 5"],
        lodging: "Samburu Intrepids"
      },
      {
        day: 3,
        title: "Culture & Wild",
        activities: ["Morning bush breakfast", "Samburu village visit", "Sunset sundowner"],
        lodging: "Samburu Intrepids"
      }
    ]
  },
  {
    id: "grand",
    title: "Mt. Kenya Grand Tour",
    duration: "8 Nights",
    locations: ["Lake Baringo", "Narumoru", "Meru National Park"],
    description: "The ultimate expedition covering rift valley lakes, highland forests, and remote wilderness.",
    image: "https://picsum.photos/seed/safari3/800/600",
    pricePerPerson: "USD 3,200",
    days: [
      { day: 1, title: "Rift Valley Descent", activities: ["Drive to Lake Baringo", "Bird watching boat ride"], lodging: "Island Camp Baringo" },
      { day: 2, title: "Lake Bogoria", activities: ["Visit hot springs", "Flamingo viewing"], lodging: "Island Camp Baringo" },
      { day: 3, title: "Ascent to Narumoru", activities: ["Transfer to Mt. Kenya foothills", "Trout fishing"], lodging: "Kirinyaga Haven" },
      { day: 4, title: "Mountain Slopes", activities: ["Forest hike", "Horseback riding"], lodging: "Kirinyaga Haven" },
      { day: 5, title: "To Meru", activities: ["Drive to Meru National Park", "Elsa's Kopje visit"], lodging: "Elsa's Kopje" },
      { day: 6, title: "Wild Meru", activities: ["Full day game drive", "Bush lunch"], lodging: "Elsa's Kopje" },
      { day: 7, title: "Rhino Sanctuary", activities: ["Visit Meru Rhino Sanctuary"], lodging: "Elsa's Kopje" },
      { day: 8, title: "Return to City", activities: ["Morning flight to Nairobi", "Farewell lunch"], lodging: "N/A" }
    ]
  }
];

export const URBAN_APARTMENTS = [
  {
    id: "laurel",
    name: "Laurel Hill Suites",
    bedrooms: 1,
    salePrice: "Ksh 10.5M",
    rentLongTerm: "Ksh 170K/month",
    rentShortTerm: "Ksh 8,400/night",
    image: "https://picsum.photos/seed/apt1/800/600",
    features: ["City View", "Rooftop Pool", "Gym Access"]
  },
  {
    id: "alba",
    name: "Alba Gardens",
    bedrooms: 2,
    rentLongTerm: "Ksh 250K/month",
    rentShortTerm: "Ksh 14,400/night",
    image: "https://picsum.photos/seed/apt2/800/600",
    features: ["Garden Terrace", "Double Parking", "Smart Home System"]
  }
];

export const COFFEE_PRODUCTS = [
  {
    id: 1,
    name: "Mt. Elgon Reserve",
    roast: "Medium Dark",
    price: "Ksh 1,200",
    image: "https://picsum.photos/seed/coffee1/400/400",
    notes: "Chocolate, Citrus, Spice"
  },
  {
    id: 2,
    name: "Volcanic Gold",
    roast: "Light",
    price: "Ksh 1,500",
    image: "https://picsum.photos/seed/coffee2/400/400",
    notes: "Floral, Berry, Honey"
  }
];

export const CSR_PROJECTS = [
  {
    title: "Reforestation Initiative",
    description: "For every booking, we plant 5 indigenous trees in the Mt. Kenya forest reserve.",
    image: "https://picsum.photos/seed/tree/600/400"
  },
  {
    title: "Local Education Fund",
    description: "Supporting primary schools in Narumoru with books, desks, and solar lighting.",
    image: "https://picsum.photos/seed/school/600/400"
  }
];

export const BLOG_POSTS = [
  {
    title: "The Magic of Misty Mornings",
    date: "October 12, 2023",
    excerpt: "Why waking up at 5 AM on the slopes of Mt. Kenya is a spiritual experience.",
    image: "https://picsum.photos/seed/blog1/600/400"
  },
  {
    title: "Top 5 Safari Essentials",
    date: "September 28, 2023",
    excerpt: "Packing right can make the difference between a good trip and an unforgettable one.",
    image: "https://picsum.photos/seed/blog2/600/400"
  },
  {
    title: "Nairobi's Hidden Gems",
    date: "August 15, 2023",
    excerpt: "Beyond the traffic: finding art, culture, and peace in the capital.",
    image: "https://picsum.photos/seed/blog3/600/400"
  }
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/seed/gal1/600/600",
  "https://picsum.photos/seed/gal2/600/800",
  "https://picsum.photos/seed/gal3/800/600",
  "https://picsum.photos/seed/gal4/600/600",
  "https://picsum.photos/seed/gal5/600/800",
  "https://picsum.photos/seed/gal6/800/600",
];
