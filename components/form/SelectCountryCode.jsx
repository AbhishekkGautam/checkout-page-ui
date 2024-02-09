import { Globe } from '@/icons/Globe';

const SelectCountryCode = () => {
  return (
    <div class="w-full lg:w-1/2 flex">
      <div
        className="flex-shrink-0 z-10 inline-flex items-center py-4 px-4 pr-0 text-sm font-medium text-center text-gray-500 rounded-s-2xl border border-grey-300 border-r-0"
        type="button"
      >
        <Globe />
      </div>
      <select className="border border-grey-300 border-l-0 text-greyTertiary rounded-e-2xl block w-full py-4 pl-3 pr-4">
        <option selected className="default-option">
          Country code
        </option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
        <option value="WH">Washinghton</option>
        <option value="FL">Florida</option>
        <option value="VG">Virginia</option>
        <option value="GE">Georgia</option>
        <option value="MI">Michigan</option>
      </select>
    </div>
  );
};

export default SelectCountryCode;
