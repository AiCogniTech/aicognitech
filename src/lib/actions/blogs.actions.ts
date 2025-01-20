"use server";

import { client } from "@/sanity/lib/client";

export const fetchCategories = async () => {
  const fetchedCategories: Category[] = await client.fetch(`*[_type == "category"]{
        "slug": slug.current,
        title,
        description,
        _id
      }`)
  return fetchedCategories
}

export const fetchBlogs = async ({ categorySlug }: { categorySlug: string | null }) => {
  const data = await client.fetch(`
              *[_type == "post" && (!defined($categorySlug) || references(*[_type == "category" && slug.current == $categorySlug]._id))]{
                _id,
                title,
                "slug": slug.current,
                publishedAt,
                body,
                author->{
                  _id,
                  name,
                  destination,
                  "socials": socials[]{platform, url},
                  bio,
                  "slug": slug.current,
                  "image_url": image.asset->url,
                },
                categories[]->{
                  title,
                  slug,
                  description,
                  _id
                },
                "imageSrc": mainImage.asset->url
              } | order(publishedAt asc)
            `, { categorySlug });
  return data
}

export const fetchBlogDetails = async (blogSlug: string) => {
  const data = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      body,
      author->{
        _id,
        name,
        destination,
        "socials": socials[]{platform, url},
        bio,
        "slug": slug.current,
        "image_url": image.asset->url,
      },
      categories[]->{
        title,
        slug,
        description,
        _id
      },
      "imageSrc": mainImage.asset->url
    }`, { slug: blogSlug });
  return data
}