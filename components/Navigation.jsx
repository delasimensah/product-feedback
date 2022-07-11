import React from "react";
import { Box, Title } from "@mantine/core";

const Navigation = () => {
  return (
    <Box className="flex lg:block md:space-x-5 lg:space-x-0 lg:space-y-5 ">
      <Box className="flex items-center flex-1 p-5 text-white bg-cover md:items-end md:rounded-lg bg-header-sm md:bg-header-md lg:bg-header-lg md:h-40">
        <Box>
          <Title className="text-white capitalize h1 font-jost">
            Frontend Mentor
          </Title>
          <p className="capitalize text-ghostWhite">feedback board</p>
        </Box>
      </Box>

      <Box className="flex-1 hidden h-40 bg-white rounded-lg md:block"></Box>

      <Box className="flex-1 hidden h-40 bg-white rounded-lg md:block "></Box>
    </Box>
  );
};

export default Navigation;
