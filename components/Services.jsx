import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animiex rem veniam sit officia quas est? Vitae molestiae placeat, sit cumqueratione quibusdam quod dignissimos, iste perferendis quaerat maiores!',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animiex rem veniam sit officia quas est? Vitae molestiae placeat, sit cumqueratione quibusdam quod dignissimos, iste perferendis quaerat maiores!',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Machine Learning',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animiex rem veniam sit officia quas est? Vitae molestiae placeat, sit cumqueratione quibusdam quod dignissimos, iste perferendis quaerat maiores!',
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] min-h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative mx-auto"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center '>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
