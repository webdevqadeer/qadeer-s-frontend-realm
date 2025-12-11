import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] animated-gradient flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-primary font-medium text-sm sm:text-base animate-fade-in-up">
                Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up delay-100 break-words">
                Abdul Qadeer
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text animate-fade-in-up delay-200 break-words">
                Frontend Developer
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-300">
              Building modern, scalable, and user-friendly web applications. 
              Passionate about creating exceptional digital experiences with React.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up delay-400 flex-wrap">
              <Link to="/projects">
                <Button variant="hero" size="lg" className="text-sm sm:text-base">
                  View My Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg" className="text-sm sm:text-base">
                  Get in Touch
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Image with Animations */}
          <div className="flex justify-center order-1 lg:order-2 animate-scale-in overflow-visible">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              {/* Animated Background Glow - Orbiting */}
              <div className="absolute inset-0 rounded-full opacity-30 scale-110 animate-orbit-slow" 
                   style={{
                     background: "conic-gradient(from 0deg, hsl(217 91% 60%), hsl(224 76% 48%), hsl(217 91% 60%))",
                     filter: "blur(40px)"
                   }} />
              
              {/* Secondary rotating glow */}
              <div className="absolute inset-0 rounded-full opacity-20 scale-105 animate-orbit-reverse" 
                   style={{
                     background: "conic-gradient(from 180deg, hsl(213 94% 68%), hsl(221 83% 53%), hsl(213 94% 68%))",
                     filter: "blur(30px)"
                   }} />
              
              {/* Image container with border glow */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-xl animate-float">
                <img
                  src={profilePhoto}
                  alt="Abdul Qadeer - Frontend Developer"
                  className="w-full h-full object-cover"
                />
                {/* Inner gradient overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Decorative animated elements - repositioned to avoid overflow */}
              <div className="absolute top-0 right-0 sm:top-0 sm:right-0 w-5 h-5 sm:w-7 sm:h-7 rounded-full gradient-bg animate-bounce-slow" 
                   style={{ animationDelay: "0s", transform: "translate(50%, -50%)" }} />
              <div className="absolute bottom-0 left-0 sm:bottom-0 sm:left-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-300 animate-bounce-slow" 
                   style={{ animationDelay: "0.3s", transform: "translate(-50%, 50%)" }} />
              <div className="absolute top-1/2 right-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-400 animate-pulse-glow" 
                   style={{ transform: "translate(50%, -50%)" }} />
              
              {/* Ring effect animation */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary/30 border-r-primary/20 animate-spin-slow" 
                   style={{ animationDuration: "8s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
