import Image from 'next/image';

const features = [
  {
    icon: '📱',
    title: 'Seamless Communications',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '💳',
    title: 'Banking & Financials',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🔒',
    title: 'Common Area Management',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📅',
    title: 'Vendor Calendar',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: '📍',
    title: 'Live Location',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Why Alchemy For Your Community?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Everything you need to manage your association seamlessly
              </p>
            </div>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all hover:shadow-lg hover:-translate-x-2"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Glowing effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl scale-110" />
              
              {/* Phone mockup */}
              <div className="relative aspect-[9/19] rounded-[3rem] border-[14px] border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
                <Image
                  src="/images/hoa-invoice-status.png"
                  alt="HOA Alchemy Invoice Tracking"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}