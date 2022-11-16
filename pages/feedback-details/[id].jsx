import React from "react";
import { Box, Button } from "@mantine/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Text, Textarea } from "@mantine/core";

import { BackButton, FeedbackItem, PrimaryButton } from "../../components";

import getSelectedFeedback from "../../utils/getSelectedFeedback";

const classNames = {
  label: "text-bay h4",
  description: "text-grey body3 font-normal",
  filledVariant:
    "bg-ghostWhite focus:border-deepBlue focus:cursor-pointer text-gore",
};

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

        <Box className="p-5 space-y-5 bg-white rounded-lg md:p-10">
          <Text className="h3 text-bay">
            {selectedFeedback.comments.length} Comment
            {selectedFeedback.comments.length > 1 ? "s" : ""}
          </Text>
        </Box>

        <Box className="p-5 space-y-5 bg-white rounded-lg md:p-10">
          <Text className="h3 text-bay">Add Comment</Text>

          <Textarea
            classNames={classNames}
            variant="filled"
            minRows={4}
            // value={details}
            // onChange={(e) => setDetails(e.currentTarget.value)}
          />

          <Box className="flex items-center justify-between ">
            <Text className="font-normal text-grey body3">
              250 Characters left
            </Text>
            <PrimaryButton
              text="Post Comment"
              className=""
              onClick={() => {}}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackDetail;
