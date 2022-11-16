import React from "react";
import { Box, Button, Text, Avatar } from "@mantine/core";

import { PrimaryButton, Textarea } from ".";

const Replies = ({ replies, toggle, show }) => {
  return (
    <Box className="flex">
      <div className="flex-grow pb-40 md:hidden">
        <div className="w-0 h-full border-r" />
      </div>

      <Box className="pl-6 space-y-5 md:pl-0">
        {replies.map((reply, idx) => {
          return (
            <Box key={idx} className={`flex md:space-x-5`}>
              <Avatar
                src={reply.user.image}
                alt=""
                radius="xl"
                className="hidden md:block"
              />

              <Box className="flex-grow space-y-5">
                <Box className="flex justify-between">
                  <Box className="flex ">
                    <Avatar
                      src={reply.user.image}
                      alt=""
                      radius="xl"
                      className="mr-3 md:hidden"
                    />

                    <Box>
                      <Text className="h4 text-bay">{reply.user.name}</Text>
                      <Text className="font-normal body3 text-grey">
                        @{reply.user.username}
                      </Text>
                    </Box>
                  </Box>

                  <Button
                    variant="subtle"
                    className="text-deepBlue hover:bg-transparent hover:underline"
                    onClick={toggle}
                  >
                    Reply
                  </Button>
                </Box>

                <Text className="font-normal text-grey body2">
                  <span className="font-bold text-primary">
                    @{reply.replyingTo}
                  </span>{" "}
                  {reply.content}
                </Text>
              </Box>
            </Box>
          );
        })}

        {show && (
          <Box className="flex md:space-x-5">
            <Avatar
              src=""
              alt=""
              radius="xl"
              className="hidden md:block md:invisible"
            />

            <Box className="flex flex-col flex-grow space-y-5 md:space-y-0 md:flex-row md:space-x-5">
              <Box className="flex-grow">
                <Textarea variant="filled" minRows={4} />
              </Box>

              <PrimaryButton text="Post Reply" />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Replies;
