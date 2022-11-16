import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { ChevronLeft } from "tabler-icons-react";

import { Icon } from "../components";

const BackButton = ({ light }) => {
  const router = useRouter();

  return (
    <Button
      leftIcon={
        light ? (
          <ChevronLeft size={17} />
        ) : (
          <Icon src="/assets/shared/icon-arrow-left.svg" className="w-3 h-3" />
        )
      }
      size="sm"
      variant="subtle"
      className={`px-0 hover:bg-transparent ${
        light ? "text-white" : "text-grey"
      } hover:underline`}
      onClick={() => router.back()}
    >
      Go Back
    </Button>
  );
};

export default BackButton;
