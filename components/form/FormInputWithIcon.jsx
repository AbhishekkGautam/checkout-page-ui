const FormInputWithIcon = ({ type, placeholder, icon, ...props }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <div className="border border-grey-400 rounded px-1.5 w-fit">
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
          {placeholder} <span className="text-red-500 ml-1">*</span>
        </label>
      </div>
    </div>
  );
};

export default FormInputWithIcon;
