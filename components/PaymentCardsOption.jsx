import {
  ApplePay,
  CreditCard,
  DinersclubLogo,
  GooglePay,
  Info,
  Lock,
  MastercardLogo,
  PiggyBank,
  VisaLogo,
} from '@/icons';
import FormInput from './form/FormInput';
import FormInputWithIcon from './form/FormInputWithIcon';

const PaymentCardsOption = () => {
  return (
    <>
      <div className="mt-4 lg:mt-8">
        <div className="px-4 lg:px-6 py-6 lg:py-7 border border-greyPrimary rounded-xl lg:rounded-2xl">
          <div className="mb-8 flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="w-[35px] h-5 flex items-center justify-center border border-grey-400 rounded">
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
                    Your card will be charged in AED{' '}
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
      <div className="mt-5 py-5 px-4 lg:p-6 border border-grey-200 bg-grey-600 rounded-xl lg:rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="w-[35px] h-5 bg-grey-700 rounded-md flex items-center justify-center">
            <ApplePay />
          </div>
          <p className="text-sm lg:text-base font-semibold text-greyDisabled">
            Coming Soon
          </p>
        </div>
        <div className="-mt-1.5 lg:-mt-2.5">
          <input
            type="radio"
            name="credit-debit-card"
            value="credit-debit-card"
            disabled
            className="invisible payment-radio-btn"
          />
        </div>
      </div>
      <div className="mt-5 py-5 px-4 lg:p-6 border border-grey-200 bg-grey-600 rounded-xl lg:rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="w-[35px] h-5 bg-grey-700 rounded-md flex items-center justify-center">
            <GooglePay />
          </div>
          <p className="text-sm lg:text-base font-semibold text-greyDisabled">
            Coming Soon
          </p>
        </div>
        <div className="-mt-1.5 lg:-mt-2.5">
          <input
            type="radio"
            name="credit-debit-card"
            value="credit-debit-card"
            disabled
            className="invisible payment-radio-btn"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentCardsOption;
