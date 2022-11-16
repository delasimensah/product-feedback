import { Textarea } from "@mantine/core";

const classNames = {
  label: "text-bay h4",
  description: "text-grey body3 font-normal",
  filledVariant:
    "bg-ghostWhite focus:border-deepBlue focus:cursor-pointer text-gore",
};

const CustomTextarea = (props) => {
  return <Textarea classNames={classNames} {...props} />;
};

export default CustomTextarea;
