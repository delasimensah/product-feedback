import { Box } from "@mantine/core";
import Image from "next/image";

const Icon = ({ src, className }) => {
  return (
    <Box className={`relative ${className}`}>
      <Image src={src} alt="" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default Icon;
