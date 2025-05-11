import { SiteContent } from '../types/siteContent';

// Site-wide content data
export const siteContent: SiteContent = {
  general: {
    title: "Beneviv",
    tagline: "Transform your life with personalized fitness and wellness coaching",
    logo: "/images/logo.png",
    logoAlt: "Beneviv: Fitness Training Logo",

  },
  // Hero section content
  hero: {
    name: "Beneviv",
    title: "Fitness Training",
    tagline: "Transform your life with personalized fitness and wellness coaching",
    ctaButtons: {
      primary: {
        text: "Start Your Journey",
        link: "/contact"
      },
      secondary: {
        text: "Learn More",
        link: "/about"
      }
    }
  },
  
  // About section content
  about: {
    title: "About Beneviv",
    content: "At Beneviv, we believe in a holistic approach to fitness and wellness. Our expert coaches are dedicated to helping you achieve your health goals through personalized training programs, nutrition guidance, and lifestyle coaching.",
    approach: "Our approach combines evidence-based training methods with personalized attention to ensure you get the best results. We focus on sustainable progress and long-term success.",
    experience: "With years of experience in the fitness industry, our coaches have helped countless clients transform their lives and achieve their fitness goals.",
    image: "https://images.pexels.com/photos/14623627/pexels-photo-14623627.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Services section content
  services: {
    title: "Our Services",
    items: [
      {
        title: "Personal Training",
        description: "One-on-one training sessions tailored to your specific goals and needs. Get personalized attention and guidance from our expert coaches.",
        image: "/images/personal-training.png"
      },
      {
        title: "Online Coaching",
        description: "Flexible online coaching programs that fit your schedule. Receive customized workout plans, nutrition guidance, and regular check-ins.",
        image: "/images/online-coaching.png"
      },
      {
        title: "Group Classes",
        description: "Join our energetic group classes for motivation and community support. From HIIT to yoga, we offer a variety of classes for all fitness levels.",
        image: "/images/group-classes.png"
      }
    ]
  },
  
  // Gallery section content
  gallery: {
    title: "Our Fitness Journey",
    description: "Take a look at some of our success stories and training sessions",
    images: [
      {
        id: 1,
        src: "https://images.pexels.com/photos/6740292/pexels-photo-6740292.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "Personal training session",
        category: "training"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/6740309/pexels-photo-6740309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Group fitness class",
        category: "group"
      },
      {
        id: 3,
        src: "https://images.pexels.com/photos/6740311/pexels-photo-6740311.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Wellness coaching session",
        category: "wellness"
      }
    ]
  },
  reviews: {
    title: "Client Success Stories",
    description: "See what our clients have to say about their experience with Beneviv",
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Fitness Enthusiast",
        image: "/images/reviews/sarah.jpg",
        quote: "Beneviv's personalized approach to fitness has transformed my life. Their coaches are knowledgeable, supportive, and truly invested in my success.",
        rating: 5
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Business Professional",
        image: "/images/reviews/mike.jpg",
        quote: "The online coaching program fits perfectly with my busy schedule. I've seen amazing results while working with Beneviv's expert coaches.",
        rating: 5
      },
      {
        id: 3,
        name: "Emma Davis",
        role: "Yoga Practitioner",
        image: "/images/reviews/emma.jpg",
        quote: "Beneviv's holistic approach to wellness has helped me achieve balance in my life. Their group classes are energizing and fun!",
        rating: 5
      }
    ]
  },
  
  successStory: {
    title: "Transformation Success Story",
    description: "See how Jessica transformed her life in just 12 weeks",
    name: "Jessica Thompson",
    role: "Transformation Success Story",
    image: "/images/transformation/jessica-transformation.jpg",
    story: "If you're serious about finally getting in shape and making real changes, working with Onur is hands down the best decision you'll make. He's got the system, the knowledge, and the accountability to get you results but you have to be ready to commit. If you do, it's honestly life changing. When I started with Onur 12 weeks ago, I was at my heaviest and just felt completely stuck. I kept telling myself I'd get back on track, but nothing really changed. I knew I needed structure, someone to hold me accountable, and a plan that actually worked not just something I'd follow for a couple of weeks and then fall off again. And omg... it worked. In 12 weeks, I've dropped over 25 pounds, lost more than 10% body fat, and most importantly I finally feel in control of my health again. But it wasn't just about the weight. Onur helped me break the bad habits that kept me spinning my wheels, snacking, yo-yo dieting, obsessing over calories instead of focusing on the right foods. He didn't just hand me some generic plan; he actually adjusted things based on how my body was responding, what was working, what needed tweaking. That level of attention made all the difference. I've had trainers before. I've been in and out of the gym for years, and honestly, I thought I could figure it out on my own. But working with Onur was different. If you're tired of starting over and actually want to see real progress, this is it. Just commit, show up, and trust the process. You won't regret it.",
    results: [
      "Dropped over 25 pounds in 12 weeks",
      "Lost more than 10% body fat",
      "Developed sustainable healthy habits",
      "Gained confidence and control over health"
    ]
  },
  
  // Contact section content
  contact: {
    title: "Get Started Today",
    description: "Ready to transform your life? Contact us to begin your fitness journey with Beneviv.",
    email: "hello@beneviv.com",
    phone: "+13233648208",
    address: "123 Fitness Way, Suite 456, Wellness City, CA 90210",
    socialMedia: {
      instagram: "https://instagram.com/beneviv",
      facebook: "https://facebook.com/beneviv",
      youtube: "https://youtube.com/beneviv"
    }
  },
  
  // Footer content
  footer: {
    copyright: "© 2024 Beneviv: Fitness Training. All rights reserved."
  }
};

export default siteContent; 