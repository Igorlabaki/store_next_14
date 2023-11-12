import { ImageComponent } from "./image";

export  function DividerComponent() {
  return (
    <div className="my-[3.8rem] flex justify-center items-center">
        <ImageComponent src="/assets/images/Divider.png" w={"w-[7.75rem]"} h={"h-[0.6rem]"} alt={"divider"} />
    </div>
  )
}
