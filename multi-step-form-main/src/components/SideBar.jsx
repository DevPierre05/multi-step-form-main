import { steps } from "../steps";
import Step from "./Step";

function SideBar() {
  return (
    <div className="flex h-[25%] pt-12 flex-wrap justify-center gap-5 bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover sm:h-auto sm:flex-col sm:justify-normal sm:rounded-md sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:p-5 sm:pt-8">
      {steps.map((step) => (
        <Step key={step.number} number={step.number} label={step.label} />
      ))}
    </div>
  );
}

export default SideBar;
