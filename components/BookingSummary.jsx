import {
  Calendar,
  Clock,
  Info,
  LeftArrow,
  Lock,
  PiggyBank,
  PlusIcon,
  RightArrow,
  Ticket,
  Trophy,
  Users,
} from '@/icons';
import Image from 'next/image';

const BookingSummary = () => {
  return (
    <div className="rounded-3xl border border-grey-400">
      <div className="p-4 pb-0 border-b border-grey-400">
        {/* image slider */}
        <div className="w-full h-[178px] lg:h-[198px] relative">
          <Image
            src="/img/slide-image-01.png"
            alt="slider image"
            fill
            className="object-cover rounded-2xl hidden lg:block"
          />
          <Image
            src="/img/slider-image-02.png"
            alt="slider image"
            fill
            className="object-cover rounded-2xl lg:hidden"
          />
          {/* slider indicators */}
          <div className="absolute z-30 flex items-center -translate-x-1/2 gap-[6px] bottom-4 left-1/2">
            <button
              type="button"
              class="w-[6px] h-[6px] rounded-full bg-grey-600 opacity-55"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-grey-600 opacity-55"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-grey-600 opacity-55"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-[28px] h-2 rounded-full bg-grey-100"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-grey-600 opacity-55"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-2 h-2 rounded-full bg-grey-600 opacity-55"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-[6px] h-[6px] rounded-full bg-grey-600 opacity-55"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
          </div>
          {/* slider controls */}
          <button
            type="button"
            className="hidden absolute top-0 start-0 z-30 lg:flex items-center justify-center h-full px-3 cursor-pointer"
          >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-grey-600">
              <LeftArrow />
            </span>
          </button>
          <button
            type="button"
            className="hidden absolute top-0 end-0 z-30 lg:flex items-center justify-center h-full px-3 cursor-pointer"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-grey-600">
              <RightArrow />
            </span>
          </button>
          {/* best seller badge */}
          <div className="absolute top-3 left-3 bg-white flex items-center gap-1 py-1 px-2 rounded">
            <Trophy />
            <span className="text-xs font-semibold leading-5">Bestseller</span>
          </div>
        </div>
        {/* rating */}
        <div className="flex mt-4 gap-1 items-center">
          <Image src="/img/star.png" alt="rating star" width="14" height="14" />
          <p className="text-sm font-semibold text-greyPrimary">
            4.9{' '}
            <span className="text-sm font-normal text-greySecondary">
              (4.5k)
            </span>
          </p>
          <span className="w-1 h-1 rounded-full bg-greySecondary mx-1"></span>
          <p className="text-sm font-normal text-greySecondary">category</p>
        </div>
        <h1 className="font-semibold text-base text-greyPrimary">
          Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
        </h1>
        {/* icons with text */}
        <div className="mt-6 flex flex-col gap-2">
          <div className="flex gap-[10px]">
            <Ticket />
            <p className="font-semibold text-sm pb-2 text-greyPrimary">
              ~ticket type - variant~
            </p>
          </div>
          <div className="flex gap-[10px]">
            <Calendar />
            <div className="">
              <p className="font-semibold text-sm pb-2 text-greyPrimary">
                ~day~, ~month~ ~date~
              </p>
              <p className="pb-2 text-xs text-greySecondary">
                Duration: ~duration~
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <Clock />
            <div className="">
              <p className="font-semibold text-sm pb-2 text-greyPrimary">
                ~time~
              </p>
              <p className="pb-2 text-xs text-greySecondary">
                Operating hours: ~time~ to ~time~
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <Users />
            <p className="font-semibold text-sm pb-2 text-greyPrimary">
              5 guests
            </p>
          </div>
        </div>
        <hr className="border-dashed mt-3 border-grey-400" />
        <div className="mt-4 mb-5 flex justify-between items-center text-greySecondary">
          <p className="text-sm font-semibold underline cursor-pointer">
            View payment summary
          </p>
          <PlusIcon width={16} height={16} className="cursor-pointer" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between pb-2">
          <div className="font-semibold text-lg">Total payable</div>
          <div className="font-semibold text-lg">$XXX</div>
        </div>
        <div className="flex items-center gap-1 w-fit bg-green-secondary py-1 px-2 rounded-full">
          <PiggyBank color="#299764" />
          <p className="text-xs font-semibold text-green-primary">
            You save -price-
          </p>
        </div>
        <div className="flex items-center gap-2 mt-5 mb-4 lg:mb-0">
          <span className="text-xs font-semibold text-greySecondary underline cursor-pointer">
            You will be charged in AED
          </span>
          <Info />
        </div>
        <div className="hidden lg:block mt-8">
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
        <div className="mt-5 mb-4 hidden lg:block">
          <button className="w-full py-4 px-8 flex items-center justify-center gap-3 bg-black hover:bg-greyPrimary text-lg font-semibold text-grey-500 rounded-2xl">
            <Lock color="white" /> Confirm & pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
