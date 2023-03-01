import _ from "lodash";
import React from "react";
import { useFormContext } from "react-hook-form";

interface TextInputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "password";
}
const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  name,
  placeholder,
  required,
  type = "text",
}) => {
  const methods = useFormContext();

  const errors = methods.formState.errors;
  const hasError: { message: string } = _.get(errors as unknown, name);
  const isError = !!hasError;

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <input
        {...methods.register(name)}
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      {isError && <span className="text-red-700">{hasError.message}</span>}
    </div>
  );
};

export default TextInputField;
