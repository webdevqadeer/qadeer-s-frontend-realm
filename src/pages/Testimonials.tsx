import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    content: "Abdul is an exceptional frontend developer. His attention to detail and ability to translate complex designs into functional code is remarkable. He consistently delivers high-quality work ahead of schedule.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer",
    company: "Digital Agency Co.",
    content: "Working with Abdul was a great experience. He has a deep understanding of React and modern frontend practices. His code is clean, well-documented, and easy to maintain.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "StartUp Hub",
    content: "Abdul has an eye for design that many developers lack. He implemented our designs with pixel-perfect accuracy and even suggested improvements that enhanced the user experience.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "Innovation Labs",
    content: "Abdul's technical skills are top-notch, but what sets him apart is his communication and problem-solving abilities. He's a valuable asset to any development team.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Feedback from colleagues, mentors, and clients I've had the pleasure to work with
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial */}
            <div className="glass-card rounded-2xl p-5 sm:p-8 md:p-12 animate-fade-in">
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary/20 mb-4 sm:mb-6" />
              
              <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-6 sm:mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 sm:w-8 gradient-bg"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid view for larger screens */}
        <div className="hidden lg:grid grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`glass-card rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-primary"
                  : "hover:ring-1 hover:ring-border"
              }`}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
