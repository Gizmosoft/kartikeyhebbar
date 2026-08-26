import type { ReactNode } from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import styles from './ExternalLink.module.css';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className = '',
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.link} ${className}`.trim()}
    >
      <span>{children}</span>
      {showIcon ? <ExternalLinkIcon size={14} /> : null}
    </a>
  );
}
