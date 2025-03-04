import ClientSpecificBlogDetails from "@/components/blogs/ClientSpecificBlogDetails";
import { fetchAllBlogSlugsFromSanity, fetchBlogDetailsFromSanity } from "@/lib/actions/blogs.actions";

interface Iparams {
    params: Promise<{
        locale: string,
        slug: string
    }>
}

export async function generateMetadata({ params }: Iparams) {
    const {slug,locale} = await params
    const blog = await fetchBlogDetailsFromSanity(slug);
    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        url: `https://www.aicognitech.com/${locale}/blog/${slug}}`,
      },
    };
  }

const SpecificBlogPage = async ({ params }: Iparams) => {
    const { locale, slug } = await params;
    // console.log("Page params:", { locale, slug });
    return (
        <ClientSpecificBlogDetails locale={locale} slug={slug} />
    );
}

export default SpecificBlogPage;


export async function generateStaticParams() {
    const slugs = await fetchAllBlogSlugsFromSanity();
    return slugs.map((slug) => ({ slug }));
}
