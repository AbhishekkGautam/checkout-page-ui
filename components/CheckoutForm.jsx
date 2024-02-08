import { CreditCard } from '@/icons/CreditCard';
import { DinersclubLogo } from '@/icons/DinersclubLogo';
import { MastercardLogo } from '@/icons/MastercardLogo';
import { VisaLogo } from '@/icons/VisaLogo';
import SelectCountryCode from './form/SelectCountryCode';

const CheckoutForm = () => {
  return (
    <div className="">
      <h1 className="pb-4 text-2xl font-semibold text-greyPrimary">
        Enter your details
      </h1>
      <p className="pb-4 text-base font-normal text-greySecondary">
        We&apos;ll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>
      {/* Form inputs */}
      <div className="py-8 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Full name"
          className="w-full p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
        />
        <div className="flex gap-6 w-full">
          <SelectCountryCode />
          <input
            type="phone"
            placeholder="Phone number"
            className="w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
          />
        </div>
        <div className="flex gap-6 w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
          />
          <input
            type="email"
            placeholder="Confirm email"
            className="w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
          />
        </div>
      </div>
      <hr className="border-grey-400" />
      {/* additional info */}
      <div className="mt-16">
        <h1 className="pb-4 text-2xl font-semibold text-greyPrimary">
          Additional information
        </h1>
        <p className="pb-4 text-base font-normal text-greySecondary">
          We need a few more details to complete your reservation.
        </p>
        <div className="py-8 flex flex-col gap-6">
          <div className="flex gap-6 w-full">
            <input
              type="text"
              placeholder="Input label"
              className="w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
            />
            <select className="border border-grey-300 text-greyTertiary rounded-2xl block w-1/2 py-4 pl-3 pr-4">
              <option selected className="default-option">
                Select
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
          <select className="border border-grey-300 text-greyTertiary rounded-2xl block w-full py-4 pl-3 pr-4">
            <option selected className="default-option">
              Multiselect
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
      </div>
      <hr className="border-grey-400" />
      {/* mode of payment */}
      <div className="mt-16">
        <h1 className="pb-4 text-2xl font-semibold text-greyPrimary">
          Select your mode of payment
        </h1>
        <p className="pb-4 text-base font-normal text-greySecondary">
          Payments with Tickete are secure and encrypted.
        </p>
        {/* payment card info */}
        <div className="mt-8">
          <div className="px-6 py-7 border border-greyPrimary rounded-2xl">
            <div className="mb-8 flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="border border-grey-400 rounded px-1.5 w-fit">
                  <CreditCard />
                </div>
                <div className="text-greyPrimary font-semibold text-base">
                  Credit & debit card
                </div>
              </div>
              {/* radio button */}
              <input
                type="radio"
                name="credit-debit-card"
                value="credit-debit-card"
                checked
                className="payment-radio-btn"
              />
            </div>
            {/* Logos */}
            <div className="flex gap-2">
              <div className="w-[35px] h-5 border border-grey-400 rounded flex items-center justify-center">
                <VisaLogo />
              </div>
              <div className="w-[35px] h-5 border border-grey-400 rounded flex items-center justify-center">
                <MastercardLogo />
              </div>
              <div className="w-[35px] h-5 border border-grey-400 rounded flex items-center justify-center">
                <DinersclubLogo />
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full flex gap-6">
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
                />
                <div className="w-1/2 flex">
                  <div className="flex items-center z-10 py-4 pl-4 pr-2 rounded-s-2xl border border-grey-300 border-r-0">
                    <div className="border border-grey-400 rounded px-1.5 w-fit">
                      <CreditCard />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="w-full py-4 pl-2 pr-4 border border-l-0  border-grey-300 rounded-e-2xl placeholder:text-greyTertiary"
                    placeholder="Card number"
                  />
                </div>
              </div>
              <div className="w-full flex gap-6 mt-7">
                <input
                  type="text"
                  placeholder="Expiry date"
                  className="w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
                />
                <input
                  type="password"
                  placeholder="CVV/CVC"
                  maxLength="3"
                  required
                  className="w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
