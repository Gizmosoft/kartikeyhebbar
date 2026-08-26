import type { Experience } from '../../types/content';
import { getImage } from '../../lib/images';
import { Badge } from '../ui/Badge';
import styles from './ExperienceCard.module.css';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src={getImage(experience.logo)}
          alt={`${experience.company} logo`}
        />
        <div>
          <h3 className={styles.company}>{experience.company}</h3>
          <p className={styles.meta}>
            {experience.title} · {experience.location}
          </p>
          <p className={styles.dates}>{experience.dates}</p>
        </div>
      </div>
      <ul className={styles.bullets}>
        {experience.bullets.map((bullet) => (
          <li key={bullet.slice(0, 48)}>{bullet}</li>
        ))}
      </ul>
      <div className={styles.stack}>
        {experience.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </article>
  );
}
