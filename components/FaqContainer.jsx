import { MultiplyIcon, PlusIcon } from '@/icons';
import { PersonOnCall } from '@/images/svg/PersonOnCall';

const FaqContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-7 lg:gap-6 w-full">
      <div className="w-full lg:w-2/5">
        <h1 className="text-xl lg:text-2xl font-semibold text-greyPrimary pb-3 lg:pb-4">
          Frequently asked questions
        </h1>
        <p className="text-sm lg:text-base font-normal text-greySecondary pb-3 lg:pb-4">
          Here are some of our most asked questions.
        </p>
        <div className="mt-8 lg:mr-10 hidden lg:flex justify-between bg-grey-600 rounded-2xl p-6">
          <div>
            <p className="text-lg font-semibold text-greyPrimary">
              Still need help?
              <br />
              We&apos;re here for you.
            </p>
            <button className="mt-5 py-[14px] px-4 text-base font-semibold rounded-xl bg-black text-grey-500">
              Chat with us
            </button>
          </div>
          <PersonOnCall width={144} height={105} />
        </div>
      </div>
      {/* Faqs list */}
      <div className="flex-1 flex flex-col gap-4 lg:gap-6">
        {/* list 1 */}
        <div className="p-4 pr-5 lg:py-6 lg:px-7 border border-grey-300 rounded-2xl bg-white">
          <div className="flex items-center gap-5 lg:gap-6">
            <PlusIcon width={20} height={20} className="cursor-pointer" />
            <h1 className="text-sm lg:text-lg font-semibold text-greyPrimary cursor-pointer">
              What should I do on my first trip to Rome?
            </h1>
          </div>
        </div>
        {/* list 2 */}
        <div className="p-4 pr-5 lg:py-6 lg:px-7 border border-grey-300 rounded-2xl bg-white">
          <div className="flex items-center gap-5 lg:gap-6">
            <MultiplyIcon width={20} height={20} className="cursor-pointer" />
            <h1 className="text-sm lg:text-lg font-semibold text-greyPrimary cursor-pointer">
              What are some hidden gems to see in Rome?
            </h1>
          </div>
          <p className="text-sm lg:text-base font-normal text-greySecondary pl-9 lg:pl-11 pb-6 mt-5">
            Rome is packed with hidden gems. If you love art, don&apos;t miss
            the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
            is a free museum and well worth a quick visit. If you love the
            ancient stuff, don&apos;t miss the Domus Romana at Palazzo
            Valentini, the Domus Aurea, and the Baths of Caracalla. For even
            more hidden gems, take a tour of Trastevere, a fascinating
            neighborhood full of history and ambiance.
          </p>
        </div>
        {/* list 3 */}
        <div className="p-4 pr-5 lg:py-6 lg:px-7 border border-grey-300 rounded-2xl bg-white">
          <div className="flex items-center gap-5 lg:gap-6">
            <PlusIcon width={20} height={20} className="cursor-pointer" />
            <h1 className="text-sm lg:text-lg font-semibold text-greyPrimary cursor-pointer">
              How much time should I spend in Rome?
            </h1>
          </div>
        </div>
        {/* list 4 */}
        <div className="p-4 pr-5 lg:py-6 lg:px-7 border border-grey-300 rounded-2xl bg-white">
          <div className="flex items-center gap-6">
            <PlusIcon width={20} height={20} className="cursor-pointer" />
            <h1 className="text-sm lg:text-lg font-semibold text-greyPrimary cursor-pointer">
              What food is Rome known for?
            </h1>
          </div>
        </div>
        {/* list 5 */}
        <div className="p-4 pr-5 lg:py-6 lg:px-7 border border-grey-300 rounded-2xl bg-white">
          <div className="flex items-center gap-5 lg:gap-6">
            <PlusIcon width={20} height={20} className="cursor-pointer" />
            <h1 className="text-sm lg:text-lg font-semibold text-greyPrimary cursor-pointer">
              What is the best way to get around Rome?
            </h1>
          </div>
        </div>
      </div>
      {/* only mobile screen */}
      <div className="flex lg:hidden justify-between bg-grey-600 rounded-2xl py-6 px-4">
        <div>
          <p className="text-sm font-semibold text-greyPrimary">
            Still need help?
            <br />
            We&apos;re here for you.
          </p>
          <button className="mt-4 p-3 text-sm font-semibold rounded-xl bg-black text-grey-500">
            Chat with us
          </button>
        </div>
        <PersonOnCall width={125} height={80} />
      </div>
    </div>
  );
};

export default FaqContainer;
