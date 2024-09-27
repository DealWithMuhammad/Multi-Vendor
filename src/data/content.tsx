import { AiOutlineLink } from "react-icons/ai";
import { FaPinterest, FaTruck } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { LuDivide } from "react-icons/lu";
import { Ri24HoursLine, RiExchangeDollarLine } from "react-icons/ri";
import headphonesheader from "src/images/Group_105.webp";
import watchheader from "src/images/Group_106.webp";
import gamingheader from "src/images/Group_157.webp";

import type { NavItemType } from "@/components/NavItem";

import phonesBanner from "@/images/categories/phone-banner.webp";
import gamingcontrollwe from "@/images/products/controller.jpg";
import ear from "@/images/products/earphones.jpg";
import fifa from "@/images/products/fifa.jpg";
import iphone from "@/images/products/iphone.jpg";
import jbl from "@/images/products/JBL GO 3.jpg";
import macbook from "@/images/products/Macbook 1.jpg";
import pixel from "@/images/products/pixel.png";
import shot1 from "@/images/shots/Macbook 2.jpg";
import shot2 from "@/images/shots/Macbook 3.jpg";
import { generateSlug } from "@/utils/utilities";

export const headerNavData = {
  mainNavLinks: [],
  bottomNavLinks: [
    {
      id: "ee46t",
      name: "Art & Collections",
      href: "/collections/artcollection",
      megaMenuData: {
        title: "Art & Collections",
        menu1Data: {
          title: "Paintings",
          links: [
            { href: "/collections/artcollection", name: "Sunset Overdrive" },
            { href: "/collections/artcollection", name: "Abstract Horizon" },
          ],
        },
        menu2Data: {
          title: "Canvas Painting",
          links: [
            { href: "/collections/artcollection", name: "Modern Landscape" },
            { href: "/collections/artcollection", name: "Ocean Dreams" },
          ],
        },
      },
    },
    {
      id: "eerrrt",
      name: "Bags & Purses",
      href: "collections/bags",
      type: "dropdown",
      dropDownMenuData: [
        {
          href: "/products/leather-tote-bag",
          label: "Leather Tote Bag",
        },
        {
          href: "/products/canvas-backpack",
          label: "Canvas Backpack",
        },
        {
          href: "/products/mini-crossbody-bag",
          label: "Mini Crossbody Bag",
        },
        {
          href: "/products/duffel-bag",
          label: "Travel Duffel Bag",
        },
      ],
    },
  ],
};

export const topNavLinks2: NavItemType[] = [];

export const catalogNavLinks: NavItemType[] = [
  {
    id: "ee46t",
    name: "Art & Collection",
    href: "/art-collection",
  },
  {
    id: "eerrrt",
    name: "Bags",
    href: "/bags",
  },
];

export const categoriesData = [
  {
    title: "Art & Collection",
    slug: generateSlug("artcollection"),
    imgUrl:
      "https://images.unsplash.com/photo-1673297180075-411992cad941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FudmFzJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    bannerUrl: phonesBanner,
    href: "/collections/artcollection",
  },
];

export const benefitsData = [
  {
    Icon: FaTruck,
    title: "Meetup Shipping & Returns",
    text: `Shop with confidence and have your favorite electronics delivered right to your doorstep without any additional cost.`,
  },
  {
    Icon: RiExchangeDollarLine,
    title: `Money Back Guarantee`,
    text: `If you're not completely satisfied with your purchase, we'll make it right. No questions asked.`,
  },
  {
    Icon: Ri24HoursLine,
    title: `Online Support 24/7`,
    text: `Need help with your electronics? Get in touch with us anytime, anywhere, and let's get your tech sorted.`,
  },
  {
    title: `Regular Sales`,
    text: `Don't miss out on our amazing deals with regular sales on our top-of-the-line electronics.`,
    Icon: LuDivide,
  },
];

export const FAQsData = {
  faqs: [
    {
      question: `What payment methods are accepted at your store?`,
      answer: `Our online store accepts a variety of payment methods to ensure a convenient shopping experience for our customers. We accept major credit cards, such as Visa, MasterCard, American Express, and Discover, as well as debit cards. Additionally, we offer support for digital payment platforms like PayPal, Apple Pay, and Google Pay. We are constantly working to expand our payment options to accommodate our customers' needs.`,
    },
    {
      question: `How long does it take to process and ship my order?`,
      answer: `Answer: We strive to process and ship orders as quickly as possible. Generally, orders are processed within 1-2 business days after being placed. Shipping times vary depending on the chosen shipping method and the destination of the package. Standard shipping typically takes 3-7 business days within the continental United States, while expedited shipping options are available for faster delivery. International shipping times vary depending on the country and customs processing times.`,
    },
    {
      question: `Can I return or exchange an item I've purchased from your online store?`,
      answer: `Our online store offers a hassle-free return and exchange policy. You can return or exchange any eligible items within 30 days of the delivery date, provided they are in their original, unused condition with all tags and packaging intact. To initiate a return or exchange, please contact our customer support team through our website or email, and they will guide you through the process. Please note that return shipping costs are the responsibility of the customer unless the item is faulty or an error has been made on our part.`,
    },
  ],
};

