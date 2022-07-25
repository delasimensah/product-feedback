import React from "react";
import { Button } from "@mantine/core";

const PrimaryButton = ({ icon, text }) => {
  return (
    <Button
      leftIcon={icon}
      variant="filled"
      classNames={{
        root: "w-36 text-xs lg:w-40 lg:text-sm capitalize",
        filled: "bg-primary hover:bg-[#AF48DC]",
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
