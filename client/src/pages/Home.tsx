import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, ShoppingCart, Users, Palette, TrendingUp, MessageCircle, Mail, Phone, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Professional Websites",
      description: "Beautiful, responsive websites that showcase your business and convert visitors into customers.",
      price: "From R 2,000",
      image: "/assets/service-web-design.webp"
    },
    {
      icon: ShoppingCart,
      title: "Online Store Setup",
      description: "Full e-commerce solutions with product management, payment integration, and order tracking.",
      price: "From R 2,000",
      image: "/assets/service-web-design.webp"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Strategic Facebook & Instagram management with engaging content and community building.",
      price: "From R 800/month",
      image: "/assets/service-social-media.webp"
    },
    {
      icon: Palette,
      title: "Logo & Design",
      description: "Professional branding assets including logos, posters, and marketing materials.",
      price: "From R 300",
      image: "/assets/service-social-media.webp"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Complete digital marketing support including SEO, content strategy, and lead generation.",
      price: "From R 800/month",
      image: "/assets/service-marketing.webp"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Advanced WhatsApp business integration for direct customer engagement and sales.",
      price: "Custom pricing",
      image: "/assets/service-web-design.webp"
    }
  ];

  const portfolio = [
    {
      name: "Accurate Digital Solutions",
      description: "My Agency - Professional digital marketing & web development services",
      url: "accuratedigitalsolutions.co.za",
      image: "/assets/service-marketing.webp"
    },
    {
      name: "Transformed Cooling",
      description: "HVAC services website with service showcase",
      url: "transformedcooling.co.za",
      image: "/assets/step-content-creation.webp"
    },
    {
      name: "Joe's Fresh Produce",
      description: "Fresh produce delivery and e-commerce platform",
      url: "joesfreshproduce.co.za",
      image: "/assets/step-strategy-planning.webp"
    },
    {
      name: "Glow Mani Nails",
      description: "Beauty salon website with booking system",
      url: "glowmaninails.co.za",
      image: "/assets/service-social-media.webp"
    },
    {
      name: "Accura Plumbing",
      description: "Plumbing services website with service catalog",
      url: "accuraplumbing.co.za",
      image: "/assets/service-web-design.webp"
    },
    {
      name: "Raderies E",
      description: "Professional electrical services and installations",
      url: "raderies-e.co.za",
      image: "/assets/service-web-design.webp"
    },
    {
      name: "EMK Signage & Welding",
      description: "Professional website with service showcase and lead generation",
      url: "emksignagewelding.co.za",
      image: "/assets/step-content-creation.webp"
    }
  ];

  const benefits = [
    "Affordable solutions without compromising quality",
    "Proven track record with local businesses",
    "Transparent communication and regular reporting",
    "Flexible and responsive to your needs"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/accurate-digital-placeholder.svg"
              alt="Accurate Digital Solutions Logo"
              className="w-12 h-12 object-contain rounded-lg"
            />
            <div>
              <h1 className="font-bold text-lg text-foreground">Accurate Digital Solutions</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              onClick={() => window.location.href = "https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"}
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/step-strategy-planning.webp"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full text-sm font-medium border border-white/30">
              Helping Businesses Grow Online
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get More Customers Online<br />
              <span className="text-blue-200">Without Spending Thousands</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
              We help small businesses, startups, and home-based entrepreneurs build a powerful online presence that attracts customers and drives growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg h-12 px-8 transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 px-8 shadow-lg"
                onClick={() => window.location.href = "mailto:rangarira.nr@gmail.com"}
              >
                Send Email <Mail className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
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
                  className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 cursor-pointer group bg-white/80 backdrop-blur-sm border-2 border-blue-100"
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 relative">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-300 ${hoveredService === idx ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${hoveredService === idx ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                  
                  <CardHeader className="relative pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative pb-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-blue-600">{service.price}</p>
                      <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Helping Businesses Grow Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step process ensures your business gets the right strategy, content, promotion, and continuous growth
            </p>
          </div>

                    <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "Step 1",
                title: "Strategy & Planning",
                description: "We analyse your business goals and create a digital marketing strategy tailored to your brand.",
                image: "/assets/step-strategy-planning.webp"
              },
              {
                step: "Step 2",
                title: "Content Creation",
                description: "We design engaging content, visuals, and campaigns that connect with your target audience.",
                image: "/assets/step-content-creation.webp"
              },
              {
                step: "Step 3",
                title: "Digital Marketing",
                description: "We promote your brand using social media, online advertising, and SEO strategies.",
                image: "/assets/service-marketing.webp"
              },
              {
                step: "Step 4",
                title: "Growth & Optimization",
                description: "We track performance and continuously improve campaigns to help your business grow.",
                image: "/assets/step-strategy-planning.webp"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full border border-blue-100">
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <p className="text-sm font-semibold text-blue-600 mb-2">{item.step}</p>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
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
              <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-blue-100 group">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 relative">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>
                  {project.url !== "#" && (
                    <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 transition-colors">
                      Visit Site <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Social Media & Content Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our social media management and content creation work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                client: "Glow Mani Nails",
                service: "Instagram Management & Content Creation",
                metrics: [
                  { label: "Instagram Followers", value: "2,400+", change: "+450% growth" },
                  { label: "Avg. Post Engagement", value: "8.2%", change: "High engagement rate" },
                  { label: "Monthly Reach", value: "15,000+", change: "Consistent growth" },
                  { label: "Booking Inquiries", value: "+65%", change: "From social media" }
                ],
                description: "Transformed Glow Mani Nails' Instagram presence with consistent, professional nail art content. Built an engaged community through strategic posting, hashtag optimization, and community engagement.",
                link: "https://www.instagram.com/glowmani_nail_bar?igsh=Z2tqNXpvZ2J0cHBq&utm_source=qr"
              },
              {
                client: "GotUtility",
                service: "Facebook Marketing & Lead Generation",
                metrics: [
                  { label: "Facebook Followers", value: "11,200+", change: "Active community" },
                  { label: "Monthly Post Reach", value: "45,000+", change: "Strong visibility" },
                  { label: "Engagement Rate", value: "6.8%", change: "Quality interactions" },
                  { label: "Lead Generation", value: "+120%", change: "Qualified leads" }
                ],
                description: "Managed comprehensive Facebook strategy for GotUtility, building a strong community of 11K+ followers. Created engaging content showcasing solar energy solutions and consulting services with consistent posting schedule.",
                link: "https://www.facebook.com/share/14i1YJedob7/?mibextid=wwXIfr"
              }
            ].map((caseStudy, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">{caseStudy.client}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm">{caseStudy.service}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{caseStudy.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {caseStudy.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                      <p className="text-xs text-muted-foreground mb-1 font-medium">{metric.label}</p>
                      <p className="font-bold text-lg text-blue-600 mb-1">{metric.value}</p>
                      <p className="text-xs text-blue-500 font-semibold">{metric.change}</p>
                    </div>
                  ))}
                </div>
                
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition-colors shadow-md hover:shadow-lg"
                >
                  View Campaign <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 border-2 border-blue-200 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to See Similar Results?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Our proven social media strategies deliver measurable growth for businesses like yours. Let's discuss how we can boost your online presence.</p>
            <a
              href="https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20discuss%20social%20media%20management"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-8 py-3 transition-colors shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Get Your Free Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-blue-100 mb-10 text-center">
              Book a FREE 30-minute consultation this week. No obligation, just valuable insights tailored to your business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/27613218108?text=Hi%20Accurate%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-lg py-4 px-6 transition-colors shadow-lg group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Message on WhatsApp
              </a>
              <a
                href="mailto:rangarira.nr@gmail.com"
                className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg py-4 px-6 transition-colors shadow-lg group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Send Email
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-blue-400">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
                <a href="tel:+27613218108" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                  <Phone className="w-5 h-5" />
                  +27 61 321 8108
                </a>
                <span className="hidden sm:block text-blue-300">•</span>
                <a href="mailto:rangarira.nr@gmail.com" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                  <Mail className="w-5 h-5" />
                  rangarira.nr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Accurate Digital Solutions</h3>
              <p className="text-background/80 leading-relaxed">Helping small businesses grow online without spending thousands. Your success is our mission.</p>
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
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="tel:+27613218108" className="hover:text-background transition flex items-center gap-2"><Phone className="w-4 h-4" /> +27 61 321 8108</a></li>
                <li><a href="mailto:rangarira.nr@gmail.com" className="hover:text-background transition flex items-center gap-2"><Mail className="w-4 h-4" /> rangarira.nr@gmail.com</a></li>
                <li><a href="https://wa.me/27613218108" className="hover:text-background transition flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="https://www.facebook.com/share/17r8uaFM3U/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-background transition">Facebook</a></li>
                <li><a href="https://www.instagram.com/accurate.digital.solutions?igsh=YmE5OGRzc2hxY3c%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-background transition">Instagram</a></li>
                <li><a href="http://linkedin.com/in/accurate-ngaakudzwe-rangarira-1bab44372" target="_blank" rel="noopener noreferrer" className="hover:text-background transition">LinkedIn</a></li>
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
