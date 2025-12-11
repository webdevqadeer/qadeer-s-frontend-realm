import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "fulltime" | "internship" | "freelance";
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    duration: "Jan 2023 - Present",
    type: "fulltime",
    description: "Leading frontend development for enterprise web applications using React and TypeScript.",
    achievements: [
      "Developed and maintained 5+ production React applications",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews",
      "Implemented responsive designs achieving 98% mobile satisfaction",
    ],
  },
  {
    id: 2,
    role: "Junior Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    duration: "Jun 2022 - Dec 2022",
    type: "fulltime",
    description: "Collaborated on client projects, building modern web interfaces with React and CSS frameworks.",
    achievements: [
      "Built responsive landing pages for 10+ clients",
      "Integrated REST APIs for dynamic content management",
      "Reduced page load times by 35% with lazy loading",
      "Participated in agile sprints and daily standups",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "StartUp Hub",
    location: "San Francisco, CA",
    duration: "Jan 2022 - May 2022",
    type: "internship",
    description: "Gained hands-on experience in modern web development practices and tools.",
    achievements: [
      "Developed UI components using React and Styled Components",
      "Collaborated with designers to implement pixel-perfect designs",
      "Learned version control with Git and GitHub workflows",
      "Contributed to the company's open-source component library",
    ],
  },
  {
    id: 4,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    duration: "Jun 2021 - Dec 2021",
    type: "freelance",
    description: "Built websites and web applications for small businesses and startups.",
    achievements: [
      "Completed 15+ freelance projects successfully",
      "Achieved 5-star ratings from all clients",
      "Specialized in React-based single-page applications",
      "Managed full project lifecycle from design to deployment",
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const typeColors = {
    fulltime: "bg-primary/10 text-primary",
    internship: "bg-blue-100 text-blue-700",
    freelance: "bg-green-100 text-green-700",
  };

  const typeLabels = {
    fulltime: "Full-time",
    internship: "Internship",
    freelance: "Freelance",
  };

  return (
    <div className="relative pl-6 sm:pl-8 md:pl-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full gradient-bg shadow-md z-10" />
      
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[5px] sm:left-[7px] top-4 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
      )}

      {/* Card */}
      <div className="glass-card rounded-xl p-4 sm:p-6 hover-lift mb-6 sm:mb-8">
        <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{experience.role}</h3>
            <p className="text-primary font-medium text-sm sm:text-base">{experience.company}</p>
          </div>
          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${typeColors[experience.type]}`}>
            {typeLabels[experience.type]}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            {experience.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            {experience.location}
          </span>
        </div>

        <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{experience.description}</p>

        <ul className="space-y-1.5 sm:space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 sm:mt-2 shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 animated-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A timeline of my professional journey and achievements
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16">
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "30+" },
            { label: "Happy Clients", value: "20+" },
            { label: "Technologies", value: "15+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 sm:p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
