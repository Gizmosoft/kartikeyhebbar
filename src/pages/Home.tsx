import { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { X } from 'lucide-react';
import home from '../data/home.json';
import site from '../data/site.json';
import type { HomeData, SiteData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { ProfileHero } from '../components/sections/ProfileHero';
import styles from './Home.module.css';

const homeData = home as HomeData;
const siteData = site as SiteData;

export function HomePage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <PageShell>
      <ProfileHero
        home={homeData}
        site={siteData}
        onBookMeeting={() => setShowCalendly(true)}
      />

      {showCalendly ? (
        <div
          className={styles.overlay}
          onClick={() => setShowCalendly(false)}
          role="presentation"
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Book a meeting"
          >
            <button
              type="button"
              className={styles.close}
              onClick={() => setShowCalendly(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <InlineWidget
              url={homeData.calendlyUrl}
              styles={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}
