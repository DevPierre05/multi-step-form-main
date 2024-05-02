import { useMultiForms } from "../../FormProvider";
import AddOnService from "../AddOnService";

function SummaryPage() {
  const {selectedSubscription, addOns, setStepNumber, handleNextStep, handleBackStep} = useMultiForms()
  const { subscription, period } = selectedSubscription
  const { extra1, extra2, extra3 } = addOns

  const SubscriptionPrice = subscription === "arcade" ? 9 : subscription === "advanced" ? 12 : 15;
  const addon = {
    extra1: 1,
    extra2: 2,
    extra3: 2,
  }

  const period_SubscriptionFee = period ? SubscriptionPrice : SubscriptionPrice * 10
  const period_Extra1 = extra1 ? (period ? addon.extra1 : addon.extra1 * 10) : 0;
  const period_Extra2 = extra2 ? (period ? addon.extra2 : addon.extra2 * 10) : 0;
  const period_Extra3 = extra3 ? (period ? addon.extra3 : addon.extra3 * 10) : 0;

  const totalCheckoutFee = period_SubscriptionFee + period_Extra1 + period_Extra2 + period_Extra3;
  

  return (
    <section className="flex flex-col sm:h-full">
      <div className="absolute left-[2.5%] top-[18%] h-auto w-[95%] rounded-md bg-white px-5 pb-8 pt-8 shadow-md sm:static sm:mx-0 sm:h-full sm:w-[100%] sm:px-0 sm:pb-3 sm:pl-3 sm:shadow-none md:w-[85%]">
        <h1 className="text-2xl font-bold text-blue-950">Finishing up</h1>
        <p className="mt-1 w-[80%] text-base text-Cool_gray sm:w-full sm:text-sm">
          Double-check everything looks OK before confirming.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-blue-900 sm:h-[calc(30rem-9.5rem)]">
          <div className="grid rounded-sm bg-blue-50 p-3">
            <div className="flex w-full items-center justify-between">
              <div className="">
                <h1 className="text-base font-bold capitalize sm:text-sm">
                  {subscription}({period ? "Monthly" : "Yearly"})
                </h1>
                <button
                  onClick={() => setStepNumber(2)}
                  className="text-sm font-medium text-Cool_gray underline sm:text-xs"
                >
                  Change
                </button>
              </div>
              <p className="text-base font-bold sm:text-sm">
                ${period_SubscriptionFee}/{period ? "mo" : "yr"}
              </p>
            </div>

            {extra1 || extra2 || extra3 && <hr className="mt-3" />}

            {extra1 && (
              <AddOnService
                service="Online service"
                fee={period_Extra1}
                period={period}
              />
            )}
            {extra2 && (
              <AddOnService
                service="Larger storage"
                fee={period_Extra2}
                period={period}
              />
            )}
            {extra3 && (
              <AddOnService
                service="Customizable Profile"
                fee={period_Extra3}
                period={period}
              />
            )}
          </div>

          <div className="mt-1 p-3 flex w-full items-center justify-between">
            <p className="text-sm font-medium text-Cool_gray sm:text-xs">
              Total (per month)
            </p>
            <p className="text-sm font-bold text-blue-700 sm:text-base">
              ${totalCheckoutFee}/{period ? "mo" : "yr"}
            </p>
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
              Confirm
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
          Confirm
        </button>
      </div>
    </section>
  );
}

export default SummaryPage
