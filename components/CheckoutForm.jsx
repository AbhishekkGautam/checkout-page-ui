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
import CountryCodeDropdown from './form/CountryCodeDropdown';
import FormInput from './form/FormInput';
import FormInputWithIcon from './form/FormInputWithIcon';
import SelectDropdown from './form/SelectDropdown';

const CheckoutForm = () => {
  return (
    <div className="">
      <h1 className="pb-4 heading-text">Enter your details</h1>
      <p className="pb-3 lg:pb-4 sub-heading-text">
        We&apos;ll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>
      {/* Form inputs */}
      <div className="pt-4 pb-5 lg:py-8 flex flex-col gap-5 lg:gap-6 text-sm lg:text-base">
        <FormInput type="text" placeholder="Full name" required />
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 w-full">
          <div className="w-full lg:w-1/2">
            <CountryCodeDropdown />
          </div>
          <div className="w-full lg:w-1/2">
            <FormInput type="phone" placeholder="Phone number" required />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 w-full">
          <div className="w-full lg:w-1/2">
            <FormInput type="text" placeholder="Email" required />
          </div>
          <div className="w-full lg:w-1/2">
            <FormInput type="text" placeholder="Confirm email" required />
          </div>
        </div>
      </div>
      <hr className="border-grey-400" />
      {/* additional info */}
      <div className="mt-12 lg:mt-16">
        <h1 className="pb-4 heading-text">Additional information</h1>
        <p className="pb-3 lg:pb-4 sub-heading-text">
          We need a few more details to complete your reservation.
        </p>
        <div className="pt-4 pb-5 lg:py-8 flex flex-col gap-5 lg:gap-6 text-sm lg:text-base">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 w-full">
            <div className="w-full lg:w-1/2">
              <FormInput type="text" placeholder="Input label" required />
            </div>
            <div className="w-full lg:w-1/2">
              <SelectDropdown placeholder="Select" />
            </div>
          </div>
          <div className="w-full">
            <SelectDropdown placeholder="Multiselect" />
          </div>
        </div>
      </div>
      <hr className="border-grey-400" />
      {/* mode of payment */}
      <div className="mt-12 lg:mt-16">
        <h1 className="pb-3 lg:pb-4 heading-text">
          Select your mode of payment
        </h1>
        <p className="pb-4 sub-heading-text">
          Payments with Tickete are secure and encrypted.
        </p>
        {/* payment card info */}
        <div className="mt-4 lg:mt-8">
          <div className="px-4 lg:px-6 py-6 lg:py-7 border border-greyPrimary rounded-xl lg:rounded-2xl">
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
                defaultChecked
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
              <div className="w-full flex flex-col lg:flex-row gap-6 text-sm lg:text-base">
                <div className="w-full lg:w-1/2">
                  <FormInput type="text" placeholder="Name on card" required />
                </div>
                <div className="w-full lg:w-1/2">
                  <FormInputWithIcon
                    type="number"
                    placeholder="Card number"
                    icon={<CreditCard />}
                    required
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-6 mt-6 lg:mt-7 text-sm lg:text-base">
                <div className="w-full lg:w-1/2">
                  <FormInput type="text" placeholder="Expiry date" required />
                </div>
                <div className="w-full lg:w-1/2">
                  <FormInput
                    type="password"
                    placeholder="CVV/CVC"
                    maxLength="3"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-8">
              <hr className="border-grey-400 hidden lg:block" />
              {/* total pay */}
              <div className="flex flex-col-reverse gap-2 lg:gap-0 lg:flex-row items-start justify-between lg:pt-4">
                <div>
                  <h1 className="text-lg font-semibold text-greyPrimary pb-3 lg:pb-2">
                    Total payable: $XXX
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-greySecondary underline">
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
            <div className="mt-6 lg:mt-8">
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
              <button className="w-full lg:w-fit py-4 px-8 flex items-center justify-center gap-3 bg-black hover:bg-greyPrimary text-lg font-semibold text-grey-500 rounded-xl lg:rounded-2xl">
                <Lock color="white" /> Confirm & pay
              </button>
            </div>
          </div>
        </div>
        {/* coming soon cards */}
        <div className="mt-5 p-6 border border-grey-200 bg-grey-600 rounded-xl lg:rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="w-[35px] h-5 bg-grey-700 rounded-md flex items-center justify-center">
              <ApplePay />
            </div>
            <p className="text-sm lg:text-base font-semibold text-greyDisabled">
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
        <div className="mt-5 p-6 border border-grey-200 bg-grey-600 rounded-xl lg:rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="w-[35px] h-5 bg-grey-700 rounded-md flex items-center justify-center">
              <GooglePay />
            </div>
            <p className="text-sm lg:text-base font-semibold text-greyDisabled">
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
        <hr className="mt-5 lg:mt-8 border-grey-400" />
        {/* total payable */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-center gap-1 w-fit bg-green-secondary py-1 px-2 rounded-full lg:hidden mb-2 lg:mb-0">
            <PiggyBank color="#299764" />
            <p className="text-xs font-semibold text-green-primary">
              You saved -price-
            </p>
          </div>
          <h1 className="text-xl lg:text-2xl font-semibold text-greyPrimary pb-5 lg:pb-4">
            Total Payable: $XXX
          </h1>
          <div className="border border-grey-200 p-4 rounded-xl lg:rounded-2xl">
            <div className="flex items-start gap-3">
              <InfoFill className="flex-shrink-0" />
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
