import { useMultiForms } from "../../FormProvider";
import SubscriptionChoice from "../SubscriptionChoice";

function SubscriptionPlanForms() {
  const {
    handleSelectSubscription,
    selectedSubscription,
    handleNextStep,
    handleBackStep,
  } = useMultiForms();
  const { subscription, period } = selectedSubscription;

  console.log(selectedSubscription);
  return (
    <section className="flex flex-col sm:h-full">
      <div className="absolute left-[2.5%] top-[18%] h-auto w-[95%] rounded-md bg-white px-5 pb-8 pt-8 shadow-md sm:static sm:mx-0 sm:h-full sm:w-[100%] sm:px-0 sm:pb-3 sm:pl-3 sm:shadow-none md:w-[85%]">
        <h1 className="text-2xl font-bold text-blue-950">Select your plan</h1>
        <p className="mt-1 w-[80%] text-base text-Cool_gray sm:w-full sm:text-sm">
          You have the option of monthly or yearly billing.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-blue-900 sm:h-[calc(30rem-9.5rem)]">
          <fieldset className="grid sm:grid-cols-3 gap-3">
            <SubscriptionChoice
              subscription={subscription}
              id="arcade"
              iconSrc="/images/icon-arcade.svg"
              title="Arcade"
              price="9"
              period={period}
              onChange={handleSelectSubscription}
              monthsFree="2 months free"
            />

            <SubscriptionChoice
              subscription={subscription}
              id="advanced"
              iconSrc="/images/icon-advanced.svg"
              title="Advanced"
              price="12"
              period={period}
              onChange={handleSelectSubscription}
              monthsFree="2 months free"
            />

            <SubscriptionChoice
              subscription={subscription}
              id="pro"
              iconSrc="/images/icon-pro.svg"
              title="Pro"
              price="15"
              period={period}
              onChange={handleSelectSubscription}
              monthsFree="2 months free"
            />
          </fieldset>

          <div className="mt-2 rounded-sm bg-blue-50 p-2 text-sm">
            <label className="flex w-full items-center justify-center gap-3">
              <p className={`${period ? 'text-blue-900': 'text-Cool_gray'} font-medium`}>Monthly</p>
              <input
                type="checkbox"
                className="appearance-none"
                id="period"
                name="period"
                onChange={handleSelectSubscription}
                checked={selectedSubscription.period}
              />
              <div
                className={`flex ${!period ? 'justify-end' : ""} h-4 w-8 cursor-pointer rounded-lg border bg-blue-900 p-[0.15rem]`}
              >
                <div className="h-[9px] w-[9px] rounded-full bg-white"></div>
              </div>
              <p className={`${!period ? 'text-blue-900': 'text-Cool_gray'} font-medium`}>Yearly</p>
            </label>
          </div>

          <div className="mt-auto hidden justify-between sm:flex">
            <button onClick={handleBackStep} className="p-2 px-4 text-xs font-medium text-Cool_gray">
              Go back
            </button>
            <button onClick={handleNextStep} className="rounded-md bg-blue-900 p-2 px-4 text-xs text-white">
              Next Step
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex w-full justify-between bg-white px-3 py-5 sm:hidden">
        <button onClick={handleBackStep} className="p-2 px-4 text-xs font-medium text-Cool_gray">
          Go back
        </button>
        <button onClick={handleNextStep} className="rounded-sm bg-blue-900 p-2 px-4 text-sm text-white">
          Next Step
        </button>
      </div>
    </section>
  );
}

export default SubscriptionPlanForms;
