export function ProductInfoComponent() {
  return (
    <div className="flex flex-col gap-y-[0.2rem]">
      <div className="py-[1.8rem] px-[1.2rem] flex flex-col gap-y-[1rem]">
        <p className="text-[1rem] tracking-[0.25rem]">MATERIALS</p>
        <p className="leading-[1.5rem] text-left text-[0.75tem] text-custom-gray-reg">
          We work with monitoring programmes to ensure compliance with safety,
          health and quality standards for our products.
        </p>
      </div>
      <div className="py-[1.8rem] px-[1.2rem] flex flex-col gap-y-[1rem]">
        <p className="text-[1rem] tracking-[0.25rem]">CARE</p>
        <p className="leading-[1.5rem] text-left text-[0.75tem] text-custom-gray-reg">
          To keep your jackets and coats clean, you only need to freshen them up
          and go over them with a cloth or a clothes brush. If you need to dry
          clean a garment, look for a dry cleaner that uses technologies that
          are respectful of the environment.
        </p>
      </div>
    </div>
  );
}
