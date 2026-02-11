import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ApplyLoans = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [showSuccess, setShowSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();
  
  // Initial form data - clearable
  const initialFormData = {
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    panNumber: "",
    aadharNumber: "",
    
    // Loan Details
    loanType: "personal",
    loanAmount: "",
    loanTenure: "12",
    purpose: "",
    
    // Employment Details
    employmentType: "salaried",
    companyName: "",
    monthlyIncome: "",
    workExperience: "",
    
    // Address Details
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Additional Information
    existingLoans: "no",
    creditScore: "",
    referenceName: "",
    referencePhone: ""
  };

  const [formData, setFormData] = useState(initialFormData);

 const loanTypes = [
  { id: "home", name: "Home Loans", icon: "🏠", description: "Buy, build or renovate your home" },
  { id: "mortgage", name: "Mortgage Loans", icon: "🏦", description: "Loans against property or assets" },
  { id: "construction", name: "Constructions Loans", icon: "🏗️", description: "Loans for building and construction purposes" },
  { id: "hospital", name: "Hospital Loans", icon: "🏥", description: "Loans for hospital and medical infrastructure" },
  { id: "schools", name: "Schools Loans", icon: "🏫", description: "Financial support for school development" },
  { id: "colleges", name: "Colleges Loans", icon: "🎓", description: "Loans for colleges and higher education institutions" },
];

 const interestRates = {
  home: "8.4% - 9.5%",
  mortgage: "9% - 11%",
  construction: "9.5% - 12%",
  hospital: "10% - 13%",
  schools: "9% - 12%",
  colleges: "8.5% - 11%"
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate application ID
    const appId = "APP" + Date.now().toString().slice(-8);
    setApplicationId(appId);
    
    // Save submitted data before clearing
    setSubmittedData({...formData});
    
    // Show success modal
    setShowSuccess(true);
    
    console.log("Application submitted:", formData);
    
    // Save to localStorage
    const applicationData = {
      ...formData,
      applicationId: appId,
      submittedAt: new Date().toISOString(),
      status: "pending"
    };
    
    const existingApplications = JSON.parse(localStorage.getItem('loanApplications') || '[]');
    existingApplications.push(applicationData);
    localStorage.setItem('loanApplications', JSON.stringify(existingApplications));
  };

  const handleContinueBrowsing = () => {
    // Modal close cheyyi
    setShowSuccess(false);
    
    // Form data clear cheyyakunda modal close cheyyi
    // Form data intact ga untundi
    console.log("Form data preserved:", formData);
  };

  const handleApplyNewLoan = () => {
    // Modal close cheyyi
    setShowSuccess(false);
    
    // Form clear cheyyi for new application
    setFormData(initialFormData);
    setActiveTab("personal");
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateEMI = () => {
    const amount = parseFloat(formData.loanAmount) || 0;
    const tenure = parseInt(formData.loanTenure) || 12;
    const rate = getInterestRate() / 12 / 100;
    
    if (amount === 0) return 0;
    
    const emi = amount * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
    return emi.toFixed(2);
  };

  const getInterestRate = () => {
    const rateString = interestRates[formData.loanType] || "10.5% - 16%";
    return parseFloat(rateString.split("%")[0].split("-")[0].trim());
  };

  return (
    <>
      {/* Banner Section - Top lo */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apply for a Loan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              Get instant approval on your loan application. Choose from our wide range of loan products with competitive interest rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">✓ Instant Approval</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">✓ Lowest Interest Rates</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">✓ 100% Online Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Loan Types */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-6">Select Loan Type</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {loanTypes.map((loan) => (
                    <div
                      key={loan.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.loanType === loan.id
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, loanType: loan.id }));
                        setActiveTab("personal");
                      }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{loan.icon}</span>
                        <h3 className="font-semibold text-gray-800">{loan.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{loan.description}</p>
                      <div className="mt-3">
                        <span className="text-sm font-semibold text-blue-700">
                          Rate: {interestRates[loan.id]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex space-x-4 mb-6 border-b">
                  {["personal", "loan", "employment", "address"].map((tab) => (
                    <button
                      key={tab}
                      className={`pb-3 px-4 font-medium ${
                        activeTab === tab
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "personal" && "Personal Info"}
                      {tab === "loan" && "Loan Details"}
                      {tab === "employment" && "Employment"}
                      {tab === "address" && "Address"}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Personal Information Tab */}
                  {activeTab === "personal" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Date of Birth *</label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">PAN Number *</label>
                          <input
                            type="text"
                            name="panNumber"
                            value={formData.panNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            maxLength="10"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Aadhar Number *</label>
                          <input
                            type="text"
                            name="aadharNumber"
                            value={formData.aadharNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            maxLength="12"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Loan Details Tab */}
                  {activeTab === "loan" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-4">Loan Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">Loan Amount (₹) *</label>
                          <input
                            type="number"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            min="10000"
                            max="5000000"
                          />
                          <p className="text-sm text-gray-500 mt-1">Range: ₹10,000 - ₹50,00,000</p>
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Loan Tenure (Months) *</label>
                          <select
                            name="loanTenure"
                            value={formData.loanTenure}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="12">12 Months</option>
                            <option value="24">24 Months</option>
                            <option value="36">36 Months</option>
                            <option value="48">48 Months</option>
                            <option value="60">60 Months</option>
                            <option value="84">84 Months</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 mb-2">Purpose of Loan *</label>
                          <textarea
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            placeholder="Briefly describe the purpose of the loan..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Employment Tab */}
                  {activeTab === "employment" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-4">Employment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">Employment Type *</label>
                          <select
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="salaried">Salaried</option>
                            <option value="self-employed">Self Employed</option>
                            <option value="business">Business Owner</option>
                            <option value="professional">Professional</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Company/Business Name</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Monthly Income (₹) *</label>
                          <input
                            type="number"
                            name="monthlyIncome"
                            value={formData.monthlyIncome}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            min="10000"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Work Experience (Years) *</label>
                          <input
                            type="number"
                            name="workExperience"
                            value={formData.workExperience}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            min="0"
                            max="40"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Address Tab */}
                  {activeTab === "address" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-4">Address Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 mb-2">Complete Address *</label>
                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            placeholder="House no, Street, Area..."
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">City *</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">State *</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Pincode *</label>
                          <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            maxLength="6"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <button
                      type="button"
                      onClick={() => {
                        const tabs = ["personal", "loan", "employment", "address"];
                        const currentIndex = tabs.indexOf(activeTab);
                        if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
                      }}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    
                    {activeTab === "address" ? (
                      <button
                        type="submit"
                        className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold"
                      >
                        Submit Application
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          const tabs = ["personal", "loan", "employment", "address"];
                          const currentIndex = tabs.indexOf(activeTab);
                          if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
                        }}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Calculator & Info */}
            <div className="space-y-8">
              {/* EMI Calculator */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">EMI Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Loan Amount</label>
                    <div className="flex items-center">
                      <span className="bg-gray-100 px-3 py-2 rounded-l-lg border border-r-0">₹</span>
                      <input
                        type="number"
                        value={formData.loanAmount}
                        onChange={(e) => setFormData(prev => ({ ...prev, loanAmount: e.target.value }))}
                        className="flex-1 px-3 py-2 border rounded-r-lg"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Tenure (Months)</label>
                    <input
                      type="range"
                      min="12"
                      max="84"
                      value={formData.loanTenure}
                      onChange={(e) => setFormData(prev => ({ ...prev, loanTenure: e.target.value }))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>12</span>
                      <span>{formData.loanTenure} months</span>
                      <span>84</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Interest Rate</label>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-2xl font-bold text-blue-700">
                        {interestRates[formData.loanType]}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">per annum</p>
                    </div>
                  </div>
                  
                  {/* EMI Result */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                    <p className="text-sm">Monthly EMI</p>
                    <p className="text-3xl font-bold mt-1">₹ {calculateEMI()}</p>
                    <p className="text-sm mt-2 opacity-90">
                      Total Payment: ₹ {(parseFloat(calculateEMI()) * parseInt(formData.loanTenure)).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Required Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">PAN Card</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Aadhar Card</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Latest 3 Months Bank Statement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Salary Slips (Last 3 Months)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Address Proof</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Passport Size Photos (2)</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-xl mr-3">⚡</span>
                    <span>Instant Approval within 24 Hours</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-xl mr-3">🏦</span>
                    <span>Lowest Interest Rates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-xl mr-3">📄</span>
                    <span>Minimal Documentation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-xl mr-3">🛡️</span>
                    <span>100% Safe & Secure</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-xl mr-3">📱</span>
                    <span>Online Application Process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Need Help with Your Application?</h3>
              <p className="mb-6 opacity-90">Our loan experts are available 24/7 to assist you</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="tel:+9118001234857" 
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100"
                >
                  📞 Call Now: 1800-123-4857
                </a>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600"
                >
                  📝 Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Your loan application has been received successfully.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Application ID</p>
                <p className="text-xl font-bold text-blue-700">{applicationId}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Save this ID for future reference
                </p>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our loan executive will contact you within <span className="font-semibold">24 hours</span>.
              </p>
              
              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleContinueBrowsing}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Continue Browsing
                </button>
                <button
                  onClick={handleApplyNewLoan}
                  className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 font-semibold text-center"
                >
                  Apply for Another Loan
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold text-center"
                >
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyLoans;