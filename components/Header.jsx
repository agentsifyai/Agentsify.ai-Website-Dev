import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={48}
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
