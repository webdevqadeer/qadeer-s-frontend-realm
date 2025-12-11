import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdul.qadeer@email.com",
      href: "mailto:abdul.qadeer@email.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/abdulqadeer",
      href: "https://github.com/abdulqadeer",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abdulqadeer",
      href: "https://linkedin.com/in/abdulqadeer",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 animated-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                Let's work together
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Drop me a message and I'll get back to you as
                soon as possible.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors text-sm sm:text-base truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground text-sm sm:text-base truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12 animate-scale-in">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`h-11 sm:h-12 ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`h-11 sm:h-12 ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      className={`resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
