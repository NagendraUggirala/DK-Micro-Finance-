import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaPercentage,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaGlobe,
  FaRupeeSign,
  FaNetworkWired
} from 'react-icons/fa';

const BankPartners = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const bankPartners = [
    {
      id: 1,
      name: "HDFC Bank Ltd.",
      category: "home",
      logo: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/fad56e3a-473d-4e7a-ac7c-4d5b9d43c0e8/Personal/Pay/Resources/images/logo.svg",
      interestRate: "8.4% - 10.5%",
      maxAmount: "₹10 Crores",
      processingTime: "24-48 Hours",
      features: ["Balance Transfer", "Top-up Loans", "Flexible EMI"],
      rating: 4.8,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      name: "ICICI Bank Ltd.",
      category: "education",
      logo: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/logo.png",
      interestRate: "8.6% - 11%",
      maxAmount: "₹1.5 Crores",
      processingTime: "24-72 Hours",
      features: ["Study Abroad", "Moratorium Period", "Co-borrower"],
      rating: 4.7,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 3,
      name: "State Bank of India",
      category: "home",
      logo: "https://www.sbi.co.in/documents/16012/138187/SBI-logo.jpg",
      interestRate: "8.3% - 10.2%",
      maxAmount: "₹15 Crores",
      processingTime: "48-72 Hours",
      features: ["Lowest Interest", "Long Tenure", "Government Backed"],
      rating: 4.6,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 4,
      name: "Axis Bank Ltd.",
      category: "business",
      logo: "https://www.axisbank.com/images/axis-logo.svg",
      interestRate: "10.5% - 15%",
      maxAmount: "₹5 Crores",
      processingTime: "24-48 Hours",
      features: ["Working Capital", "Quick Disbursal", "Collateral Free"],
      rating: 4.5,
      color: "from-red-500 to-red-700"
    },
    {
      id: 5,
      name: "Kotak Mahindra Bank",
      category: "home",
      logo: "https://www.kotak.com/content/dam/Kotak/kotak-logo.jpg",
      interestRate: "8.5% - 10.8%",
      maxAmount: "₹8 Crores",
      processingTime: "24-48 Hours",
      features: ["Pre-approved Offers", "Online Processing", "Customer Priority"],
      rating: 4.7,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 6,
      name: "Punjab National Bank",
      category: "education",
      logo: "https://www.pnbindia.in/images/logo1.png",
      interestRate: "8.5% - 10%",
      maxAmount: "₹1 Crore",
      processingTime: "72-96 Hours",
      features: ["Government Scheme", "Subsidy Available", "Low Processing"],
      rating: 4.4,
      color: "from-red-600 to-red-800"
    },
    {
      id: 7,
      name: "Bank of Baroda",
      category: "business",
      logo: "https://www.bankofbaroda.com/themes/custom/bob/logo.svg",
      interestRate: "11% - 14%",
      maxAmount: "₹10 Crores",
      processingTime: "48-72 Hours",
      features: ["MSME Focus", "Export Finance", "Term Loans"],
      rating: 4.3,
      color: "from-yellow-500 to-yellow-700"
    },
    {
      id: 8,
      name: "IDFC FIRST Bank",
      category: "medical",
      logo: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/logo/logo.png",
      interestRate: "10% - 13%",
      maxAmount: "₹2 Crores",
      processingTime: "24-48 Hours",
      features: ["Medical Equipment", "Clinic Setup", "Doctor Loans"],
      rating: 4.6,
      color: "from-green-500 to-green-700"
    },
    {
      id: 9,
      name: "Yes Bank Ltd.",
      category: "business",
      logo: "https://www.yesbank.in/images/default-source/default-album/yes-bank-logo-new.png",
      interestRate: "12% - 16%",
      maxAmount: "₹3 Crores",
      processingTime: "24-48 Hours",
      features: ["Quick Approval", "Digital Process", "Startup Friendly"],
      rating: 4.2,
      color: "from-red-400 to-red-600"
    },
    {
      id: 10,
      name: "IndusInd Bank Ltd.",
      category: "home",
      logo: "https://www.indusind.com/content/dam/indusind/logo/indusind-logo.svg",
      interestRate: "8.7% - 11%",
      maxAmount: "₹7 Crores",
      processingTime: "24-48 Hours",
      features: ["Customized Plans", "Online Tracking", "Quick Service"],
      rating: 4.5,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 11,
      name: "Federal Bank Ltd.",
      category: "education",
      logo: "https://www.federalbank.co.in/documents/20126/0/logo.png",
      interestRate: "8.8% - 11.2%",
      maxAmount: "₹75 Lakhs",
      processingTime: "48-72 Hours",
      features: ["NRI Education Loan", "Low Margin", "Flexible Repayment"],
      rating: 4.4,
      color: "from-green-600 to-green-800"
    },
    {
      id: 12,
      name: "RBL Bank Ltd.",
      category: "medical",
      logo: "https://www.rblbank.com/assets/images/logo.svg",
      interestRate: "10.5% - 14%",
      maxAmount: "₹1.5 Crores",
      processingTime: "24-48 Hours",
      features: ["Healthcare Finance", "Equipment Loan", "Hospital Expansion"],
      rating: 4.3,
      color: "from-blue-500 to-blue-700"
    }
  ];

  // Dynamically calculate category counts
  const partnerCategories = [
    { id: 'all', name: 'All Partners', count: bankPartners.length },
    { id: 'home', name: 'Home Loan Partners', count: bankPartners.filter(p => p.category === 'home').length },
    { id: 'education', name: 'Education Loan Partners', count: bankPartners.filter(p => p.category === 'education').length },
    { id: 'business', name: 'Business Loan Partners', count: bankPartners.filter(p => p.category === 'business').length },
    { id: 'medical', name: 'Medical Loan Partners', count: bankPartners.filter(p => p.category === 'medical').length }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? bankPartners 
    : bankPartners.filter(partner => partner.category === activeCategory);

  const stats = [
    { icon: FaBuilding, value: `${bankPartners.length}+`, label: "Partner Banks", color: "text-blue-600" },
    { icon: FaRupeeSign, value: "₹5000+ Cr", label: "Loan Disbursed", color: "text-green-600" },
    { icon: FaUsers, value: "50000+", label: "Customers Served", color: "text-purple-600" },
    { icon: FaPercentage, value: "8.5%", label: "Lowest Interest", color: "text-orange-600" }
  ];

  const benefits = [
    {
      icon: FaShieldAlt,
      title: "Secure & Trusted",
      description: "All our partner banks are RBI-regulated with highest security standards"
    },
    {
      icon: FaChartLine,
      title: "Best Interest Rates",
      description: "Access to exclusive rates through our banking partnerships"
    },
    {
      icon: FaClock,
      title: "Quick Processing",
      description: "Faster loan approval through our streamlined processes"
    },
    {
      icon: FaCheckCircle,
      title: "Expert Guidance",
      description: "Get advice on choosing the right bank for your needs"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-slate-800 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Our <span className="text-amber-400">Bank Partners</span>
            </motion.h1>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              We collaborate with India's leading banks to bring you the best loan products with competitive rates and excellent service.
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              "All our Banks Providing Finance & Private Finance"
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[150px]">
                    <Icon className={`text-2xl mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter - Fixed for Mobile */}
      <section className="py-4 md:py-6 bg-white sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center gap-2 md:gap-4 scrollbar-hide">
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 font-mediu   m text-sm md:text-base ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.name}
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-emerald-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bank Partners Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((bank) => (
              <motion.div
                key={bank.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                {/* Bank Header */}
                <div className={`h-2 bg-gradient-to-r ${bank.color}`}></div>
                
                <div className="p-6">
                  {/* Bank Logo & Name */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg p-2 flex items-center justify-center mr-4">
                      <div className="text-center">
                        <div className="text-xs font-bold text-gray-800">BANK</div>
                        <div className="text-xs text-gray-600">{bank.name.split(' ')[0]}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{bank.name}</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(bank.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{bank.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-emerald-50 p-3 rounded-xl">
                      <div className="text-sm text-gray-600">Interest Rate</div>
                      <div className="text-lg font-bold text-emerald-700">{bank.interestRate}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Max Amount</div>
                      <div className="text-lg font-bold text-green-800">{bank.maxAmount}</div>
                    </div>
                  </div>

                  {/* Processing Time */}
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg mb-4">
                    <FaClock className="text-emerald-600 mr-2" />
                    <span className="text-sm text-gray-700">Processing: <strong>{bank.processingTime}</strong></span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {bank.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <FaCheckCircle className="text-green-500 w-3 h-3 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/apply?bank=${bank.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-lg font-bold text-center hover:shadow-lg transition-all duration-300 text-sm"
                    >
                      Apply Now
                    </Link>
                  
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No banks found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Loan Categories */}
      <section className="py-12 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Loan Categories We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaBuilding, title: "Home Loans", count: `${bankPartners.filter(p => p.category === 'home').length}+ Banks`, color: "bg-blue-100 text-blue-700" },
              { icon: FaGlobe, title: "Education Loans", count: `${bankPartners.filter(p => p.category === 'education').length}+ Banks`, color: "bg-green-100 text-green-800" },
              { icon: FaNetworkWired, title: "Business Loans", count: `${bankPartners.filter(p => p.category === 'business').length}+ Banks`, color: "bg-purple-100 text-purple-800" },
              { icon: FaHandshake, title: "Medical Loans", count: `${bankPartners.filter(p => p.category === 'medical').length}+ Banks`, color: "bg-red-100 text-red-800" }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
                  <div className="text-lg font-bold text-gray-600">{category.count}</div>
                  <p className="text-gray-500 text-sm mt-2">Partner Banks Available</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Our Partnership Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Choose Bank", description: "Select from our partner banks" },
                { step: "2", title: "Compare Rates", description: "Compare interest rates & features" },
                { step: "3", title: "Apply Online", description: "Submit single application" },
                { step: "4", title: "Get Approval", description: "Receive multiple offers" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-200 -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply with Our Partner Banks?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Get access to multiple banks through a single application. Compare rates and choose the best offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-white text-emerald-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Apply for Loan
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Need Help Choosing?
            </Link>
          </div>
          <p className="mt-8 text-slate-200 text-sm">
            One Application → Multiple Banks → Best Offer Guaranteed
          </p>
        </div>
      </section>

      {/* Add custom CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BankPartners;