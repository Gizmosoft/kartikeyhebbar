import type { EducationEntry } from '../../types/content';
import styles from './EducationItem.module.css';

export function EducationItem({ entry }: { entry: EducationEntry }) {
  return (
    <article className={styles.item}>
      <h3 className={styles.school}>
        {entry.school} <span className={styles.location}>{entry.location}</span>
      </h3>
      {entry.affiliation ? (
        <p className={styles.affiliation}>{entry.affiliation}</p>
      ) : null}
      <p className={styles.degree}>{entry.degree}</p>
      <p className={styles.field}>{entry.field}</p>
      {/* <p className={styles.grade}>
        Grade: <strong>{entry.grade}</strong>
      </p> */}

      {entry.courses.length > 0 ? (
        <div className={styles.block}>
          <h4>Relevant Courses:</h4>
          <ul>
            {entry.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {entry.achievements.length > 0 ? (
        <div className={styles.block}>
          <h4>Achievements:</h4>
          <ul>
            {entry.achievements.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {entry.responsibilities.length > 0 ? (
        <div className={styles.block}>
          <h4>Position of responsibility:</h4>
          <ul>
            {entry.responsibilities.map((item) => (
              <li key={item.title}>
                <strong>
                  {item.title}, {item.role}:{' '}
                </strong>
                <span className={styles.muted}>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
