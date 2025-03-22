// src/components/TeamMemberForm.jsx
import React from "react";
import { FormField } from "./FormCase";

const TeamMemberForm = ({ register, index, error }) => {
  return (
    <div className="mb-8 rounded-lg border border-gray-200 p-6">
      <h4 className="mb-4 text-lg font-medium text-gray-700">Member {index}</h4>
      <div className="space-y-6">
        <FormField
          register={register("namaLengkap")}
          label="Full Name"
          placeholder="John Doe"
          error={error?.namaLengkap}
        />
        <FormField
          register={register("tanggalLahir")}
          label="Date of Birth"
          error={error?.tanggalLahir}
          placeholder="YYYY/MM/DD"
          type="date"
        />
        <FormField
          register={register("nomorHP")}
          label="Phone Number"
          placeholder="Ex: +62 ...."
          error={error?.nomorHP}
        />
        <FormField
          register={register("universitas")}
          label="University"
          placeholder="..."
          error={error?.universitas}
        />
        <FormField
          register={register("asalProvinsi")}
          label="Province of Origin"
          placeholder="All Provinces"
          error={error?.asalProvinsi}
        />
        <FormField
          register={register("alamatLengkap")}
          label="Full Address"
          placeholder="Address"
          isTextarea={true}
          error={error?.alamatLengkap}
        />
      </div>
    </div>
  );
};

export default TeamMemberForm;
