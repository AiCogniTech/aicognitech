import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";

export const RichTextComponent = {
  marks: {
    // Example: custom renderer for the em/italics decorator
    em: ({ children }: any) => <em className="text-gray-600 font-semibold">{children}</em>,

    // Example: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <Link href={value?.href} target={target} rel={target === "_blank" ? "noindex nofollow" : ""}>
          {children}
        </Link>
      );
    },
    highlight: ({ children }: any) => (
      <h2 className="text-xl text-primary">{children}</h2>
    ),
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
  },
  block: {
    // Customizing common block types
    h1: ({ children }: any) => <h1 className="text-6xl font-bold text-primary">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-5xl font-bold text-primary">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-4xl font-bold text-primary">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-3xl font-semibold text-primary">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-2xl font-semibold text-primary">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-xl font-semibold text-primary">{children}</h6>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-purple-500 pl-4">{children}</blockquote>,

    // Custom handling for images
  },
  list: {
    // Customizing common list types
    bullet: ({ children }: any) => <ul className="list-disc pl-5">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-5">{children}</ol>,
    checkmarks: ({ children }: any) => <ol className="text-lg">{children}</ol>,
  },
  listItem: {
    // Customizing list item types
    bullet: ({ children }: any) => (
      <li className="text-lg">
          {children}
      </li>
    ),
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
    number: ({ children }: any) => (
      <li className="px-5 text-lg">
          {children}
      </li>
    ),
  },
  types: {
    image: ({ value }: { value: any }) => {
        const imageUrl = urlFor(value).url();
        if (!imageUrl) return <div>Image not available</div>;
  
        return (
          <Image
            src={imageUrl}
            alt={value?.alt || "Image"}
            className="w-full h-auto"
            height={1000}
            width={1000}
            decoding="async"
            loading="lazy"
          />
        );
      },
  },
};