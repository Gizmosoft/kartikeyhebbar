import type { Blog } from '../../types/content';
import { getImage, getPlaceholder } from '../../lib/images';
import { Badge } from '../ui/Badge';
import { ExternalLink } from '../ui/ExternalLink';
import styles from './BlogCard.module.css';

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumbWrap}>
        <img
          className={styles.thumb}
          src={getImage(blog.thumbnail)}
          alt={`${blog.title} thumbnail`}
          onError={(e) => {
            e.currentTarget.src = getPlaceholder();
          }}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          {blog.timestamp} · {blog.readTime} · {blog.category}
        </p>
        <h3 className={styles.title}>{blog.title}</h3>
        <div className={styles.tags}>
          {blog.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <p className={styles.excerpt}>{blog.excerpt}</p>
        <ExternalLink href={blog.source}>Read Full Article</ExternalLink>
      </div>
    </article>
  );
}
