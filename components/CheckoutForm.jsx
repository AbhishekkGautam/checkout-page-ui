import {
  ApplePay,
  CreditCard,
  DinersclubLogo,
  GooglePay,
  Info,
  InfoFill,
  Lock,
  MastercardLogo,
  PiggyBank,
  VisaLogo,
} from '@/icons';
import SelectCountryCode from './form/SelectCountryCode';

const CheckoutForm = () => {
  return (
    <div className="">
      <h1 className="pb-4 text-xl lg:text-2xl font-semibold text-greyPrimary">
        Enter your details
      </h1>
      <p className="pb-3 lg:pb-4 text-sm lg:text-base font-normal text-greySecondary">
        We&apos;ll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>
      {/* Form inputs */}
      <div className="pt-4 pb-5 lg:py-8 flex flex-col gap-5 lg:gap-6 text-sm lg:text-base">
        <input
          type="text"
          placeholder="Full name"
          className="w-full p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
        />
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 w-full">
          <SelectCountryCode />
          <input
            type="phone"
            placeholder="Phone number"
            className="w-full lg:w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-full lg:w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
          />
          <input
            type="email"
            placeholder="Confirm email"
            className="w-full lg:w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
          />
        </div>
      </div>
      <hr className="border-grey-400" />
      {/* additional info */}
      <div className="mt-12 lg:mt-16">
        <h1 className="pb-4 text-xl lg:text-2xl font-semibold text-greyPrimary">
          Additional information
        </h1>
        <p className="pb-3 lg:pb-4 text-sm lg:text-base font-normal text-greySecondary">
          We need a few more details to complete your reservation.
        </p>
        <div className="pt-4 pb-5 lg:py-8 flex flex-col gap-5 lg:gap-6 text-sm lg:text-base">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 w-full">
            <input
              type="text"
              placeholder="Input label"
              className="w-full lg:w-1/2 p-4 border border-grey-300 rounded-2xl placeholder:text-greyTertiary"
            />
            <select className="border border-grey-300 text-greyTertiary rounded-2xl block w-full lg:w-1/2 py-4 pl-3 pr-4">
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
      <div className="mt-12 lg:mt-16">
        <h1 className="pb-3 lg:pb-4 text-xl lg:text-2xl font-semibold text-greyPrimary">
          Select your mode of payment
        </h1>
        <p className="pb-4 text-sm lg:text-base font-normal text-greySecondary">
          Payments with Tickete are secure and encrypted.
        </p>
        {/* payment card info */}
        <div className="mt-4 lg:mt-8">
          <div className="px-4 lg:px-6 py-6 lg:py-7 border border-greyPrimary rounded-2xl">
            <div className="mb-8 flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="border border-grey-400 rounded px-1.5 w-fit">
                  <CreditCard />
                </div>
                <div className="text-greyPrimary font-semibold text-sm lg:text-base">
                  Credit & debit card
                </div>
              </div>
              {/* radio button */}
              <input
                type="radio"
                name="credit-debit-card"
                value="credit-debit-card"
                checked
                className="invisible payment-radio-btn cursor-pointer"
              />
            </div>
            {/* Logos */}
            <div className="flex gap-1 lg:gap-2">
              <div className="w-[28px] lg:w-[35px] h-4 lg:h-5 border border-grey-400 rounded flex items-center justify-center">
                <VisaLogo width={27} height={10} className="hidden lg:block" />
                <VisaLogo width={21} height={7} className="lg:hidden" />
              </div>
              <div className="w-[28px] lg:w-[35px] h-4 lg:h-5 border border-grey-400 rounded flex items-center justify-center">
                <MastercardLogo
                  width={19}
                  height={12}
                  className="hidden lg:block"
                />
                <MastercardLogo width={15} height={9} className="lg:hidden" />
              </div>
              <div className="w-[28px] lg:w-[35px] h-4 lg:h-5 border border-grey-400 rounded flex items-center justify-center">
                <DinersclubLogo
                  width={15}
                  height={14}
                  className="hidden lg:block"
                />
                <DinersclubLogo width={11} height={10} className=" lg:hidden" />
              </div>
            </div>
            <div className="mt-6 lg:mt-8">
              <div className="w-full flex gap-6 text-sm lg:text-base">
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
            <div className="mt-8">
              <hr className="border-grey-400" />
              {/* total pay */}
              <div className="flex items-start justify-between pt-4">
                <div className="">
                  <h1 className="text-lg font-semibold text-greyPrimary pb-2">
                    Total payable: $XXX
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-greySecondary">
                      You will be charged in AED{' '}
                    </span>
                    <Info />
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-green-primary py-1 px-2 rounded-full">
                  <PiggyBank color="#E9F9EE" />
                  <p className="text-xs font-semibold text-green-secondary">
                    You save -price-
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs font-normal text-greySecondary">
                By clicking “confirm & pay”, you agree to{' '}
                <span className="text-indigo-primary underline cursor-pointer">
                  Tickete&apos;s general terms and conditions
                </span>{' '}
                and{' '}
                <span className="text-indigo-primary underline cursor-pointer">
                  cancellation policy.
                </span>
              </p>
            </div>
            {/* Pay button */}
            <div className="mt-5">
              <button className="py-4 px-8 flex items-center gap-3 bg-black hover:bg-greyPrimary text-lg font-semibold text-grey-500 rounded-2xl">
                <Lock color="white" /> Confirm & pay
              </button>
            </div>
          </div>
        </div>
        {/* coming soon cards */}
        <div className="mt-5 p-6 border border-grey-200 bg-grey-600 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-[35px] h-5 bg-grey-700 rounded-md flex items-center justify-center">
              <ApplePay />
            </div>
            <p className="text-base font-semibold text-greyDisabled">
              Coming Soon
            </p>
          </div>
          <div className="-mt-2">
            <input
              type="radio"
              name="credit-debit-card"
              value="credit-debit-card"
              disabled
              className="invisible payment-radio-btn"
            />
          </div>
        </div>
        <div className="mt-5 p-6 border border-grey-200 bg-grey-600 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-[35px] h-5 bg-grey-700 rounded-md flex items-center justify-center">
              <GooglePay />
            </div>
            <p className="text-base font-semibold text-greyDisabled">
              Coming Soon
            </p>
          </div>
          <div className="-mt-2">
            <input
              type="radio"
              name="credit-debit-card"
              value="credit-debit-card"
              disabled
              className="invisible payment-radio-btn"
            />
          </div>
        </div>
        <hr className="mt-8 border-grey-400" />
        {/* total payable */}
        <div className="mt-16">
          <h1 className="text-2xl font-semibold text-greyPrimary pb-4">
            Total Payable: $XXX
          </h1>
          <div className="border border-grey-200 p-4 rounded-2xl">
            <div className="flex items-start gap-3">
              <InfoFill />
              <div className="text-sm">
                <p className="font-semibold text-greyPrimary mb-1">
                  You will be charged in AED
                </p>
                <p className="font-normal text-greySecondary">
                  The price shown here is in US Dollar (USD) as per the current
                  conversion rate. You will be charged in United Arab Emirates
                  Dirham (AED).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
