// src/components/FormField.jsx
import { cn } from "@/lilbs/utils";
import React from "react";
import "./Form.css";

const Form = ({ className = "", ...props }) => {
  return <form className={cn("text-gray-800", className)} {...props} />;
};

const FormField = ({ label = "Label", isTextarea = false, register, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700 lg:text-base">{label}</label>
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

const FormFile = ({
  ref,
  currentState,
  placeholder = "Choose File!",
  label,
  tag,
  onChange,
  error = null,
  accept = "image/png, iamge/jpeg, application/pdf",
  className = "",
}) => {
  return (
    <div className={cn("mb-4 flex flex-col space-y-6", className)}>
      <h4 className="block text-sm font-medium text-gray-700 lg:text-base">{label}</h4>
      <label
        htmlFor={tag}
        className={cn(
          "flex h-12 w-full cursor-pointer items-center justify-center rounded-lg text-center text-sm font-bold lg:text-base",
          currentState ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500",
        )}
      >
        {currentState ? currentState : placeholder}
      </label>
      <input
        ref={ref}
        type="file"
        id={tag}
        accept={accept}
        className="outline-0"
        onChange={onChange}
      />
      {error && <p className="mt-1 text-sm text-red-500 lg:text-base">{error}</p>}
    </div>
  );
};

export { Form, FormButton, FormField, FormFile };
