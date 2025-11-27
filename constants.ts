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
    image: "https://www.kenyasafari.com/images/the-ark-elephants-aberdare-590x390.jpg",
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
    image: "https://www.samburureserve.com/images/samburu-national-reserve-kenya.jpg",
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
    image: "https://rhinowatchlodge.com/wp-content/uploads/2020/05/Rhino-Watch-Safari-Lodge-5.jpg",
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/541248208.jpg?k=105563b298686010deda9c8068f83d5957edf62174b54a2c50f7afe81d1ccb26&o=",
    features: ["City View", "Rooftop Pool", "Gym Access"]
  },
  {
    id: "alba",
    name: "Alba Gardens",
    bedrooms: 2,
    rentLongTerm: "Ksh 250K/month",
    rentShortTerm: "Ksh 14,400/night",
    image: "https://ravihomes.co.ke/wp-content/uploads/classified-listing/2023/05/Alba-Gardens.png",
    features: ["Garden Terrace", "Double Parking", "Smart Home System"]
  }
];

export const COFFEE_PRODUCTS = [
  {
    id: 1,
    name: "Mt. Elgon Reserve",
    roast: "Medium Dark",
    price: "Ksh 1,200",
    image: "https://previews.dropbox.com/p/thumb/AC2OB6hLNbrf3f6dZxiqU8ZILCzXft3k1n6ySuvDG_QS3zLu9KG95NR0jGzOtOsiNW1egEhOUvAt3MjFXFp8O-in2ETO0Kv0a7XDGdRYxSGWAqifFS2RWfT3ban7Wt74GmZHvaMuT8KVUuNDTNJNGTQ43n1S7X6jLlOSwO4SWUGyFD1X3F8u4A5_Nt2p3dt1dYE63sKiob8jIG7bIG0kDNRPB-bnNdTr8MJOvDbmE51z4E1hF5A0j6AdXhZk56Uge8oh8vU9s1e3njUs2f4nVCwU479nX9Uo8rGrMPK0CurlXRmh8kcdq7o2-7P97CBG0IMutfIhx69mjRl7eVMeKHUm/p.png",
    notes: "Chocolate, Citrus, Spice"
  },
  {
    id: 2,
    name: "Volcanic Gold",
    roast: "Light",
    price: "Ksh 1,500",
    image: "https://previews.dropbox.com/p/thumb/AC1zW4cM_pB4vPCPxkvc-flXez_Mp6prcaNgoq6iOd0yLwkvkaZTh2F709Cwjk672UCJiVNls5GuzTgwoeLY1IB8ycN3giY-4MGtm3ozEZ1sfZO0LjtQhxcVyHp6LkD-Yj9kI-ELlRu-I-LY4ubHclI7e-KRdLWrANlTHHE7S-KXQ1lUAd9HEtLl-CYTGFVfniTKSedpcZCqtYnWx5JsieKgcd1R5NrmraBx6PdYF682gl_Y2Q4sgKh_vKMfvlGhcK0c-90uZwNqNS3_-i8Cmdhg2sdRoB-LeBDmniBQMlmEHxBHqzaZLQs3qYRHpkQ3h1qxq1klvH_JdMrbU_zvBwPG/p.png",
    notes: "Floral, Berry, Honey"
  }
];

