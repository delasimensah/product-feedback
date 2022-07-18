import Image from "next/image";

const Icon = ({ src, width, height }) => {
  return (
    <Image
      src={src}
      alt=""
      width={width ? width : 20}
      height={height ? height : 20}
    />
  );
};

export default Icon;
