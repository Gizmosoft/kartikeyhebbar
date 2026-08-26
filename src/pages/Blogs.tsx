import blogs from '../data/blogs.json';
import type { BlogsData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { SectionTitle } from '../components/ui/SectionTitle';
import { BlogCard } from '../components/sections/BlogCard';
import styles from './ListPage.module.css';

const blogsData = blogs as BlogsData;

export function BlogsPage() {
  return (
    <PageShell>
      <SectionTitle>{blogsData.heading}</SectionTitle>
      <div className={styles.stack}>
        {blogsData.items.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </PageShell>
  );
}
