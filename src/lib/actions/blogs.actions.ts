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

export const randomBlog = async (language: string) => {
  const total = await client.fetch("count(*[_type == 'doc'])")

  const randomIndex = Math.floor(Math.random() * (total + 1))
  const data = await client.fetch(`
        *[_type == "post" && (!defined($language) || language == $language)] | order(_createdAt asc)[$randomIndex]{
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          body,
          language,
          author->{
            _id,
            name,
            destination,
            "socials": socials[]{platform, url},
            bio,
            "slug": slug.current,
            "image_url": image.asset->url
          },
          categories[]->{
            title,
            "slug": slug.current,
            description,
            _id
          },
          "imageSrc": mainImage.asset->url
        }
            `, { language, randomIndex });
  return data
}

export const fetchBlogs = async ({ categorySlug, language }: { categorySlug: string | null, language: string }) => {
  const data = await client.fetch(`
              *[_type == "post" && (!defined($categorySlug) || references(*[_type == "category" && slug.current == $categorySlug]._id)) && (!defined($language) || language == $language)]{
            _id,
            title,
            "slug": slug.current,
            publishedAt,
            body,
            language,
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
              "slug": slug.current,
              description,
              _id
            },
            "imageSrc": mainImage.asset->url
          } | order(publishedAt asc)
            `, { categorySlug, language });
  return data
}

export const fetchBlogDetails = async (selectedLanguage: string) => {
  const language = selectedLanguage || "en"; // Default to English if undefined

  const query = `*[_type == "post" && (!defined($language) || language == $language)]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    body,
    language,
    author->{
      _id,
      name,
      destination,
      "socials": socials[]{platform, url},
      bio,
      "slug": slug.current,
      "image_url": image.asset->url
    },
    categories[]->{
      title,
      "slug": slug.current,
      description,
      _id
    },
    "imageSrc": mainImage.asset->url ,
     "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
   _id,
    title,
    "slug": slug.current,
    publishedAt,
    body,
    language,
    author->{
      _id,
      name,
      destination,
      "socials": socials[]{platform, url},
      bio,
      "slug": slug.current,
      "image_url": image.asset->url
    },
    categories[]->{
      title,
      "slug": slug.current,
      description,
      _id
    },
  "imageSrc": mainImage.asset->url ,
    language
  },
  }
  }`;

  const data = await client.fetch(query, { language: language });

  return data;
};
