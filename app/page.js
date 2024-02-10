import Banner from '@/components/Banner';
import BookingSummary from '@/components/BookingSummary';
import CheckoutForm from '@/components/CheckoutForm';
import FaqContainer from '@/components/FaqContainer';
import { CloseButton } from '@/icons/CloseButton';

const CheckoutPage = () => {
  return (
    <div className="w-full">
      <Banner />
      <div className="container mx-auto max-w-[1200px] px-4 xl:px-0">
        <section className="pt-12 lg:pt-20 lg:flex lg:gap-6">
          <div className="w-full lg:w-2/3">
            <h1 className="text-[32px] lg:text-[57px] font-medium leading-[40px] lg:leading-[64px] pb-5 lg:pb-7 font-robotoserif">
              Confirm & pay
            </h1>
            {/* only visible on mobile screen */}
            <div className="lg:hidden">
              <BookingSummary />
            </div>
            {/* free cancellation card */}
            <div className="mt-6 lg:mt-8 rounded-xl lg:rounded-2xl bg-grey-100 border border-grey-200 py-4 pl-5 pr-4 flex justify-between gap-3">
              <div className="text-sm">
                <h1 className="font-semibold text-greyPrimary mb-1">
                  Free cancellation
                </h1>
                <p className="text-greySecondary font-normal">
                  Tickets can be cancelled by 13th December, 2022.
                </p>
              </div>
              <div className="cursor-pointer">
                <CloseButton />
              </div>
            </div>
            <hr className="mt-6 border-grey-400 lg:hidden" />
            <div className="mt-12 lg:mt-16">
              <CheckoutForm />
            </div>
          </div>
          <div className="hidden lg:block flex-1">
            <BookingSummary />
          </div>
        </section>
        <hr className="mt-8 border-grey-400" />

        <section className="mt-16 lg:mt-20">
          <FaqContainer />
        </section>
        <hr className="mt-7 lg:mt-8 border-grey-400" />
      </div>
    </div>
  );
};

export default CheckoutPage;
