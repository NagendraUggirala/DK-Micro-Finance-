
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  loanType: "",
  amount: "",
  message: "",
  website: "" // honeypot
};

const ContactAdvancedWithMapBottom = () => {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem("dk_contact_draft");
      return saved ? JSON.parse(saved) : initialForm;
    } catch {
      return initialForm;
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // refs for sections
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.15 });

  // lazy load map when bottom section is near viewport
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "0px 0px -120px 0px" });

  useEffect(() => {
    const t = setTimeout(() => {
      localStorage.setItem("dk_contact_draft", JSON.stringify(formData));
    }, 600);
    return () => clearTimeout(t);
  }, [formData]);

  useEffect(() => {
    if (submitStatus === "success") {
      const t = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(t);
    }
  }, [submitStatus]);

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Office Address",
      description: "Visit us at our location",
      details: [
        "DK Micro Finance Private Limited",
        "2nd Floor, Bloossom Heights",
        "Patrika Nagar, Hitech City",
        "Madhapur, Hyderabad",
        "Telangana - 500081, India"
      ],
      action: "View on Map",
      link: "#map",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: "Phone / WhatsApp",
      description: "Available for loan queries & support",
      details: ["Landline: 040-29331883", "Mobile: 99667 11883"],
      action: "Call Now",
      link: "tel:+914029331883",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: "Email Us",
      description: "Send us your loan queries",
      details: ["dkmicrofinancepvtltd@gmail.com"],
      action: "Send Email",
      link: "mailto:dkmicrofinancepvtltd@gmail.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  const loanTypes = [
    "Select Loan Type",
    "Home Loan",
    "Mortgage Loan",
    "Construction Loan",
    "Hospital Loan",
    "School Loan",
    "College Loan",
    "Education Loan",
    "Business Loan",
    "Personal Loan",
    "Other"
  ];

  // validation
  const validate = (data) => {
    const e = {};
    if (!data.name?.trim()) e.name = "Name is required";
    if (!data.email?.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
    if (!data.phone?.trim()) e.phone = "Phone is required";
    else if (!/^\+?[0-9 ]{7,15}$/.test(data.phone)) e.phone = "Enter a valid phone number";
    if (!data.loanType || data.loanType === "Select Loan Type") e.loanType = "Please select a loan type";
    if (!data.amount?.trim()) e.amount = "Loan amount is required";
    if (!data.message?.trim() || data.message.trim().length < 10) e.message = "Please provide your requirements (min 10 characters)";
    if (data.website && data.website.trim().length > 0) e.website = "Spam detected";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate(formData);
    if (Object.keys(eObj).length > 0) {
      setErrors(eObj);
      const firstKey = Object.keys(eObj)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1200)); // simulate API
      setIsSubmitting(false);
      setSubmitStatus("success");
      localStorage.removeItem("dk_contact_draft");
      setFormData(initialForm);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2500);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION WITH ENHANCED BACKGROUND */}
      <section className="relative py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/25 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/30 rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse-medium"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-300/40 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
          
          {/* Animated Stars */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle-delay"></div>
          <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-twinkle"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl mb-6"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                DK MICRO FINANCE – <span className="text-orange-300">CONTACT US</span>
              </h1>
              <p className="text-base md:text-lg text-blue-100 mb-2 leading-relaxed font-semibold">
                We Understand Your World
              </p>
              <p className="text-base md:text-lg text-blue-50 mb-4 leading-relaxed">
                Have questions about our loan products? Need assistance with your application? We're here to help!
                Get expert guidance on home loans, education loans, business loans, and more.
                Contact us today for personalized financial solutions.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+914029331883" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/25 text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/apply" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Apply Online
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION - BOTH CARDS SAME SIZE */}
      <section ref={sectionRef} className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            animate={sectionInView ? "visible" : "hidden"} 
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }} 
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              
              {/* CONTACT INFO CARD - SAME HEIGHT AS FORM */}
              <motion.div variants={fadeUp} className="lg:col-span-1 flex">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 w-full flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Contact Information</h2>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                      Get in touch with our financial experts for personalized loan solutions and expert guidance.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      {contactMethods.map((method, index) => (
                        <div key={index} className={`p-4 rounded-lg border ${method.borderColor} ${method.bgColor} transition-all duration-300 hover:shadow-sm`}>
                          <div className="flex items-start space-x-3">
                            <span className={method.iconColor}>{method.icon}</span>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-800 text-sm">{method.title}</h3>
                              <p className="text-slate-600 text-xs mb-2">{method.description}</p>
                              {method.details.map((detail, idx) => (
                                <p key={idx} className="text-slate-700 font-medium text-sm">{detail}</p>
                              ))}
                            </div>
                          </div>
                          <a 
                            href={method.link} 
                            target={method.link.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className={`mt-3 inline-block w-full text-center py-2 px-4 bg-gradient-to-r ${method.color} text-white rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2`}
                          >
                            {method.icon}
                            {method.action}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <h3 className="font-semibold text-slate-800 mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Monday - Saturday</span>
                        <span className="text-blue-600 font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Sunday</span>
                        <span className="text-red-600 font-medium">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-blue-600 text-xs font-semibold">
                        24/7 Online Application Available
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FORM CARD - SAME HEIGHT AS CONTACT INFO */}
              <motion.div variants={fadeUp} className="lg:col-span-2 flex">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200 w-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Loan Inquiry Form</h2>
                        <p className="text-slate-600 text-sm md:text-base max-w-2xl">
                          Fill out the form below and our financial experts will contact you within 24 hours with personalized loan options.
                        </p>
                      </div>
                    </div>

                    {submitStatus === "success" && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6"
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-800 text-sm md:text-base">Loan Inquiry Submitted!</h4>
                            <p className="text-emerald-600 text-xs md:text-sm">Our financial expert will contact you within 24 hours with customized loan options.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-6 text-rose-700 text-sm">
                        Something went wrong. Please try again later or contact us directly.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField 
                          id="name" 
                          label="Full Name *" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Enter your full name" 
                          error={errors.name} 
                          required 
                        />
                        <FormField 
                          id="email" 
                          label="Email Address *" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="Enter your email" 
                          error={errors.email} 
                          required 
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField 
                          id="phone" 
                          label="Phone Number *" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="+91 99667 11883" 
                          error={errors.phone} 
                          required 
                        />
                        
                        <div>
                          <label htmlFor="loanType" className="block text-sm font-semibold text-slate-700 mb-2">
                            Loan Type *
                          </label>
                          <select
                            id="loanType"
                            name="loanType"
                            value={formData.loanType}
                            onChange={handleChange}
                            className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${
                              errors.loanType ? "border-rose-400" : "border-slate-300"
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm md:text-base`}
                            aria-invalid={!!errors.loanType}
                          >
                            {loanTypes.map((type, index) => (
                              <option key={index} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          {errors.loanType && (
                            <p className="text-rose-600 text-sm mt-2">{errors.loanType}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <FormField 
                          id="amount" 
                          label="Required Loan Amount *" 
                          name="amount" 
                          value={formData.amount} 
                          onChange={handleChange} 
                          placeholder="e.g., ₹10,00,000" 
                          error={errors.amount} 
                          required 
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Requirements *</label>
                        <textarea 
                          name="message" 
                          rows="4" 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="Tell us about your loan requirements, purpose, employment details, and any specific needs..." 
                          className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${errors.message ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base`} 
                          aria-invalid={!!errors.message} 
                        />
                        <div className="flex justify-between items-center mt-2">
                          {errors.message ? (
                            <p className="text-rose-600 text-sm">{errors.message}</p>
                          ) : (
                            <p className="text-slate-500 text-xs md:text-sm">Please provide details about your loan purpose and requirements</p>
                          )}
                          <p className="text-slate-400 text-xs md:text-sm">{formData.message.length}/1000</p>
                        </div>
                      </div>

                      <div style={{ display: "none" }} aria-hidden>
                        <label>Leave this blank</label>
                        <input name="website" value={formData.website} onChange={handleChange} />
                        {errors.website && <p>{errors.website}</p>}
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className={`w-full py-3 md:py-4 rounded-lg font-bold text-white transition-all duration-300 text-sm md:text-base ${isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl"}`} 
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 md:mr-3"></div>
                            Submitting Inquiry...
                          </div>
                        ) : (
                          "Submit Loan Inquiry →"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION - SIMPLIFIED */}
      <section ref={mapRef} className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <div className="text-center mb-6">
              <motion.h3 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-slate-800">Visit Our Office</motion.h3>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-slate-600 text-sm max-w-2xl mx-auto">
                DK Micro Finance Private Limited - "We Understand Your World"
              </motion.p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="h-[300px] bg-gray-100 relative">
                {mapInView ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4348774338775!2d78.39079631487713!3d17.43569778807109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f9e7d5f0b5%3A0x3fc0f6a3c2c5b5b5!2sPatrika%20Nagar%2C%20Hitech%20City%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DK Micro Finance Office Location - Hitech City, Hyderabad"
                    className="absolute inset-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    <div className="text-center">
                      <svg className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading map…
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 bg-blue-50 border-t border-gray-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-blue-700">2nd Floor, Bloossom Heights</p>
                    <p className="text-xs text-blue-600">Patrika Nagar, Hitech City, Madhapur, Hyderabad - 500081</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-black/40" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white rounded-xl shadow-xl p-6 max-w-md w-full z-10"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Loan Inquiry Received!</h3>
              <p className="text-slate-600 text-sm mb-4">
                Thank you for choosing DK Micro Finance. Our financial expert will contact you within 24 hours with personalized loan options.
              </p>
              <button 
                onClick={() => setShowModal(false)} 
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Custom CSS for Hero Animations Only */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.5; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes twinkle-delay {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-twinkle-delay {
          animation: twinkle-delay 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default ContactAdvancedWithMapBottom;

/* ---------------- FORM FIELD COMPONENT ---------------- */

function FormField({ id, label, name, type = "text", value, onChange, placeholder, error, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <input 
        id={id} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required}
        className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${error ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm md:text-base`} 
        aria-invalid={!!error} 
        aria-describedby={error ? `${id}-error` : undefined} 
      />
      {error && <p id={`${id}-error`} className="text-rose-600 text-sm mt-2">{error}</p>}
    </div>
  );
}