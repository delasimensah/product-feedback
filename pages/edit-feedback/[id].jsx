import { useState } from "react";
import { Box, Title, Button, TextInput, Textarea, Select } from "@mantine/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Icon, SelectItem, PrimaryButton, BackButton } from "../../components";

import getSelectedFeedback from "../../utils/getSelectedFeedback";

const categories = [
  { value: "feature", label: "Feature" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "enhancement", label: "Enhancement" },
  { value: "bug", label: "Bug" },
];

const statuses = [
  { value: "suggestion", label: "Suggestion" },
  { value: "planned", label: "Planned" },
  { value: "in-progress", label: "In-Progress" },
  { value: "live", label: "Live" },
];

const classNames = {
  label: "text-bay h4",
  description: "text-grey body3 font-normal",
  filledVariant:
    "bg-ghostWhite focus:border-deepBlue focus:cursor-pointer text-gore",
};

const Editfeedback = () => {
  const { feedback } = useSelector((state) => state.feedback);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const selectedFeedback = getSelectedFeedback(feedback, +id);

  const [categoryOpened, setCategoryOpened] = useState(false);
  const [statusOpened, setStatusOpened] = useState(false);
  const [title, setTitle] = useState(selectedFeedback.title);
  const [category, setCategory] = useState(selectedFeedback.category);
  const [status, setStatus] = useState(selectedFeedback.status);
  const [details, setDetails] = useState(selectedFeedback.description);

  return (
    <Box className="px-5 mx-auto md:max-w-xl xl:max-w-2xl md:px-0">
      <Box className="flex items-end my-10 md:my-12">
        <BackButton />
      </Box>

      <Box className="relative bg-white rounded-lg">
        <Icon
          src="/assets/shared/icon-edit-feedback.svg"
          className="absolute w-12 h-12 -top-5 left-10"
        />

        <Box className="px-5 pb-10 space-y-5 md:px-10">
          <Title className="capitalize h3 md:h2 xl:h1 text-bay">
            Editing `{selectedFeedback.title}`
          </Title>

          <form className="space-y-5">
            <TextInput
              label="Feedback Title"
              description="Add a short, descriptive headline"
              classNames={classNames}
              variant="filled"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
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
                categoryOpened ? (
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
              onDropdownOpen={() => setCategoryOpened(true)}
              onDropdownClose={() => setCategoryOpened(false)}
            />

            <Select
              data={statuses}
              defaultValue={status}
              value={status}
              label="Update Status"
              description="Change feature state"
              onChange={(value) => setStatus(value)}
              variant="filled"
              itemComponent={SelectItem(status)}
              rightSection={
                statusOpened ? (
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
              onDropdownOpen={() => setStatusOpened(true)}
              onDropdownClose={() => setStatusOpened(false)}
            />

            <Textarea
              label="Feedback Detail"
              description="Include any spacific comments on what should be improved, added, etc"
              classNames={classNames}
              variant="filled"
              minRows={4}
              value={details}
              onChange={(e) => setDetails(e.currentTarget.value)}
            />
          </form>
          <Box className="items-center justify-between md:flex">
            <Button
              variant="filled"
              classNames={{
                filled:
                  "bg-red-500 hover:bg-red-300 text-white rounded-lg w-full md:w-max",
              }}
              onClick={() => {}}
            >
              Delete
            </Button>

            <Box className="items-center justify-end space-y-2 md:space-x-2 md:flex md:space-y-0">
              <PrimaryButton
                text="Add Feedback"
                className="w-full md:hidden"
                onClick={() => {}}
              />
              <Button
                variant="filled"
                classNames={{
                  filled:
                    "bg-gore hover:bg-grey text-white rounded-lg w-full md:w-max",
                }}
                onClick={() => router.back()}
              >
                Cancel
              </Button>

              <PrimaryButton
                text="Add Feedback"
                className="hidden md:block"
                onClick={() => {}}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Editfeedback;
