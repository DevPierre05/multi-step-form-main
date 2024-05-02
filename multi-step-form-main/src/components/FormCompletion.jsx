function FormCompletion() {
  return (
    <section className="sm:h-full">
      <div className="absolute left-[2.5%] top-[18%] flex h-[25rem] w-[95%] items-center justify-center rounded-md bg-white shadow-md sm:static sm:mx-0 sm:h-full sm:w-[100%] sm:px-0 sm:pb-3 sm:pl-3 sm:shadow-none md:w-[85%]">
        <div className="flex flex-col items-center justify-center gap-4 pl-3">
          <img
            src="images/icon-thank-you.svg"
            className="w-12"
            alt="check-icon"
          />
          <div className="flex flex-col gap-2 items-center w-full">
            <h1 className="text-center text-xl font-bold text-blue-950">
              Thank you!
            </h1>
            <p className="w-[70%] sm:w-[90%] text-center text-base text-Cool_gray sm:text-sm ">
              Thanks for confirming your subscription!. We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormCompletion;
