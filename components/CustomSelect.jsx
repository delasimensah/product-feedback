import { useState } from "react";
import { Box, Select, Text } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

import { Icon } from ".";

const CustomSelect = () => {
  const [sortBy, setSortBy] = useState("most-upvotes");
  return (
    <Select
      data={[
        { value: "most-upvotes", label: "Most Upvotes" },
        { value: "least-upvotes", label: "Least Upvotes" },
        { value: "most-comments", label: "Most Comments" },
        { value: "least-comments", label: "Least Comments" },
      ]}
      rightSection={<ChevronDown size={14} />}
      styles={{ rightSection: { pointerEvents: "none" } }}
      variant="unstyled"
      classNames={{
        dropdown: "top-5",
        unstyledVariant:
          "text-ghostWhite2 font-bold font-jost w-36 md:w-44 xl:w-60 text-xs md:text-base",
        separator: "border-b border-grey",
      }}
      itemComponent={({ label, value }) => {
        return (
          <Box
            className="flex items-center justify-between p-2 border-t first:border-t-0 border-t-ghostWhite"
            onClick={() => setSortBy(value)}
          >
            <Text
              className={`cursor-pointer ${
                value === sortBy ? "text-violet" : "text-bay"
              } hover:text-violet font-jost`}
            >
              {label}
            </Text>

            {value === sortBy && (
              <Icon
                src="/assets/shared/icon-check.svg"
                width={10}
                height={10}
              />
            )}
          </Box>
        );
      }}
    />
  );
};

export default CustomSelect;
