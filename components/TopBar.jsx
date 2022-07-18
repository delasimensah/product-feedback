import { Box, Text, Button } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { Icon, CustomSelect } from ".";

const TopBar = () => {
  const { width } = useViewportSize();

  return (
    <Box className="flex items-center justify-between p-3 md:rounded-lg bg-bay">
      <Box className="flex items-center md:space-x-5">
        <Box className="items-center hidden space-x-2 md:flex">
          <Icon src="/assets/suggestions/icon-suggestions.svg" />

          <Text className="font-bold text-white font-jost">6 Suggestions</Text>
        </Box>

        <Box className="flex items-center space-x-2 text-white w32">
          <Text className="text-xs font-light font-jost md:text-base">
            Sort By :{" "}
          </Text>

          <CustomSelect />
        </Box>
      </Box>

      <Box>
        <Button
          leftIcon={
            <Icon src="/assets/shared/icon-plus.svg" width={10} height={10} />
          }
          variant="filled"
          classNames={{
            filled: "bg-violet",
          }}
          size={width < 500 ? "xs" : "sm"}
        >
          Add Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default TopBar;
