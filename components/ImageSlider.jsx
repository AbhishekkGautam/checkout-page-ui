import { LeftArrow, RightArrow, Trophy } from '@/icons';
import Image from 'next/image';

const ImageSlider = () => {
  return (
    <div className="w-full h-[178px] lg:h-[198px] relative rounded-xl lg:rounded-2xl box-shadow-image overflow-hidden">
      <Image
        src="/img/slide-image-01.png"
        alt="slider image"
        fill
        priority
        className="object-cover hidden lg:block"
      />
      <Image
        src="/img/slider-image-02.png"
        alt="slider image"
        fill
        priority
        className="object-cover lg:hidden"
      />
      {/* slider indicators */}
      <div className="absolute z-30 flex items-center -translate-x-1/2 gap-[6px] bottom-4 left-1/2">
        <button className="w-[6px] h-[6px] rounded-full bg-grey-600 opacity-55"></button>
        <button className="w-2 h-2 rounded-full bg-grey-600 opacity-55"></button>
        <button className="w-2 h-2 rounded-full bg-grey-600 opacity-55"></button>
        <button className="w-[28px] h-2 rounded-full bg-grey-100"></button>
        <button className="w-2 h-2 rounded-full bg-grey-600 opacity-55"></button>
        <button className="w-2 h-2 rounded-full bg-grey-600 opacity-55"></button>
        <button className="w-[6px] h-[6px] rounded-full bg-grey-600 opacity-55"></button>
      </div>
      {/* slider controls */}
      <button className="hidden absolute top-0 start-0 z-30 lg:flex items-center justify-center h-full px-3 cursor-default">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-grey-600 cursor-pointer">
          <LeftArrow />
        </span>
      </button>
      <button className="hidden absolute top-0 end-0 z-30 lg:flex items-center justify-center h-full px-3 cursor-default">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-grey-600 cursor-pointer">
          <RightArrow />
        </span>
      </button>
      {/* best seller badge */}
      <div className="absolute top-3 left-3 bg-white flex items-center gap-1 py-1 px-2 rounded">
        <Trophy />
        <span className="text-xs font-semibold leading-5">Bestseller</span>
      </div>
    </div>
  );
};

export default ImageSlider;
