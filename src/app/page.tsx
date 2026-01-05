
import FAQ from '@/components/sections/faq';

import Hero from '@/components/sections/hero';
import Notifications from '@/components/sections/notifications';
import ValueProposition from '@/components/sections/value-proposition';
import WhyUs from '@/components/sections/why-us';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <WhyUs />
      <Notifications />
      <FAQ />
    
    </>
  );
}
