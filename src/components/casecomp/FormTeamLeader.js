// src/components/TeamLeaderForm.jsx
import React from "react";
import { FormField, FormButton } from "./FormCase";

const TeamLeaderForm = ({ register, error }) => {
  return (
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
        placeholder="Name of the University"
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
  );
};

export default TeamLeaderForm;
