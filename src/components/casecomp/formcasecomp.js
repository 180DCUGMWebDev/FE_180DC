"use client";

// Import Packages
import React, { useState } from "react";
import Image from "next/image";

// Exported Component
export function FormCaseComp() {
  // Form steps state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  // Form data state (you can expand this as needed)
  const [formData, setFormData] = useState({
    namaLengkap: "",
    tanggalLahir: "",
    nomorHP: "",
    universitas: "",
    asalProvinsi: "",
    alamatLengkap: ""
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Move to next step if not on last step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form data
      console.log("Form submitted:", formData);
    }
  };

  // Page
  return (
    <section className="relative bg-black text-white">
      {/* Title Section */}
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-green-500">Team</span>{" "}
          <span className="text-blue-400">Registration</span>
        </h1>
        <p className="text-gray-300 max-w-md mx-auto">
          Faucibus tempor in condimentum suscipit diam.
          Rhoncus diam a felis nunc.
        </p>
      </div>

      {/* Form Section */}
      <div className="container mx-auto pb-16">
        <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto">
          {/* Steps Indicator */}
          <div className="flex justify-between items-center mb-12 px-4">
            {[...Array(totalSteps)].map((_, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm 
                    ${index + 1 === currentStep 
                      ? "bg-green-500 text-white" 
                      : index + 1 < currentStep 
                        ? "bg-gray-300 text-gray-600" 
                        : "bg-gray-300 text-gray-600"}`}
                >
                  {index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div className={`h-0.5 w-16 mx-1 ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"}`}></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Step Labels */}
          <div className="flex justify-between mb-10 px-4 text-sm text-gray-600">
            <div className={`text-center ${currentStep === 1 ? "text-green-500 font-medium" : ""}`}>Team leader</div>
            <div className={`text-center ${currentStep === 2 ? "text-green-500 font-medium" : ""}`}>Member</div>
            <div className={`text-center ${currentStep === 3 ? "text-green-500 font-medium" : ""}`}>Submission</div>
            <div className={`text-center ${currentStep === 4 ? "text-green-500 font-medium" : ""}`}>Proof</div>
            <div className={`text-center ${currentStep === 5 ? "text-green-500 font-medium" : ""}`}>Selesai</div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="text-gray-800">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full p-3 bg-gray-100 rounded"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Tanggal Lahir
                  </label>
                  <input
                    type="text"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleInputChange}
                    placeholder="DD/MM/YY"
                    className="w-full p-3 bg-gray-100 rounded"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nomor HP
                  </label>
                  <input
                    type="text"
                    name="nomorHP"
                    value={formData.nomorHP}
                    onChange={handleInputChange}
                    placeholder="0812345678"
                    className="w-full p-3 bg-gray-100 rounded"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Universitas
                  </label>
                  <input
                    type="text"
                    name="universitas"
                    value={formData.universitas}
                    onChange={handleInputChange}
                    placeholder="Inline"
                    className="w-full p-3 bg-gray-100 rounded"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Asal Provinsi
                  </label>
                  <input
                    type="text"
                    name="asalProvinsi"
                    value={formData.asalProvinsi}
                    onChange={handleInputChange}
                    placeholder="Semua Provinsi"
                    className="w-full p-3 bg-gray-100 rounded"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Alamat Lengkap
                  </label>
                  <textarea
                    name="alamatLengkap"
                    value={formData.alamatLengkap}
                    onChange={handleInputChange}
                    placeholder="Alamat"
                    className="w-full p-3 bg-gray-100 rounded min-h-24"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button 
                    type="submit" 
                    className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Other steps would be conditionally rendered here */}
            {currentStep !== 1 && (
              <div className="text-center py-8">
                <p>This is step {currentStep} - additional form fields would go here</p>
                <div className="flex justify-between mt-6">
                  <button 
                    type="button" 
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-gray-300 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-400 transition"
                  >
                    Previous
                  </button>
                  <button 
                    type="submit" 
                    className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
                  >
                    {currentStep === totalSteps ? "Submit" : "Next"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}