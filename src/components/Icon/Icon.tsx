import { bouncing_circles, trash } from "@/images";
import Image from "next/image";

const icons = {
  loader: bouncing_circles,
  trash: trash,
};
interface IconProps {
  name: keyof typeof icons;
  size?: number;
}
export default function Icon({ name, size }: IconProps) {
  return <Image src={icons[name]} width={size && size} alt={name}></Image>;
}
