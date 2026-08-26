import research from '../data/research.json';
import type { ResearchData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ResearchCard } from '../components/sections/ResearchCard';
import styles from './ListPage.module.css';

const researchData = research as ResearchData;

export function ResearchPage() {
  return (
    <PageShell>
      <SectionTitle>{researchData.heading}</SectionTitle>
      <div className={styles.stack}>
        {researchData.items.map((item) => (
          <ResearchCard key={item.id} item={item} />
        ))}
      </div>
    </PageShell>
  );
}
