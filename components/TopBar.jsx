import { useState } from "react";
import { Box, Text, Button } from "@mantine/core";

import { Icon, SuggestionsSelect } from ".";

const TopBar = ({ suggestions }) => {
  const [sortBy, setSortBy] = useState("Most Upvotes");

  return (
    <Box className="flex items-center justify-between p-3 md:rounded-lg bg-bay">
      <Box className="flex items-center md:space-x-5">
        <Box className="items-center hidden space-x-2 md:flex">
          <Icon src="/assets/suggestions/icon-suggestions.svg" />

          <Text className="font-bold text-white">
            {suggestions} Suggestions
          </Text>
        </Box>

        <Box className="flex items-center space-x-2 text-white w32 group">
          <Text className="text-xs font-light md:text-base group-hover:text-[#B5BCE0]">
            Sort By :{" "}
          </Text>

          <SuggestionsSelect value={sortBy} setValue={setSortBy} />
        </Box>
      </Box>

      <Button
        leftIcon={
          <Icon src="/assets/shared/icon-plus.svg" width={10} height={10} />
        }
        variant="filled"
        classNames={{
          root: "w-36 text-xs lg:w-40 lg:text-sm",
          filled: "bg-primary hover:bg-[#AF48DC]",
        }}
      >
        Add Feedback
      </Button>
    </Box>
  );
};

export default TopBar;
