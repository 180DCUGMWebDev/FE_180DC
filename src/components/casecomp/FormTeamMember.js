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
          label="Nama Lengkap"
          placeholder="John Doe"
          error={error?.namaLengkap}
        />
        <FormField
          register={register("tanggalLahir")}
          label="Tanggal Lahir"
          error={error?.tanggalLahir}
          placeholder="YYYY/MM/DD"
          type="date"
        />
        <FormField
          register={register("nomorHP")}
          label="Nomor HP"
          placeholder="Ex: +62 ...."
          error={error?.nomorHP}
        />
        <FormField
          register={register("universitas")}
          label="Universitas"
          placeholder="..."
          error={error?.universitas}
        />
        <FormField
          register={register("asalProvinsi")}
          label="Asal Provinsi"
          placeholder="Semua Provinsi"
          error={error?.asalProvinsi}
        />
        <FormField
          register={register("alamatLengkap")}
          label="Alamat Lengkap"
          placeholder="Alamat"
          isTextarea={true}
          error={error?.alamatLengkap}
        />
      </div>
    </div>
  );
};

export default TeamMemberForm;
