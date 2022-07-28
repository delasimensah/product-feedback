import React from "react";
import { Box, Title, Button } from "@mantine/core";
import { useRouter } from "next/router";

import { Icon } from "../components";

const NewFeedback = () => {
  const router = useRouter();

  return (
    <Box className="px-5 mx-auto md:max-w-xl xl:max-w-2xl md:px-0">
      <Box className="flex items-end my-10 md:my-12">
        <Button
          leftIcon={
            <Icon
              src="/assets/shared/icon-arrow-left.svg"
              className="w-3 h-3"
            />
          }
          size="sm"
          variant="subtle"
          className="px-0 hover:bg-transparent text-grey"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Box>

      <Box className="relative bg-white rounded-lg">
        <Icon
          src="/assets/shared/icon-new-feedback.svg"
          className="absolute w-10 h-10 -top-5 left-10"
        />

        <Box className="px-5 pb-10 md:px-10">
          <Title className="capitalize h3 md:h2 xl:h1 text-bay">
            Create new Feedback
          </Title>
        </Box>
      </Box>
    </Box>
  );
};

export default NewFeedback;
