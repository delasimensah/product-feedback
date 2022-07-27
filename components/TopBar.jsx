import { Box, Text } from "@mantine/core";
import { useRouter } from "next/router";

import { Icon, FeedbackSort, PrimaryButton } from ".";

const TopBar = ({ suggestions }) => {
  const router = useRouter();

  return (
    <Box className="flex items-center justify-between p-3 md:rounded-lg bg-bay">
      <Box className="flex items-center md:space-x-5">
        <Box className="items-center hidden space-x-2 md:flex">
          <Icon
            src="/assets/suggestions/icon-suggestions.svg"
            className="w-5 h-5"
          />

          <Text className="font-bold text-white">
            {suggestions} Suggestions
          </Text>
        </Box>

        <Box className="flex items-center space-x-2 text-white w32 group">
          <Text className="text-xs font-light md:text-base group-hover:text-[#B5BCE0]">
            Sort By :{" "}
          </Text>

          <FeedbackSort />
        </Box>
      </Box>

      <PrimaryButton
        icon={<Icon src="/assets/shared/icon-plus.svg" className="w-3 h-3" />}
        text="add feedback"
        onClick={() => router.push("/new-feedback")}
      />
    </Box>
  );
};

export default TopBar;
