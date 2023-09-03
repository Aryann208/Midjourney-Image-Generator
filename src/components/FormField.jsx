import React from "react";

const FormField = ({
  labelName,
  name,
  id,
  value,
  type,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className=" flex items-center  ">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black "
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649FF] focus:border-[#4649FF] outline-none block w-full p-3 "
      />
    </div>
  );
};

export default FormField;
