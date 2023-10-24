import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  name,
  image,
  description,
  link,
  github,
  tags,
}: {
  name: string;
  image: string;
  description?: string;
  link?: string;
  github: string;
  tags?: string[];
}) => {
  return (
    <div className="hover:bg-white hover:bg-opacity-10 w-full flex flex-col sm:flex-row rounded-lg">
      <div className="h-28 w-40 flex justify-center items-center flex-shrink-0">
        <div className="h-24 sm:h-16 rounded-md overflow-hidden">
          <Image
            src={image}
            alt="Website"
            sizes="100vh"
            style={{
              width: "auto",
              height: "100%",
            }}
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className="h-full pt-5 pb-5 pr-6 flex-1">
        <div className="text-lg font-monaSans text-stone-200">{name}</div>
        <div className="text-lg font-gillSans text-stone-300 pt-3 pb-3">
          {description}
        </div>
        <div className="flex flex-wrap gap-2 pt-2 ">
          {tags?.map((tag, index) => (
            <div
              key={index}
              className="text-md font-gillSans text-stone-300 bg-white bg-opacity-20 p-1 pl-3 pr-3 rounded-[20px]"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-5 h-7 mt-5">
          {link ? (
            <Link
              href={link}
              target="_blank"
              className="relative h-full opacity-70 hover:opacity-100 transition duration-500"
            >
              <Image
                src="/externalLink.png"
                alt="External Link Icon"
                sizes="100vh"
                style={{
                  width: "auto",
                  height: "100%",
                }}
                width={0}
                height={0}
              />
            </Link>
          ) : null}
          <Link
            href={github}
            target="_blank"
            className="relative h-full opacity-70 hover:opacity-100 transition duration-500"
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
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
