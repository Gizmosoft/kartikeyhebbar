import type { SkillsData } from '../../types/content';
import { getImage } from '../../lib/images';
import { ExternalLink } from '../ui/ExternalLink';
import styles from './SkillGrid.module.css';

export function SkillGrid({ data }: { data: SkillsData }) {
  return (
    <div className={styles.wrap}>
      {data.groups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h3 className={styles.groupTitle}>{group.title}</h3>
          <div className={styles.grid}>
            {group.items.map((item) => (
              <div key={item.name} className={styles.skill}>
                <img src={getImage(item.logo)} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.group}>
        <h3 className={styles.groupTitle}>Other Technologies</h3>
        <ul className={styles.list}>
          {data.otherTechnologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className={styles.group}>
        <h3 className={styles.groupTitle}>Courses & Certifications</h3>
        <ul className={styles.certs}>
          {data.certifications.map((cert) => (
            <li key={`${cert.title}-${cert.issuer}`}>
              <ExternalLink href={cert.url} showIcon={false}>
                {cert.title}
                <small className={styles.issuer}>{cert.issuer}</small>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
