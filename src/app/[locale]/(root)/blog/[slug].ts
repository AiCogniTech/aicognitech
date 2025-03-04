import { fetchAllBlogSlugsFromSanity, fetchBlogDetailsFromSanity } from "@/lib/actions/blogs.actions";

// pages/blog/[slug].js
export async function getStaticPaths() {
    const slugs = await fetchAllBlogSlugsFromSanity(); // Write a helper to get all slugs
    const paths = slugs.map((slug) => ({ params: { slug } }));
    return { paths, fallback: 'blocking' };
  }
  
  interface Iparams {
    params: Promise<{
      slug: string
    }>
}
export async function getStaticProps({ params }: Iparams) {
    const {slug} = await params
    const blog = await fetchBlogDetailsFromSanity(slug);
    if (!blog) {
      return { notFound: true };
    }
    return {
      props: { blog },
      // Revalidate every hour (3600 seconds) for updated content
      revalidate: 3600,
    };
  }
  