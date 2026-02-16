export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  moq: string;
  leadTime: string;
  customisation: string[];
}

export const products: Product[] = [
  {
    slug: 'custom-branded-pens',
    title: 'Custom Branded Pens',
    subtitle: 'Premium writing instruments',
    tag: 'Best Seller',
    image: '/Custom Branded Pens4245-1536x1024.jpg',
    gallery: [
      '/Custom Branded Pens4245-1536x1024.jpg',
    ],
    description:
      'Make a lasting impression with our range of custom branded pens. From sleek metal ballpoints to eco-friendly bamboo options, our pens are crafted for comfort, durability, and style. Perfect for conferences, corporate gifting, and everyday office use — your logo stays in your clients\u2019 hands every day.',
    features: [
      'Wide variety of styles: ballpoint, rollerball, gel, and stylus pens',
      'Premium metal, plastic, and eco-friendly bamboo materials',
      'Smooth writing experience with long-lasting ink cartridges',
      'Full-colour printing, laser engraving, and pad printing options',
      'Available in 20+ colours to match your brand palette',
      'Individually packed or in luxury gift boxes',
    ],
    specs: [
      { label: 'Material', value: 'Metal / ABS Plastic / Bamboo' },
      { label: 'Ink Type', value: 'Ballpoint (blue/black)' },
      { label: 'Length', value: '140mm \u2013 145mm' },
      { label: 'Weight', value: '12g \u2013 35g' },
      { label: 'Print Area', value: '50mm \u00d7 7mm (barrel)' },
      { label: 'Packaging', value: 'Polybag / Gift Box' },
    ],
    moq: '100 units',
    leadTime: '7\u201314 working days',
    customisation: ['Logo printing', 'Laser engraving', 'Custom colour barrel', 'Gift box branding'],
  },
  {
    slug: 'eco-friendly-tote-bags',
    title: 'Eco-Friendly Tote Bags',
    subtitle: 'Sustainable branded bags',
    tag: 'Eco',
    image: '/eco-friendly tote bags 85-23-1536x1024.png',
    gallery: [
      '/eco-friendly tote bags 85-23-1536x1024.png',
    ],
    description:
      'Go green with our eco-friendly tote bags, made from organic cotton, recycled materials, and jute. These reusable bags are ideal for trade shows, retail, and corporate events \u2014 combining sustainability with strong brand visibility. Each bag is built to last and designed to be carried proudly.',
    features: [
      'Made from organic cotton, recycled PET, or natural jute',
      'Reinforced stitching for heavy-duty everyday use',
      'Large print area for maximum brand exposure',
      'Multiple sizes: shopper, conference, and drawstring styles',
      'OEKO-TEX and GOTS certified material options',
      'Foldable designs available for easy distribution',
    ],
    specs: [
      { label: 'Material', value: 'Organic Cotton / Jute / Recycled PET' },
      { label: 'Dimensions', value: '380mm \u00d7 420mm (standard)' },
      { label: 'Handle Length', value: '600mm' },
      { label: 'Weight Capacity', value: 'Up to 15kg' },
      { label: 'Print Area', value: '280mm \u00d7 300mm' },
      { label: 'Packaging', value: 'Bulk packed / Individual polybag' },
    ],
    moq: '50 units',
    leadTime: '10\u201318 working days',
    customisation: ['Screen printing', 'Full-colour transfer', 'Embroidery', 'Custom handles & closures'],
  },
  {
    slug: 'branded-drinkware',
    title: 'Branded Drinkware',
    subtitle: 'Mugs, bottles & tumblers',
    tag: 'Popular',
    image: '/Branded Drinkware-85-17-1536x1024.png',
    gallery: [
      '/Branded Drinkware-85-17-1536x1024.png',
    ],
    description:
      'From ceramic mugs to vacuum-insulated stainless steel bottles, our branded drinkware keeps your logo in front of customers from the morning commute to the gym. High-quality construction means your brand is associated with reliability and style \u2014 day after day.',
    features: [
      'Vacuum-insulated stainless steel bottles (keeps drinks hot 12h / cold 24h)',
      'Classic ceramic mugs with glossy or matte finishes',
      'BPA-free plastic and Tritan sports bottles',
      'Leak-proof lids and ergonomic grip designs',
      'Dishwasher-safe options available',
      'Wide mouth designs for easy filling and cleaning',
    ],
    specs: [
      { label: 'Material', value: '18/8 Stainless Steel / Ceramic / Tritan' },
      { label: 'Capacity', value: '350ml \u2013 750ml' },
      { label: 'Insulation', value: 'Double-wall vacuum (metal)' },
      { label: 'Height', value: '180mm \u2013 270mm' },
      { label: 'Print Area', value: '70mm \u00d7 200mm (wrap)' },
      { label: 'Packaging', value: 'Gift box / Kraft box' },
    ],
    moq: '50 units',
    leadTime: '10\u201316 working days',
    customisation: ['UV full-colour printing', 'Laser engraving', 'Colour-matched lids', 'Custom packaging'],
  },
  {
    slug: 'custom-lanyards',
    title: 'Custom Lanyards',
    subtitle: 'Events & conferences',
    tag: 'Events',
    image: '/Custom Lanyards RSB4262-1536x1024.jpg',
    gallery: [
      '/Custom Lanyards RSB4262-1536x1024.jpg',
    ],
    description:
      'Professional custom lanyards for events, conferences, and everyday workplace use. Available in woven, printed, and dye-sublimated styles with a wide range of clip and buckle options. Our lanyards offer superior comfort and durability while keeping your brand front and centre.',
    features: [
      'Flat polyester, tubular, and woven fabric options',
      'Full-colour dye-sublimation for photo-quality prints',
      'Safety breakaway buckles and detachable clips',
      'J-hooks, bulldog clips, carabiner, and badge reel attachments',
      'Pantone colour matching for exact brand consistency',
      'Double-sided printing available',
    ],
    specs: [
      { label: 'Material', value: 'Polyester / Nylon / Recycled PET' },
      { label: 'Width', value: '10mm / 15mm / 20mm / 25mm' },
      { label: 'Length', value: '900mm (standard)' },
      { label: 'Print Method', value: 'Dye-sublimation / Screen print / Woven' },
      { label: 'Fittings', value: 'J-hook / Bulldog clip / Carabiner' },
      { label: 'Packaging', value: 'Bulk packed / Individually bagged' },
    ],
    moq: '100 units',
    leadTime: '5\u201312 working days',
    customisation: ['Full-colour artwork', 'Custom fittings', 'Safety breakaway', 'Pantone matching'],
  },
  {
    slug: 'tech-accessories',
    title: 'Tech Accessories',
    subtitle: 'Earphones, chargers & more',
    tag: 'Tech',
    image: '/tech-images -71-1024x1024.png',
    gallery: [
      '/tech-images -71-1024x1024.png',
    ],
    description:
      'Stay ahead of the curve with our branded tech accessories. From wireless chargers and power banks to Bluetooth earbuds and USB drives, these high-utility items keep your brand connected with modern consumers. Ideal for tech events, employee onboarding kits, and VIP gifting.',
    features: [
      'Wireless charging pads with LED logo illumination',
      'Compact power banks (5,000mAh \u2013 20,000mAh)',
      'Bluetooth earbuds in branded charging cases',
      'Multi-port USB hubs and cable organisers',
      'Webcam covers, phone stands, and stylus pens',
      'CE and RoHS certified for safety compliance',
    ],
    specs: [
      { label: 'Power Bank', value: '5,000 \u2013 20,000 mAh' },
      { label: 'Wireless Charger', value: '10W Qi-compatible' },
      { label: 'USB Drive', value: '8GB \u2013 128GB' },
      { label: 'Earbuds', value: 'Bluetooth 5.0' },
      { label: 'Certification', value: 'CE / RoHS / FCC' },
      { label: 'Packaging', value: 'Retail-ready gift box' },
    ],
    moq: '50 units',
    leadTime: '12\u201320 working days',
    customisation: ['Logo printing', 'LED logo illumination', 'Custom colour matching', 'Branded packaging'],
  },
  {
    slug: 'corporate-gift-sets',
    title: 'Corporate Gift Sets',
    subtitle: 'Premium curated bundles',
    tag: 'Premium',
    image: '/corporate gift sett.jfif',
    gallery: [
      '/corporate gift sett.jfif',
    ],
    description:
      'Impress clients, reward employees, and celebrate milestones with our premium curated gift sets. Each set is thoughtfully assembled with a selection of high-quality branded items \u2014 from notebooks and pens to drinkware and tech gadgets \u2014 beautifully packaged in a custom branded presentation box.',
    features: [
      'Curated bundles: notebook + pen + bottle + tech item',
      'Premium magnetic-close presentation boxes',
      'Fully customisable contents to suit any budget',
      'Tissue paper, ribbon, and personalised greeting cards',
      'Individual recipient personalisation available',
      'Perfect for onboarding kits, client thank-you gifts, and awards',
    ],
    specs: [
      { label: 'Box Dimensions', value: '300mm \u00d7 250mm \u00d7 80mm' },
      { label: 'Box Material', value: 'Rigid board with magnetic closure' },
      { label: 'Contents', value: '3\u20136 items per set (customisable)' },
      { label: 'Personalisation', value: 'Name, message, department' },
      { label: 'Finish', value: 'Matte / Gloss / Soft-touch' },
      { label: 'Packaging', value: 'Gift-ready presentation box' },
    ],
    moq: '25 units',
    leadTime: '14\u201321 working days',
    customisation: ['Custom box branding', 'Curated item selection', 'Individual name personalisation', 'Greeting card insert'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
