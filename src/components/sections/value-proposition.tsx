'use client';
import Link from 'next/link';

const apps = [
  {
    name: 'Tassajara Hills',
    subtitle: 'Services App',
    description: 'For Tassajara Hills community residents',
    href: 'https://apps.apple.com/us/app/tassajara-hills/id6748569418',
    color: 'from-blue-500 to-cyan-500',
    emoji: '🏘️',
  },
  {
    name: 'HOA App',
    subtitle: 'General HOA Management',
    description: 'For all HOA community members',
    href: 'https://apps.apple.com/us/app/hoa/id6447296089',
    color: 'from-green-500 to-emerald-500',
    emoji: '🏡',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/30 dark:via-amber-950/30 dark:to-yellow-950/30">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Download Our Apps
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect app for your community management needs
          </p>
        </div>

        {/* App cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <Link
              key={index}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-5 rounded-3xl`} />
                
                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} shadow-lg`}>
                    <span className="text-3xl">{app.emoji}</span>
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">{app.name}</h3>
                    <p className="text-lg font-medium text-muted-foreground">
                      {app.subtitle}
                    </p>
                    <p className="text-base text-muted-foreground">
                      {app.description}
                    </p>
                  </div>

                  {/* App Store button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold group-hover:scale-105 transition-transform">
                      <span className="text-2xl">🍎</span>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Download on</div>
                        <div className="text-base">App Store</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}