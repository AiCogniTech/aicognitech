"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { client } from "@/sanity/lib/client"; // Assuming client is properly set up
import { useSearchParams } from "next/navigation";
import { fetchBlogs } from "@/lib/actions/blogs.actions";

// Create the context with default values
export const BlogPostContext = createContext<{
    blogPosts: Post[];
    setBlogPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}>({
    blogPosts: [],
    setBlogPosts: () => {},
});

// Context provider component
export const BlogPostContextProvider = ({ children }: { children: ReactNode }) => {
    const [blogPosts, setBlogPosts] = useState<Post[]>([]);

    const categorySlug = useSearchParams().get("category");
  
    useEffect(() => {
      const fetchBlogPosts = async () => {
        try {
          
          const data = await fetchBlogs({ categorySlug });
          
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
  
    return (
      <BlogPostContext.Provider value={{ blogPosts, setBlogPosts }}>
        {children}
      </BlogPostContext.Provider>
    );
  };
  

// Custom hook to use BlogPostContext
export const useBlogPostContext = () => useContext(BlogPostContext);
