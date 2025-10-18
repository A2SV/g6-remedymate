import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    rating: 5,
    review: "Healo transformed my healthcare experience! Being able to consult with doctors from home saved me so much time. The app is intuitive and the doctors are professional.",
    location: "Dubai, UAE"
  },
  {
    name: "Sarah Mitchell",
    rating: 5,
    review: "The prescription management feature is a game-changer. I never lose track of my medications anymore, and booking lab tests is incredibly convenient.",
    location: "London, UK"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6">
            Trusted by Thousands Around{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(280_80%_70%)] bg-clip-text text-transparent">
              the Globe
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            See what our users have to say about their experience with Healo. Your health journey matters to us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-soft transition-smooth">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  "{testimonial.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-bold text-foreground">20k+</span>
            <span className="text-lg text-muted-foreground">Trusted Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
