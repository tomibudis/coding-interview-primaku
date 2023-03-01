import cx from "classnames";
import React from "react";

interface CardProps {
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cx(
        "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
