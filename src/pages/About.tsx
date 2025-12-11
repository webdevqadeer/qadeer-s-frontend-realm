import { GraduationCap, Code, Lightbulb, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "CS Graduate",
      description: "Bachelor's degree in Computer Science with strong fundamentals",
    },
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Professional frontend development with React and modern tools",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical thinking and creative solutions to complex challenges",
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Pixel-perfect implementations with focus on user experience",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl gradient-bg blur-2xl opacity-20 scale-105" />
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl overflow-hidden border border-border shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Abdul Qadeer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-right">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                Frontend Developer with a passion for building exceptional web experiences
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm a Computer Science graduate with over 2 years of experience in frontend development, 
                specializing in React and modern JavaScript. I love transforming complex problems into 
                simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                My journey in tech began during my university years, where I discovered my passion for 
                creating interactive user interfaces. Since then, I've worked on numerous projects, 
                from small business websites to large-scale enterprise applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-4 rounded-xl hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
