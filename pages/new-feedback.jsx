/* eslint-disable react/display-name */
import { useState } from "react";
import { Box, Title, Button, TextInput, Textarea, Select } from "@mantine/core";
import { useRouter } from "next/router";

import { Icon, SelectItem } from "../components";

const categories = [
  { value: "Feature", label: "Feature" },
  { value: "UI", label: "UI" },
  { value: "UX", label: "UX" },
  { value: "Enhancement", label: "Enhancement" },
  { value: "Bug", label: "Bug" },
];

const classNames = {
  label: "text-bay h3",
  description: "text-grey body2",
  filledVariant: "bg-ghostWhite focus:border-deepBlue text-gore",
};

const NewFeedback = () => {
  const router = useRouter();
  const [category, setCategory] = useState(categories[0].value);
  const [opened, setOpened] = useState(false);

  return (
    <Box className="px-5 mx-auto md:max-w-xl xl:max-w-2xl md:px-0">
      <Box className="flex items-end my-10 md:my-12">
        <Button
          leftIcon={
            <Icon
              src="/assets/shared/icon-arrow-left.svg"
              className="w-3 h-3"
            />
          }
          size="sm"
          variant="subtle"
          className="px-0 hover:bg-transparent text-grey"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Box>

      <Box className="relative bg-white rounded-lg">
        <Icon
          src="/assets/shared/icon-new-feedback.svg"
          className="absolute w-10 h-10 -top-5 left-10"
        />

        <Box className="px-5 pb-10 space-y-5 md:px-10">
          <Title className="capitalize h3 md:h2 xl:h1 text-bay">
            Create new Feedback
          </Title>

          <form className="space-y-5">
            <TextInput
              label="Feedback Title"
              description="Add a short, descriptive headline"
              classNames={classNames}
              variant="filled"
            />

            <Select
              data={categories}
              defaultValue={category}
              value={category}
              label="Category"
              description="Choose a category for your feedback"
              onChange={(value) => setCategory(value)}
              variant="filled"
              itemComponent={SelectItem(category)}
              rightSection={
                opened ? (
                  <Icon
                    src="/assets/shared/icon-arrow-up.svg"
                    className="w-3 h-3"
                  />
                ) : (
                  <Icon
                    src="/assets/shared/icon-arrow-down.svg"
                    className="w-3 h-3"
                  />
                )
              }
              classNames={{
                ...classNames,
                rightSection: "pointer-events-none",
              }}
              maxDropdownHeight={250}
              onDropdownOpen={() => setOpened(true)}
              onDropdownClose={() => setOpened(false)}
            />

            <Textarea
              label="Feedback Detail"
              description="Include any spacific comments on what should be improved, added, etc"
              classNames={classNames}
              variant="filled"
              minRows={4}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default NewFeedback;
