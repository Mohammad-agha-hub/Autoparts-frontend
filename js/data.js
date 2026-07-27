/* ============================================================
   AFJ AUTO PARTS — SITE DATA
   Edit these arrays to add/remove/change what shows on the page.
   No HTML editing required for content changes.
   ============================================================ */

// ---- Hero rotating slides (background + headline + lead) ----
// The hero cycles through these every HERO_INTERVAL ms with a crossfade.
const HERO_INTERVAL = 5000;
const HERO_SLIDES = [
  {
    img: "22793_2026_EV9_GT-2048x1152.webp",
    kicker: "Used · New · Aftermarket",
    titleTop: "AFJ",
    titleMain: "AUTO PARTS",
    titleEm: "& WRECKER.",
    lead: "Over 40,000 quality-checked used, new and aftermarket parts pulled from our own yard. Same-day pickup, nationwide shipping and a real warranty on every part.",
  },
  {
    img: "u9-2560-750x430.webp",
    kicker: "Engines · Transmissions",
    titleTop: "TESTED,",
    titleMain: "GRADED",
    titleEm: "& READY TO FIT.",
    lead: "Every engine and gearbox is compression-tested and condition-graded before it hits the shelf — fitment checked against your VIN and backed by a 6-month warranty.",
  },
  {
    img: "zeekr-7x-can-be-charged-in-13-minutes-it-is-now-on-sale-in-europe-7455.jpg.webp",
    kicker: "Cash For Cars",
    titleTop: "SELLING OR",
    titleMain: "SCRAPPING?",
    titleEm: "WE'LL BUY IT.",
    lead: "Running or not, damaged or written-off — get a firm quote in minutes and free pickup within 24 hours. We buy any make, any model, any condition.",
  },
];

// ---- Services / "Shop by category" swiper cards ----
const SERVICES = [
  {
    code: "SVC-01",
    img: "car-engine-25780404.webp",
    title: "Engines",
    desc: "Quality tested engines.",
  },
  {
    code: "SVC-02",
    img: "22793_2026_EV9_GT-2048x1152.webp",
    title: "Transmission",
    desc: "Manual & Automatic.",
  },
  {
    code: "SVC-03",
    img: "Dacia_Logan_MCV_Model_2009_05.webp",
    title: "Doors",
    desc: "OEM body part.",
  },
  {
    code: "SVC-04",
    img: "carr.jpg",
    title: "Headlights",
    desc: "Original headlights.",
  },
  {
    code: "SVC-05",
    img: "ghostbb.webp",
    title: "Bumpers",
    desc: "Front & Rear bumpers.",
  },
  {
    code: "SVC-06",
    img: "mirror.webp",
    title: "Mirrors",
    desc: "Electric mirrors.",
  },
  {
    code: "SVC-07",
    img: "RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Ghost_Black_Badge.webp",
    title: "Suspension",
    desc: "High quality parts.",
  },
  {
    code: "SVC-08",
    img: "spectre.webp",
    title: "New Arrivals",
    desc: "Latest stock available.",
  },
  {
    code: "SVC-09",
    img: "22793_2026_EV9_GT-2048x1152.webp",
    title: "Radiator",
    desc: "",
  },
  {
    code: "SVC-10",
    img: "car-engine-25780404.webp",
    title: "Alternator",
    desc: "",
  },
  {
    code: "SVC-11",
    img: "Dacia_Logan_MCV_Model_2009_05.webp",
    title: "Starter",
    desc: "",
  },
  { code: "SVC-12", img: "ghostbb.webp", title: "Steering", desc: "" },
  {
    code: "SVC-13",
    img: "RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Ghost_Black_Badge.webp",
    title: "Wheel",
    desc: "",
  },
  { code: "SVC-14", img: "spectre.webp", title: "Tyres", desc: "" },
  {
    code: "SVC-15",
    img: "zeekr-7x-can-be-charged-in-13-minutes-it-is-now-on-sale-in-europe-7455.jpg.webp",
    title: "Battery",
    desc: "",
  },
  { code: "SVC-16", img: "u9-2560-750x430.webp", title: "ABS Module", desc: "" },
];

