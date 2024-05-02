

function SubscriptionChoice({ id, subscription, iconSrc, title, price, period, monthsFree, onChange }) {
  const fee = period ? price : Number(price) * 10
  return (
    <label
      className={`flex items-center gap-5 py-3 rounded-md border px-3 hover:border-Purplish_blue sm:block sm:pt-4 sm:py-0 ${
        subscription === id ? "border-Purplish_blue bg-blue-50" : ""
      }`}
    >
      <img src={iconSrc} alt="arcade icon" className="w-10 sm:w-7" />
      <div className="flex justify-center flex-col sm:block">
        <h1 className=" mt-1 text-base sm:text-sm font-bold text-blue-950 sm:mt-8">
          {title}
        </h1>
        <p className="text-sm font-medium text-Cool_gray sm:text-xs">
          {fee}/{period ? "mo" : "yr"}
        </p>
        {!period && (
          <p className="mt-1 text-sm font-medium text-blue-900 sm:text-xs">
            {monthsFree}
          </p>
        )}
        <input
          type="radio"
          id={id}
          name="subscription"
          className="appearance-none checked:border-indigo-500"
          onChange={onChange}
          defaultChecked={subscription === id}
          value={id}
          // value={`${id}/${fee}`}
          required
        />
      </div>
    </label>
  );
}

export default SubscriptionChoice
