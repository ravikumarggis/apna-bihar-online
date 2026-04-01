import { Award, Target, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

export default function About() {
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

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '1000+' },
    { icon: Award, label: 'Quality Service', value: '100%' },
    { icon: Target, label: 'Success Rate', value: '99.9%' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Speed',
      description: 'Lightning-fast PDF generation with optimized processing',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade encryption and data protection',
    },
    {
      icon: TrendingUp,
      title: 'Reliability',
      description: 'Consistent 99.9% uptime and service availability',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24">
        <section ref={sectionRef} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div
                className={`text-center mb-16 transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                  About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Apna Bihar Online</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Transforming document generation with cutting-edge technology and customer-first service
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-1000 delay-${index * 200} ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 group">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</h3>
                      <p className="text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-20 transform transition-all duration-1000 delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                      Our Mission
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      At Apna Bihar Online, we're revolutionizing how documents are generated and delivered.
                      Our mission is to provide instant, professional PDF generation services that are secure,
                      affordable, and accessible to everyone. We believe in simplifying complexity and delivering
                      excellence in every interaction.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Instant professional document generation',
                        'Bank-level security and encryption',
                        'User-friendly, intuitive interface',
                        'Affordable pricing for all',
                        ' 24/7 reliable service',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20" />
                    <img
                      src="https://images.pexels.com/photos/3862363/pexels-photo-3862363.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Our Mission"
                      className="relative rounded-2xl shadow-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
                  Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Core Values</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center transform transition-all duration-1000 delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Thousands of Satisfied Users
                </h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Experience the power of instant PDF generation with Apna Bihar Online
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
