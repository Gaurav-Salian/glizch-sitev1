
import { Code, Database, Globe, LineChart, Smartphone, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimationObserver, useStaggeredAnimation } from '@/hooks/use-animation-observer';

const services = [
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and responsive design.'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.'
  },
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'API Development',
    description: 'Robust and scalable API solutions for seamless integration between services.'
  },
  {
    icon: <Database className="h-10 w-10 text-accent" />,
    title: 'Database Solutions',
    description: 'Efficient database design, optimization, and management for your business needs.'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: 'AI Integration',
    description: 'Implementing AI solutions to automate processes and enhance user experiences.'
  },
  {
    icon: <LineChart className="h-10 w-10 text-accent" />,
    title: 'Technical Consulting',
    description: 'Expert advice on technology stack selection and digital transformation strategies.'
  }
];

const ServicesSection = () => {
  const titleAnimation = useAnimationObserver<HTMLDivElement>();
  const cardsAnimation = useStaggeredAnimation<HTMLDivElement>({ 
    threshold: 0.1,
    staggerDelay: 150
  });
  
  return (
    <section id="services" className="section-container">
      <div 
        ref={titleAnimation.ref}
        className={`text-center mb-16 fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
      >
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle mx-auto">
          I offer a wide range of software development services to help your business thrive in the digital world.
        </p>
      </div>
      
      <div 
        ref={cardsAnimation.ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <Card key={index} className="card-hover stagger-item hover-glow glass-card dark:bg-black/20 border border-accent/10">
            <CardHeader>
              <div className="mb-4">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
