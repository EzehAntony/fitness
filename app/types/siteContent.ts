export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Reviews {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export interface SiteContent {
  hero: {
    name: string;
    title: string;
    tagline: string;
    ctaButtons: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  };
  about: {
    title: string;
    content: string;
    approach: string;
    experience: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  gallery: {
    title: string;
    description: string;
    images: Array<{
      id: number;
      src: string;
      alt: string;
      category: string;
    }>;
  };
  reviews: Reviews;
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    socialMedia: {
      instagram: string;
      facebook: string;
      youtube: string;
    };
  };
  footer: {
    copyright: string;
  };
} 