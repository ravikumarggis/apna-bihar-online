import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@apnabiharonline.in',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      color: 'from-cyan-600 to-teal-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bihar, India',
      color: 'from-teal-600 to-blue-600',
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
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                  Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Have questions? We'd love to hear from you. Get in touch with us anytime.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-1000 delay-${index * 100} ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center h-full hover:-translate-y-2">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">{method.title}</h3>
                      <p className="text-slate-600">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div
                  className={`transform transition-all duration-1000 delay-200 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Business Hours
                      </h2>
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold text-slate-800">Weekdays</h3>
                          </div>
                          <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <Clock className="w-5 h-5 text-cyan-600" />
                            <h3 className="font-semibold text-slate-800">Weekend</h3>
                          </div>
                          <p className="text-slate-600">Saturday - Sunday: 10:00 AM - 4:00 PM IST</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <MessageSquare className="w-5 h-5 text-teal-600" />
                            <h3 className="font-semibold text-slate-800">Support</h3>
                          </div>
                          <p className="text-slate-600">Email support available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-1000 delay-400 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    {submitted && (
                      <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-xl text-green-700">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Quick Response Time</h2>
                <p className="text-blue-100 mb-6">We typically respond to all inquiries within 24 hours</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
