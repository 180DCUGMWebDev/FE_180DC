// src/components/FormField.jsx
import React from "react";

const FormField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  isTextarea = false 
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 bg-gray-100 rounded min-h-24"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 bg-gray-100 rounded"
        />
      )}
    </div>
  );
};

export default FormField;