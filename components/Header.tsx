import Image from "next/image";
import Link from "next/link";

import logoImage from "@/public/favicon_io/apple-touch-icon.png";

const Header = () => {
  return (
    <div className="flex flex-col pl-10 pr-10 pt-10 w-full lg:w-99 h-[600px] lg:h-screen sticky top-0 flex-shrink-0 ">
      {/* INFO */}
      <div className="w-full ">
        <div className="flex justify-center w-full pt-20 pb-20">
          <Image src={logoImage} alt="logo" width={100} height={100} />
        </div>
        <div className="text-white text-5xl font-notoSans font-bold pb-5">
          Nicolas U. Guasca
        </div>
        <div className="text-white text-xl font-notoSans pb-5">
          I'm a software developer
        </div>
        <div className="flex  items-center gap-5 h-16">
          <Link
            href="https://github.com/nicou08"
            target="_blank"
            className="relative h-7 opacity-70 hover:opacity-100 transition duration-500"
          >
            <Image
              src="/GithubLogo.png"
              alt="Github Logo"
              sizes="100vh"
              style={{
                width: "auto",
                height: "100%",
              }}
              width={0}
              height={0}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nicolas-urrego-guasca-52685a158/"
            target="_blank"
            className="relative h-7 opacity-70 hover:opacity-100 transition duration-500"
          >
            <Image
              src="/Linked-2.png"
              alt="LinkedIn Logo"
              sizes="100vh"
              style={{
                width: "auto",
                height: "100%",
              }}
              width={0}
              height={0}
            />
          </Link>
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="flex justify-center items-center h-10 w-32 rounded-[30px] bg-white bg-opacity-20 hover:bg-opacity-40"
        >
          <div className="text-xl text-white font-notoSans">RESUME</div>
        </Link>
      </div>
      {/* NAV BAR */}
      <nav className=" pt-20">
        <ul className="space-y-3">
          <li>
            <Link href="#about" className="text-xl text-white font-gillSans">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-xl text-white font-gillSans">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-xl text-white font-gillSans">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
