import { useMultiForms } from "../../FormProvider";
import AddOnItem from "../AddOnItem";

function AddOnForm() {
  const {
    addOns,
    selectedSubscription,
    handleSelectAddOns,
    handleNextStep,
    handleBackStep,
  } = useMultiForms();
  const { period } = selectedSubscription;
  const { extra1, extra2, extra3} = addOns;

  console.log(addOns);
  console.log(extra1);
  return (
    <section className="flex flex-col sm:h-full">
      <div className="absolute left-[2.5%] top-[18%] h-auto w-[95%] rounded-md bg-white px-5 pb-8 pt-8 shadow-md sm:static sm:mx-0 sm:h-full sm:w-[100%] sm:px-0 sm:pb-3 sm:pl-3 sm:shadow-none md:w-[85%]">
        <h1 className="text-2xl font-bold text-blue-950">Pick add-ons</h1>
        <p className="mt-1 w-[80%] text-base text-Cool_gray sm:w-full sm:text-sm">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-blue-900 sm:h-[calc(30rem-9.5rem)]">
          <div className="grid gap-3">
            <AddOnItem
              id="extra1"
              extra={extra1}
              title="Online service"
              details="Access to multiplayer games"
              price="1"
              period={period}
              onChange={handleSelectAddOns}
              checked={extra1}
            />
            <AddOnItem
              id="extra2"
              extra={extra2}
              title="Larger storage"
              details="Extra 1TB of cloud save"
              price="2"
              period={period}
              onChange={handleSelectAddOns}
              checked={extra2}
            />
            <AddOnItem
              id="extra3"
              extra={extra3}
              title="Customizable profile"
              details="Custom theme on your profile"
              price="2"
              period={period}
              onChange={handleSelectAddOns}
              checked={extra3}
            />
          </div>

          <div className="mt-auto hidden justify-between sm:flex">
            <button
              onClick={handleBackStep}
              className="p-2 px-4 text-xs font-medium text-Cool_gray"
            >
              Go back
            </button>
            <button
              onClick={handleNextStep}
              className="rounded-md bg-blue-900 p-2 px-4 text-xs text-white"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex w-full justify-between bg-white px-3 py-5 sm:hidden">
        <button
          onClick={handleBackStep}
          className="p-2 px-4 text-xs font-medium text-Cool_gray"
        >
          Go back
        </button>
        <button
          onClick={handleNextStep}
          className="rounded-sm bg-blue-900 p-2 px-4 text-sm text-white"
        >
          Next Step
        </button>
      </div>
    </section>
  );
}

export default AddOnForm
