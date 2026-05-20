const PHONE_RAW = '+919883674157';
const WHATSAPP_MESSAGE =
  "Hello Dr. Ritham, I'd like to book a dental appointment. Could you share available timings?";
const MAP_QUERY = 'B-85, Lajpat Nagar-II, New Delhi 110024';

export const brand = {
  name: 'Dr. Ritham Debnath',
  title: 'Consultant Dental Surgeon',
  tagline: 'Expert Care. Lasting Smiles.',
  phone: '+91 98836 74157',
  phoneHref: `tel:${PHONE_RAW}`,
  whatsappHref: `https://wa.me/${PHONE_RAW.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: 'rhitam.debnath95@gmail.com',
  emailHref: 'mailto:rhitam.debnath95@gmail.com',
  address: 'B-85, Lajpat Nagar-II, New Delhi – 110024',
  addressLines: ['B-85, Lajpat Nagar-II', 'New Delhi – 110024'],
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`,
  mapDirections: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`,
  mapView: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
  hours: {
    weekdays: 'Mon – Sat: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 2:00 PM (By Appointment)',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description:
      'Transform your smile with veneers, bonding, and aesthetic restorations tailored to your facial features.',
    icon: 'Sparkles',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description:
      'Gentle, precision endodontic care that saves natural teeth while eliminating pain with modern techniques.',
    icon: 'Activity',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking tooth replacements using advanced implant systems for lasting confidence.',
    icon: 'Layers',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description:
      'Professional-grade whitening for a radiant, even smile — safe, fast, and clinically proven results.',
    icon: 'Sun',
    image:
      'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'smile-design',
    title: 'Smile Designing',
    description:
      'Digital smile previews and bespoke treatment plans crafted for harmony, proportion, and elegance.',
    icon: 'Smile',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'braces',
    title: 'Braces & Aligners',
    description:
      'Discreet orthodontic solutions including clear aligners for perfectly aligned teeth at any age.',
    icon: 'AlignCenter',
    image:
      'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const whyChooseUs = [
  {
    number: '01',
    title: 'Advanced Technology',
    description: 'Digital imaging, 3D scanning, and laser-assisted procedures for precision outcomes.',
    icon: 'Cpu',
    image:
      'https://images.pexels.com/photos/3762460/pexels-photo-3762460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '02',
    title: 'Pain-Free Procedures',
    description: 'Comfort-first protocols with gentle anesthesia and anxiety-free treatment experiences.',
    icon: 'HeartPulse',
    image:
      'https://images.pexels.com/photos/4269933/pexels-photo-4269933.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '03',
    title: 'Experienced Care',
    description: 'Over 12 years of surgical expertise with thousands of successful patient outcomes.',
    icon: 'GraduationCap',
    image:
      'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '04',
    title: 'Hygiene & Safety',
    description: 'Hospital-grade sterilization, single-use instruments, and strict infection control standards.',
    icon: 'ShieldCheck',
    image:
      'https://images.pexels.com/photos/3762456/pexels-photo-3762456.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const stats = [
  { label: 'Years of Experience', value: '12+', icon: 'Award' },
  { label: 'Happy Patients', value: '5000+', icon: 'Users' },
  { label: 'Procedures Done', value: '8000+', icon: 'Stethoscope' },
  { label: 'Certifications', value: '15+', icon: 'BadgeCheck' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    treatment: 'Smile Designing',
    quote:
      'Dr. Ritham transformed my smile beyond what I imagined. The entire experience felt luxurious — painless, professional, and truly caring.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    treatment: 'Dental Implants',
    quote:
      'I was nervous about implants, but the team made me feel completely at ease. The results look and feel completely natural.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Ananya Das',
    treatment: 'Teeth Whitening',
    quote:
      'The clinic is stunning and immaculate. My teeth are several shades brighter after just one session. Highly recommend!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

export const gallery = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&auto=format&fit=crop',
    alt: 'Modern dental clinic reception',
    caption: 'Luxury Clinic Interior',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80&auto=format&fit=crop',
    alt: 'Bright healthy smile',
    caption: 'Smile Transformation',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80&auto=format&fit=crop',
    alt: 'Dental treatment in progress',
    caption: 'Precision Care',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3762460/pexels-photo-3762460.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Advanced dental equipment',
    caption: 'Advanced Technology',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80&auto=format&fit=crop',
    alt: 'Patient consultation',
    caption: 'Personal Consultation',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/4269933/pexels-photo-4269933.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Dental team at work',
    caption: 'Expert Team',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Radiant healthy smile close-up',
    caption: 'Whitening Results',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Healthy clear smile close-up',
    caption: 'Healthy Smiles',
    span: 'col-span-1 row-span-1',
  },
];

export const heroImage =
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=85&auto=format&fit=crop';

export const aboutImage =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=85&auto=format&fit=crop';

export const marqueeKeywords = [
  'Cosmetic Dentistry',
  'Smile Designing',
  'Dental Implants',
  'Teeth Whitening',
  'Root Canal',
  'Clear Aligners',
  'Painless Procedures',
  'Pediatric Care',
];

export const processSteps = [
  {
    number: '01',
    title: 'Book a Consultation',
    description:
      'Share your goals through our online form or a quick call. We respond within 24 hours.',
    icon: 'CalendarCheck',
    image:
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Personalized Diagnosis',
    description:
      'Digital scans, X-rays, and a one-on-one discussion to map your unique smile blueprint.',
    icon: 'Stethoscope',
    image:
      'https://images.pexels.com/photos/3762456/pexels-photo-3762456.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '03',
    title: 'Custom Treatment Plan',
    description:
      'A transparent plan with timelines, options, and pricing — designed entirely around you.',
    icon: 'ClipboardList',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Reveal Your New Smile',
    description:
      'Comfortable, painless treatments delivered with precision — followed by lifetime care.',
    icon: 'Smile',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&auto=format&fit=crop',
  },
];

export const bigStats = [
  { value: '12+', label: 'Years of Expertise' },
  { value: '5000+', label: 'Smiles Transformed' },
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '24/7', label: 'Emergency Support' },
];

export const serviceOptions = services.map((s) => s.title);

export const footerLinks = {
  quick: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book Appointment', href: '#contact' },
  ],
  services: services.map((s) => ({ label: s.title, href: '#services' })),
};

const PHONE_DIGITS = PHONE_RAW.replace('+', '');

export const socialLinks = [
  {
    label: 'Chat on WhatsApp',
    icon: 'MessageCircle',
    href: `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    external: true,
  },
  {
    label: 'Call the clinic',
    icon: 'Phone',
    href: `tel:${PHONE_RAW}`,
  },
  {
    label: 'Email Dr. Debnath',
    icon: 'Mail',
    href: 'mailto:rhitam.debnath95@gmail.com',
  },
  {
    label: 'Find us on Google Maps',
    icon: 'Globe',
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
    external: true,
  },
];
