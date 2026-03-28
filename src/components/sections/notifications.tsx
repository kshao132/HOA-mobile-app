import Image from 'next/image';

export default function Notifications() {
  return (
    <section className="section-padding container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Notifications And Automations
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Residents have access to detailed notifications for meeting minutes, 
            monthly statements, and security updates in common areas. Board members 
            can efficiently approve invoices and scrutinize financial documents and 
            contracts.
          </p>
        </div>

        {/* Right side - Notification panel mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-2xl">
            {/* Notification panel image */}
            <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Image
                src="/images/hoa-notifications.png"
                alt="HOA Alchemy Notifications Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            
            {/* Optional decorative glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}