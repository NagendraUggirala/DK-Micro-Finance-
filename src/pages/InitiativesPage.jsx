import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaBuilding,
  FaHospital,
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaBusinessTime,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaMoneyBill,
  FaCalculator,
  FaFileAlt,
  FaHandshake,
  FaUsers,
  FaPercent,
  FaCalendarAlt,
  FaArrowRight,
  FaList
} from 'react-icons/fa';

const Loans = () => {
  const [activeLoan, setActiveLoan] = useState('home');
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenureYears, setLoanTenureYears] = useState(20);
  const [loanTenureMonths, setLoanTenureMonths] = useState(0);

  const loanProducts = [
    {
      id: 'home',
      icon: FaHome,
      title: 'Home Loans',
      subtitle: 'For Your Dream Home',
      description: 'Purchase, construct, or renovate your dream home with flexible repayment options and attractive interest rates.',
      features: [
        'Up to 90% of property value',
        '30-year repayment tenure',
        'Low interest rates starting from 8.5%',
        'Balance transfer facility',
        'Top-up loans available'
      ],
      interest: '8.5% - 11% p.a.',
      tenure: 'Up to 30 years',
      maxAmount: '₹5 Crores',
      processingFee: '0.5% - 1%',
      eligibility: 'Salaried & Self-Employed',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
    },
    {
      id: 'mortgage',
      icon: FaBuilding,
      title: 'Mortgage Loans',
      subtitle: 'Unlock Your Property Value',
      description: 'Get funds against your existing property for business expansion, education, or personal needs.',
      features: [
        'High loan-to-value ratio',
        'Against residential & commercial properties',
        'Quick disbursement',
        'Flexible end-use',
        'Competitive interest rates'
      ],
      interest: '9% - 12% p.a.',
      tenure: 'Up to 20 years',
      maxAmount: '₹10 Crores',
      processingFee: '1% - 1.5%',
      eligibility: 'Property Owners',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
    },
    {
      id: 'construction',
      icon: FaBuilding,
      title: 'Construction Loans',
      subtitle: 'Build Your Vision',
      description: 'Stage-wise disbursement for residential and commercial construction projects with technical support.',
      features: [
        'Stage-wise disbursement',
        'Technical guidance',
        'Insurance coverage included',
        'Flexible repayment options',
        'Project monitoring support'
      ],
      interest: '9% - 13% p.a.',
      tenure: 'Up to 25 years',
      maxAmount: '₹15 Crores',
      processingFee: '1% - 2%',
      eligibility: 'Land Owners & Builders',
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
    },
    {
      id: 'hospital',
      icon: FaHospital,
      title: 'Hospital Loans',
      subtitle: 'Healthcare Financing',
      description: 'Modernize healthcare facilities with specialized medical equipment financing and clinic setup loans.',
      features: [
        'Medical equipment financing',
        'Clinic/hospital setup loans',
        'Working capital for healthcare',
        'Doctor practice loans',
        'Healthcare expansion loans'
      ],
      interest: '10% - 14% p.a.',
      tenure: 'Up to 15 years',
      maxAmount: '₹20 Crores',
      processingFee: '1.5% - 2%',
      eligibility: 'Doctors & Healthcare Institutions',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1516549655669-df4f6a6f8d64?w=800&q=80'
    },
    {
      id: 'school',
      icon: FaSchool,
      title: 'School Loans',
      subtitle: 'Educational Infrastructure',
      description: 'Financing for school infrastructure development, modernization, and expansion projects.',
      features: [
        'School building construction',
        'Infrastructure development',
        'Equipment & lab setup',
        'Hostel construction',
        'Educational technology'
      ],
      interest: '9.5% - 12% p.a.',
      tenure: 'Up to 20 years',
      maxAmount: '₹25 Crores',
      processingFee: '1% - 1.5%',
      eligibility: 'Educational Institutions',
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
    },
    {
      id: 'college',
      icon: FaUniversity,
      title: 'College Loans',
      subtitle: 'Higher Education Infrastructure',
      description: 'Comprehensive financing solutions for colleges, universities, and higher education institutions.',
      features: [
        'Campus development',
        'Hostel & mess facilities',
        'Library & laboratory setup',
        'Sports infrastructure',
        'Research facilities'
      ],
      interest: '9.5% - 12.5% p.a.',
      tenure: 'Up to 25 years',
      maxAmount: '₹50 Crores',
      processingFee: '1% - 1.75%',
      eligibility: 'Higher Education Institutions',
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?w=800&q=80'
    },
    {
      id: 'education',
      icon: FaGraduationCap,
      title: 'Education Loans',
      subtitle: 'Invest in Knowledge',
      description: 'Fund your academic journey from school to higher education, including study abroad programs.',
      features: [
        'Domestic & international education',
        'Moratorium period available',
        'Co-borrower option',
        'Education counseling',
        'Global coverage'
      ],
      interest: '9.5% - 12% p.a.',
      tenure: 'Up to 15 years',
      maxAmount: '₹1.5 Crores',
      processingFee: '0.5% - 1%',
      eligibility: 'Students & Parents',
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
    },
    {
      id: 'business',
      icon: FaBusinessTime,
      title: 'Business Loans',
      subtitle: 'Fuel Your Entrepreneurship',
      description: 'Working capital and expansion financing for businesses of all sizes across various industries.',
      features: [
        'Working capital loans',
        'Business expansion',
        'Equipment financing',
        'Inventory funding',
        'MSME focused schemes'
      ],
      interest: '11% - 16% p.a.',
      tenure: 'Up to 10 years',
      maxAmount: '₹10 Crores',
      processingFee: '1.5% - 2.5%',
      eligibility: 'Business Owners & MSMEs',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    }
  ];

  const activeProduct = loanProducts.find(loan => loan.id === activeLoan) || loanProducts[0];
  const ActiveIcon = activeProduct.icon;

  // EMI Calculator
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = (loanTenureYears * 12) + loanTenureMonths;
    
    if (monthlyRate === 0) {
      return Math.round(principal / totalMonths).toLocaleString('en-IN');
    }
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi).toLocaleString('en-IN');
  };

  const processSteps = [
    { step: '01', title: 'Application', description: 'Submit online application with basic details', icon: FaFileAlt },
    { step: '02', title: 'Documentation', description: 'Upload required documents securely', icon: FaFileAlt },
    { step: '03', title: 'Verification', description: 'Quick verification and credit check', icon: FaCheckCircle },
    { step: '04', title: 'Approval', description: 'Get loan approval within 24-48 hours', icon: FaHandshake },
    { step: '05', title: 'Disbursement', description: 'Receive funds in your account', icon: FaMoneyBill }
  ];

  const requiredDocuments = [
    'Identity Proof (Aadhaar, PAN, Passport)',
    'Address Proof (Utility bills, Rent agreement)',
    'Income Proof (Salary slips, IT Returns)',
    'Property Documents (For secured loans)',
    'Business Proof (For business loans)',
    'Educational Documents (For education loans)'
  ];

  // Format currency
  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Crores`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} Lakhs`;
    } else {
      return `₹${value.toLocaleString('en-IN')}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
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
              Our <span className="text-orange-400">Loan Products</span>
            </motion.h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Tailored financial solutions for every stage of life. Choose from our comprehensive range of loan products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-bold transition-all duration-300"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar Dashboard - All Loan Titles */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-xl sticky top-24 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaList className="mr-2" />
                      <h3 className="text-lg font-bold">All Loan Products</h3>
                    </div>
                    <span className="bg-white text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                      {loanProducts.length} Loans
                    </span>
                  </div>
                </div>
                
                <div className="p-4 max-h-[600px] overflow-y-auto">
                  <div className="space-y-2">
                    {loanProducts.map((loan) => {
                      const Icon = loan.icon;
                      const isActive = activeLoan === loan.id;
                      
                      return (
                        <button
                          key={loan.id}
                          onClick={() => setActiveLoan(loan.id)}
                          className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
                            isActive 
                              ? `bg-gradient-to-r ${loan.color} text-white shadow-md` 
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <div className={`p-2 rounded-lg mr-3 ${
                            isActive 
                              ? 'bg-white bg-opacity-20' 
                              : `bg-gradient-to-r ${loan.color} bg-opacity-10`
                          }`}>
                            <Icon className={isActive ? 'text-white' : `text-${loan.color.split('-')[1]}-600`} />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm">{loan.title}</div>
                            <div className={`text-xs ${
                              isActive ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {loan.interest}
                            </div>
                          </div>
                          {isActive && (
                            <div className="w-2 h-2 bg-white rounded-full ml-2"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Actions in Sidebar */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <Link
                    to="/apply"
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 px-4 rounded-lg font-bold text-center hover:shadow-lg transition-all duration-300 text-sm mb-2"
                  >
                    Apply for Loan
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-4 rounded-lg font-bold text-center transition-all duration-300 text-sm"
                  >
                    Contact Expert
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Column - Loan Details */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Loan Header */}
                    <div className={`h-2 bg-gradient-to-r ${activeProduct.color}`}></div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${activeProduct.color} text-white mr-4`}>
                          <ActiveIcon className="text-2xl" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{activeProduct.title}</h2>
                          <p className="text-gray-600">{activeProduct.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        {activeProduct.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {activeProduct.features.map((feature, index) => (
                            <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                              <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Loan Details Grid - Smaller Cards */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-blue-800 mb-0.5">{activeProduct.interest}</div>
                          <div className="text-xs text-gray-600">Interest Rate</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-green-800 mb-0.5">{activeProduct.tenure}</div>
                          <div className="text-xs text-gray-600">Max Tenure</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-purple-800 mb-0.5">{activeProduct.maxAmount}</div>
                          <div className="text-xs text-gray-600">Max Amount</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-orange-800 mb-0.5">{activeProduct.processingFee}</div>
                          <div className="text-xs text-gray-600">Processing Fee</div>
                        </div>
                      </div>

                      {/* Eligibility & Quick Apply */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3">Eligibility</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-sm font-medium mb-2">{activeProduct.eligibility}</p>
                            <ul className="space-y-1.5">
                              <li className="flex items-center text-xs text-gray-600">
                                <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                Age: 21-65 years
                              </li>
                              <li className="flex items-center text-xs text-gray-600">
                                <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                Minimum income as per loan type
                              </li>
                              <li className="flex items-center text-xs text-gray-600">
                                <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                Good credit score required
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Apply</h3>
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-sm mb-4">Ready to apply for {activeProduct.title}?</p>
                            <Link
                              to={`/apply?loan=${activeProduct.id}`}
                              className={`block w-full bg-gradient-to-r ${activeProduct.color} text-white py-2.5 px-4 rounded-lg font-bold text-center hover:shadow-lg transition-all duration-300 text-sm`}
                            >
                              Apply Now
                            </Link>
                            <p className="text-xs text-gray-600 mt-3 text-center">
                              Instant approval within 24-48 hrs
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Calculator & Process */}
                <div className="space-y-6">
                  {/* EMI Calculator - Fixed with Years and Months */}
                  <div className="bg-white rounded-2xl shadow-xl p-5">
                    <div className="flex items-center mb-4">
                      <FaCalculator className="text-blue-600 text-lg mr-2" />
                      <h3 className="text-lg font-bold text-gray-800">EMI Calculator</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Loan Amount */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-medium text-gray-700">Loan Amount</label>
                          <span className="text-sm font-bold text-blue-800">{formatCurrency(loanAmount)}</span>
                        </div>
                        <input
                          type="range"
                          min="100000"
                          max="50000000"
                          step="100000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>₹1L</span>
                          <span>₹5Cr</span>
                        </div>
                      </div>

                      {/* Interest Rate */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-medium text-gray-700">Interest Rate (% p.a.)</label>
                          <span className="text-sm font-bold text-green-800">{interestRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="7"
                          max="18"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>7%</span>
                          <span>18%</span>
                        </div>
                      </div>

                      {/* Loan Tenure - Years */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-medium text-gray-700">Loan Tenure (Years)</label>
                          <span className="text-sm font-bold text-purple-800">{loanTenureYears} Years</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="30"
                          step="1"
                          value={loanTenureYears}
                          onChange={(e) => setLoanTenureYears(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>1 Yr</span>
                          <span>30 Yrs</span>
                        </div>
                      </div>

                      {/* Loan Tenure - Months */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-medium text-gray-700">Additional Months</label>
                          <span className="text-sm font-bold text-orange-800">{loanTenureMonths} Months</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="11"
                          step="1"
                          value={loanTenureMonths}
                          onChange={(e) => setLoanTenureMonths(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0 M</span>
                          <span>11 M</span>
                        </div>
                      </div>

                      {/* Total Tenure Display */}
                      <div className="bg-gray-50 p-2 rounded-lg text-center">
                        <span className="text-xs text-gray-600">Total Tenure: </span>
                        <span className="text-sm font-bold text-gray-800">
                          {loanTenureYears} Years {loanTenureMonths > 0 ? `${loanTenureMonths} Months` : ''}
                        </span>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg mt-4">
                        <div className="text-center mb-2">
                          <div className="text-xs text-gray-600">Estimated Monthly EMI</div>
                          <div className="text-2xl font-bold text-blue-800">₹{calculateEMI()}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Total Interest: ₹{((loanAmount * (interestRate/100) * (loanTenureYears + loanTenureMonths/12)).toFixed(0)).toLocaleString('en-IN')}
                          </div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2.5 px-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-sm">
                          Calculate EMI
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Application Process */}
                  <div className="bg-white rounded-2xl shadow-xl p-5">
                    <div className="flex items-center mb-4">
                      <FaChartLine className="text-green-600 text-lg mr-2" />
                      <h3 className="text-lg font-bold text-gray-800">5-Step Process</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {processSteps.map((step, index) => {
                        const StepIcon = step.icon;
                        return (
                          <div key={index} className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-xs mr-3">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 text-sm">{step.title}</h4>
                              <p className="text-xs text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl p-5">
                    <h3 className="text-lg font-bold mb-3">Why Choose DK Micro Finance?</h3>
                    <div className="space-y-2">
                      {[
                        { icon: FaPercent, text: 'Lowest Interest Rates' },
                        { icon: FaClock, text: 'Quick Processing' },
                        { icon: FaShieldAlt, text: '100% Secure' },
                        { icon: FaUsers, text: 'Expert Guidance' }
                      ].map((item, index) => {
                        const BenefitIcon = item.icon;
                        return (
                          <div key={index} className="flex items-center">
                            <BenefitIcon className="mr-3 text-orange-300 text-sm" />
                            <span className="text-sm">{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Loan Products Grid */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Explore All Loan Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {loanProducts.map((loan) => {
                const LoanIcon = loan.icon;
                return (
                  <div
                    key={loan.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${loan.color}`}></div>
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${loan.color} text-white mr-2`}>
                          <LoanIcon className="text-sm" />
                        </div>
                        <h3 className="text-base font-bold text-gray-800">{loan.title}</h3>
                      </div>
                      <p className="text-gray-600 text-xs mb-3">{loan.description.substring(0, 70)}...</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs">
                          <div className="font-bold text-blue-800">{loan.interest}</div>
                          <div className="text-gray-500 text-xs">Interest</div>
                        </div>
                        <Link
                          to={`/apply?loan=${loan.id}`}
                          className="text-blue-600 hover:text-blue-800 font-semibold text-xs flex items-center"
                        >
                          Apply <FaArrowRight className="ml-1 text-xs" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Documents Required */}
         <div className="mt-12 bg-white rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto">
  <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
    Documents Required
  </h2>

  {/* Top cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        icon: "FaIdCard",
        color: "text-blue-500",
        title: "Identity & Address Proof",
        desc: "PAN, Aadhaar, Passport, License",
      },
      {
        icon: "FaMoneyBillWave",
        color: "text-green-500",
        title: "Income Proof",
        desc: "Salary slips, IT Returns",
      },
      {
        icon: "FaHome",
        color: "text-purple-500",
        title: "Property Documents",
        desc: "For secured loans only",
      },
    ].map((item, idx) => {
      const Icon = require("react-icons/fa")[item.icon];
      return (
        <div
          key={idx}
          className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-lg"
        >
          <Icon className={`${item.color} text-5xl mb-4`} />
          <h3 className="font-semibold text-gray-800 text-lg mb-2">{item.title}</h3>
          <p className="text-gray-500 text-sm">{item.desc}</p>
        </div>
      );
    })}
  </div>

  {/* Checklist */}
  <div className="mt-12">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Complete Checklist
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {requiredDocuments.map((doc, index) => (
        <div
          key={index}
          className="flex items-center bg-green-50 p-3 rounded-xl text-gray-700 text-sm font-medium shadow-sm hover:bg-green-100 transition"
        >
          <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-lg" />
          <span>{doc}</span>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Apply for a Loan?</h2>
          <p className="text-base text-blue-100 mb-6 max-w-2xl mx-auto">
            Get personalized loan options from our financial experts within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/apply"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 text-sm"
            >
              Apply Online Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-lg font-bold transition-all duration-300 text-sm"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;