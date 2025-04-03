
import { Award, Book, BriefcaseBusiness, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useAnimationObserver, useStaggeredAnimation } from '@/hooks/use-animation-observer';

const AboutSection = () => {
  const textAnimation = useAnimationObserver<HTMLDivElement>();
  const statsAnimation = useStaggeredAnimation<HTMLDivElement>({ staggerDelay: 150 });
  const skillsAnimation = useAnimationObserver<HTMLDivElement>();
  
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-transparent">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div
          ref={textAnimation.ref}
          className={`fade-in-up ${textAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            I'm a passionate freelance software developer with a drive for creating elegant, efficient solutions to complex problems.
          </p>
          
          <p className="mb-6 text-muted-foreground">
            With expertise in numerous programming languages and frameworks, I bring a versatile skill set to every project. My approach is to understand your unique needs, collaborate closely, and deliver solutions that exceed expectations.
          </p>
          
          <p className="mb-6 text-muted-foreground">
            My mission is to help businesses leverage technology to its fullest potential, whether that's building a responsive website, developing a complex application, or implementing AI-driven automation.
          </p>
          
          <div 
            ref={statsAnimation.ref}
            className="grid sm:grid-cols-2 gap-4 mt-8"
          >
            {/* <Card className="bg-white dark:bg-glizch-blue/20 dark:border-glizch-cyan/20 shadow-sm stagger-item hover-glow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-glizch-blue/10 dark:bg-glizch-cyan/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-glizch-blue dark:text-glizch-cyan" />
                </div>
                <div>
                  <h4 className="font-medium text-glizch-blue dark:text-glizch-cyan">5+ Years</h4>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </CardContent>
            </Card> */}
            
            <Card className="bg-white dark:bg-glizch-blue/20 dark:border-glizch-cyan/20 shadow-sm stagger-item hover-glow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-glizch-blue/10 dark:bg-glizch-cyan/10 p-3 rounded-full">
                  <BriefcaseBusiness className="h-6 w-6 text-glizch-blue dark:text-glizch-cyan" />
                </div>
                <div>
                  <h4 className="font-medium text-glizch-blue dark:text-glizch-cyan">30+</h4>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-glizch-blue/20 dark:border-glizch-cyan/20 shadow-sm stagger-item hover-glow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-glizch-blue/10 dark:bg-glizch-cyan/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-glizch-blue dark:text-glizch-cyan" />
                </div>
                <div>
                  <h4 className="font-medium text-glizch-blue dark:text-glizch-cyan">15+</h4>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-glizch-blue/20 dark:border-glizch-cyan/20 shadow-sm stagger-item hover-glow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-glizch-blue/10 dark:bg-glizch-cyan/10 p-3 rounded-full">
                  <Book className="h-6 w-6 text-glizch-blue dark:text-glizch-cyan" />
                </div>
                <div>
                  <h4 className="font-medium text-glizch-blue dark:text-glizch-cyan">Always</h4>
                  <p className="text-sm text-muted-foreground">Learning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div 
          ref={skillsAnimation.ref}
          className={`relative fade-in-up ${skillsAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="absolute -z-10 w-72 h-72 bg-glizch-cyan/20 rounded-full filter blur-3xl -top-12 right-12"></div>
          
          <div className="bg-white dark:bg-glizch-blue/20 dark:border-glizch-cyan/20 rounded-2xl shadow-xl p-8 relative z-10 hover-scale">
            <h3 className="text-2xl font-bold text-glizch-blue dark:text-glizch-cyan mb-6">My Technical Skills</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium dark:text-white">Frontend Development</span>
                  <span className="dark:text-white">90%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-glizch-cyan rounded-full animate-[skillWidth90_2s_ease-out]" style={{ width: '90%', transition: 'width 1.5s ease-out' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium dark:text-white">Backend Development</span>
                  <span className="dark:text-white">85%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-glizch-cyan rounded-full animate-[skillWidth85_2s_ease-out]" style={{ width: '85%', transition: 'width 1.5s ease-out 0.2s' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium dark:text-white">Mobile App Development</span>
                  <span className="dark:text-white">80%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-glizch-cyan rounded-full animate-[skillWidth80_2s_ease-out]" style={{ width: '80%', transition: 'width 1.5s ease-out 0.4s' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium dark:text-white">API Integration</span>
                  <span className="dark:text-white">95%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-glizch-cyan rounded-full animate-[skillWidth95_2s_ease-out]" style={{ width: '95%', transition: 'width 1.5s ease-out 0.6s' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium dark:text-white">AI & Machine Learning</span>
                  <span className="dark:text-white">75%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-glizch-cyan rounded-full animate-[skillWidth75_2s_ease-out]" style={{ width: '75%', transition: 'width 1.5s ease-out 0.8s' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="text-center p-2 bg-glizch-blue/5 dark:bg-glizch-cyan/10 rounded-lg hover-scale">
                <span className="block font-medium text-glizch-blue dark:text-glizch-cyan">JavaScript</span>
              </div>
              <div className="text-center p-2 bg-glizch-blue/5 dark:bg-glizch-cyan/10 rounded-lg hover-scale">
                <span className="block font-medium text-glizch-blue dark:text-glizch-cyan">Python</span>
              </div>
              <div className="text-center p-2 bg-glizch-blue/5 dark:bg-glizch-cyan/10 rounded-lg hover-scale">
                <span className="block font-medium text-glizch-blue dark:text-glizch-cyan">React</span>
              </div>
              <div className="text-center p-2 bg-glizch-blue/5 dark:bg-glizch-cyan/10 rounded-lg hover-scale">
                <span className="block font-medium text-glizch-blue dark:text-glizch-cyan">Node.js</span>
              </div>
              <div className="text-center p-2 bg-glizch-blue/5 dark:bg-glizch-cyan/10 rounded-lg hover-scale">
                <span className="block font-medium text-glizch-blue dark:text-glizch-cyan">TypeScript</span>
              </div>
              <div className="text-center p-2 bg-glizch-blue/5 dark:bg-glizch-cyan/10 rounded-lg hover-scale">
                <span className="block font-medium text-glizch-blue dark:text-glizch-cyan">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
