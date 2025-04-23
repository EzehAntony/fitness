// Site-wide content data
export const siteContent = {
  // Hero section content
  hero: {
    name: "MYGOALFITNESS",
    title: "Gym Coach",
    tagline: "Unleash Your Inner Beast — Train Hard. Get Real Results.",
    ctaButtons: {
      primary: {
        text: "Start Training",
        link: "#start"
      },
      secondary: {
        text: "Learn More",
        link: "#about"
      }
    }
  },
  
  // About section content
  about: {
    title: "About Me",
    content: "I'm a dedicated fitness coach with over 10 years of experience helping people transform their bodies and lives through proper training and nutrition.",
    approach: "I believe in a holistic approach to fitness that combines strength training, proper nutrition, and mental discipline. My programs are tailored to your specific goals and needs, ensuring you get the best results possible.",
    experience: "With certifications in personal training, nutrition, and specialized programs for athletes, I've helped hundreds of clients transform their bodies and lives. Whether you're a beginner or an experienced athlete, I have the expertise to guide you to your fitness goals."
  },
  
  // Services section content
  services: {
    title: "My Services",
    items: [
      {
        title: "Personal Training",
        description: "One-on-one training sessions tailored to your specific goals and needs.",
        image: "/images/personal-training.png"
      },
      {
        title: "Online Coaching",
        description: "Remote coaching programs with personalized workout and nutrition plans.",
        image: "/images/online-coaching.png"
      },
      {
        title: "Group Classes",
        description: "High-energy group sessions for motivation and community support.",
        image: "/images/group-classes.png"
      }
    ]
  },
  
  // Gallery section content
  gallery: {
    title: "Fitness Gallery",
    description: "Check out some of our training sessions, workouts, and success stories.",
    images: [
      {
        id: 1,
        src: '/images/image-1.jpg',
        alt: 'Fitness Training',
        category: 'people'
      },
      {
        id: 2,
        src: '/images/image-2.jpg',
        alt: 'Weight Lifting',
        category: 'people'
      },
      {
        id: 3,
        src: '/images/image-3.jpg',
        alt: 'Cardio Workout',
        category: 'cardio'
      },
      {
        id: 4,
        src: '/images/image-4.jpg',
        alt: 'Nutrition Planning',
        category: 'suppliments'
      },
      {
        id: 5,
        src: '/images/image-5.jpg',
        alt: 'Gym',
        category: 'gym'
      },
      {
        id: 6,
        src: '/images/image-6.jpg',
        alt: 'gym',
        category: 'equipments'
      }
    ]
  },
  
  // Contact section content
  contact: {
    title: "Get In Touch",
    description: "Ready to start your fitness journey? Contact me today!",
    email: "jamie@example.com",
    phone: "(555) 123-4567",
    socialMedia: {
      instagram: "https://instagram.com/jamiecole",
      facebook: "https://facebook.com/jamiecolefitness",
      youtube: "https://youtube.com/jamiecole"
    }
  },
  
  // Footer content
  footer: {
    copyright: "© 2023 MYGOALFITNESS. All rights reserved."
  }
};

export default siteContent; 