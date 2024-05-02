import { useMultiForms } from "../FormProvider";

function Step({ number, label }) {
  const { stepNumber } = useMultiForms();

  return (
    <div className="flex gap-3 text-xs uppercase sm:items-center">
      <h1
        className={`text-Alabaster flex h-8 w-8 items-center justify-center rounded-full border sm:h-6 sm:w-6 ${
          stepNumber === number
            ? "bg-Light_blue text-Marine_blue border-none font-bold"
            : ""
        }`}
      >
        {number}
      </h1>
      <div className="hidden sm:block">
        <p className="text-Cool_gray">Step {number}</p>
        <p className="text-Alabaster font-medium tracking-wide">{label}</p>
      </div>
    </div>
  );
}

export default Step;
