import React from "react";

const Button = React.memo(
  ({
    children,
    // className, onClick, type, disabled,
    ...rest
  }) => {
    return (
      <>
        <button
          // className={className}
          // onClick={onClick}
          // type={type}
          // disabled={disabled}
          {...rest}
        >
          {children}
        </button>
      </>
    );
  }
);

export default Button;
