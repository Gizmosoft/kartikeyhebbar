import education from '../data/education.json';
import type { EducationData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { SectionTitle } from '../components/ui/SectionTitle';
import { EducationItem } from '../components/sections/EducationItem';
import styles from './ListPage.module.css';

const educationData = education as EducationData;

export function EducationPage() {
  return (
    <PageShell>
      <SectionTitle>{educationData.heading}</SectionTitle>
      <div className={styles.stack}>
        {educationData.entries.map((entry) => (
          <EducationItem key={entry.id} entry={entry} />
        ))}
      </div>
    </PageShell>
  );
}
