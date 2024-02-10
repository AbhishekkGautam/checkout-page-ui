import { InfoFill, PiggyBank } from '@/icons';
import PaymentCardsOption from './PaymentCardsOption';
import CountryCodeDropdown from './form/CountryCodeDropdown';
import FormInput from './form/FormInput';
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
        <PaymentCardsOption />
        <hr className="mt-5 lg:mt-8 border-grey-400" />
        {/* total payable */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-center gap-1 w-fit bg-green-100 border border-green-light py-1 px-2 rounded-full lg:hidden mb-2 lg:mb-0">
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
