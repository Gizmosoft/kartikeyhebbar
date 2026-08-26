import home from '../data/home.json';
import site from '../data/site.json';
import type { HomeData, SiteData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { ProfileHero } from '../components/sections/ProfileHero';

const homeData = home as HomeData;
const siteData = site as SiteData;

export function HomePage() {
  return (
    <PageShell>
      <ProfileHero home={homeData} site={siteData} />
    </PageShell>
  );
}
