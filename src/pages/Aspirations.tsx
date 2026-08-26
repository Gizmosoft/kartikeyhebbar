import aspirations from '../data/aspirations.json';
import type { AspirationsData } from '../types/content';
import { PageShell } from '../components/layout/PageShell';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AspirationItemView } from '../components/sections/AspirationItem';

const aspirationsData = aspirations as AspirationsData;

export function AspirationsPage() {
  return (
    <PageShell>
      <SectionTitle>{aspirationsData.heading}</SectionTitle>
      {aspirationsData.items.map((item) => (
        <AspirationItemView key={item.id} item={item} />
      ))}
    </PageShell>
  );
}
