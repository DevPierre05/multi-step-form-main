import { useMultiForms } from "../FormProvider";
import PersonalDataForm from "./steps/PersonalDataForm";
import SideBar from "./SideBar";
import SubscriptionPlanForms from "./steps/SubscriptionPlanForms"
import AddOnForm from "./steps/AddOnForm";
import SummaryPage from "./steps/SummaryPage";
import FormCompletion from "./FormCompletion";

function FormContainer() {
  const { stepNumber } = useMultiForms();
  return (
    <section className="relative h-full w-full sm:gap-8 md:gap-16 sm:grid sm:h-[30rem] shadow-md sm:w-[48rem] sm:grid-cols-[28%_1fr] sm:rounded-md sm:bg-white sm:p-3">
      <SideBar />
      {stepNumber === 1 && <PersonalDataForm />}
      {stepNumber === 2 && <SubscriptionPlanForms /> }
      {stepNumber === 3 && <AddOnForm /> }
      {stepNumber === 4 && <SummaryPage /> }
      {stepNumber === 5 && <FormCompletion />}
    </section>
  );
}

export default FormContainer;
