export const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/camv_supervolei/",
    username: "@camv_supervolei",
    label: "Instagram",
  },
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
