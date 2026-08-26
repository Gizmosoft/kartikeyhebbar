import type { AspirationItem } from '../../types/content';
import styles from './AspirationItem.module.css';

export function AspirationItemView({ item }: { item: AspirationItem }) {
  return (
    <article className={styles.item}>
      <h3 className={styles.question}>{item.question}</h3>
      {item.answerType === 'bullets' ? (
        <ul className={styles.bullets}>
          {item.bullets.map((bullet) => (
            <li key={bullet.slice(0, 48)}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <div className={styles.paragraphs}>
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      )}
    </article>
  );
}
