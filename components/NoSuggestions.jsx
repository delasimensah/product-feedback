import { Box } from "@mantine/core";

import { Icon } from ".";

const NoSuggestions = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-full space-y-10 bg-white rounded-xl">
      <Icon
        src="/assets/suggestions/illustration-empty.svg"
        className="w-24 h-24 md:w-36 md:h-36"
      />
    </Box>
  );
};

export default NoSuggestions;
