import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] animated-gradient flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-primary font-medium text-sm sm:text-base animate-fade-in-up">
                Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up delay-100">
                Abdul Qadeer
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text animate-fade-in-up delay-200">
                Frontend Developer
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-300">
              Building modern, scalable, and user-friendly web applications. 
              Passionate about creating exceptional digital experiences with React.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up delay-400">
              <Link to="/projects">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  View My Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Get in Touch
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full gradient-bg blur-3xl opacity-30 scale-110" />
              
              {/* Image container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Abdul Qadeer - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full gradient-bg animate-pulse-glow" />
              <div className="absolute -bottom-1 -left-4 sm:-bottom-2 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-300 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
