import {
  FileText,
  Zap,
  Shield,
  Download,
  Clock,
  Lock,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Custom PDF Generation",
      description:
        "Fill out a simple form and get a professionally formatted PDF document instantly.",
      features: [
        "Form-based generation",
        "Custom templates",
        "Professional formatting",
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description:
        "Experience instant generation with our optimized processing system.",
      features: [
        "Sub-second processing",
        "Optimized algorithms",
        "Real-time delivery",
      ],
      color: "from-cyan-600 to-teal-600",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your data is encrypted and protected with industry-standard security.",
      features: [
        "256-bit encryption",
        "Data privacy compliant",
        "Secure servers",
      ],
      color: "from-teal-600 to-blue-600",
    },
    {
      icon: Download,
      title: "Instant Download",
      description:
        "Download your generated PDF immediately after payment completion.",
      features: ["Direct download", "Email delivery option", "Archive access"],
      color: "from-blue-600 to-cyan-600",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time-Saving",
      description: "Generate documents in seconds instead of hours",
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption protects your data",
    },
    {
      icon: BarChart3,
      title: "Scalable Solution",
      description: "Handles unlimited documents without performance issues",
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      description: "Professional output every single time",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24">
        <section ref={sectionRef} className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div
                className={`text-center mb-16 transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                  Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Services
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Everything you need for professional PDF generation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-20">
                {services?.map((service, index) => (
                  <Link to="/upi-payment">
                    <div
                      key={index}
                      className={`transform transition-all duration-1000 delay-${
                        index * 100
                      } ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      onClick={() => {}}
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-slate-600"
                            >
                              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mb-20">
                <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform transition-all duration-1000 delay-${
                        index * 100
                      } ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl mb-4">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white transform transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Pricing Plans
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg">
                      Choose the perfect plan for your needs
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      View All Plans
                    </button>
                  </div>
                  <div className="grid gap-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                      <h3 className="font-bold text-lg mb-2">Starter</h3>
                      <p className="text-blue-100">Perfect for beginners</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                      <h3 className="font-bold text-lg mb-2">Professional</h3>
                      <p className="text-blue-100">For growing businesses</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                      <h3 className="font-bold text-lg mb-2">Enterprise</h3>
                      <p className="text-blue-100">For large organizations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
