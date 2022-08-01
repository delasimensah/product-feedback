/* eslint-disable react/display-name */
import { useState } from "react";
import { Select } from "@mantine/core";
import { ChevronDown, ChevronUp } from "tabler-icons-react";
import { useSelector, useDispatch } from "react-redux";

import { SelectItem } from ".";

import { setSortBy } from "../redux/feedbackSlice";

const data = [
  { value: "Most Upvotes", label: "Most Upvotes" },
  { value: "Least Upvotes", label: "Least Upvotes" },
  { value: "Most Comments", label: "Most Comments" },
  { value: "Least Comments", label: "Least Comments" },
];

const SuggestionsSelect = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.feedback.sortBy);

  const [opened, setOpened] = useState(false);

  return (
    <Select
      defaultValue={sortBy}
      value={sortBy}
      onChange={(value) => dispatch(setSortBy(value))}
      data={data}
      rightSection={
        opened ? <ChevronUp size={14} /> : <ChevronDown size={14} />
      }
      itemComponent={SelectItem(sortBy)}
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
