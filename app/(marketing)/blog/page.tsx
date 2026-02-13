import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { listBlogPosts } from "@/lib/content/blog";

export default async function BlogPage() {
  const posts = await listBlogPosts();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="mt-3 text-slate-600">Articoli e approfondimenti.</p>

        <ul className="mt-8 space-y-3">
          {posts.map((p) => (
            <li key={p.slug} className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">
              <Link href={`/blog/${p.slug}`} className="font-medium">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
