import { useMultiForms } from "../../FormProvider";
import { useForm } from "react-hook-form";


function PersonalDataForm() {
  const { stepNumber, personalData, setPersonalData, handleNextStep  } = useMultiForms();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm()

  console.log(stepNumber);

  const handleProceed = () => {
    const username = getValues("username");
    const email = getValues("email");
    const phone = getValues("phone");
    const new_data = { username, email, phone }

    setPersonalData(new_data)
    handleNextStep()

    console.log(personalData);
    console.log(new_data);
  }

  return (
    <section className="flex flex-col sm:h-full">
      <div className="absolute left-[2.5%] top-[19%] h-auto w-[95%] rounded-md bg-white px-5 pb-8 pt-8 shadow-md sm:static sm:mx-0 sm:h-full sm:w-[100%] sm:px-0 sm:pb-3 sm:pl-3 sm:shadow-none md:w-[85%]">
        <h1 className="text-2xl font-bold text-blue-950">Personal info</h1>
        <p className="mt-1 w-[80%] text-base text-Cool_gray sm:w-full sm:text-sm">
          Please provide your name, email address and phone number.
        </p>

        <form
          onSubmit={handleSubmit(handleProceed)}
          className="mt-6 flex flex-col gap-3 text-blue-900 sm:h-[calc(30rem-9.5rem)]"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="username" className="text-sm font-medium">
                Name
              </label>
              <p className="text-sm font-bold text-red-600">
                {errors?.username?.message}
              </p>
            </div>
            <input
              className={`${errors?.username?.message ? 'border-red-600' : ""} focus:border-1 w-full rounded-sm border p-2 pl-4 text-sm placeholder:text-sm placeholder:font-medium focus:border-Purplish_blue focus:outline-none focus:ring-0 sm:rounded-md sm:p-1 sm:pl-3`}
              id="username"
              type="text"
              placeholder="eg. Stephen King"
              {...register("username", {
                required: "This field is required",
              })}
              defaultValue={personalData.username}
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <p className="text-sm font-bold text-red-600">
                {errors?.email?.message}
              </p>
            </div>
            <input
              type="email"
              id="email"
              placeholder="eg. stephenking@lorem.com"
              className={`${errors?.email?.message ? 'border-red-600' : ""} focus:border-1 w-full rounded-sm border p-2 pl-4 text-sm placeholder:text-sm placeholder:font-medium focus:border-Purplish_blue focus:outline-none focus:ring-0 sm:rounded-md sm:p-1 sm:pl-3`}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              defaultValue={personalData.email}
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <p className="text-sm font-bold text-red-600">
                {errors?.phone?.message}
              </p>
            </div>

            <input
              type="text"
              id="phone"
              placeholder="eg +1 234 567 890"
              className={`${errors?.phone?.message ? 'border-red-600' : ""} focus:border-1 w-full rounded-sm border p-2 pl-4 text-sm placeholder:text-sm placeholder:font-medium focus:border-Purplish_blue focus:outline-none focus:ring-0 sm:rounded-md sm:p-1 sm:pl-3`}
              {...register("phone", {
                required: "This field is required",
              })}
              defaultValue={personalData.phone}
            />
          </div>

          <div className="mt-auto hidden justify-end sm:flex">
            <button
              // onClick={handleProceed}
              className="rounded-md bg-blue-900 p-2 px-4 text-xs text-white"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 right-0 flex w-full justify-end bg-white px-3 py-5 sm:hidden">
        <button
          onClick={handleProceed}
          className="rounded-sm bg-blue-900 p-2 px-4 text-sm text-white"
        >
          Next Step
        </button>
      </div>
    </section>
  );
}

export default PersonalDataForm;
