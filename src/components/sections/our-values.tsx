import React from 'react';

import { Box, Shield, Leaf } from 'lucide-react';

import SectionHeader from '../section-header';
import { Card, CardHeader, CardContent } from '../ui/card';

const values = [
  {
    icon: <Box className="size-6" />,
    value: 'Responsiveness',
    description:
      'Tasks are completed quickly and accurately through a consistent and systematic process.',
  },
  {
    icon: <Shield className="size-6" />,
    value: 'Communication',
    description:
      'Questions and concerns are carefully heard and directed to the right people for prompt resolution.',
  },
  {
    icon: <Leaf className="size-6" />,
    value: 'Personalized Care',
    description: "Every homeowner is treated as an individual, with thoughtful attention tailored to their needs.",
  },
];

export default function OurValues() {
  return (
    <section className="section-padding container space-y-10.5">
      <SectionHeader
        icon={<Box />}
        category="What We Value"
        title="Our Core Values"
        description="We operate with integrity, proactiveness and care. Our values are deeply
        rooted in an admiration for the communities we serve."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {values.map((value, index) => (
          <Card key={index} className="gap-20 border-none p-8 shadow-none">
            <CardHeader className="p-0">
              <div className="border-input text-muted-foreground flex size-12 items-center justify-center rounded-full border">
                {value.icon}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              <h3 className="text-3xl font-bold">{value.value}</h3>
              <p className="text-xl leading-8">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
