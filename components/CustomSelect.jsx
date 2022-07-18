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
        className="flex items-center justify-between p-2 border-t cursor-pointer first:border-t-0 border-t-ghostWhite"
      >
        <Text
          className={` hover:text-violet font-jost ${
            sortBy === value ? "text-violet" : "text-bay"
          }`}
        >
          {label}
        </Text>

        {sortBy === value && (
          <Icon src="/assets/shared/icon-check.svg" width={10} height={10} />
        )}
      </Box>
    );
  });
};

const CustomSelect = ({ value, setValue }) => {
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
        dropdown: "top-3 ",
        unstyledVariant:
          "text-ghostWhite2 font-bold font-jost w-60 text-xs md:text-base",
        rightSection: "pointer-events-none",
        selected: "text-violet",
      }}
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
    />
  );
};

export default CustomSelect;
