import { ImageComponent } from "./image";

interface LogoProps {
  h: string;
  w: string;
}

export default function LogoComponent({ h, w }: LogoProps) {
  return (
    <ImageComponent src="/assets/images/logo.png" w={w} h={h} alt="logo" />
  );
}
