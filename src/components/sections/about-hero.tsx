import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="hero-padding container flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
      <div className="space-y-8">
        <h1 className="text-5xl leading-13 font-bold text-balance md:text-6xl md:leading-18">
          About HOA Alchemy
        </h1>
        <p className="max-w-3xl text-xl leading-8">
        Alchemy is a community association management platform designed to help residents seamlessly 
        connect with their vendors. Our all-in-one solution centralizes documents, finances, building 
        management, communication, and service requests—making every aspect of association living more 
        efficient, transparent, and easy to manage.
        </p>
      </div>
      <Image
        src="/images/products/people_together.avif"
        alt="Sonic Logo"
        width={775}
        height={560}
        // className="aspect-[6.44/5.28] object-contain"
        className="rounded-2xl object-contain shadow-lg"
        priority
      />
    </section>
  );
}
