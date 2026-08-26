import work from '../data/work.json';
import type { WorkData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ExperienceCard } from '../components/sections/ExperienceCard';
import styles from './ListPage.module.css';

const workData = work as WorkData;

export function WorkPage() {
  return (
    <PageShell>
      <SectionTitle>{workData.heading}</SectionTitle>
      <div className={styles.stack}>
        {workData.experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </PageShell>
  );
}
