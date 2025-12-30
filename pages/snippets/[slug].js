import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "@/lib/mdx";
import SnippetLayout from "@/layouts/snippets";
import MDXComponents from "@/components/MDXComponents";

export default function Snippet({ mdxSource, frontMatter }) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const snippets = await getFiles("snippets");
  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

// export async function getStaticProps({ params }) {
//   const snippet = await getFileBySlug("snippets", params.slug);

//   return { props: snippet };
// }

export async function getStaticProps({ params }) {
  try {
    const snippet = await getFileBySlug("snippets", params.slug);

    if (!snippet) return { notFound: true };

    return { props: snippet };
  } catch (err) {
    console.error("Failed to load snippet:", params.slug, err);
    return { notFound: true };
  }
}
