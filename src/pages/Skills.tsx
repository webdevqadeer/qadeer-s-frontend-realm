import { useState, useEffect, useRef } from "react";
import { 
  Atom, 
  FileJson, 
  FileType, 
  Globe, 
  Palette, 
  Wind, 
  GitBranch, 
  Plug, 
  Database, 
  Triangle, 
  Server, 
  Smartphone,
  Figma,
  TestTube,
  Container,
  Flame,
  CircleEllipsis,
  Code2,
  Layers
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const skillsData: Skill[] = [
  { name: "React", level: 95, icon: Atom, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", level: 90, icon: FileJson, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", level: 85, icon: FileType, color: "from-blue-500 to-blue-700" },
  { name: "HTML5", level: 95, icon: Globe, color: "from-orange-400 to-orange-600" },
  { name: "CSS3/SASS", level: 90, icon: Palette, color: "from-pink-400 to-pink-600" },
  { name: "Tailwind CSS", level: 92, icon: Wind, color: "from-cyan-400 to-cyan-600" },
  { name: "Git & GitHub", level: 88, icon: GitBranch, color: "from-gray-500 to-gray-700" },
  { name: "REST APIs", level: 85, icon: Plug, color: "from-green-400 to-green-600" },
  { name: "Redux", level: 80, icon: Database, color: "from-purple-400 to-purple-600" },
  { name: "Next.js", level: 75, icon: Triangle, color: "from-slate-600 to-slate-800" },
  { name: "Node.js", level: 70, icon: Server, color: "from-green-500 to-green-700" },
  { name: "Responsive Design", level: 95, icon: Smartphone, color: "from-indigo-400 to-indigo-600" },
];

const additionalSkills = [
  { name: "Figma", icon: Figma },
  { name: "Jest", icon: TestTube },
  { name: "Docker", icon: Container },
  { name: "Firebase", icon: Flame },
  { name: "GraphQL", icon: CircleEllipsis },
  { name: "Webpack", icon: Layers },
  { name: "Vite", icon: Code2 },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setWidth(skill.level), 100 + index * 50);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, index]);

  const IconComponent = skill.icon;

  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-2xl p-5 sm:p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Icon and Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{skill.name}</h3>
        </div>
        <span className="text-sm font-bold text-primary">{skill.level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 sm:h-2.5 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const Skills = () => {
  const categories = [
    { title: "Frontend Core", skills: skillsData.slice(0, 4), icon: Code2 },
    { title: "Styling & Design", skills: skillsData.slice(4, 6), icon: Palette },
    { title: "Tools & Technologies", skills: skillsData.slice(6, 9), icon: GitBranch },
    { title: "Other Skills", skills: skillsData.slice(9), icon: Layers },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 animated-gradient min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-10 sm:space-y-12">
          {categories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.title} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                    <CategoryIcon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold gradient-text">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={catIndex * 4 + index}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-14 sm:mt-16 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-6">Also familiar with:</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {additionalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-4 h-4" />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: "Technologies", value: "15+" },
            { label: "Projects", value: "20+" },
            { label: "Years Exp", value: "2+" },
            { label: "Certifications", value: "5+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 rounded-2xl bg-card/50 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
