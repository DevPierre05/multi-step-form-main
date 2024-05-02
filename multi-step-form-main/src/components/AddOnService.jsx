function AddOnService({service, fee, period}) {
  return (
    <div className="mt-3 flex w-full items-center justify-between">
      <p className="text-sm font-medium text-Cool_gray sm:text-xs">
        {service}
      </p>
      <p className="text-sm font-medium text-Marine_blue sm:text-xs">
        ${fee}/{period ? "mo" : "yr"}
      </p>
    </div>
  );
}

export default AddOnService
