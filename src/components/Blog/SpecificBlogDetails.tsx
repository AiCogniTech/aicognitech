import { PortableText } from "next-sanity";
import React from "react";
import { RichTextComponent } from "../shared/RichTextComponent";

const SpecificBlogDetails = ({ blog }: { blog: Post }) => {
  return (
    <section className="bg-secondary text-text sections_container !my-10 !max-w-screen-xl !w-[85vw] md:w-[80vw] lg:w-[70vw]">
        <PortableText value={blog.body} components={RichTextComponent} />
    </section>
  );
};

export default SpecificBlogDetails;
