import cx from "classnames";
import React from "react";

interface TextProps {
  className?: string;
}
const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={cx("mb-0 text-sm text-gray-700", className)}>{children}</p>
  );
};

export default Text;