export const socialLinks = [
  { href: "#", Icon: <IoLogoFacebook /> },
  { href: "#", Icon: <FaXTwitter /> },
  { href: "#", Icon: <FaPinterest /> },
  { href: "#", Icon: <AiOutlineLink /> },
];

export const landingPageHeaderData = [
  {
    title: "Shop from Our Best Sellers in your closest Area",
    image:
      "https://plus.unsplash.com/premium_photo-1664272436668-78437b92929e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Paintings",
    href: "/collections/artcollection",
  },
  {
    title: "Discover new things",
    image: gamingheader,
    tag: "Bags",
    href: "/collections/",
  },
  {
    title: "The Difference",
    image: headphonesheader,
    tag: "Housing",
    href: "/collections/",
  },
  {
    title: "Experience different Artists",
    image: watchheader,
    tag: "Clothing",
    href: "/collections/",
  },
];

export const productCharacterData = [
  {
    title: `Display Resolutions`,
    text: `Retina XDR Display 2532 x 1170 pixels, 19.5:9 ratio, 457 PPI 60Hz`,
  },
  {
    title: `Sound`,
    text: `Custom Tempest Engine 3D Audio, Dolby Atmos & DTS:X (Blu-ray video & UHD Blu-ray video)`,
  },
  {
    title: `Memory`,
    text: `16 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (for background tasks)`,
  },
  {
    title: `Connectivity`,
    text: `Wi-Fi IEEE 802.11ax; Bluetooth 5.1; Gigabit Ethernet; 2× USB 3.2 Gen 2×1; 1× USB 2.0; 1× USB-C with USB 3.2 Gen 2×1; 1× HDMI 2.1`,
  },
];

export const newArrivalsData = [
  {
    title: "Elevate Your Life with Cutting-Edge Electronics",
    content:
      "Cutting-edge electronics that take you to the forefront of innovation and tech",
    image:
      "https://images.unsplash.com/photo-1533158388470-9a56699990c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50aW5nfGVufDB8fDB8fHww",
    href: "/collections/bags",
  },
  {
    title: "Experience the Future with Our New Tech Arrivals",
    content:
      "Latest tech arrivals to embark on an exciting digital journey today.",
    image:
      "https://plus.unsplash.com/premium_photo-1677609898243-63280b6c89a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhaW50aW5nfGVufDB8fDB8fHww",
    href: "/collections/bags",
  },
  {
    title: "Be the First to Unleash Innovation with Newest Tech",
    content: "Stay ahead of the curve in this ever-changing digital world.",
    image:
      "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhaW50aW5nfGVufDB8fDB8fHww",
    href: "/collections/bags",
  },
];
// unused from here
export const NavLinks: NavItemType[] = [
  {
    id: "ee46t",
    name: "Home",
    href: "/home",
  },
  {
    id: "eexct",
    name: "Collection",
    href: "/products",
  },

  {
    id: "h6ii8g",
    name: "Contact",
    href: "/contact",
  },
  {
    id: "h678ty",
    name: "FAQ",
    href: "/faqs",
  },
  {
    id: "h6i78g",
    name: "Checkout",
    href: "/checkout",
  },
  {
    id: "f678ty",
    name: "Cart",
    href: "/cart",
  },
];

