import projects from '../data/projects.json';
import site from '../data/site.json';
import type { ProjectsData, SiteData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectCard } from '../components/sections/ProjectCard';
import { ExternalLink } from '../components/ui/ExternalLink';
import styles from './ListPage.module.css';

const projectsData = projects as ProjectsData;
const siteData = site as SiteData;

export function ProjectsPage() {
  return (
    <PageShell>
      <SectionTitle>{projectsData.heading}</SectionTitle>
      <div className={styles.stack}>
        {projectsData.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.footerNote}>
        <ExternalLink href={siteData.githubProfile}>
          {projectsData.githubNote}
        </ExternalLink>
      </div>
    </PageShell>
  );
}
