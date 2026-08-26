import skills from '../data/skills.json';
import type { SkillsData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { SectionTitle } from '../components/ui/SectionTitle';
import { SkillGrid } from '../components/sections/SkillGrid';

const skillsData = skills as SkillsData;

export function SkillsPage() {
  return (
    <PageShell>
      <SectionTitle>{skillsData.heading}</SectionTitle>
      <SkillGrid data={skillsData} />
    </PageShell>
  );
}
