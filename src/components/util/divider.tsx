import { ImageComponent } from "./image";

export function DividerComponent() {
  return (
    <div className="my-[2.8rem] flex justify-center items-center w-full">
      <ImageComponent
        src="/assets/images/Divider.png"
        w={"w-[7.75rem]"}
        h={"h-[0.6rem]"}
        alt={"divider"}
      />
    </div>
  );
}
