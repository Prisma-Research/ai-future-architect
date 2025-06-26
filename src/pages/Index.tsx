
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Eye, 
  Languages, 
  TrendingUp, 
  Shield, 
  Zap,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  BookOpen
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const services = [
    {
      icon: Languages,
      title: "Natural Language Translation",
      description: "Advanced multilingual AI systems for real-time translation and language processing."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Cutting-edge image and video analysis using deep learning and neural networks."
    },
    {
      icon: Brain,
      title: "AI Model Training",
      description: "Custom AI model development, training, and optimization for specific use cases."
    },
    {
      icon: TrendingUp,
      title: "Portfolio Optimization",
      description: "AI-driven financial modeling and risk assessment for investment strategies."
    },
    {
      icon: Shield,
      title: "Cybersecurity Research",
      description: "Advanced threat detection and security consulting using AI-powered analysis."
    }
  ];

  const industries = [
    { name: "Finance", icon: TrendingUp },
    { name: "Healthcare", icon: CheckCircle },
    { name: "Security", icon: Shield },
    { name: "Education", icon: BookOpen },
    { name: "Technology", icon: Zap },
    { name: "Government", icon: Globe }
  ];

  const features = [
    "R&D Excellence",
    "Technical Training",
    "24/7 Support",
    "IP Licensing",
    "Tech Transfer",
    "Global Partnerships"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Prisma Research</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#industries" className="text-slate-300 hover:text-blue-400 transition-colors">Industries</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Leading AI Innovation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Innovation
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
                for a Smarter Future
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We develop cutting-edge artificial intelligence solutions that transform industries 
              and accelerate innovation through advanced research and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start Partnership <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Specialized AI solutions designed to solve complex challenges across multiple domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We are dedicated to developing, licensing, and maintaining cutting-edge software 
                and technological solutions that push the boundaries of artificial intelligence.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our commitment extends beyond development to include comprehensive research, 
                technical training, and ongoing support for our global partners.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-lg blur-xl"></div>
              <Card className="relative bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="h-6 w-6 text-blue-400 mr-2" />
                    Global Reach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">International Operations</span>
                    <Globe className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Cross-border Projects</span>
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Tech Transfer Programs</span>
                    <Lightbulb className="h-5 w-5 text-emerald-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI solutions transform operations across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center p-6">
                <industry.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-medium">{industry.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Let's Build the Future Together</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Ready to transform your business with AI? Contact us to discuss partnerships, 
                consultations, or custom solution development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">Custom solution design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">Ongoing support & training</span>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Start Your AI Journey</CardTitle>
                <CardDescription className="text-slate-300">
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Textarea
                    placeholder="Tell us about your project or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                    required
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">Prisma Research</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                © 2024 Prisma Research SAGL. Pioneering the future of artificial intelligence.
              </p>
              <p className="text-slate-500 text-sm mt-1">
                CHE-287.951.944 | Swiss Società a Garanzia Limitata
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
