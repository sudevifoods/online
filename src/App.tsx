import React, { useEffect, useState } from 'react';
import { Leaf, Award, ShieldCheck, ChefHat, ArrowRight, Users, Building, GraduationCap, Globe, Target, Heart } from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'careers':
        return <CareersPage />;
      case 'partner':
        return <PartnerPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-200 { transition-delay: 200ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-600 { transition-delay: 600ms; }

        .page-transition {
          transition: opacity 0.3s ease-in-out;
        }

        .page-transition.entering {
          opacity: 0;
        }

        .page-transition.entered {
          opacity: 1;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full py-4 px-8 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="https://drive.google.com/file/d/1oJHI6_Qw9n1fvxZFvRuYO94GAWUebz9X/view" // Replace with actual logo URL
              alt="Sudevi Logo"
              className="h-12"
            />
            <span className="text-2xl font-bold text-red-600">Sudevi</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setActivePage('home')}
              className={`transition ${activePage === 'home' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActivePage('careers')}
              className={`transition ${activePage === 'careers' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}
            >
              Careers
            </button>
            <button 
              onClick={() => setActivePage('partner')}
              className={`transition ${activePage === 'partner' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        {renderPage()}
      </div>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="reveal">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://i.imgur.com/XYZabc.jpg" // Replace with actual logo URL
                  alt="Sudevi Logo"
                  className="h-8"
                />
                <span className="text-xl font-bold">Sudevi</span>
              </div>
              <p className="text-white/80">
                Taste The Tradition
              </p>
            </div>
            <div className="reveal delay-200">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => setActivePage('home')} className="hover:text-white">Home</button></li>
                <li><button onClick={() => setActivePage('careers')} className="hover:text-white">Careers</button></li>
                <li><button onClick={() => setActivePage('partner')} className="hover:text-white">Partner With Us</button></li>
              </ul>
            </div>
            <div className="reveal delay-400">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li>123 Spice Road</li>
                <li>Mumbai, India</li>
                <li>contact@sudevi.com</li>
                <li>+91 123 456 7890</li>
              </ul>
            </div>
            <div className="reveal delay-600">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-white/80">
                Stay updated with our latest products and offers on social media
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 reveal">
            <p>&copy; 2024 Sudevi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.8), rgba(220, 38, 38, 0.8)), url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 reveal">
              Crafting Authentic Flavors Since 1965
            </h1>
            <p className="text-xl text-white/90 mb-8 reveal delay-200">
              Discover the perfect blend of tradition and taste with our handcrafted pickles and premium spices
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center mx-auto reveal delay-400">
              Explore Our Products
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center reveal">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">Sourced from premium farms and carefully selected for quality</p>
            </div>
            <div className="text-center reveal delay-200">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for our authentic taste and quality standards</p>
            </div>
            <div className="text-center reveal delay-400">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every batch tested to meet the highest quality standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Preview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-bold mb-4">Our Signature Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From traditional pickle recipes to aromatic spice blends, discover our range of authentic Indian flavors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?auto=format&fit=crop&q=80",
                title: "Mango Pickle",
                description: "Traditional raw mango pickle with aromatic spices"
              },
              {
                image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&q=80",
                title: "Garam Masala",
                description: "Premium blend of whole spices, freshly ground"
              },
              {
                image: "https://images.unsplash.com/photo-1596040033282-884a75a21b8f?auto=format&fit=crop&q=80",
                title: "Mixed Pickle",
                description: "Assorted vegetables in traditional spice blend"
              }
            ].map((product, index) => (
              <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition reveal delay-${index * 200}`}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <button className="mt-4 text-red-600 font-semibold hover:text-red-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heritage Section */}
      <div className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-4xl font-bold mb-6">Our Heritage</h2>
              <p className="text-gray-700 mb-6">
                For over five decades, Sudevi has been crafting authentic Indian pickles and spices, 
                preserving traditional recipes while embracing modern quality standards. Our journey 
                began in a small kitchen and has grown into a trusted household name.
              </p>
              <div className="flex items-center space-x-4">
                <ChefHat size={24} className="text-red-600" />
                <span className="text-lg font-semibold">60+ Years of Excellence</span>
              </div>
            </div>
            <div className="relative reveal delay-200">
              <img 
                src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80"
                alt="Heritage"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CareersPage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <div className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center reveal">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of a legacy that's been crafting authentic flavors for generations
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-red-600" size={32} />,
                title: "Inclusive Culture",
                description: "Join a diverse team that values every perspective and contribution"
              },
              {
                icon: <GraduationCap className="text-red-600" size={32} />,
                title: "Growth Opportunities",
                description: "Continuous learning and development programs for all employees"
              },
              {
                icon: <Heart className="text-red-600" size={32} />,
                title: "Great Benefits",
                description: "Comprehensive healthcare, wellness programs, and work-life balance"
              }
            ].map((benefit, index) => (
              <div key={index} className={`text-center p-6 reveal delay-${index * 200}`}>
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 reveal">Current Openings</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Production Manager",
                location: "Mumbai, India",
                type: "Full-time"
              },
              {
                title: "Quality Assurance Specialist",
                location: "Delhi, India",
                type: "Full-time"
              },
              {
                title: "R&D Food Technologist",
                location: "Pune, India",
                type: "Full-time"
              }
            ].map((job, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition reveal delay-${index * 200}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                <button className="mt-4 text-red-600 font-semibold hover:text-red-700 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerPage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <div className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center reveal">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Partner With Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hands with Sudevi to bring authentic flavors to more tables around the world
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-red-600" size={32} />,
                title: "Global Reach",
                description: "Access to international markets and established distribution networks"
              },
              {
                icon: <Target className="text-red-600" size={32} />,
                title: "Quality Assurance",
                description: "Benefit from our stringent quality control processes"
              },
              {
                icon: <Building className="text-red-600" size={32} />,
                title: "Infrastructure",
                description: "State-of-the-art manufacturing and storage facilities"
              }
            ].map((benefit, index) => (
              <div key={index} className={`text-center p-6 reveal delay-${index * 200}`}>
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 reveal">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Distribution Partnership",
                description: "Become an authorized distributor of Sudevi products in your region",
                features: ["Exclusive territory rights", "Marketing support", "Training programs"]
              },
              {
                title: "Manufacturing Partnership",
                description: "Collaborate with us to manufacture products under license",
                features: ["Technical support", "Quality control systems", "Recipe licensing"]
              }
            ].map((type, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition reveal delay-${index * 200}`}
              >
                <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChefHat className="text-red-600 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Interested in partnering with us? Fill out the form below and our team will get back to you.
            </p>
          </div>
          <form className="space-y-6 reveal delay-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:border-red-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:border-red-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:border-red-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:border-red-600">
                <option>Distribution Partnership</option>
                <option>Manufacturing Partnership</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:border-red-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;