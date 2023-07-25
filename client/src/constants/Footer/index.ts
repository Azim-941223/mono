import iconFacebook from "../../assets/icons/ic_facebook.svg";
import iconInstagram from "../../assets/icons/ic_instagram.svg";
import iconTwitter from "../../assets/icons/ic_twitter.svg";

import { footerDeliveryType, footerSocialsType } from "../../types/Footer";

export const footerStore = ["about-us", "licenses", "catalog"];

export const footerDelivery: footerDeliveryType[] = [
  {
    dayA: "mon",
    dayB: "fri",
    timeA: "06.00",
    timeB: "23.00",
  },
  {
    dayA: "sat",
    dayB: "sun",
    timeA: "08.00",
    timeB: "21.00",
  },
];

export const footerNumber = "+996 (555) 55-55-55";

export const footerSocials: footerSocialsType[] = [
  {
    src: iconFacebook,
    alt: "Facebook",
    href: "https://facebook.com",
  },
  {
    src: iconInstagram,
    alt: "Instagram",
    href: "https://instagram.com",
  },
  {
    src: iconTwitter,
    alt: "Twitter",
    href: "https://twitter.com",
  },
];
