import { useState } from "react";
import { Box, Button, Text, Avatar } from "@mantine/core";

import { Replies, PrimaryButton, Textarea } from ".";

const CommentCard = ({ comment, className }) => {
  const [showTextarea, setShowTextarea] = useState(false);

  const toggleTextArea = () => {
    setShowTextarea((prev) => !prev);
  };

  return (
    <Box className={`flex md:space-x-5 ${className}`}>
      <Box className="flex flex-col items-center space-y-5">
        <Avatar
          src={comment.user.image}
          alt=""
          radius="xl"
          className="hidden md:block"
        />

        {comment.replies !== undefined && (
          <div className="flex-grow hidden md:pb-32 lg:pb-24 md:block">
            <div className="w-0 h-full border-r" />
          </div>
        )}
      </Box>

      <Box className="flex-grow space-y-5">
        <Box className="flex justify-between">
          <Box className="flex">
            <Avatar
              src={comment.user.image}
              alt=""
              radius="xl"
              className="mr-3 md:hidden"
            />

            <Box>
              <Text className="h4 text-bay">{comment.user.name}</Text>
              <Text className="font-normal body3 text-grey">
                @{comment.user.username}
              </Text>
            </Box>
          </Box>

          <Button
            variant="subtle"
            className="text-deepBlue hover:bg-transparent hover:underline"
            onClick={toggleTextArea}
          >
            Reply
          </Button>
        </Box>

        <Text className="font-normal text-grey body2">{comment.content}</Text>

        {comment.replies !== undefined && (
          <Replies
            replies={comment.replies}
            toggle={toggleTextArea}
            show={showTextarea}
          />
        )}

        {comment.replies === undefined && showTextarea && (
          <Box className="flex flex-col flex-grow space-y-5 md:space-y-0 md:flex-row md:space-x-5">
            <Box className="flex-grow">
              <Textarea variant="filled" minRows={4} />
            </Box>

            <PrimaryButton text="Post Reply" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CommentCard;
