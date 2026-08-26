import type { ResearchItem } from '../../types/content';
import { ExternalLink } from '../ui/ExternalLink';
import styles from './ResearchCard.module.css';

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.paper}>{item.paper}</p>
      <p className={styles.issued}>{item.issued}</p>
      <div className={styles.description}>
        {item.description.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      {item.url ? (
        <ExternalLink href={item.url}>View Research</ExternalLink>
      ) : null}
    </article>
  );
}
