import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });

  const milestones = [
    { year: "2010", title: "Foundation", description: "DK Micro Finance established with vision of ethical lending" },
    { year: "2015", title: "Expansion", description: "Diversified into home loans and education financing" },
    { year: "2020", title: "Digital Transformation", description: "Launched online loan processing platform" },
    { year: "2024", title: "Innovation", description: "Introduced AI-powered loan assessment systems" }
  ];

  const values = [
    {
      icon: "🛡️", // Represents security and trust
      title: "Trust & Transparency",
      description: "Complete transparency in all our dealings with clear terms, no hidden charges, and honest communication."
    },
    {
      icon: "🎯", // Represents focus and precision
      title: "Customer-Centric Approach",
      description: "Every loan is customized to meet individual needs with personalized service and flexible solutions."
    },
    {
      icon: "⚖️", // Represents ethics and balance
      title: "Ethical Lending",
      description: "Responsible lending practices that prioritize customer welfare and long-term financial health."
    },
    {
      icon: "🚀", // Represents growth and empowerment
      title: "Financial Empowerment",
      description: "Empowering individuals and businesses to achieve their dreams through accessible financing."
    }
  ];

  const loanSectors = [
    {
      title: "Home Loans",
      description: "Complete financing solutions for buying, building, or renovating your dream home",
      stats: "₹250+ Cr Disbursed",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Education Loans",
      description: "Supporting academic dreams from school fees to higher education abroad",
      stats: "5000+ Students Funded",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Business Loans",
      description: "Fueling entrepreneurship with working capital and expansion financing",
      stats: "1000+ Businesses Supported",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Medical Loans",
      description: "Healthcare financing for treatments, equipment, and hospital setups",
      stats: "200+ Medical Facilities",
      color: "from-red-500 to-red-600"
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enhanced Hero Section with Company Tagline */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Company Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 shadow-2xl mx-2">
                {/* Company Tagline */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-5 leading-tight">
                  We Understand Your World
                </div>

                {/* Transliteration */}
                <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5">
                  "Your Trusted Financial Partner"
                </div>

                {/* Separator */}
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full mb-4 md:mb-5"></div>

                {/* Meaning */}
                <div className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  Building financial bridges to help you achieve your dreams with trust, transparency, and tailored solutions.
                </div>
              </div>
            </motion.div>

            {/* Main Title - Smaller Size */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100"
            >
              About <span className="text-orange-300">DK Micro Finance</span>
            </motion.h1>

          </motion.div>
        </div>
      </section>

      {/* Founder/Leadership Section - Enhanced for Mobile */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

              {/* Left: Image card with responsive sizing */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center w-full lg:justify-start order-2 lg:order-1"
              >
                <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  {/* Responsive Image card */}
                  <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white transform transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-blue-200">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                      alt="Leadership Team"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    {/* Founder & Chairman Badge - On Image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-4 md:left-6 bottom-4 md:bottom-6 transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg text-xs md:text-sm font-semibold text-gray-700 border border-gray-100 group-hover:border-blue-200 group-hover:shadow-xl transition-all duration-300">
                        <div className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">Leadership Team</div>
                        <div className="uppercase text-xs tracking-wide group-hover:text-blue-600 transition-colors">DK MICRO FINANCE</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Quote Section Under Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-6 group"
                  >
                    <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-600 mx-2 sm:mx-0">
                      <p className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        We transform financial aspirations into realities. Every loan we provide is guided by responsibility, 
                        transparency, and a vision for sustainable financial growth. DK Micro Finance's efforts are not just financial transactions
                        they are foundations of hope, dignity, and positive change for generations to come.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content with improved mobile alignment */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8 order-1 lg:order-2 w-full"
              >
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-center lg:text-left">Our Leadership</h2>
                  <p className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold mt-1 text-center lg:text-left">Expert Financial Guidance</p>

                  <div className="mt-4 md:mt-6 text-gray-700 space-y-4 w-full">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      Led by a team of experienced financial professionals with decades of combined expertise,
                      DK Micro Finance has established itself as a trusted name in the financial services industry.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      DK Micro Finance has grown into a trusted financial institution dedicated to serving 
                      customers with compassion, responsibility, and integrity. Rooted in ethical lending practices, 
                      we focus on empowering individuals and businesses to create meaningful financial impact.
                    </p>

                    {/* Added DK Micro Finance Information */}
                    <div className="bg-blue-50 rounded-lg p-4 md:p-6 mt-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-700 text-base sm:text-lg md:text-xl mb-2">About DK Micro Finance</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Under expert leadership, DK Micro Finance has emerged as a trusted name in financial services,
                        transforming financial aspirations into achievable goals. With over 12 years of expertise,
                        we specialize in creating sustainable, transparent financial solutions that ensure complete 
                        legal compliance and deliver exceptional value.
                      </p>
                    </div>
                  </div>

                  {/* Stats Section on Right Side Below Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-8 w-full"
                  >
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto lg:mx-0">
                      <EnhancedStatCard title="50,000+" subtitle="Customers" delay={0} />
                      <EnhancedStatCard title="₹500+ Cr" subtitle="Loans Disbursed" delay={0.1} />
                      <EnhancedStatCard title="12+" subtitle="Years" delay={0.2} />
                      <EnhancedStatCard title="98%" subtitle="Satisfaction" delay={0.3} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section - Mobile Optimized */}
      <section ref={ref1} className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-6">
                About DK Micro Finance
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
                Transforming financial aspirations into realities through transparent, accessible, and responsible lending.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-stretch px-2 sm:px-0">
              <motion.div variants={itemVariants} className="flex">
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-4 md:mb-6 text-left">
                        Financial Services Excellence
                      </h3>
                      <div className="space-y-4 text-left">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          <span className="font-semibold text-blue-700">
                          DK Micro Finance specializes in comprehensive financial solutions.
                          </span>{" "}
                          Complete transparency, responsible lending, compassionate service, and lasting positive impact for every customer we serve.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          Our financial products are thoughtfully designed with customer needs in mind, offering flexible terms, competitive rates, and sustainable solutions that support financial growth and deliver lasting positive impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex">
                <div className="bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col h-full w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-4 md:mb-6 text-left">
                        Our Journey in Financial Services
                      </h3>
                      <div className="space-y-4 text-left">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          What began as a small lending institution has grown into a trusted financial partner for thousands. 
                          Yet, our core principles remain unchanged: serving with honesty and transparency, delivering support with uncompromised quality,
                          and creating inclusive financial solutions that remain accessible to all sections of society.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loan Sectors Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-6">
              Our Loan Sectors
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
              Comprehensive financial solutions tailored for every life stage and business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
            {loanSectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`h-2 rounded-t-xl bg-gradient-to-r ${sector.color} mb-4`}></div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-700 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">{sector.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors mb-3">{sector.description}</p>
                <div className="text-sm font-semibold text-orange-600">{sector.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-6">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
              The principles that guide our financial services and set DK Micro Finance apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-700 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision - Mobile Optimized */}
      <section ref={ref3} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-6">
                Empowering Financial Futures.
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 px-2 sm:px-4">
                With expanding services in home financing, education loans, business support, and medical funding,
                DK Micro Finance stands for responsible lending, transparent operations, and a vision to create lasting financial security, 
                meaningful opportunities, and prosperity that benefits generations to come.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm sm:text-base"
                >
                  Start Your Financial Journey
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Achieve Your Financial Goals?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
              Discover how DK Micro Finance's commitment to transparency, responsible lending, and customer-centric solutions can transform your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Apply for Loan
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
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

export default About;

/* Enhanced Stat Card Component */
function EnhancedStatCard({ title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:ring-2 hover:ring-blue-200 hover:shadow-xl transition-all duration-300">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110">
          {title}
        </div>
        <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-600 transition-colors duration-300">
          {subtitle}
        </div>

        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}