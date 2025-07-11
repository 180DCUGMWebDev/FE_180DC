// src/components/TeamLeaderForm.jsx
import React from "react";
import { FormField, FormButton } from "./FormCase";

const TeamLeaderForm = ({ register, error }) => {
  return (
    <div className="space-y-6">
      <FormField
        register={register("namaTim")}
        label="Team's Name"
        placeholder="Team's Name"
        error={error?.namaTim}
      />
      <FormField
        register={register("namaLengkap")}
        label="Leader's Full Name"
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
  );
};

export default TeamLeaderForm;
