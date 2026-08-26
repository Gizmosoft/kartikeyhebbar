import type { ReactNode } from 'react';
import styles from './PageShell.module.css';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <main className={`page-enter ${styles.shell} ${className}`.trim()}>
      {children}
    </main>
  );
}
