import { LogoLight } from '@/icons/LogoLight';

const Footer = () => {
  return (
    <section className="w-full mt-16 lg:mt-20">
      <div className="bg-black px-5 lg:px-0">
        <div className="container mx-auto pt-20 lg:pt-[120px]">
          <div className="hidden lg:block">
            <LogoLight width={190} height={48} />
          </div>
          <div className="lg:hidden">
            <LogoLight width={127} height={32} />
          </div>
        </div>
        <hr className="border-greyDivider mt-16" />
        <div className="container mx-auto pt-8 pb-10 lg:py-8 flex flex-col-reverse gap-4 lg:flex-row lg:gap-3">
          <p className="text-grey-900 text-xs lg:text-sm font-normal">
            Made with ❤️
          </p>
          <ul className="text-grey-800 flex flex-wrap list-disc gap-3 list-inside text-xs lg:text-sm font-semibold">
            <li className="cursor-pointer hover:text-grey-200 list-none lg:list-disc">
              Privacy policy
            </li>
            <li className="cursor-pointer hover:text-grey-200">
              Terms of usage
            </li>
            <li className="cursor-pointer hover:text-grey-200">
              Cancellation policy
            </li>
            <li className="cursor-pointer hover:text-grey-200">Sitemap</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
