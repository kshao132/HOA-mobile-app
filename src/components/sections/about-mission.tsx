import Image from 'next/image';

import { AudioLines } from 'lucide-react';

const missions = [
  {
    title: 'Our Mission',
    description:
      "To modernize community association living for residents, board members, and vendors with an integrated communication, management, and financial management platform.",
  },
  {
    title: 'Our Vision',
    description:
      'Provide a modern platform with best-in-class applications that use AI and automation to deliver positive resident experiences at the lowest possible cost.',
  },
];

const AboutMission = () => {
  return (
    <section className="section-padding container flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
      <div className="relative h-[340px] w-full sm:h-[600px] sm:min-w-[440px] lg:w-[569px] lg:shrink-0">
        <Image
          src="/images/products/four_houses.jpg"
          alt="Our Team"
          fill
          className="rounded-3xl object-cover object-top"
        />
      </div>
      <div className="space-y-6 md:space-y-8 lg:space-y-10.5">
        <div className="flex items-center gap-3">
          <AudioLines />
          <p className="text-xl leading-8 md:leading-10">Who We Are</p>
        </div>
        {missions.map((mission, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl font-medium md:text-3xl lg:text-4xl">
              {mission.title}
            </h3>
            <p className="text-xl leading-8">{mission.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMission;
