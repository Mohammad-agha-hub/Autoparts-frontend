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
    img: "tran.webp",
    title: "Transmission",
    desc: "Manual & Automatic.",
  },
  {
    code: "SVC-03",
    img: "doors.jpg",
    title: "Doors",
    desc: "OEM body part.",
  },
  {
    code: "SVC-04",
    img: "headligh.avif",
    title: "Headlights",
    desc: "Original headlights.",
  },
  {
    code: "SVC-05",
    img: "pumpe.jfif",
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
    img: "suspension.jpg",
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
    img: "radia.jfif",
    title: "Radiator",
    desc: "",
  },
  {
    code: "SVC-10",
    img: "alter.webp",
    title: "Alternator",
    desc: "",
  },
  {
    code: "SVC-11",
    img: "starter.jfif",
    title: "Starter",
    desc: "",
  },
  { code: "SVC-12", img: "steering.jpg", title: "Steering", desc: "" },
  {
    code: "SVC-13",
    img: "wheel.jfif",
    title: "Wheel",
    desc: "",
  },
  { code: "SVC-14", img: "tyre.jfif", title: "Tyres", desc: "" },
  {
    code: "SVC-15",
    img: "battry.webp",
    title: "Battery",
    desc: "",
  },
  { code: "SVC-16", img: "abs.jfif", title: "ABS Module", desc: "" },
];

// ---- Live inventory cards ----
const INVENTORY = [
    {
    cat: "engine",
    condition: "",
    img: "new1.jpeg",
    id: 1,
    photos: ["new1.jpeg", "new1.jpeg", "new1.jpeg", "new1.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 MAZDA CX-5 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #34K",
  },

  {
    cat: "engine",
    condition: "",
    img: "1.png",
    id: 2,
    photos: ["1.png", "1.png", "1.png", "1.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2021 SUZUKI",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #26U",
  },

   {
    cat: "engine",
    condition: "",
    img: "new.jpeg",
    id: 3,
    photos: ["new.jpeg", "new.jpeg", "new.jpeg", "new.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2011 volkswagen amarok 4x4 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "111.png",
    id: 4,
    photos: ["111.png", "111.png", "111.png", "111.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2014 kia cerato auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #4SS",
  },
  {
    cat: "body",
    condition: "",
    img: "2.png",
    id: 5,
    photos: ["2.png", "2.png", "2.png", "2.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2011 TOYOTA PRADO 150 Series 4X4",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #040",
  },
  {
    cat: "electrical",
    condition: "",
    img: "3.png",
    id: 6,
    photos: ["3.png", "3.png", "3.png", "3.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "WRECKING 2015 HYUNDAI I    30",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "4.png",
    id: 7,
    photos: ["4.png", "4.png", "4.png", "4.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2011 mazda3 hatchback auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #16W",
  },
  {
    cat: "interior",
    condition: "",
    img: "5.png",
    id: 8,
    photos: ["5.png", "5.png", "5.png", "5.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2018 honda fk7 civic hatchback auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "6.png",
    id: 9,
    photos: ["6.png", "6.png", "6.png", "6.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2019 audi a3 tfsi auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #DCDC",
  },
  {
    cat: "electrical",
    condition: "",
    img: "7.png",
    id: 10,
    photos: ["7.png", "7.png", "7.png", "7.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2012 rnge rover evogue",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "interior",
    condition: "",
    img: "8.png",
    id: 11,
    photos: ["8.png", "8.png", "8.png", "8.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2011 toyota corolla",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "9.png",
    id: 12,
    photos: ["9.png", "9.png", "9.png", "9.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2010 TOYOTA RAV4 AUTO",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #070",
  },
  {
    cat: "electrical",
    condition: "",
    img: "10.png",
    id: 13,
    photos: ["10.png", "10.png", "10.png", "10.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2014 nissan qashqi ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #Z12 G",
  },
  {
    cat: "body",
    condition: "",
    img: "11.png",
    id: 14,
    photos: ["11.png", "11.png", "11.png", "11.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2007 mitsubishi pajero",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "interior",
    condition: "",
    img: "12.png",
    id: 15,
    photos: ["12.png", "12.png", "12.png", "12.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2020 haval h2",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "13.png",
    id: 16,
    photos: ["13.png", "13.png", "13.png", "13.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2004 toyota estima",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "electrical",
    condition: "",
    img: "14.png",
    id: 17,
    photos: ["14.png", "14.png", "14.png", "14.png"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "Electrical · Cluster",
    title: "wrecking 2015 volkswagen polo tsi",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },

  //  {
  //   cat: "electrical",
  //   condition: "",
  //   img: "14.png",
  //   catLabel: "Electrical · Cluster",
  //   title: "Nissan Altima Instrument Cluster",
  //   fits: "Fits: Altima 2013–2018 · Mileage reset avail.",
  //   price: "",
  //   stock: "Stock #4489-IC",
  // },
  
];

// ---- Brands strip ----
const BRANDS = [
  { name: "TOYOTA", img: "toyta_logo_PNG1665 (1).webp" },
  { name: "HONDA", img: "honda-logo-png-19.webp" },
  { name: "SUZUKI", img: "suzuki_PNG12291.webp" },
  { name: "HYUNDAI", img: "hydo_logo_PNG1645.webp" },
  { name: "KIA", img: "kia.png" },
  { name: "MERCEDES", img: "Mercedes-Benz-Logo-768x478.webp" },
  { name: "BMW", img: "BMW-Logo-1963-1997.webp" },
  { name: "LEXUS", img: "lexux.png" },
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
