import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import {
  FaHome, FaHandshake, FaBuilding, FaHospital, FaGraduationCap, FaUniversity,
  FaUsers, FaUser, FaUserTie, FaUserGraduate, FaChartLine, FaMoneyBill,
  FaPiggyBank, FaShieldAlt, FaClock, FaCheckCircle, FaLightbulb,
  FaGlobeAmericas, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCreditCard,
  FaBusinessTime, FaBalanceScale, FaChartBar, FaAward, FaHeadset
} from 'react-icons/fa';

const Home = () => {
  const [currentReviewSet, setCurrentReviewSet] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Auto-rotate reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewSet((prev) => (prev + 1) % Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate hero carousel every 5 seconds
  useEffect(() => {
    if (isHoveringHero) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHoveringHero]);

  // Hero carousel slides for DK Micro Finance
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
      title: "Your Financial Partner for Life",
      subtitle: "Building Dreams, Empowering Futures",
      description: "DK Micro Finance provides tailored loan solutions for home, education, business, and personal needs with competitive rates and flexible terms.",
      cta: "Apply Now"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
      title: "Easy Home Loans",
      subtitle: "Turn Your Dream Home into Reality",
      description: "Get quick approval for home loans with minimal documentation and attractive interest rates starting from 8.5% p.a.",
      cta: "Get Home Loan"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      title: "Education Loans",
      subtitle: "Invest in Your Future",
      description: "Support your educational aspirations with our flexible education loans for schools, colleges, and professional courses.",
      cta: "Learn More"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      title: "Business Growth Support",
      subtitle: "Fuel Your Entrepreneurial Dreams",
      description: "Business loans and working capital solutions designed to help your enterprise grow and thrive.",
      cta: "Explore Business Loans"
    }
  ];

  const loanTypes = [
    {
      icon: FaHome,
      title: "Home Loans",
      description: "Purchase, construct, or renovate your dream home with flexible repayment options",
      interest: "Starting from 8.5% p.a.",
      features: ["Quick Processing", "Minimal Documentation", "Flexible Tenure"]
    },
    {
      icon: FaBuilding,
      title: "Construction Loans",
      description: "Finance your construction projects with stage-wise disbursement facility",
      interest: "Starting from 9% p.a.",
      features: ["Stage-wise Disbursement", "Technical Support", "Insurance Coverage"]
    },
    {
      icon: FaHospital,
      title: "Hospital Loans",
      description: "Modernize healthcare facilities with specialized medical equipment financing",
      interest: "Starting from 10% p.a.",
      features: ["Medical Equipment Finance", "Clinic Setup", "Hospital Expansion"]
    },
    {
      icon: FaGraduationCap,
      title: "Education Loans",
      description: "Fund your academic journey from school to higher education",
      interest: "Starting from 9.5% p.a.",
      features: ["Moratorium Period", "Co-borrower Option", "Education Counsel"]
    }
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Safe & Secure",
      description: "Your financial security is our top priority with advanced encryption and data protection"
    },
    {
      icon: FaClock,
      title: "Quick Processing",
      description: "Get loan approval within 24-48 hours with minimal documentation"
    },
    {
      icon: FaMoneyBill,
      title: "Competitive Rates",
      description: "Attractive interest rates starting from 8.5% with transparent pricing"
    },
    {
      icon: FaCheckCircle,
      title: "Flexible Terms",
      description: "Customized repayment plans that suit your financial capability"
    }
  ];

  const values = [
    {
      title: "Trust & Transparency",
      description: "We believe in building lasting relationships through complete transparency in all our dealings",
      icon: FaHandshake
    },
    {
      title: "Customer Centricity",
      description: "Every loan is customized to meet individual needs with personalized service",
      icon: FaUsers
    },
    {
      title: "Financial Empowerment",
      description: "Empowering individuals and businesses to achieve their financial goals and dreams",
      icon: FaChartLine
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Mehta",
      location: "Home Loan Customer",
      rating: 5,
      comment: "DK Micro Finance made my dream of owning a home come true. The process was smooth, and their team was extremely supportive throughout. Highly recommended!",
      avatar: FaUserTie,
      date: "March 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Education Loan",
      rating: 5,
      comment: "Thanks to DK Micro Finance, I could pursue my MBA from a premium institute. The education loan process was hassle-free with good terms.",
      avatar: FaUser,
      date: "February 2024"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Business Loan",
      rating: 5,
      comment: "Their business loan helped expand my manufacturing unit. The quick approval and flexible repayment made all the difference.",
      avatar: FaChartBar,
      date: "January 2024"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "Hospital Loan",
      rating: 5,
      comment: "Financed my clinic's modernization through DK Micro Finance. Excellent service and understanding of medical equipment financing needs.",
      avatar: FaUserGraduate,
      date: "December 2023"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Construction Loan",
      rating: 5,
      comment: "Stage-wise disbursement for my construction project was handled professionally. Very satisfied with their service.",
      avatar: FaBuilding,
      date: "November 2023"
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "School Loan",
      rating: 5,
      comment: "Got a loan for school infrastructure development. The process was efficient and terms were exactly what we needed.",
      avatar: FaGraduationCap,
      date: "October 2023"
    }
  ];

  // Get current set of reviews based on screen size
  const getCurrentReviews = () => {
    const isMobile = window.innerWidth < 768;
    const reviewsPerView = isMobile ? 1 : 3;
    return reviews.slice(currentReviewSet * reviewsPerView, currentReviewSet * reviewsPerView + reviewsPerView);
  };

  const [currentReviews, setCurrentReviews] = useState(getCurrentReviews());

  // Update reviews when window resizes or review set changes
  useEffect(() => {
    const handleResize = () => {
      setCurrentReviews(getCurrentReviews());
    };

    window.addEventListener('resize', handleResize);
    setCurrentReviews(getCurrentReviews());

    return () => window.removeEventListener('resize', handleResize);
  }, [currentReviewSet]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const reviewVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Loan products cards data
  const loanProducts = [
    {
      id: 1,
      title: "Home Loans",
      subtitle: "For Your Dream Home",
      description: "Flexible home loan solutions for purchase, construction, or renovation of residential property.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      badge: "Popular",
      badgeColor: "bg-green-500",
      features: ["Up to 90% Financing", "30 Year Tenure", "Balance Transfer"],
      gradient: "from-blue-500 to-cyan-600",
      interest: "8.5% - 11% p.a."
    },
    {
      id: 2,
      title: "Mortgage Loans",
      subtitle: "Unlock Your Property's Value",
      description: "Get funds against your existing property for business expansion or personal needs.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      badge: "Secure",
      badgeColor: "bg-purple-500",
      features: ["High Loan Value", "Low Interest", "Flexible Terms"],
      gradient: "from-purple-500 to-pink-600",
      interest: "9% - 12% p.a."
    },
    {
      id: 3,
      title: "Construction Loans",
      subtitle: "Build Your Vision",
      description: "Stage-wise disbursement for residential and commercial construction projects.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      badge: "Flexible",
      badgeColor: "bg-orange-500",
      features: ["Stage Disbursement", "Technical Support", "Insurance"],
      gradient: "from-orange-500 to-red-600",
      interest: "9% - 13% p.a."
    },
    {
      id: 4,
      title: "Education Loans",
      subtitle: "Invest in Knowledge",  // Fixed: Only subtitle appears here
      description: "Comprehensive financing for school fees, college tuition, and professional courses.",
      image: "https://media.istockphoto.com/id/671954970/vector/new-indian-currency-with-books.jpg?s=612x612&w=0&k=20&c=DdzcxIjEOluqIwmuCdBYO49qyaI3I5p1O6-f7x8b1DE=",
      badge: "Future",
      badgeColor: "bg-indigo-500",
      features: ["Moratorium Period", "Co-borrower Option", "Education Counsel"],
      gradient: "from-indigo-500 to-blue-600",
      interest: "9.5% - 12% p.a."
    }
  ];

  const heroVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section
        className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            variants={heroVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroSlides[currentHeroSlide].image})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 via-blue-700/70 to-blue-600/60"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="text-white"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    {heroSlides[currentHeroSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-orange-300 font-semibold mb-4 md:mb-6">
                    {heroSlides[currentHeroSlide].subtitle}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                    {heroSlides[currentHeroSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/apply"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
                    >
                      {heroSlides[currentHeroSlide].cta}
                    </Link>
                    <Link
                      to="/initiatives"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center"
                    >
                      View All Loans
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentHeroSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 md:mb-4">
                Welcome to DK Micro Finance
              </h2>
              <div className="w-16 md:w-20 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed 
              text-sm md:text-base 
              text-left md:text-center">
                DK Micro Finance Private Limited is your trusted financial partner, committed to providing accessible
                and affordable loan solutions. We understand your financial needs and offer customized products
                with transparent terms and quick processing. Our mission is to empower individuals and businesses
                to achieve their dreams through responsible lending.
              </p>

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 md:mb-4">Our Philosophy</h3>
                <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  "We Understand Your World" - This is more than just a slogan for us. It's our commitment to
                  understanding your unique financial needs and providing solutions that truly work for you.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  With partnerships across major banks and private finance institutions, we offer comprehensive
                  loan products including home loans, mortgage loans, construction loans, hospital loans, school
                  loans, and college loans - all designed to help you build a better future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg mx-2"
              >
                <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3 md:mb-4">Our Loan Products</h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Home Loans for dream home purchase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Mortgage Loans against property</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Construction Loans with stage-wise disbursement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Education Loans for schools and colleges</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2 md:mb-3">
              Our Loan Products
            </h1>
            <p className="text-blue-600 text-sm md:text-base">
              Tailored financial solutions for every stage of life
            </p>
          </motion.div>

          {/* Loan Products Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {loanProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                >
                  {/* Interest Rate Badge */}
                  <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg`}>
                    {product.interest}
                  </div>

                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-1 md:mb-2 leading-tight line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-sm md:text-base text-orange-600 font-semibold mb-2 md:mb-3">
                      {product.subtitle}  {/* This should only show subtitle, not duplicate title */}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 mb-4 md:mb-5">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.1 + 0.3 }}
                          className="flex items-center text-xs md:text-sm text-gray-700"
                        >
                          <span className="text-green-500 mr-1.5 text-sm">✓</span>
                          <span className="line-clamp-1">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/apply"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-xs md:text-sm text-center"
                      >
                        Apply Now
                      </Link>
                      <Link
                        to={`/about`}
                        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-xs md:text-sm text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Brand Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 md:mt-8 text-center"
            >
              <p className="text-blue-600 text-sm md:text-base">
                <span className="text-orange-500 font-semibold">"We Understand Your World"</span> - Building Trust, Delivering Excellence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
                    gap-6 sm:gap-8 md:gap-10 
                    max-w-6xl mx-auto">

            {[
              { number: "5000+", label: "Happy Customers", icon: FaUsers, color: "text-blue-500" },
              { number: "₹250+ Cr", label: "Loan Disbursed", icon: FaMoneyBill, color: "text-green-500" },
              { number: "24-48", label: "Hours Approval", icon: FaClock, color: "text-orange-500" },
              { number: "98%", label: "Customer Satisfaction", icon: FaAward, color: "text-purple-500" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center px-2"
                >
                  <div className={`mb-3 ${stat.color} flex justify-center`}>
                    <IconComponent className="text-3xl sm:text-4xl md:text-5xl" />
                  </div>

                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                            font-bold text-blue-700 mb-1 sm:mb-2">
                    {stat.number}
                  </div>

                  <div className="text-xs sm:text-sm md:text-base 
                            text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>


      {/* Loan Types Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 md:mb-4">
              Comprehensive Loan Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              We offer a wide range of loan products tailored to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2">
            {loanTypes.map((loan, index) => {
              const LoanIcon = loan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100"
                >
                  <div className="mb-3 md:mb-4 text-blue-600 flex justify-center">
                    <LoanIcon className="text-4xl md:text-5xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-2 md:mb-3">{loan.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{loan.description}</p>
                  <div className="text-orange-600 font-bold text-sm md:text-base mb-3">{loan.interest}</div>
                  <ul className="space-y-1 md:space-y-2 text-left">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-xs md:text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 md:mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Get your loan approved quickly with our streamlined application process
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line - centered vertically through cards */}
              <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-2 bg-blue-300 -translate-y-1/2 z-0 rounded-full"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
                {[
                  {
                    number: "01",
                    title: "Apply Online",
                    description: "Fill our simple online application form with basic details",
                    icon: FaCreditCard
                  },
                  {
                    number: "02",
                    title: "Document Upload",
                    description: "Upload required documents securely through our portal",
                    icon: FaBusinessTime
                  },
                  {
                    number: "03",
                    title: "Verification",
                    description: "Quick verification and approval process",
                    icon: FaCheckCircle
                  },
                  {
                    number: "04",
                    title: "Loan Disbursal",
                    description: "Get funds directly in your bank account",
                    icon: FaMoneyBill
                  }
                ].map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center flex flex-col h-full"
                    >
                      {/* Blue number circle with line going through center */}
                      <div className="relative mb-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto flex items-center justify-center shadow-lg relative z-20">
                          <span className="text-2xl md:text-3xl font-bold text-white">{step.number}</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg flex flex-col flex-grow h-full">
                        <div className="mb-3 md:mb-4 text-blue-600 flex justify-center">
                          <StepIcon className="text-3xl md:text-4xl" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-2 md:mb-3">{step.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base flex-grow">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 md:mb-4">
              Why Choose DK Micro Finance?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Experience financial services that put you first
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 rounded-xl shadow-md border border-blue-100 text-center"
                >
                  <div className="mb-3 md:mb-4 flex justify-center text-blue-600">
                    <FeatureIcon className="text-3xl md:text-4xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 md:mb-3 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 md:mb-4">
              Customer Success Stories
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Hear from our satisfied customers who achieved their dreams with our help
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-2">
            {/* Review Carousel - Responsive Layout */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewSet}
                  variants={reviewVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`grid gap-4 md:gap-6 ${window.innerWidth < 768 ? 'grid-cols-1' : 'grid-cols-3'
                    }`}
                >
                  {currentReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                      <StarRating rating={review.rating} />
                      <blockquote className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed min-h-[80px] md:min-h-[96px]">
                        "{review.comment}"
                      </blockquote>
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="text-blue-600">
                          <review.avatar className="text-2xl md:text-3xl" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</div>
                          <div className="text-xs text-gray-600">{review.location}</div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                {[...Array(Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewSet(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentReviewSet ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-2">
              The principles that guide every aspect of our service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-2">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-4 md:p-6"
                >
                  <div className="mb-3 md:mb-4 text-orange-500 flex justify-center">
                    <ValueIcon className="text-3xl md:text-4xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 md:mb-3 leading-tight">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Banks Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 md:mb-4">
              Partner Banks & Financial Institutions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              We collaborate with specialized banks and financial institutions to offer tailored loan solutions
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">

            {/* Home Loan Specialized Banks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-16 px-4"
            >
              {/* Section Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
                <FaHome className="text-blue-600 text-3xl" />
                Home Loan Partners
              </h3>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  {
                    name: "HDFC Ltd.",
                    short: "HDFC",
                    rate: "8.4%",
                    processing: "0.5%",
                    maxLoan: "Up to ₹5 Cr",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "LIC Housing",
                    short: "LIC",
                    rate: "8.5%",
                    processing: "0.4%",
                    maxLoan: "Up to ₹3 Cr",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "ICICI Home",
                    short: "ICICI",
                    rate: "8.6%",
                    processing: "0.6%",
                    maxLoan: "Up to ₹4 Cr",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-500",
                    rateColor: "text-blue-600",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "SBI Home",
                    short: "SBI",
                    rate: "8.3%",
                    processing: "0.3%",
                    maxLoan: "Up to ₹6 Cr",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-500",
                    rateColor: "text-blue-600",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "PNB Housing",
                    short: "PNB",
                    rate: "8.7%",
                    processing: "0.5%",
                    maxLoan: "Up to ₹3.5 Cr",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "Axis Home",
                    short: "AXIS",
                    rate: "8.6%",
                    processing: "0.4%",
                    maxLoan: "Up to ₹4 Cr",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-500",
                    rateColor: "text-blue-600",
                    badgeColor: "bg-blue-100 text-blue-800"
                  }
                ].map((bank, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${bank.bgColor} border-t-4 ${bank.borderColor}`}
                  >
                    {/* Bank Short Name */}
                    <h4 className="text-xl font-bold text-center text-gray-800">
                      {bank.short}
                    </h4>

                    {/* Full Name */}
                    <p className="text-xs text-center text-gray-600 mb-4">
                      {bank.name}
                    </p>

                    {/* Interest Rate */}
                    <p className={`text-3xl font-extrabold text-center mb-1 ${bank.rateColor}`}>
                      {bank.rate}
                    </p>
                    <p className="text-xs text-center text-gray-500 mb-3">
                      Interest Rate (p.a.)
                    </p>

                    {/* Divider */}
                    <div className="w-8 h-0.5 bg-gray-300 mx-auto mb-3"></div>

                   

                    {/* Bank Badge */}
                    <div className="mt-3 text-center">
                      <span className={`text-xs font-medium px-3 py-1.5 rounded-full inline-block ${bank.badgeColor}`}>
                        Home Loan
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Education Loan Specialized Banks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-10 px-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                <FaGraduationCap className="text-green-600" />
                Education Loan Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  {
                    name: "Avanse",
                    short: "Avanse",
                    loan: "Education",
                    rate: "9.0%",
                    bgColor: "bg-green-50",
                    borderColor: "border-t-green-600",
                    rateColor: "text-green-700",
                    badgeColor: "bg-green-100 text-green-800"
                  },
                  {
                    name: "HDFC Credila",
                    short: "Credila",
                    loan: "Education",
                    rate: "8.9%",
                    bgColor: "bg-green-50",
                    borderColor: "border-t-green-600",
                    rateColor: "text-green-700",
                    badgeColor: "bg-green-100 text-green-800"
                  },
                  {
                    name: "ICICI Edu",
                    short: "ICICI",
                    loan: "Education",
                    rate: "9.1%",
                    bgColor: "bg-green-50",
                    borderColor: "border-t-green-600",
                    rateColor: "text-green-700",
                    badgeColor: "bg-green-100 text-green-800"
                  },
                  {
                    name: "Axis Edu",
                    short: "AXIS",
                    loan: "Education",
                    rate: "9.2%",
                    bgColor: "bg-green-50",
                    borderColor: "border-t-green-600",
                    rateColor: "text-green-700",
                    badgeColor: "bg-green-100 text-green-800"
                  },
                  {
                    name: "SBI Scholar",
                    short: "SBI",
                    loan: "Education",
                    rate: "8.8%",
                    bgColor: "bg-green-100",
                    borderColor: "border-t-green-700",
                    rateColor: "text-green-800",
                    badgeColor: "bg-green-200 text-green-900"
                  },
                  {
                    name: "Propelld",
                    short: "Propelld",
                    loan: "Education",
                    rate: "9.5%",
                    bgColor: "bg-green-50",
                    borderColor: "border-t-green-600",
                    rateColor: "text-green-700",
                    badgeColor: "bg-green-100 text-green-800"
                  }
                ].map((bank, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 border-t-4 ${bank.bgColor} ${bank.borderColor}`}
                  >
                    <div className="text-center">
                      {/* Short Name */}
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        {bank.short}
                      </h4>

                      {/* Full Name */}
                      <p className="text-xs text-gray-600 mb-3">
                        {bank.name}
                      </p>

                      {/* Interest Rate */}
                      <p className={`text-2xl font-extrabold ${bank.rateColor} mb-1`}>
                        {bank.rate}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        Interest Rate (p.a.)
                      </p>

                      {/* Divider */}
                      <div className="w-8 h-0.5 bg-gray-300 mx-auto mb-3"></div>

                      {/* Loan Type Badge */}
                      <div className={`text-xs font-medium px-3 py-1.5 rounded-full inline-block ${bank.badgeColor}`}>
                        Education Loan
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>



            {/* Business & Personal Loan Banks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10 px-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                <FaBusinessTime className="text-blue-600" />
                Business & Personal Loan Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  {
                    name: "Bajaj Finserv",
                    short: "Bajaj",
                    loan: "Personal",
                    rate: "10.5%",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "Fullerton",
                    short: "Fullerton",
                    loan: "Personal",
                    rate: "11.0%",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "Indifi",
                    short: "Indifi",
                    loan: "Business",
                    rate: "12.0%",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "Lendingkart",
                    short: "LKart",
                    loan: "Business",
                    rate: "11.5%",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "FlexiLoans",
                    short: "Flexi",
                    loan: "Business",
                    rate: "11.8%",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  },
                  {
                    name: "Capital Float",
                    short: "Capital",
                    loan: "Business",
                    rate: "11.2%",
                    bgColor: "bg-blue-50",
                    borderColor: "border-t-blue-600",
                    rateColor: "text-blue-700",
                    badgeColor: "bg-blue-100 text-blue-800"
                  }
                ].map((bank, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 border-t-4 ${bank.bgColor} ${bank.borderColor}`}
                  >
                    <div className="text-center">
                      {/* Short Name */}
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        {bank.short}
                      </h4>

                      {/* Full Name */}
                      <p className="text-xs text-gray-600 mb-3">
                        {bank.name}
                      </p>

                      {/* Interest Rate */}
                      <p className={`text-2xl font-extrabold ${bank.rateColor} mb-1`}>
                        {bank.rate}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        Interest Rate (p.a.)
                      </p>

                      {/* Divider */}
                      <div className="w-8 h-0.5 bg-gray-300 mx-auto mb-3"></div>

                      {/* Loan Type Badge */}
                      <div className={`text-xs font-medium px-3 py-1.5 rounded-full inline-block ${bank.badgeColor}`}>
                        {bank.loan} Loan
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Medical & Hospital Loan Banks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                <FaHospital className="text-red-600" />
                Medical & Hospital Loan Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  {
                    name: "Medfin",
                    short: "Medfin",
                    loan: "Medical",
                    rate: "10.0%",
                    bgColor: "bg-red-50",
                    borderColor: "border-t-red-600",
                    rateColor: "text-red-700",
                    badgeColor: "bg-red-100 text-red-800"
                  },
                  {
                    name: "Medi Loan",
                    short: "MediLoan",
                    loan: "Medical",
                    rate: "10.5%",
                    bgColor: "bg-red-50",
                    borderColor: "border-t-red-600",
                    rateColor: "text-red-700",
                    badgeColor: "bg-red-100 text-red-800"
                  },
                  {
                    name: "Doctor Loan",
                    short: "DocLoan",
                    loan: "Medical",
                    rate: "9.8%",
                    bgColor: "bg-red-50",
                    borderColor: "border-t-red-600",
                    rateColor: "text-red-700",
                    badgeColor: "bg-red-100 text-red-800"
                  },
                  {
                    name: "Health Credit",
                    short: "HealthCr",
                    loan: "Medical",
                    rate: "10.2%",
                    bgColor: "bg-red-50",
                    borderColor: "border-t-red-600",
                    rateColor: "text-red-700",
                    badgeColor: "bg-red-100 text-red-800"
                  },
                  {
                    name: "Medprime",
                    short: "Medprime",
                    loan: "Medical",
                    rate: "10.8%",
                    bgColor: "bg-red-50",
                    borderColor: "border-t-red-600",
                    rateColor: "text-red-700",
                    badgeColor: "bg-red-100 text-red-800"
                  },
                  {
                    name: "SBI Doctor",
                    short: "SBI",
                    loan: "Medical",
                    rate: "9.5%",
                    bgColor: "bg-red-100",
                    borderColor: "border-t-red-700",
                    rateColor: "text-red-800",
                    badgeColor: "bg-red-200 text-red-900"
                  }
                ].map((bank, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 border-t-4 ${bank.bgColor} ${bank.borderColor}`}
                  >
                    <div className="text-center">
                      {/* Short Name */}
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        {bank.short}
                      </h4>

                      {/* Full Name */}
                      <p className="text-xs text-gray-600 mb-3">
                        {bank.name}
                      </p>

                      {/* Interest Rate */}
                      <p className={`text-2xl font-extrabold ${bank.rateColor} mb-1`}>
                        {bank.rate}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        Interest Rate (p.a.)
                      </p>

                      {/* Divider */}
                      <div className="w-8 h-0.5 bg-gray-300 mx-auto mb-3"></div>

                      {/* Loan Type Badge */}
                      <div className={`text-xs font-medium px-3 py-1.5 rounded-full inline-block ${bank.badgeColor}`}>
                        Medical Loan
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Loan Type Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Comprehensive Loan Partnership Network
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { count: "25+", label: "Home Loan Partners", icon: FaHome, color: "bg-orange-500" },
                  { count: "18+", label: "Education Loan Partners", icon: FaGraduationCap, color: "bg-green-500" },
                  { count: "15+", label: "Business Loan Partners", icon: FaBusinessTime, color: "bg-purple-500" },
                  { count: "12+", label: "Medical Loan Partners", icon: FaHospital, color: "bg-red-500" }
                ].map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                          <StatIcon className="text-white text-xl" />
                        </div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1">{stat.count}</div>
                      <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-blue-200 mt-6 text-sm md:text-base">
                Access to 70+ specialized banks & financial institutions across all loan categories
              </p>
            </div>
          </motion.div>

        </div>
      </section>
      {/* Contact Information */}

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Achieve Your Financial Goals?
            </h2>
            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Apply for a loan today and take the first step towards realizing your dreams with DK Micro Finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-blue-700 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Apply for Loan
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base"
              >
                Talk to Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;