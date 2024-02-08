import { Lock } from '@/icons/Lock';
import { Logo } from '@/icons/Logo';
import { Question } from '@/icons/Question';

const Navbar = () => {
  return (
    <header className="bg-lightGrey">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[72px]">
          <Logo />
          <div className="flex gap-2 items-center font-semibold text-greySecondary">
            <Lock />
            <span>Checkout</span>
          </div>
          <div className="flex gap-2 items-center font-semibold text-greySecondary">
            <Question />
            <span>Help</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
