export const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/camv_supervolei/",
    username: "@camv_supervolei",
    label: "Instagram",
  },
  whatsapp: {
    url: "https://wa.me/5562981994689",
    label: "Whatsapp",
  },
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
