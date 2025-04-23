# Fitness Coach Landing Page

A modern, SEO-optimized landing page for fitness coaches built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🔍 SEO optimized with proper metadata
- 📱 Mobile-friendly layout
- ⚡ Fast performance with Next.js
- 🎯 Easy content management
- 🎭 Beautiful animations and transitions

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customizing Content

All the content is managed through the `app/data/siteConfig.ts` file. Here's how to customize different sections:

### Site Configuration

```typescript
export const siteConfig = {
  name: "Your Site Name",
  description: "Your site description",
  url: "https://yoursite.com",
  // ... other configurations
};
```

### Coach Information

```typescript
coach: {
  name: "Coach Name",
  title: "Coach Title",
  bio: "Coach biography",
  image: "/images/coach.jpg",
  certifications: [
    "Certification 1",
    "Certification 2",
    // ... more certifications
  ],
}
```

### Services

```typescript
services: [
  {
    title: "Service Title",
    description: "Service description",
    price: "Price",
    features: [
      "Feature 1",
      "Feature 2",
      // ... more features
    ],
  },
  // ... more services
]
```

### Testimonials

```typescript
testimonials: [
  {
    name: "Client Name",
    role: "Client Role",
    content: "Testimonial content",
    image: "/images/testimonial-1.jpg",
  },
  // ... more testimonials
]
```

### FAQ

```typescript
faq: [
  {
    question: "FAQ Question",
    answer: "FAQ Answer",
  },
  // ... more FAQs
]
```

## Images

Place your images in the `public/images` directory:
- Coach photo: `public/images/coach.jpg`
- Testimonial photos: `public/images/testimonial-1.jpg`, `testimonial-2.jpg`, etc.
- OG image: `public/images/og-image.jpg`

## SEO Optimization

The site is already optimized for SEO with:
- Proper meta tags
- Open Graph images
- Twitter cards
- Semantic HTML structure
- Responsive images
- Fast loading times

## Deployment

The site can be deployed to any platform that supports Next.js, such as:
- Vercel
- Netlify
- AWS
- Google Cloud Platform

## License

MIT License - feel free to use this template for your own projects!