// ---- Live inventory cards ----
const INVENTORY = [
  {
    cat: "engine",
    condition: "GRADE A",
    img: "car-engine-25780404.webp",
    catLabel: "Engine · V6",
    title: "2018 Honda Accord 3.5L Engine",
    fits: "Fits: Accord 2013–2019 · 54,200 mi",
    price: "$1,180",
    stock: "Stock #4432",
  },
  {
    cat: "body",
    condition: "GRADE B",
    img: "22793_2026_EV9_GT-2048x1152.webp",
    catLabel: "Body · Door",
    title: "Ford F-150 Front Right Door",
    fits: "Fits: F-150 2015–2020 · Oxford White",
    price: "$260",
    stock: "Stock #4502-D",
  },
  {
    cat: "electrical",
    condition: "GRADE A",
    img: "ghostbb.webp",
    catLabel: "Electrical · Alternator",
    title: "Nissan Altima Alternator 130A",
    fits: "Fits: Altima 2013–2018 · Tested",
    price: "$95",
    stock: "Stock #4488-A",
  },
  {
    cat: "engine",
    condition: "GRADE A",
    img: "RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Ghost_Black_Badge.webp",
    catLabel: "Drivetrain · Transmission",
    title: "Chevrolet Silverado 6-Speed Auto",
    fits: "Fits: Silverado 2014–2019 · 61,800 mi",
    price: "$890",
    stock: "Stock #4511-T",
  },
  {
    cat: "interior",
    condition: "GRADE B",
    img: "spectre.webp",
    catLabel: "Interior · Seats",
    title: "Subaru Outback Front Seat Pair",
    fits: "Fits: Outback 2015–2019 · Cloth, grey",
    price: "$210",
    stock: "Stock #4498-S",
  },
  {
    cat: "body",
    condition: "GRADE A",
    img: "u9-2560-750x430.webp",
    catLabel: "Body · Bumper",
    title: "Toyota Camry Rear Bumper",
    fits: "Fits: Camry 2018–2022 · Primed, no damage",
    price: "$175",
    stock: "Stock #4471-B",
  },
  {
    cat: "electrical",
    condition: "GRADE A",
    img: "zeekr-7x-can-be-charged-in-13-minutes-it-is-now-on-sale-in-europe-7455.jpg.webp",
    catLabel: "Electrical · ECU",
    title: "Honda Civic Engine Control Unit",
    fits: "Fits: Civic 2016–2021 · Plug tested",
    price: "$140",
    stock: "Stock #4471-E",
  },
  {
    cat: "interior",
    condition: "GRADE A",
    img: "car-engine-25780404.webp",
    catLabel: "Interior · Dashboard",
    title: "Ford F-150 Dashboard Assembly",
    fits: "Fits: F-150 2015–2020 · Black, no cracks",
    price: "$230",
    stock: "Stock #4502-DB",
  },
  {
    cat: "engine",
    condition: "GRADE B",
    img: "22793_2026_EV9_GT-2048x1152.webp",
    catLabel: "Engine · 4-Cyl",
    title: "Nissan Altima 2.5L Engine",
    fits: "Fits: Altima 2013–2018 · 71,500 mi",
    price: "$720",
    stock: "Stock #4488",
  },
  {
    cat: "electrical",
    condition: "GRADE A",
    img: "u9-2560-750x430.webp",
    catLabel: "Electrical · Starter",
    title: "Toyota Camry Starter Motor",
    fits: "Fits: Camry 2012–2017 · Bench tested",
    price: "$85",
    stock: "Stock #4520-S",
  },
  {
    cat: "body",
    condition: "GRADE A",
    img: "ghostbb.webp",
    catLabel: "Body · Bonnet",
    title: "Honda Civic Bonnet / Hood",
    fits: "Fits: Civic 2016–2021 · Rallye Red",
    price: "$240",
    stock: "Stock #4515-BN",
  },
  {
    cat: "interior",
    condition: "GRADE B",
    img: "spectre.webp",
    catLabel: "Interior · Console",
    title: "Subaru Outback Centre Console",
    fits: "Fits: Outback 2015–2019 · Complete",
    price: "$130",
    stock: "Stock #4499-C",
  },
  {
    cat: "engine",
    condition: "GRADE A",
    img: "RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Ghost_Black_Badge.webp",
    catLabel: "Drivetrain · Diff",
    title: "Ford F-150 Rear Differential",
    fits: "Fits: F-150 2015–2020 · 3.55 ratio",
    price: "$540",
    stock: "Stock #4522-DF",
  },
  {
    cat: "electrical",
    condition: "GRADE A",
    img: "zeekr-7x-can-be-charged-in-13-minutes-it-is-now-on-sale-in-europe-7455.jpg.webp",
    catLabel: "Electrical · Cluster",
    title: "Nissan Altima Instrument Cluster",
    fits: "Fits: Altima 2013–2018 · Mileage reset avail.",
    price: "$120",
    stock: "Stock #4489-IC",
  },
  
];

