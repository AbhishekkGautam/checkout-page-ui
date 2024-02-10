const FormInputWithIcon = ({ type, placeholder, icon, ...props }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <div className="w-[35px] h-5 flex items-center justify-center border border-grey-400 rounded">
          {icon}
        </div>
      </div>
      <div className="relative">
        <input
          type={type}
          className="w-full p-4 border border-grey-300 rounded-xl lg:rounded-2xl block ps-16 z-10 bg-transparent relative"
          {...props}
        />
        <label className="absolute z-1 inset-y-0 start-0 flex items-center ps-16 text-greyTertiary">
          {placeholder} <span className="text-red-primary ml-1">*</span>
        </label>
      </div>
    </div>
  );
};

export default FormInputWithIcon;