export const products = [
  {
    slug: "patrick-day-painting-143",
    name: "Patrick Day Painting",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1673814842207-81760e1f6c99?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    currentPrice: 335,
    previousPrice: 478,
    category: "Art & Collection",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [macbook, shot1, shot2],
    overview:
      "A vibrant Patrick Day painting that brings the essence of Irish culture into your home.",
  },
  {
    slug: "modern-art-canvas-painting-165",
    name: "Modern Art Canvas Painting",
    coverImage:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    currentPrice: 450,
    previousPrice: 600,
    category: "Art & Collection",
    rating: 4.9,
    reviews: 78,
    pieces_sold: 320,
    onSale: false,
    shots: [jbl, shot1, shot2],
    overview:
      "A stunning abstract canvas painting that adds a modern touch to any space.",
  },
  {
    slug: "vintage-leather-bag-12",
    name: "Vintage Leather Bag",
    coverImage:
      "https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fHww",
    currentPrice: 552,
    previousPrice: 585,
    category: "Bags",
    rating: 4.8,
    reviews: 102,
    pieces_sold: 600,
    onSale: true,
    shots: [iphone, shot1, shot2],
    overview:
      "A timeless vintage leather bag crafted with precision, perfect for daily use.",
  },
  {
    slug: "handcrafted-tote-bag-663",
    name: "Handcrafted Tote Bag",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFnfGVufDB8fDB8fHww",
    currentPrice: 338,
    previousPrice: 391,
    category: "Bags",
    rating: 4.7,
    reviews: 50,
    pieces_sold: 430,
    onSale: true,
    shots: [pixel, shot1, shot2],
    overview:
      "This elegant handcrafted tote bag is made from eco-friendly materials and designed for durability.",
  },

  {
    slug: "abstract-cityscape-painting-146",
    name: "Abstract Cityscape Painting",
    coverImage:
      "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    currentPrice: 500,
    previousPrice: 650,
    category: "Art & Collection",
    rating: 4.9,
    reviews: 75,
    pieces_sold: 420,
    onSale: true,
    shots: [gamingcontrollwe, shot1, shot2],
    overview:
      "A breathtaking cityscape painting that captures urban life in vibrant colors.",
  },
  {
    slug: "leather-backpack-157",
    name: "Premium Leather Backpack",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1664353833832-b03ab1a002b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    currentPrice: 585,
    previousPrice: 628,
    category: "Bags",
    rating: 4.8,
    reviews: 80,
    pieces_sold: 400,
    onSale: false,
    shots: [fifa, shot1, shot2],
    overview:
      "A luxurious leather backpack offering both style and practicality for professionals.",
  },

  {
    slug: "handwoven-crossbody-bag-112",
    name: "Handwoven Crossbody Bag",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1672829371769-bcff266023a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    currentPrice: 342,
    previousPrice: 411,
    category: "Bags",
    rating: 4.8,
    reviews: 66,
    pieces_sold: 500,
    onSale: true,
    shots: [ear, shot1, shot2],
    overview:
      "A unique handwoven crossbody bag made from high-quality materials, perfect for casual outings.",
  },
];

export const productsSection = {
  heading: "Shop Now, Look Good Later",
  description:
    "We have a buch of collections for you! Lets explore and find your dream shoes, make it happen",
};

const shoeBrands = ["Nike", "Alexander Mqueen", "New Balance", "Compass"];

const shoeTypes = ["Type", "Sandals", "Sneakers", "Boots"];

const sizes = ["Size", "S", "M", "L", "XL", "XXl"];

const prices = [
  "Price",
  "Below $100",
  "Below $200",
  "Below $300",
  "Below $400",
];

export const filters = [shoeBrands, prices, sizes, shoeTypes];

// remove this
export const phoneLinks = [
  {
    title: "Vas",
    links: [
      { href: "/collections/artcollection", name: "Fusion F-22" },
      { href: "/collections/artcollection", name: "Hyperion HX-1" },
      { href: "/collections/artcollection", name: "Horizon H-88" },
      { href: "/collections/artcollection", name: "Nova N-s5" },
      { href: "/collections/artcollection", name: "Zenith z-9" },
      { href: "/collections/artcollection", name: "Vortex v-5" },
    ],
  },
  {
    title: "Smart Watches",
    links: [
      { href: "/collections/smart-watches", name: "Apex Fitness Watch" },
      { href: "/collections/smart-watches", name: "Horizon Smart Watch" },
      { href: "/collections/smart-watches", name: "Horizon Smart Watch" },
      { href: "/collections/smart-watches", name: "Nexus Smart Watch" },
      { href: "/collections/smart-watches", name: "Nova Smart Watch" },
    ],
  },
];

export const footerData = {
  description: "Multi Vendor Ecommerce Platform",
  footerLinks: [
    {
      title: "Main Pages",
      links: [
        { href: "/home", name: "Home" },
        { href: "/products", name: "Collections" },
        { href: "/cart", name: "Cart" },
        { href: "/checkout", name: "Checkout" },
      ],
    },
    {
      title: "Single Pages",
      links: [
        { href: "/product/watch2", name: "Product Single" },
        {
          href: "/blog/the-evolution-of-sneaker-culture-a-historical-perspective",
          name: "Blog Single",
        },
      ],
    },
    {
      title: "Other Pages",
      links: [{ href: "/rt", name: "Not Found" }],
    },
    {
      title: "Utility Pages",
      links: [
        { href: "/forgot-pass", name: "Forgot Password" },
        { href: "/login", name: "Login" },
        { href: "/signup", name: "Signup" },
        { href: "/forgot-pass", name: "Forget Password" },
        { href: "/creation-type", name: "Account Type" },
        { href: "/profile/", name: "Profile" },
        { href: "/profile/my-orders", name: "My Orders" },
        { href: "/profile/wishlist", name: "Wishlists" },
      ],
    },
  ],
};
