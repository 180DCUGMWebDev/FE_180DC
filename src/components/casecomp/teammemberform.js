// src/components/TeamMemberForm.jsx
import React from "react";
import FormField from "./formfield";

const TeamMemberForm = ({ member, index, handleMemberInputChange }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg mb-8">
      <h4 className="text-lg font-medium text-gray-700 mb-4">Member {index + 1}</h4>
      
      <div className="space-y-6">
        <FormField
          label="Nama Lengkap"
          name="namaLengkap"
          value={member.namaLengkap}
          onChange={(e) => handleMemberInputChange(e, index)}
          placeholder="John Doe"
        />
        
        <FormField
          label="Tanggal Lahir"
          name="tanggalLahir"
          value={member.tanggalLahir}
          onChange={(e) => handleMemberInputChange(e, index)}
          placeholder="DD/MM/YY"
        />
        
        <FormField
          label="Nomor HP"
          name="nomorHP"
          value={member.nomorHP}
          onChange={(e) => handleMemberInputChange(e, index)}
          placeholder="0812345678"
        />
        
        <FormField
          label="Universitas"
          name="universitas"
          value={member.universitas}
          onChange={(e) => handleMemberInputChange(e, index)}
          placeholder="Inline"
        />
        
        <FormField
          label="Asal Provinsi"
          name="asalProvinsi"
          value={member.asalProvinsi}
          onChange={(e) => handleMemberInputChange(e, index)}
          placeholder="Semua Provinsi"
        />
        
        <FormField
          label="Alamat Lengkap"
          name="alamatLengkap"
          value={member.alamatLengkap}
          onChange={(e) => handleMemberInputChange(e, index)}
          placeholder="Alamat"
          isTextarea={true}
        />
      </div>
    </div>
  );
};

export default TeamMemberForm;