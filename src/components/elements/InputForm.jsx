const InputForm = ({ label, placeholder, inputType }) => {
  return (
    <div className="mt-5 sm:mt-9">
      <label
        htmlFor={label.split(" ").join("-")}
        style={{ textTransform: "capitalize" }}
      >
        {label}
      </label>
      <input
        className="w-full h-7 bg-transparent border border-[#E7E3FC] border-opacity-30 p-4 rounded-[24px]  focus:outline-none placeholder:text-[#C1C2C4] placeholder:text-opacity-50 sm:h-12"
        type={inputType}
        placeholder={placeholder}
        name={label.split(" ").join("-")}
        required
      />
    </div>
  );
};

export default InputForm;
