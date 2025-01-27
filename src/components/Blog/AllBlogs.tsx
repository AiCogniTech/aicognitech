"use client";
// import { useBlogPostContext } from "@/context/BlogContext";
import { fetchBlogs } from "@/lib/actions/blogs.actions";
import { ArrowRight } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const AllBlogs = ({locale}: {locale: string}) => {
    const [blogPosts, setBlogPosts] = useState<Post[]>([]);

    // Safely access searchParams inside a Suspense boundary
    const categorySlug = useSearchParams()?.get("category");
  
    useEffect(() => {
      const fetchBlogPosts = async () => {
        try {
  
          const data: Post[] = await fetchBlogs({ categorySlug });
  
          if (data?.length) {
            setBlogPosts(data);
          } else {
            setBlogPosts([]);
          }
        } catch (error) {
          console.error("Error fetching blog posts:", error);
        }
      };
  
      fetchBlogPosts();
    }, [categorySlug]); // Make sure this effect runs only once when the component mounts

    const router = useRouter();

    const customComponents = {
        types: {
          image: ({ value }: { value: any }) => {
            // Ensure `value?.asset?.url` is correctly passed
            const imageUrl = value?.asset?.url;
            if (!imageUrl) {
              return <div className="w-full h-60 bg-gray-200">Image not available</div>;
            }
    
            return (
              <Image
                src={imageUrl}
                alt={value?.alt || "Image"}
                className="w-full h-auto"
                decoding="async"
                loading="lazy"
              />
            );
          },
        },
      };

    // Function to format the date to "Month Day, Year"
    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    return (
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
                <div
                    key={index}
                    className="border-2 border-text rounded-xl overflow-hidden shadow-lg group transition-all duration-300 ease-in-out"
                >
                    <div className="relative">
                        {/* Image */} 
                        <Image
                            src={post.imageSrc}
                            alt={post.title}
                            className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                            height={300}
                            width={400}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-5">
                        <h2 className="text-primary text-lg md:text-xl lg:text-2xl font-bold text-ellipsis line-clamp-3 hover:cursor-pointer"
                            onClick={() => router.push(`/${locale}/blog/${post.slug}`)}
                        >
                            {post.title}
                        </h2>
                        <p className="text-white text-base font-inter">
                            {formatDate(post.publishedAt)}
                        </p>
                        {/* Categories */}
                        <div className="flex gap-2 mt-2">
                            {post.categories.map((category) => (
                                <span
                                    key={category._id}
                                    className="text-sm md:text-base font-normal text-text-secodnary border border-text-secodnary rounded-full px-4 py-2 font-inter"
                                >
                                    {category.title}
                                </span>
                            ))}
                        </div>

                        {/* Body Preview */}
                        <div className="text-text-secodnary text-base lg:text-lg line-clamp-3 font-light">
                            <PortableText value={post.body} components={customComponents} />
                        </div>


                        {/* Read More Button */}
                        <Link
                            href={`/${locale}/blog/${post.slug}`}
                            className="flex items-center gap-2 text-base md:text-lg text-primary/70 hover:text-primary hover:scale-[1.01] transition-all duration-500"
                        >
                            Read Now
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AllBlogs;
