// src/components/FormField.jsx
import { cn } from "@/lilbs/utils";
import React from "react";

const Form = ({ className = "", ...props }) => {
  return <form className={cn("text-gray-800", className)} {...props} />;
};

const FormField = ({ label = "Label", isTextarea = false, register, error, ...props }) => {
  console.log("PROPS", props);
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
      {isTextarea ? (
        <textarea
          className="min-h-24 w-full rounded bg-gray-100 p-3 outline-0"
          {...register}
          {...props}
        />
      ) : (
        <input className="w-full rounded bg-gray-100 p-3 outline-0" {...register} {...props} />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error?.message}</p>}
    </div>
  );
};

const FormButton = ({ text = "Next" }) => {
  return (
    <div className="mt-6 flex justify-end">
      <button
        type="submit"
        className="rounded-full bg-green-500 px-6 py-2 text-white transition hover:bg-green-600"
      >
        {text}
      </button>
    </div>
  );
};

export { Form, FormField, FormButton };