export const CSR_PROJECTS = [
  {
    title: "Reforestation Initiative",
    description: "For every booking, we plant 5 indigenous trees in the Mt. Kenya forest reserve.",
    image: "https://i.guim.co.uk/img/media/c6fc22bc8bdbcde8a8f52a9132f07f7458140b0e/0_11_4032_2419/master/4032.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=519393977c1d3ffce8f325bf3fdaa571"
  },
  {
    title: "Local Education Fund",
    description: "Supporting primary schools in Narumoru with books, desks, and solar lighting.",
    image: "https://images.squarespace-cdn.com/content/v1/674774e95d92814e89fc20b1/0918a9a8-9b92-4c67-bab6-407df4bd2967/30a97c86aee7100671a115256d318853.jpeg"
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
  "https://ucc039f79de42476ea72aaac7b16.previews.dropboxusercontent.com/p/thumb/AC27qkwUsk75ZYRKvduNKya2DqS3usNGCRx6D5wB5_m6YhbICsgznkgyUYjAH1XnQ-n6MHcF8BbD39HPYoOKt4jE9iYWHxqrCWJ4H9egmYr7RfknsLU96PQEFs_dqZul9Ub__i543CmQAtISnPOoyyGfC3g8srayZLGktDjFlOQ_5qiKX24QG0LPvsH6E9gSL9T8cTSddoJberRv4yLwn-9FzORkVFtpEU8DmcncEYepVFNh8rzyMzppkWF-u7R54gqm8lu-r4wcfvW_zJtIPOab5QFfjXBU1vmn3fWyBM06tDgY0dGTw2pyle-jldXg_F7w1oYdbpjjU_w99HVU2W5s0XrEZA7OUdyjjQa3WuYZc5kOvXyw5REL-9ZJUROZNWVE_bfco2cyEBcDRdEbSGP-HDNv6oYmN2L9TnDCtAfLSDhZrcZS_oVSKMYPz4iKWEhCKnsi933BF5kkHhgWTlqx0nGIHNrUslfc-nyhHljNTdNDu59Bf7ZF56GhY_11mniZOn5oeB0wVgdOkXW2Q18n1hJz50zv9-z2mEIXjALSwA/p.jpeg",
  "https://uc4102730453a6bb99b2a4119bbe.previews.dropboxusercontent.com/p/thumb/AC1UXMolnA9dz8gtNSIpXmL2n35940L5JBziloUqBLkyktaUhEUjmP9_km3ALsndXsQbg0X9bWuu3OJNFu-Tgqikn90vKp6k5ylMsnqXuU4XevKWwb5yH0-COhonFV4Q_m4f4_7Sw3lgQ_ZqTsJR97htQqLGsZredqhPOeeBAZQlfZ8l-O4Wx4c2qbhcEHPGeJWinPMjWSXILKEwPtw4v6bORB-vSN3unx3WRW9yX8LnjIFTFyuipOjxZRCDGLMGkN9GNVDfszVSbSPAv40rPdrq-Vs2BMhelT1GYkZ3xkpVBIDPV8V5F_X7ZToSelPh1UyhEEFfNYMBALefiJsf5KPTf1dGE7hdwduudT00IyWWBUdzbzPMjMd-HKDRMk9xBkM0wRx2kRuKzaHcXdnfXyzfPwgnYdk2nSCRwwoXnWtBp0aRApW66OvA2qNSxBHCjKtKj1bujqD9qb0OqWZWcC3KHreWXRlxlJ--aKOqz4H9dA/p.jpeg",
  "https://uc71ac3d54767bf04a0bd6add9d9.previews.dropboxusercontent.com/p/thumb/AC054MTjxtQ76v0-scIvsArNy120byxWK8D8f14PgTxeEAkUQ74K5htZOocvDYw5-_xR_VeP_eGkrGII6n6IGFuJpAb3D8mUuk_CssR0tWQS51x7yzjvuURbIKj5fAkIFXpEzRz9kto-sye_okq85MJ6RS_zGcUSXo9y4AomeXbaYNox78HCfWN03bKC9u8Wed7KQuXAW0i5zCX8CD5v6W1yozj5fZgR-Fgo_1vdz4k5N-n0kuXMTH3deLUWP9o6gjFPztXyhWbUakSEsa-u3hahehItcJUcwK4KExusq0xl9KOs0Pqs0ejFro-lcY9c0D-M6Z9Cb0IPsCa7voJMRp2GgbYASPo-J5XAcBfICF3a2YCrawqnBVv9r7BVo6wxqPB8JuZFNQj3vo11fwu8cIcXaF4xDQS4vKXDDecu8WoTxw/p.jpeg",
  "https://uc5d99a722590fcc00c7d326b569.previews.dropboxusercontent.com/p/thumb/AC3QgeiOi4AsgVyw_nzkVBMwLNM-5GVR4ppwNCFYeTmRuauoNuJeX3Zpbl6JaCxv_iWJavQNUovl_ziMLtGTcPNZWQAu1Y-ZLbEfPg1r3eLiBNfHmyUbMLSLe37d5NPYBPW4ZudBD4AEhrly38Xql-2P-PgCsEvB3cYDAgbo0q2DgOhbR-I8iQWqsrrQY44iiCa37bwOweZpb33JeJFQeWGZm7OTRqJWQ5w8azDVNU8b2Xd8PevNCAMhWJeqaq3KshydnHEKT3A_JscD70HvKe3kdUV88PWfcAXMeBSnzK7UOkkZmtwNKeF05O6Ojv0DLt4joxDBIYAPu9vhcUoz-L0hIAD_bKdgfFyVW9CxHAVgLSrabxzjm97DVpPX-AUt_LG3dHoVbWY6awjetyLO8fwMYYoWjMeNNTb0CyrR9SVa7Dg6-LVpSfeH2Qe-a0zNsConhJLVfqvKZbX6S_Vs3YVDC38q627HUEinIbNeOC3iHw/p.jpeg",
  "https://uc16b8279a66f0497eb0ee464a09.previews.dropboxusercontent.com/p/thumb/AC0fl56v5Gi-RA5ezk5VFKbA0nrQTaL465-4LGzwlqYSWU9hcD7tnUkSnwjgMD3w4QJApfcj1BHxZVe2Ckh8Bhq1grOuEbv1EqbwIDhww1Ilo8Kv7xYwGKNgfhGEm3CP19lstTMiOk4MBwFxHy-aNkgHdkFeOJ4kSvFI6HuwFZTKXWlxkYO04nDIxRHxMS8Ilj-TZpgje6TWLjROI1FjIN45L-q8VGPSEeNYHgXkoE-JQQNNn_kscBkooRXYv7X7vhxYvtkEPFeoGZJTVno3tPTjeCczFQL_sKjsEnDyZaYFyWwuHFpdKhlDxXNVCxnTlQWZ3Kx2glQmKECI9NGduA14EvmAHCNL_-GjljStLaVER0MvXZpwkyuIYXLuMEzayHeL71BJFG_J63PA3h7eg2oCV71S1vp3tBcg5s39vbqO9sE91wxCceHcVTiJnNgYTvafGjr-93WSYX3lNV91ht79UFAh9a7iRyrkpewROoxLQ7BrZi2_W0vEluWYmL3E5lj5JFlzSw6dCLk9RlEBqO4r_iIYMIpWJwUOXKMWKldwUg/p.jpeg",
  "https://uc3fbacc0d09243d46339806c380.previews.dropboxusercontent.com/p/thumb/AC29DlZFjFghfznnATRoefn7Vw3WRMW18myVQbsyvM3OUfJxQpzd2b4scYkNfxXSa2lf_UPo6sDAotSZGx4pWL7wKWkXJNd5neCv31hMp5tblwFKChg-5Db3MAcbyt_RotWL4kNvsK00VC-sKvTdmrXLdTACApboaQ-RVtc6q0KKSFoo5uBy5-gkVgB_ot7zLa-E6RYyEYW4xwdy9HatZJBY4FLfbdGo5LXXAZry5C586r413xCQ8sVn_4qTWjhauWrLFCj34ZSI0EUgcnTow7zKeETwQVFAOl7-CstOmrRro09pIQVe4z5VW969jg-UX1r66boa1H6pcYDYVtP9141LNbpvoza41uRBin4s7mT38EE2IKtLwdClYAPpbmX6wIpE89lhMdf9Ov-zAG4gK-lEBw4n-1-1DFa8G4r1-qN_5WW0M-Ck-8aqCuT_D0foZ2RC44DbtM_1g2Rn-sSUDTMwVXLBeN8aVwJFXUqxTtixvw/p.jpeg",
];
