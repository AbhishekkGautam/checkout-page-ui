import Banner from '@/components/Banner';
import BookingSummary from '@/components/BookingSummary';
import CheckoutForm from '@/components/CheckoutForm';
import { CloseButton } from '@/icons/CloseButton';

const CheckoutPage = () => {
  return (
    <div className="w-full">
      {/* TODO: Banner - full width */}
      <Banner />
      <div className="container mx-auto px-4 xl:px-0">
        <section className="pt-20 md:flex md:gap-6">
          <div className="w-full md:w-2/3">
            <h1 className="text-[57px] font-medium leading-[64px] pb-7 font-serif">
              Confirm & pay
            </h1>
            {/* TODO: show summary card on mobile view and hide on desktop */}
            <div className="md:hidden">
              <BookingSummary />
            </div>
            {/* free cancellation */}
            <div className="mt-8 rounded-2xl bg-grey-100 border border-grey-200 py-4 pl-5 pr-4 flex justify-between gap-3">
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
            <div className="my-16">
              <CheckoutForm />
            </div>
          </div>
          <div className="hidden md:block">
            <BookingSummary />
          </div>
        </section>
        {/* TODO: Form with 2/3 width */}
        {/* TODO: summary card on the right side */}
      </div>
    </div>
  );
};

export default CheckoutPage;
