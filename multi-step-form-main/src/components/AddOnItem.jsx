function AddOnItem({id, extra, title, details, onChange, checked, price, period}) {
  const fee = period ? price : Number(price) * 10;
  return (
    <label
      className={`flex items-center gap-4 rounded-md border hover:border-Purplish_blue ${
        extra ? "border-Purplish_blue bg-blue-50" : "border-Light_gray"
      } p-4 px-5`}
    >
      <input
        type="checkbox"
        id={id}
        name={id}
        className="border-Light_gray accent-blue-700"
        onChange={onChange}
        checked={checked}
      />
      <div className="flex w-full items-center justify-between">
        <div className="">
          <h1 className="text-base font-bold text-blue-950 sm:text-sm">
            {title}
          </h1>
          <p className="text-sm text-Cool_gray sm:text-xs">{details}</p>
        </div>
        <div className="text-sm sm:text-xs">
          <p className="font-medium text-blue-700">
            +${fee}/{period ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </label>
  );
}

export default AddOnItem
