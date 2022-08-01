/* eslint-disable react/display-name */
import { forwardRef } from "react";

import { Box, Text } from "@mantine/core";

import { Icon } from ".";

const SelectItem = (sortBy) => {
  return forwardRef(({ label, value, ...others }, ref) => {
    return (
      <Box
        ref={ref}
        {...others}
        className="flex items-center justify-between p-3 border-b cursor-pointer border-ghostWhite last:border-b-0 group"
      >
        <Text className="body2 md:body1 text-[#647196] group-hover:text-primary">
          {label}
        </Text>

        {sortBy === value && (
          <Icon src="/assets/shared/icon-check.svg" className="w-3 h-3" />
        )}
      </Box>
    );
  });
};

export default SelectItem;