// ---- Brands strip ----
const BRANDS = [
  { name: "TOYOTA", img: "toyta_logo_PNG1665 (1).webp" },
  { name: "HONDA", img: "honda-logo-png-19.webp" },
  { name: "SUZUKI", img: "suzuki_PNG12291.webp" },
  { name: "HYUNDAI", img: "hydo_logo_PNG1645.webp" },
  { name: "KIA", img: "kia.webp" },
  { name: "MERCEDES", img: "Mercedes-Benz-Logo-768x478.webp" },
  { name: "BMW", img: "BMW-Logo-1963-1997.webp" },
  { name: "LEXUS", img: "lexus.webp" },
  { name: "HAVAL", img: "Haval-Logo-500x281.webp" },
  { name: "BYD", img: "BYD-Logo-500x281.webp" },
  { name: "MAZDA", img: "mazda_PNG86.webp" },
];

// ---- Testimonials ----
const TESTIMONIALS = [
  {
    stars: 5,
    text: "Called about a transmission for my Silverado, had it delivered two days later and it's been running perfectly since. Fair price, no upselling.",
    name: "D. Marsh",
    role: "Verified Buyer",
  },
  {
    stars: 5,
    text: "They picked up my written-off Civic same afternoon and paid on the spot. Easiest part of the whole insurance process, honestly.",
    name: "R. Ibrahim",
    role: "Verified Seller",
  },
  {
    stars: 4,
    text: "Needed a matching door panel and they tracked one down through their network in a day. Colour match was close enough not to repaint.",
    name: "S. Okafor",
    role: "Verified Buyer",
  },
];

// ---- FAQ ----
const FAQS = [
  {
    q: "Do used parts come with a warranty?",
    a: "Yes. Every part sold, used or new, carries a minimum 90-day warranty. Engines and transmissions carry an extended 6-month warranty when installed by a licensed mechanic.",
  },
  {
    q: "How do I know if a part will fit my car?",
    a: "Give us your VIN or your make, model and year, and we'll cross-check fitment and interchange numbers before you buy, over the phone or online.",
  },
  {
    q: "Can you pick up a car that doesn't run?",
    a: "Yes, non-running, damaged and written-off vehicles are exactly what we wreck. We arrange free towing and pay on collection.",
  },
  {
    q: "Do you ship parts outside the local area?",
    a: "We ship nationwide. Small parts go by tracked courier; engines, transmissions and panels go by palletised freight with full tracking.",
  },
  {
    q: "What condition grades do your parts get?",
    a: "Grade A means light wear with no mechanical or cosmetic issues. Grade B means fully functional with visible wear or minor cosmetic marks. Grading is noted on every listing.",
  },
];

// ---- Business / contact info (used for the map + WhatsApp + footer) ----
const BUSINESS = {
  name: "AFJ Auto Parts & Wrecker",
  phoneDisplay: "0435 796 957",
  phoneTel: "+61435796957", // used for tel: links
  whatsappNumber: "61435796957", // no leading 0, no plus, used for wa.me links
  whatsappDefaultMessage: "Hi AFJ Auto Parts, I'd like to ask about a part.",
  email: "afj.autoparts@gmail.com",
  website: "afjautoparts.com.au",
  address: "6 Neon Street, Sumner, QLD 4074, Australia",
  mapQuery: "6+Neon+Street+Sumner+QLD+4074+Australia",
  areasServedDisplay:
    "Brisbane, QLD, Australia · Sunshine Coast, QLD, Australia · Gold Coast, QLD, Australia",
  areaServed: ["Brisbane", "Sunshine Coast", "Gold Coast"],
  hours: [
    { day: "Monday – Friday", time: "7:00 am – 4:00 pm" },
    { day: "Saturday", time: "7:00 am – 1:00 pm" },
    { day: "Sunday", time: "Closed" },
  ],
};
