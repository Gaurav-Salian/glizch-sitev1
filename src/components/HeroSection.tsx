import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroAnimation from '@/components/HeroAnimation';
import { useAnimationObserver } from '@/hooks/use-animation-observer';

const HeroSection = () => {
  const titleAnimation = useAnimationObserver<HTMLHeadingElement>({ delay: 100 });
  const subtitleAnimation = useAnimationObserver<HTMLDivElement>({ delay: 600 });
  const descriptionAnimation = useAnimationObserver<HTMLParagraphElement>({ delay: 1100 });
  const buttonsAnimation = useAnimationObserver<HTMLDivElement>({ delay: 1500 });
  const codeAnimation = useAnimationObserver<HTMLDivElement>({ delay: 800 });
  
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      <HeroAnimation />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <h1 
            ref={titleAnimation.ref}
            className={`text-5xl md:text-6xl font-bold fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <span className="gradient-text pb-[0.7rem] mt-2">Transforming</span> ideas into
            <span className="gradient-text pb-[0.7rem] mt-2"> digital reality</span>
          </h1>
          
          <div 
            ref={subtitleAnimation.ref}
            className={`typing-container fade-in-up ${subtitleAnimation.isVisible ? 'visible' : ''}`}
          >
            <span className="inline-block py-1 px-3 bg-glizch-blue dark:bg-glizch-cyan/20 text-white rounded-md mb-4">
              <span className="typing-effect">
                // Freelance Software Developer
              </span>
            </span>
          </div>
          
          <p 
            ref={descriptionAnimation.ref}
            className={`text-lg text-muted-foreground fade-in-up ${descriptionAnimation.isVisible ? 'visible' : ''}`}
          >
            I'm a versatile software developer specializing in building exceptional digital experiences. 
            With expertise in multiple programming languages, APIs, and AI automation, 
            I deliver efficient, elegant solutions for your business needs.
          </p>
          
          <div 
            ref={buttonsAnimation.ref}
            className={`flex flex-wrap gap-4 fade-in-up ${buttonsAnimation.isVisible ? 'visible' : ''}`}
          >
            <Button className="bg-glizch-blue hover:bg-glizch-gray text-white dark:bg-glizch-cyan dark:text-glizch-blue dark:hover:bg-glizch-cyan/80 hover-glow">
              View My Work
            </Button>
            <Button variant="outline" className="border-glizch-blue text-glizch-blue hover:bg-glizch-blue hover:text-white dark:border-glizch-cyan dark:text-glizch-cyan dark:hover:bg-glizch-cyan dark:hover:text-glizch-blue hover-glow">
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div 
          ref={codeAnimation.ref}
          className={`relative fade-in-up ${codeAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="absolute -z-10 w-72 h-72 bg-glizch-cyan/20 rounded-full filter blur-3xl top-1/4 -right-12"></div>
          <div className="absolute -z-10 w-72 h-72 bg-glizch-lightblue/20 rounded-full filter blur-3xl -bottom-12 left-12"></div>
          <div className="bg-white dark:bg-glizch-blue/30 dark:backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-glizch-cyan/20 code-block hover-scale">
            <pre className="text-glizch-cyan">
{`function Glizch() {
  const skills = [
    "Web Development",
    "Mobile Apps",
    "API Integration",
    "AI Solutions",
    "Automation"
  ];
              
  return (
    <Developer 
      name="Glizch"
      expertise={skills}
      available={true}
    />
  );
}`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-20">
        <a 
          href="#services" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-glizch-blue/30 dark:border dark:border-glizch-cyan/20 shadow-md hover:shadow-lg transition-shadow animate-bounce hover-glow"
        >
          <ArrowDown className="text-glizch-blue dark:text-glizch-cyan" size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;