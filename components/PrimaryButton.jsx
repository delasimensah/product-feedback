import React from "react";
import { Button } from "@mantine/core";

const PrimaryButton = ({ icon, text, onClick, fullWidth, className }) => {
  return (
    <Button
      leftIcon={icon}
      variant="filled"
      classNames={{
        filled: `bg-primary hover:bg-[#AF48DC] capitalize rounded-lg ${className}`,
      }}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
