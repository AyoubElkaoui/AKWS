import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "AD-Loodgietersbedrijf",
    designation: "Eigenaar",
    image: image1,
    content:
      "Dankzij de snelle en gebruiksvriendelijke website hebben wij onze klantenservice aanzienlijk kunnen verbeteren. De SEO-optimalisatie zorgt ervoor dat we goed zichtbaar zijn voor nieuwe klanten.",
  },
  {
    id: 2,
    name: "ProBandenService",
    designation: "Manager",
    image: image2,
    content:
      "De website gebouwd met WordPress en Astra heeft een grote impact gehad op onze online aanwezigheid. Dankzij de SEO kunnen klanten ons eenvoudig vinden voor bandenservices.",
  },
  {
    id: 3,
    name: "Ayoub Elkaoui Portfolio",
    designation: "Full-Stack Developer",
    image: image1,
    content:
      "De portfoliowebsite biedt een professioneel platform om mijn werk te presenteren. De snelheid en moderne uitstraling zorgen voor een sterke indruk op klanten en werkgevers. Dankzij de uitstekende bouw in Next.js en TypeScript is het een krachtig visitekaartje geworden.",
  },
];
