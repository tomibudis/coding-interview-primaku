import cx from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...restProps
}) => {
  const primaryBtnClass =
    variant == "primary" &&
    "text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800";

  const secondaryBtnClass =
    variant == "secondary" &&
    "font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";

  return (
    <button
      type="submit"
      className={cx(
        "focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center",
        className,
        primaryBtnClass,
        secondaryBtnClass
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
