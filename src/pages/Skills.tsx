import { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skillsData: Skill[] = [
  { name: "React", level: 95, icon: "⚛️" },
  { name: "JavaScript", level: 90, icon: "📜" },
  { name: "TypeScript", level: 85, icon: "🔷" },
  { name: "HTML5", level: 95, icon: "🌐" },
  { name: "CSS3/SASS", level: 90, icon: "🎨" },
  { name: "Tailwind CSS", level: 92, icon: "💨" },
  { name: "Git & GitHub", level: 88, icon: "🔧" },
  { name: "REST APIs", level: 85, icon: "🔌" },
  { name: "Redux", level: 80, icon: "🗃️" },
  { name: "Next.js", level: 75, icon: "▲" },
  { name: "Node.js", level: 70, icon: "🟢" },
  { name: "Responsive Design", level: 95, icon: "📱" },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setWidth(skill.level), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, index]);

  return (
    <div
      ref={ref}
      className={`glass-card p-6 rounded-xl hover-lift transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{skill.icon}</span>
        <h3 className="font-semibold text-foreground">{skill.name}</h3>
        <span className="ml-auto text-sm font-medium text-primary">{skill.level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full progress-fill rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    { title: "Frontend Core", skills: skillsData.slice(0, 4) },
    { title: "Styling & Design", skills: skillsData.slice(4, 6) },
    { title: "Tools & Technologies", skills: skillsData.slice(6, 9) },
    { title: "Other Skills", skills: skillsData.slice(9) },
  ];

  return (
    <section className="py-20 lg:py-28 animated-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={category.title}>
              <h2 className="text-xl font-semibold gradient-text mb-6">{category.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={catIndex * 4 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">Also familiar with:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Figma", "Jest", "Docker", "Firebase", "MongoDB", "GraphQL", "Webpack", "Vite"].map(
              (skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
