import type { Project } from '../../types/content';
import { getImage, getPlaceholder } from '../../lib/images';
import { Badge } from '../ui/Badge';
import { ExternalLink } from '../ui/ExternalLink';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumbWrap}>
        <img
          className={styles.thumb}
          src={getImage(project.thumbnail)}
          alt={`${project.title} thumbnail`}
          onError={(e) => {
            e.currentTarget.src = getPlaceholder();
          }}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>
          {project.title}{' '}
          <span className={styles.timestamp}>{project.timestamp}</span>
        </h3>
        <div className={styles.tech}>
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className={styles.description}>
          {project.description.split('\n').map((line) => (
            <p key={line.slice(0, 48)}>{line}</p>
          ))}
        </div>
        <div className={styles.links}>
          <ExternalLink href={project.source}>Source Code</ExternalLink>
          {project.live ? (
            <ExternalLink href={project.live}>Live Demo</ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
