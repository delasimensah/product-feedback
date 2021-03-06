import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";

import { Icon } from "../components";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      leftIcon={
        <Icon src="/assets/shared/icon-arrow-left.svg" className="w-3 h-3" />
      }
      size="sm"
      variant="subtle"
      className="px-0 hover:bg-transparent text-grey hover:underline"
      onClick={() => router.back()}
    >
      Go Back
    </Button>
  );
};

export default BackButton;
