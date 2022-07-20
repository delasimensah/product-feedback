import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Icon } from ".";

const NoSuggestions = () => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <Box className="flex flex-col items-center justify-center h-full space-y-10 bg-white rounded-xl">
      <Icon
        src="/assets/suggestions/illustration-empty.svg"
        width={matches ? 100 : 150}
        height={matches ? 100 : 150}
      />
    </Box>
  );
};

export default NoSuggestions;
