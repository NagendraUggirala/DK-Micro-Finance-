import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const teamRef = useRef(null);
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });
  const isTeamInView = useInView(teamRef, { once: true, threshold: 0.3 });

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
      color: "from-violet-500 to-indigo-600"
    },
    {
      title: "Education Loans",
      description: "Supporting academic dreams from school fees to higher education abroad",
      stats: "5000+ Students Funded",
      color: "from-indigo-500 to-violet-600"
    },
    {
      title: "Business Loans",
      description: "Fueling entrepreneurship with working capital and expansion financing",
      stats: "1000+ Businesses Supported",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Medical Loans",
      description: "Healthcare financing for treatments, equipment, and hospital setups",
      stats: "200+ Medical Facilities",
      color: "from-violet-600 to-purple-600"
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "L. Gowthami",
      position: "HR Business Partner",
      department: "Human Resources",
      image: "/images/HR.png",
      description: "Leading HR operations and talent acquisition with focus on building a strong organizational culture.",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "D.v. mahalakshmi",
      position: "Team Leader",
      department: "Operations",
      image: "/images/image.png",
      description: "Experienced team leader driving operational excellence and customer service standards.",
      color: "from-indigo-500 to-violet-500"
    },
    {
      name: "B. Vani",
      position: "Second Team Leader",
      department: "Operations",
      image: "/images/TL.png",
      description: "Dedicated team leader ensuring smooth loan processing and client satisfaction.",
      color: "from-violet-500 to-amber-500"
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

  const teamCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-stone-100 overflow-x-hidden">
      {/* Hero - Left-aligned with full-width gradient */}
      <section className="relative py-20 md:py-28 bg-gradient-to-l from-violet-900 via-indigo-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl mx-auto text-left"
          >
            <div className="inline-block bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                About <span className="text-amber-400">DK Micro Finance</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-200/90 italic mb-4">
                "We Understand Your World"
              </p>
              <div className="w-24 h-1 bg-amber-400 rounded-full mb-2"></div>
              <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
                Building financial bridges to help you achieve your dreams with trust, transparency, and tailored solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership - Content LEFT, Image RIGHT, zigzag layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

              {/* Content FIRST (left on desktop) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-left">Our Leadership</h2>
                <p className="text-base text-violet-600 font-semibold mt-2 text-left">Expert Financial Guidance</p>

                <div className="mt-6 text-slate-700 space-y-4">
                  <p className="text-sm sm:text-base leading-relaxed">
                    Led by a team of experienced financial professionals with decades of combined expertise,
                    DK Micro Finance has established itself as a trusted name in the financial services industry.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    DK Micro Finance has grown into a trusted financial institution dedicated to serving
                    customers with compassion, responsibility, and integrity.
                  </p>

                  <div className="bg-violet-50 rounded-2xl p-5 md:p-6 mt-6 border border-violet-100">
                    <h4 className="font-bold text-violet-800 text-base md:text-lg mb-2">About DK Micro Finance</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      With over 12 years of expertise, we specialize in sustainable, transparent financial solutions
                      that ensure complete legal compliance and deliver exceptional value.
                    </p>
                  </div>
                </div>

                {/* Team Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-12 text-center"
                >
                  <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 bg-white rounded-2xl px-6 md:px-10 py-4 shadow-lg border border-violet-100">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-violet-700">50+</div>
                      <div className="text-xs text-slate-500">Team Members</div>
                    </div>
                    <div className="w-px h-8 bg-slate-300 hidden sm:block"></div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-indigo-700">10+</div>
                      <div className="text-xs text-slate-500">Years Combined</div>
                    </div>
                    <div className="w-px h-8 bg-slate-300 hidden sm:block"></div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-amber-600">24/7</div>
                      <div className="text-xs text-slate-500">Support</div>
                    </div>
                  </div>
                </motion.div>
               
              </motion.div>

              {/* Image SECOND (right on desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative group w-full max-w-md">
                  <div className="rounded-3xl overflow-hidden shadow-2xl ring-2 ring-violet-100 group-hover:ring-violet-300 transition-all duration-500">
                    <img
                      src="./images/CEO.png"
                      alt="Leadership Team"
                      className="w-full h-[380px] md:h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="text-white text-sm font-semibold">Leadership Team</div>
                      <div className="text-amber-300 text-xs uppercase tracking-wider">DK Micro Finance</div>
                    </div>
                  </div>

                  {/* Quote - positioned below image, left-aligned */}

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Left-aligned header, asymmetric grid */}
      <section ref={teamRef} className="py-16 md:py-24 bg-gradient-to-br from-violet-50 via-indigo-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 max-w-6xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
              Our <span className="text-violet-600">Dedicated Team</span>
            </h2>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isTeamInView ? "visible" : "hidden"}
                variants={teamCardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-violet-100 hover:border-violet-200"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Name Badge on Image */}
                  <div className="absolute bottom-2 left-2 right-2 z-20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-md p-2 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <h3 className="text-sm font-semibold text-slate-800">
                        {member.name}
                      </h3>
                      <p className="text-xs text-violet-600 font-medium">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${member.color} mr-2`}></span>
                    <p className="text-sm text-slate-500 font-medium">{member.department}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social/Hover Effect Line */}
                  <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${member.color} transition-all duration-500 rounded-full`}></div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Company Profile - Alternate left/right layout */}
      <section ref={ref1} className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                About DK Micro Finance
              </h2>

            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <motion.div variants={itemVariants} className="lg:text-right">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-violet-500 border border-slate-100 hover:shadow-xl hover:border-violet-300 transition-all duration-300">
                  <h3 className="text-lg md:text-2xl font-bold text-violet-800 mb-4">
                    Financial Services Excellence
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <span className="font-semibold text-slate-800">DK Micro Finance specializes in comprehensive financial solutions.</span>{" "}
                    Complete transparency, responsible lending, compassionate service, and lasting positive impact for every customer we serve.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our financial products are thoughtfully designed with customer needs in mind, offering flexible terms, competitive rates, and sustainable solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:mt-12">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-amber-500 border border-slate-100 hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                  <h3 className="text-lg md:text-2xl font-bold text-amber-800 mb-4">
                    Our Journey in Financial Services
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    What began as a small lending institution has grown into a trusted financial partner for thousands.
                    Our core principles remain unchanged: serving with honesty and transparency, delivering support with uncompromised quality,
                    and creating inclusive financial solutions accessible to all sections of society.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loan Sectors - Left-aligned header, staggered grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-6xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
              Our Loan Sectors
            </h2>

          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {loanSectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`bg-white rounded-2xl shadow-lg p-5 md:p-6 text-left group hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-violet-200 ${index % 2 === 1 ? 'lg:mt-8' : ''}`}
              >
                <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${sector.color} mb-4`}></div>
                <h3 className="text-base md:text-xl font-bold text-violet-800 mb-2 group-hover:text-violet-600 transition-colors">{sector.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{sector.description}</p>
                <div className="text-sm font-semibold text-amber-600">{sector.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - 3-column layout on large screens */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-violet-50/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-6xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
              Our Core Values
            </h2>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-5 md:p-6 text-center group hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-violet-200"
              >
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold text-violet-800 mb-2 group-hover:text-violet-600 transition-colors">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision - Left-aligned */}
      <section ref={ref3} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-left"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Empowering Financial Futures.
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-amber-500 mb-6 md:mb-8 rounded-full"></div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 md:mb-8">
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
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 text-sm sm:text-base"
                >
                  Start Your Financial Journey
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Violet/indigo gradient */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-900 via-indigo-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Achieve Your Financial Goals?
            </h2>
            <p className="text-base sm:text-lg text-slate-200 mb-6 md:mb-8">
              Discover how DK Micro Finance's commitment to transparency, responsible lending, and customer-centric solutions can transform your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/apply"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base text-center"
              >
                Apply for Loan
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base text-center"
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
      <div className="relative bg-white rounded-2xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col items-start justify-center ring-1 ring-slate-100 hover:ring-2 hover:ring-violet-200 hover:shadow-xl transition-all duration-300">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors duration-300 transform group-hover:scale-110">
          {title}
        </div>
        <div className="text-xs text-slate-400 mt-1 group-hover:text-slate-600 transition-colors duration-300">
          {subtitle}
        </div>

        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 to-amber-50/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}