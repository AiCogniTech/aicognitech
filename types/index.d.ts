interface Category {
  slug: string;
  title: string;
  description: string;
  _id: string;
}

interface Author {
  _id: string;
  name: string;
  destination: string;
  socials: { platform: string; url: string }[]; // Array of social objects with platform and url
  bio: any[]; // You can replace 'any' with a more specific type if needed
  slug: string;
  image_url: string;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  body: any;
  author: Author; // Nested Author object
  categories: Category[]; // Array of Category objects
  imageSrc: string; // URL of the main image
}
