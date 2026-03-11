import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, ShoppingCart, Users, Palette, TrendingUp, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Professional Websites",
      description: "Beautiful, responsive websites that showcase your business and convert visitors into customers.",
      price: "From R 2,000"
    },
    {
      icon: ShoppingCart,
      title: "Online Store Setup",
      description: "Full e-commerce solutions with product management, payment integration, and order tracking.",
      price: "From R 2,000"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Strategic Facebook & Instagram management with engaging content and community building.",
      price: "From R 800/month"
    },
    {
      icon: Palette,
      title: "Logo & Design",
      description: "Professional branding assets including logos, posters, and marketing materials.",
      price: "From R 300"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Complete digital marketing support including SEO, content strategy, and lead generation.",
      price: "From R 800/month"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Advanced WhatsApp business integration for direct customer engagement and sales.",
      price: "Custom pricing"
    }
  ];

  const portfolio = [
    {
      name: "EMK Signage & Welding",
      description: "Professional website with service showcase and lead generation",
      url: "emksignagewelding.co.za"
    },
    {
      name: "Eat n Smile Food Truck",
      description: "Brand identity and online presence for food business",
      url: "#"
    },
    {
      name: "Luntu Jozi",
      description: "Social media branding and promotional content",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Accurate Digital</h1>
              <p className="text-xs text-muted-foreground">Solutions</p>
            </div>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={() => window.location.href = "https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"}
          >
            Free Consultation
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              ✨ Helping Small Businesses Thrive Online
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get More Customers Online<br />
              <span className="text-blue-600">Without Spending Thousands</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I help small businesses, startups, and home-based entrepreneurs build a powerful online presence that attracts customers and drives growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 px-8"
                onClick={() => window.location.href = "https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"}
              >
                Start Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-lg h-12 px-8"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to establish and grow your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={idx}
                  className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-200 cursor-pointer"
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 ${hoveredService === idx ? 'opacity-100' : ''}`}></div>
                  
                  <CardHeader className="relative">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-sm font-semibold text-blue-600">{service.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses like yours grow online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.url !== "#" && (
                  <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
                    Visit Site <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Book a FREE 30-minute consultation this week. No obligation, just valuable insights.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-lg h-12 px-8 font-semibold"
              onClick={() => window.location.href = "https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"}
            >
              Message on WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Accurate Digital Solutions</h3>
              <p className="text-background/80">Helping small businesses grow online without spending thousands.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition">Websites</a></li>
                <li><a href="#" className="hover:text-background transition">Online Stores</a></li>
                <li><a href="#" className="hover:text-background transition">Social Media</a></li>
                <li><a href="#" className="hover:text-background transition">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="tel:+27613218108" className="hover:text-background transition">+27 61 321 8108</a></li>
                <li><a href="mailto:rangarira.nr@gmail.com" className="hover:text-background transition">rangarira.nr@gmail.com</a></li>
                <li><a href="https://wa.me/27613218108" className="hover:text-background transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2026 Accurate Digital Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
