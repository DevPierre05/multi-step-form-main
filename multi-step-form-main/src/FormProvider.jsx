
import { useContext, createContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [stepNumber, setStepNumber] = useState(1);
  const [personalData, setPersonalData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const [selectedSubscription, setSelectedSubscription] = useState({
    subscription: "arcade",
    period: true,
    
  });
  const [addOns, setAddOns] = useState({
    extra1: false,
    extra2: false,
    extra3: false
  })

  const handleSelectSubscription = (e) => {
    const { name, value, type, checked } = e.target;
    setSelectedSubscription(prevSub => {
      return {...prevSub, [name]: type === "checkbox" ? checked : value };
    })
  }

  const handleSelectAddOns = (e) => {
    const { name, value, type, checked } = e.target;
    setAddOns(prevAddons => {
      return {...prevAddons, [name]: type === "checkbox" ? checked : value };
    })
  }

  const handleNextStep = () => {
    if (stepNumber < 5) {
      setStepNumber((prev) => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (stepNumber > 1) {
      setStepNumber((prev) => prev - 1);
    }
  };

  return (
    <FormContext.Provider
      value={{
        stepNumber,
        setStepNumber,
        personalData,
        selectedSubscription,
        addOns,
        handleNextStep,
        handleBackStep,
        setPersonalData,
        handleSelectSubscription,
        handleSelectAddOns
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

function useMultiForms() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { FormProvider, useMultiForms };
