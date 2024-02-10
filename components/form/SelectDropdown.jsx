import { CaretDown } from '@/icons';

const SelectDropdown = ({ placeholder }) => {
  return (
    <div class="relative flex">
      <div class="flex items-center justify-between p-4 border border-grey-300 text-greyTertiary rounded-2xl w-full cursor-pointer">
        <div className="flex items-center gap-4">
          <div class="text-greyTertiary">
            {placeholder} <span className="text-red-500">*</span>
          </div>
        </div>
        <CaretDown />
      </div>
      <ul className="dropdown-list hidden absolute top-4 left-12 w-4/5 m-0 p-0 list-none bg-white border border-grey-300 rounded z-50">
        <li>
          <span className="icon">🇺🇸</span> +1
        </li>
        <li>
          <span className="icon">🇮🇳</span> +91
        </li>
      </ul>
    </div>
  );
};

export default SelectDropdown;
