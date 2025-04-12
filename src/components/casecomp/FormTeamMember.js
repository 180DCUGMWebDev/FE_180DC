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
          register={register("universitas")}
          label="University"
          placeholder="Name of the University"
          error={error?.universitas}
        />
        <FormField
          register={register("prodi")}
          label="Major"
          error={error?.prodi}
          placeholder="Name of the Major"
        />
        <FormField
          register={register("batch")}
          label="Batch"
          placeholder="Insert Batch Year"
          error={error?.batch}
        />

        <FormField
          register={register("email")}
          label="Email Address"
          placeholder="Insert Email Address"
          error={error?.email}
        />
        <FormField
          register={register("nomorHP")}
          label="Phone Number"
          placeholder="Ex: +62..."
          error={error?.nomorHP}
        />
      </div>
    </div>
  );
};

export default TeamMemberForm;
