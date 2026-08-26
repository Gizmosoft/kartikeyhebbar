import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { HomeData, SiteData } from '../../types/content';
import { getImage } from '../../lib/images';
import styles from './ProfileHero.module.css';

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
} as const;

interface ProfileHeroProps {
  home: HomeData;
  site: SiteData;
  onBookMeeting: () => void;
}

function splitItems(value: string): string[] {
  return value
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ProfileHero({ home, site, onBookMeeting }: ProfileHeroProps) {
  const taglineItems = splitItems(home.tagline);
  const stackItems = home.stackLines.flatMap(splitItems);

  return (
    <section className={styles.hero}>
      <aside className={styles.profile}>
        <img
          className={styles.photo}
          src={getImage(home.photo)}
          alt={home.name}
          width={220}
          height={220}
        />
        <h1 className={styles.name}>{home.name}</h1>
        <p className={styles.role}>{home.role}</p>
        <div className={styles.social}>
          {site.social.map((item) => {
            const Icon =
              iconMap[item.id as keyof typeof iconMap] ?? Mail;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={styles.socialBtn}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        {taglineItems.length > 0 ? (
          <ul className={styles.chipList}>
            {taglineItems.map((item) => (
              <li key={item} className={styles.chip}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {stackItems.length > 0 ? (
          <ul className={`${styles.chipList} ${styles.stackList}`}>
            {stackItems.map((item) => (
              <li key={item} className={`${styles.chip} ${styles.stackChip}`}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </aside>

      <div className={styles.about}>
        <h2 className={styles.greeting}>{home.greeting}</h2>
        {home.bio.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className={styles.bio}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
        <div className={styles.location}>
          <MapPin size={16} />
          <span>{home.location}</span>
        </div>
        <button type="button" className={styles.cta} onClick={onBookMeeting}>
          {home.calendlyLabel}
        </button>
      </div>
    </section>
  );
}
