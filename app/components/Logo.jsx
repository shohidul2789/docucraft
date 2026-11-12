import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={24}
          style={{ width: "100px", height: "auto" }}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
