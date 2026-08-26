import site from '../../data/site.json';
import type { SiteData } from '../../types/content';
import styles from './Footer.module.css';

const siteData = site as SiteData;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{siteData.footer}</p>
    </footer>
  );
}
