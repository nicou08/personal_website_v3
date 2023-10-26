"use client";

import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

type HeaderProps = {
  aboutRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
  activeSection: string | null;
};

const Header = ({
  aboutRef,
  projectsRef,
  contactRef,
  activeSection,
}: HeaderProps) => {
  //const [hoverSection, setHoverSection] = useState<string | null>(null);

  // const handleClick =
  //   (ref: RefObject<HTMLElement>) => (e: React.MouseEvent) => {
  //     e.preventDefault();
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  return (
    <div className="bg-stone-800 bg-opacity-20 flex flex-col pl-5 pr-5 md:pl-10 md:pr-10 pt-0 md:pt-10 pb-20 lg:pb-0 w-full xl:w-99 xl:h-screen xl:sticky top-0 shrink-0 ">
      {/* INFO */}
      <div className="w-full ">
        <div className="flex justify-center w-full pt-20 pb-20">
          <Image
            src="/self_image_2.jpg"
            width={352}
            height={352}
            alt="Self Image"
            className="selfImage rounded-lg transform hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300"
          />
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
      <nav className=" pt-20 hidden xl:block">
        <ul className="space-y-3">
          <li className="flex">
            <a
              href="#about"
              className={`text-xl font-gillSans ${
                activeSection === "about" ? "text-white" : "text-zinc-400 "
              }`}
            >
              ABOUT
            </a>
          </li>
          <li className="flex">
            <a
              href="#projects"
              className={`text-xl font-gillSans ${
                activeSection === "projects" ? "text-white" : "text-zinc-400 "
              }`}
            >
              PROJECTS
            </a>
          </li>
          <li className="flex">
            {/* {activeSection === "contact" ? (
              <div>
                <div className="flex items-center h-full w-12 pr-4">
                  <div className="h-[2px] w-full bg-white rounded-full -mt-1"></div>
                </div>{" "}
              </div>
            ) : (
              <></>
            )} */}
            <a
              href="#contact"
              className={`text-xl font-gillSans ${
                activeSection === "contact" ? "text-white" : "text-zinc-400 "
              }`}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
