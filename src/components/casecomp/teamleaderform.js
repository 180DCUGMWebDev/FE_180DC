// src/components/TeamLeaderForm.jsx
import React from "react";
import FormField from "./formfield";

const TeamLeaderForm = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <FormField
        label="Nama Lengkap"
        name="namaLengkap"
        value={formData.namaLengkap}
        onChange={handleInputChange}
        placeholder="John Doe"
      />
      
      <FormField
        label="Tanggal Lahir"
        name="tanggalLahir"
        value={formData.tanggalLahir}
        onChange={handleInputChange}
        placeholder="DD/MM/YY"
      />
      
      <FormField
        label="Nomor HP"
        name="nomorHP"
        value={formData.nomorHP}
        onChange={handleInputChange}
        placeholder="Ex: +62 ...."
      />
      
      <FormField
        label="Universitas"
        name="universitas"
        value={formData.universitas}
        onChange={handleInputChange}
        placeholder="..."
      />
      
      <FormField
        label="Asal Provinsi"
        name="asalProvinsi"
        value={formData.asalProvinsi}
        onChange={handleInputChange}
        placeholder="Semua Provinsi"
      />
      
      <FormField
        label="Alamat Lengkap"
        name="alamatLengkap"
        value={formData.alamatLengkap}
        onChange={handleInputChange}
        placeholder="Alamat"
        isTextarea={true}
      />

      <div className="flex justify-end mt-6">
        <button 
          type="submit" 
          className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TeamLeaderForm;