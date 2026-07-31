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
    img: "new400.jpeg",
    id: 27,
    photos: ["new400.jpeg", "new401.jpeg", "new402.jpeg", "new403.jpeg","new404.jpeg", "new405.jpeg", "new406.jpeg", "new407.jpeg","new408.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2016 mazda cx-5  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Paint code #41V",
  },

  {
    cat: "engine",
    condition: "",
    img: "new410.jpeg",
    id: 28,
    photos: ["new410.jpeg", "new411.jpeg", "new412.jpeg", "new413.jpeg","new414.jpeg", "new415.jpeg", "new416.jpeg", "new417.jpeg","new418.jpeg","new419.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2021 haval h3 1.5 l turbo ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Paint code #N/A",
  },

    {
    cat: "engine",
    condition: "",
    img: "new190.jpeg",
    id: 20,
    photos: ["new190.jpeg", "new191.jpeg", "new192.jpeg", "new193.jpeg","new194.jpeg", "new195.jpeg", "new196.jpeg", "new197.jpeg","new198.jpeg","new199.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2023 mg hs ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #N/A",
  },
 
    {
    cat: "engine",
    condition: "",
    img: "new200.jpeg",
    id: 21,
    photos: ["new200.jpeg", "new201.jpeg", "new202.jpeg", "new203.jpeg","new204.jpeg", "new205.jpeg", "new206.jpeg", "new207.jpeg","new208.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2008 toyota corolla zre152r ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "paint code #040",
  },

   {
    cat: "body",
    condition: "",
    img: "new210.jpeg",
    id: 22,
    photos: ["new210.jpeg", "new211.jpeg", "new212.jpeg", "new213.jpeg","new214.jpeg", "new215.jpeg", "new216.jpeg", "new217.jpeg","new218.jpeg","new219.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2013 KIA rio ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "paint code #N/A",
  },

 {
    cat: "body",
    condition: "",
    img: "new230.jpeg",
    id: 24,
    photos: ["new230.jpeg", "new231.jpeg", "new232.jpeg", "new233.jpeg","new234.jpeg", "new235.jpeg", "new236.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 subaru xv gp7 awd auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "paint code #J9U",
  },

 


    {
    cat: "engine",
    condition: "",
    img: "new1 (2).jpeg",
    id: 1,
    photos: ["new1.jpeg", "new2.jpeg", "new3.jpeg", "new4.jpeg","new5.jpeg", "new6.jpeg", "new7.jpeg", "new8.jpeg","new9.jpeg","new10.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 MAZDA CX-5 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #34K",
  },
    {
    cat: "body",
    condition: "",
    img: "new240.jpeg",
    id: 25,
    photos: ["new240.jpeg", "new241.jpeg", "new242.jpeg", "new243.jpeg","new244.jpeg", "new245.jpeg", "new246.jpeg", "new247.jpeg","new248.jpeg","new249.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "now wrecking 2018 hyundai accent ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: " Paint code #P6W",
  },

     {
    cat: "engine",
    condition: "",
    img: "new260.jpeg",
    id: 26,
    photos: ["new260.jpeg", "new261.jpeg", "new262.jpeg", "new263.jpeg","new264.jpeg", "new265.jpeg", "new266.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2010 honda accord euro",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Paint code #N/A",
  },

     {
    cat: "engine",
    condition: "",
    img: "new270.jpeg",
    id: 27,
    photos: ["new270.jpeg", "new271.jpeg", "new272.jpeg", "new273.jpeg","new274.jpeg", "new275.jpeg", "new276.jpeg","new277.jpeg", "new278.jpeg", "new279.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2013 hyundai i  20 auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Paint code #WAU",
  },



  {
    cat: "engine",
    condition: "",
    img: "new11.jpeg",
    id: 2,
    photos: ["new12.jpeg", "new13.jpeg", "new14.jpeg", "new15.jpeg","new16.jpeg", "new17.jpeg", "new18.jpeg", "new19.jpeg","new20.jpeg","new.jpeg","new21.jpeg","new22.jpeg","new23.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2011 volkswagen amarok 4x4",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #N/A",
  },
   {
    cat: "body",
    condition: "",
    img: "new220.jpeg",
    id: 23,
    photos: ["new220.jpeg", "new221.jpeg", "new222.jpeg", "new223.jpeg","new224.jpeg", "new225.jpeg", "new226.jpeg", "new227.jpeg","new228.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2014 hyundai i   30 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "paint code #YAC",
  },


   {
    cat: "engine",
    condition: "",
    img: "new250.jpeg",
    id: 26,
    photos: ["new250.jpeg", "new251.jpeg", "new252.jpeg", "new253.jpeg","new254.jpeg", "new255.jpeg", "new256.jpeg", "new257.jpeg","new258.jpeg", "new259.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2015 suzuki apv auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: " Paint code #ZMT",
  },
  {
    cat: "engine",
    condition: "",
    img: "new24.jpeg",
    id: 3,
    photos: ["new24.jpeg", "new25.jpeg", "new26.jpeg", "new27.jpeg","new28.jpeg", "new29.jpeg", "new30.jpeg", "new31.jpeg","new32.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2014 kia cerato auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #4SS",
  },
    {
    cat: "body",
    condition: "",
    img: "new33.jpeg",
    id: 4,
    photos: ["new34.jpeg", "new35.jpeg", "new36.jpeg", "new37.jpeg","new38.jpeg", "new39.jpeg", "new40.jpeg", "new41.jpeg","new42.jpeg","new43.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2021 SUZUKI JIMNY ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #26U",
  },
  {
    cat: "body",
    condition: "",
    img: "new44.jpeg",
    id: 5,
    photos: ["new45.jpeg", "new46.jpeg", "new47.jpeg", "new48.jpeg","new49.jpeg", "new50.jpeg", "new51.jpeg", "new52.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2011 TOYOTA PRADO 150 Series 4X4",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "code #040",
  },
  {
    cat: "electrical",
    condition: "",
    img: "new60.jpeg",
    id: 6,
    photos: ["new60.jpeg", "new61.jpeg", "new62.jpeg", "new63.jpeg", "new64.jpeg","new65.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "WRECKING 2015 HYUNDAI I    30",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "new70.jpeg",
    id: 7,
    photos: ["new70.jpeg", "new71.jpeg", "new72.jpeg", "new73.jpeg", "new74.jpeg", "new75.jpeg", "new76.jpeg","new77.jpeg","new78.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2012 hyundia accent",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #ve9",
  },
  {
    cat: "interior",
    condition: "",
    img: "new90.jpeg",
    id: 8,
    photos: ["new90.jpeg", "new91.jpeg", "new92.jpeg", "new93.jpeg", "new94.jpeg", "new95.jpeg", "new96.jpeg","new97.jpeg","new98.jpeg","new99.jpeg","new100.jpeg","new101.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2018 honda fk7 civic hatchback auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "new00.jpeg",
    id: 9,
    photos: ["new00.jpeg", "new000.jpeg", "new102.jpeg", "new103.jpeg", "new104.jpeg", "new105.jpeg", "new106.jpeg","new107.jpeg","new108.jpeg","new109.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2019 audi a3 tfsi auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #DCDC",
  },
  {
    cat: "electrical",
    condition: "",
    img: "new110.jpeg",
    id: 10,
    photos: ["new110.jpeg", "new111.jpeg", "new112.jpeg", "new113.jpeg", "new114.jpeg", "new115.jpeg", "new116.jpeg","new117.jpeg","new118.jpeg","new119.jpeg","new120.jpeg","new121.jpeg","new122.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2012 rnge rover evoque",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "interior",
    condition: "",
    img: "new130.jpeg",
    id: 11,
    photos: ["new130.jpeg", "new131.jpeg", "new132.jpeg", "new133.jpeg", "new134.jpeg", "new135.jpeg", "new136.jpeg","new137.jpeg","new138.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2011 toyota corolla hatchback auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "new140.jpeg",
    id: 12,
    photos: ["new140.jpeg", "new141.jpeg", "new142.jpeg", "new143.jpeg", "new144.jpeg", "new145.jpeg", "new146.jpeg","new147.jpeg","new148.jpeg","new149.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2010 TOYOTA RAV4 AUTO",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #070",
  },
  {
    cat: "electrical",
    condition: "",
    img: "new150.jpeg",
    id: 13,
    photos: ["new150.jpeg", "new151.jpeg", "new152.jpeg", "new153.jpeg", "new154.jpeg", "new155.jpeg", "new156.jpeg","new157.jpeg","new158.jpeg","new159.jpeg","new160.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2014 nissan qashqi ",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #Z12 G",
  },
  {
    cat: "body",
    condition: "",
    img: "new161.jpeg",
    id: 14,
    photos: ["new161.jpeg", "new162.jpeg", "new163.jpeg", "new164.jpeg", "new165.jpeg", "new166.jpeg", "new167.jpeg","new168.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2007 mitsubishi pajero",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "interior",
    condition: "",
    img: "new170.jpeg",
    id: 15,
    photos: ["new170.jpeg", "new171.jpeg", "new172.jpeg", "new173.jpeg", "new174.jpeg", "new175.jpeg", "new176.jpeg","new177.jpeg","new178.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2020 haval h2",
    fits: "Most Part Still Available we ship parts all over Australia",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "new180.jpeg",
    id: 16,
    photos: ["new180.jpeg", "new181.jpeg", "new182.jpeg", "new183.jpeg", "new184.jpeg", "new185.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2004 toyota estima",
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
    { day: "Monday – Friday", time: "7:00 am – 4:30 pm" },
    { day: "Saturday", time: "7:00 am – 1:00 pm" },
    { day: "Sunday", time: "Closed" },
  ],
};
