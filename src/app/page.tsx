"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="large"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
      ]}
      brandName="Aura Aesthetics"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Redefine Your Beauty"
      description="Experience professional aesthetic treatments tailored to your unique radiance in our luxury sanctuary."
      buttons={[
        {
          text: "Book Consultation",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-stylish-white-office-successful-doctor_8353-9587.jpg"
      imageAlt="luxury aesthetic salon interior"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg",
          alt: "Beautiful spacious office of a dentist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-woman-laying-bed_23-2149341424.jpg",
          alt: "High angle woman laying on bed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-doctor-cosmetology-studio_1157-33838.jpg",
          alt: "Woman with a doctor in cosmetology studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-beautiful-spacious-dental-clinic_8353-9586.jpg",
          alt: "Stylish beautiful spacious dental clinic",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-bride-before-wedding_23-2149860779.jpg",
          alt: "Front view smiley bride before wedding",
        },
      ]}
      avatarText="Trusted by 500+ satisfied clients"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Philosophy"
      description={[
        "We believe aesthetic beauty is a journey, not just a service. Our team combines artistry with medical precision to deliver transformative results.",
        "Every procedure is performed in a relaxing, hygienic environment using state-of-the-art technology.",
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Dermal Fillers",
          description: "Enhance your natural features with expert contouring.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautician-doing-injection-filler-female-client_23-2148875443.jpg",
          imageAlt: "beauty treatment facial filler",
        },
        {
          title: "HydraFacial",
          description: "Deep cleanse and hydrate for a luminous glow.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-cosmetology-studio-procedures_1157-34011.jpg",
          imageAlt: "hydrafacial treatment process",
        },
        {
          title: "Laser Resurfacing",
          description: "Professional laser therapy to smooth skin texture.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-getting-rf-lifting-procedure_107420-74030.jpg",
          imageAlt: "laser skin resurfacing treatment",
        },
      ]}
      title="Signature Services"
      description="Premium treatments crafted to rejuvenate, contour, and revitalize your natural self."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          name: "Basic Glow",
          price: "$150",
          features: [
            "Consultation",
            "HydraFacial",
          ],
          buttons: [
            {
              text: "Select",
            },
          ],
        },
        {
          id: "p2",
          name: "Signature Lift",
          price: "$450",
          features: [
            "Full Consultation",
            "Filler Treatment",
            "Follow-up",
          ],
          buttons: [
            {
              text: "Select",
            },
          ],
        },
        {
          id: "p3",
          name: "Total Renew",
          price: "$800",
          features: [
            "Full Face Contour",
            "Laser Therapy",
            "Priority Booking",
          ],
          buttons: [
            {
              text: "Select",
            },
          ],
        },
      ]}
      title="Membership & Pricing"
      description="Transparent pricing for your aesthetic transformation journey."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardThree
      animationType="opacity"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Lip Contouring",
          price: "Before/After",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-bride-with-makeup_23-2149640928.jpg",
          imageAlt: "lip filler result before after",
        },
        {
          id: "2",
          name: "Skin Renewal",
          price: "Before/After",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-woman-with-hydrated-skin_23-2149432234.jpg",
          imageAlt: "glowing healthy skin result",
        },
        {
          id: "3",
          name: "Facial Sculpting",
          price: "Before/After",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-giving-injection-young-woman_23-2149350081.jpg",
          imageAlt: "facial contouring procedure result",
        },
        {
          id: "4",
          name: "Laser Treatment",
          price: "Before/After",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-gorgeous-woman-massaging-her-face-using-jade-roller_23-2149229388.jpg",
          imageAlt: "laser skin treatment result",
        },
        {
          id: "5",
          name: "Volume Restore",
          price: "Before/After",
          imageSrc: "http://img.b2bpic.net/free-photo/gentle-soft-indoor-portrait-woman-beige-blazer-with-yellow-flower-mount_343596-3227.jpg",
          imageAlt: "facial volume restoration result",
        },
        {
          id: "6",
          name: "Glow Infusion",
          price: "Before/After",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-after-face-surgery-with-lighting-cross_633478-630.jpg",
          imageAlt: "glowing skin infusion result",
        },
      ]}
      title="Transformation Gallery"
      description="Real results from our satisfied clients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alice M.",
          role: "Client",
          testimonial: "The best aesthetic salon I have ever visited. Truly life-changing results.",
          imageSrc: "http://img.b2bpic.net/free-photo/skin-nude-eyebrows-harmony-face_1304-911.jpg",
          imageAlt: "happy beauty client portrait",
        },
        {
          id: "t2",
          name: "Sarah P.",
          role: "Client",
          testimonial: "Expert team, clean facility, and amazing attention to detail.",
          imageSrc: "http://img.b2bpic.net/free-photo/women-making-preparations-wedding_23-2149184347.jpg",
          imageAlt: "confident woman beauty salon",
        },
        {
          id: "t3",
          name: "Elena V.",
          role: "Client",
          testimonial: "So pleased with my results. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-blue-eyed-female-with-gym-outfit_181624-14551.jpg",
          imageAlt: "satisfied aesthetic salon user",
        },
        {
          id: "t4",
          name: "Megan D.",
          role: "Client",
          testimonial: "Professional, kind, and incredibly skilled. A gem.",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-european-blonde-woman-silk-white-summer-romantic-dress-golden-bracelet-earrings_343596-1776.jpg",
          imageAlt: "confident happy customer portrait",
        },
        {
          id: "t5",
          name: "Chloe S.",
          role: "Client",
          testimonial: "Transformed my skin completely in just a few visits.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cute-girl-looking-away_23-2148436134.jpg",
          imageAlt: "portrait of satisfied young client",
        },
      ]}
      title="Client Stories"
      description="Hear what our clients have to say about their experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is there any downtime?",
          content: "Most treatments require minimal to no downtime.",
        },
        {
          id: "q2",
          title: "Are consultations free?",
          content: "Initial consultations are included in all treatment bookings.",
        },
        {
          id: "q3",
          title: "Who performs the treatments?",
          content: "All procedures are performed by our licensed medical aesthetic experts.",
        },
      ]}
      title="Common Questions"
      description="Find answers to frequently asked questions about our treatments."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to begin your journey?"
      buttons={[
        {
          text: "Send Message",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Aura Aesthetics"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
