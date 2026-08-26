import styles from './SectionTitle.module.css';

export function SectionTitle({ children }: { children: string }) {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.rule} aria-hidden="true" />
    </div>
  );
}
