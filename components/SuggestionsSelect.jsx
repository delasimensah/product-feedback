/* eslint-disable react/display-name */
import { useState, forwardRef } from "react";
import { Box, Select, Text } from "@mantine/core";
import { ChevronDown, ChevronUp } from "tabler-icons-react";

import { Icon } from ".";

const data = [
  { value: "Most Upvotes", label: "Most Upvotes" },
  { value: "Least Upvotes", label: "Least Upvotes" },
  { value: "Most Comments", label: "Most Comments" },
  { value: "Least Comments", label: "Least Comments" },
];

const SelectItem = (sortBy) => {
  return forwardRef(({ label, value, ...others }, ref) => {
    return (
      <Box
        ref={ref}
        {...others}
        className="flex items-center justify-between p-3 border-b cursor-pointer border-ghostWhite last:border-b-0"
      >
        <Text className="body1 text-[#647196] hover:text-primary">{label}</Text>

        {sortBy === value && (
          <Icon src="/assets/shared/icon-check.svg" width={10} height={10} />
        )}
      </Box>
    );
  });
};

const SuggestionsSelect = ({ value, setValue }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Select
      defaultValue={value}
      value={value}
      onChange={setValue}
      data={data}
      rightSection={
        opened ? <ChevronUp size={14} /> : <ChevronDown size={14} />
      }
      itemComponent={SelectItem(value)}
      variant="unstyled"
      classNames={{
        root: "w-32 md:w-40",
        dropdown: "top-3 p-0 rounded-lg",
        unstyledVariant:
          "text-ghostWhite2 group-hover:text-[#B5BCE0] font-bold w-60 text-xs md:text-base",
        rightSection: "pointer-events-none",
      }}
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
    />
  );
};

export default SuggestionsSelect;
