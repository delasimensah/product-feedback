import React from "react";
import { Box, Button } from "@mantine/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { BackButton, FeedbackItem } from "../../components";

import getSelectedFeedback from "../../utils/getSelectedFeedback";

const FeedbackDetail = () => {
  const { feedback } = useSelector((state) => state.feedback);

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const selectedFeedback = getSelectedFeedback(feedback, +id);

  return (
    <Box className="mx-5 md:mx-auto md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <Box className="space-y-5 md:space-y-8">
        <Box className="flex items-end justify-between mt-10 md:mt-12 ">
          <BackButton />

          <Button
            variant="filled"
            classNames={{ filled: "bg-deepBlue rounded-lg capitalize" }}
            onClick={() => router.push(`/edit-feedback/${selectedFeedback.id}`)}
          >
            edit feedback
          </Button>
        </Box>

        <FeedbackItem suggestion={selectedFeedback} />

        <Box className="border">comments</Box>

        <Box className="border">comment input</Box>
      </Box>
    </Box>
  );
};

export default FeedbackDetail;
