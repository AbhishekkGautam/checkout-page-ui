const FormInput = ({ type, placeholder, ...props }) => {
  return (
    <div className="relative">
      <input
        type={type}
        className="w-full p-4 border border-grey-300 rounded-xl lg:rounded-2xl z-10 bg-transparent relative"
        {...props}
      />
      <label className="absolute z-1 inset-y-0 start-0 flex items-center ps-4 text-greyTertiary">
        {placeholder} <span className="text-red-primary ml-1">*</span>
      </label>
    </div>
  );
};

export default FormInput;
