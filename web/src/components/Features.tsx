import { Video, Calendar, FileText, Activity, Clipboard, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Instant Doctor Consultation",
    description: "Connect with certified doctors via video call within minutes for immediate medical advice."
  },
  {
    icon: Calendar,
    title: "Easy Appointment Booking",
    description: "Schedule appointments with specialists at your preferred time with just a few clicks."
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Receive and store digital prescriptions securely, accessible anytime from anywhere."
  },
  {
    icon: Activity,
    title: "Health Records Management",
    description: "Keep all your medical records, test results, and health history in one secure place."
  },
  {
    icon: Clipboard,
    title: "Lab Tests & Reports",
    description: "Book lab tests at home and access your reports digitally with detailed explanations."
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Get round-the-clock assistance for any queries or concerns about your healthcare."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6">
            Everything You Need for Better{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(280_80%_70%)] bg-clip-text text-transparent">
              Health
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Comprehensive healthcare services designed to make your wellness journey seamless and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isCenter = index === 1;
            
            return (
              <Card 
                key={index}
                className={`group hover:shadow-soft transition-smooth border-border ${
                  isCenter ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardContent className={`p-6 sm:p-8 text-center ${
                  isCenter ? 'gradient-primary text-white' : ''
                }`}>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 ${
                    isCenter 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-primary/10 group-hover:bg-primary/20'
                  } transition-smooth`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                      isCenter ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
                    isCenter ? 'text-white' : 'text-foreground'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isCenter ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
