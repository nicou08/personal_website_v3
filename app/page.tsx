import Image from "next/image";
import ProjectItem from "@/components/ProjectItem";

export default function Home() {
  return (
    <main>
      <div className="w-full lg:w-[800px] flex-shrink-1 bg-stone-800 bg-opacity-20">
        <div className=" w-full p-20 pb-16">
          <div className="text-stone-100 text-2xl font-gillSans ">ABOUT ME</div>
          <div className="text-stone-300 text-xl font-gillSans pt-14">
            Hi! My name is Nicolas and I'm a graduate from the University of
            Calgary with a degree in Computer Science.
            <br /> <br />
            In my university years, I learned many fields in computer science
            and worked on many projects. I gained interest in the topics of
            networks, databases, human-computer interactions, and software
            engineering.
            <br /> <br />I am fascinated by the challenges of designing and
            implementing efficient and user-friendly systems, and I believe
            these areas offer exciting opportunities for innovation and impact.
            <br /> <br />
            In my leisure time, I like to workout and spend time with my pet
            guinea pig whose name is Greg.
          </div>
        </div>
        <div className=" w-full pt-14 p-20">
          <div className="text-stone-100 text-2xl font-gillSans">PROJECTS</div>
          <div className="flex flex-col w-full gap-4 pt-14">
            <ProjectItem
              name="X-Bird Imitation"
              image="/XBirdPic.png"
              description="This is a X/Twitter Clone with a response mobile design. You can post Tweets/Posts, like posts, comment on posts, and follow other users."
              tags={[
                "Next.js",
                "TypeScript",
                "TailwindCSS",
                "Prisma",
                "MongoDB",
              ]}
              link="https://x-bird-im.vercel.app/"
              github="https://github.com/nicou08/xBird_Imitation"
            />
            <ProjectItem
              name="Pet Information Website"
              image="/PetPic.png"
              description="Developed a full stack and currently the website is deployed on Vercel. The purpose of the website is to inform users about basic information about some common and exotic pets."
              tags={["Next.js", "TypeScript", "TailwindCSS", "MongoDB"]}
              link="https://pet-app-theta.vercel.app/"
              github="https://github.com/nicou08/xBird_Imitation"
            />
            <ProjectItem
              name="Questionnare Website"
              image="/QuestPic.png"
              description="Develped a website that allowed an administrator to set-up a questionnaire in a specific topic and analyze the results witht the following technologies: ASP.NET Core MVC, Microsoft SQL Server on Azure, and Google Pie Charts."
              tags={["ASP.NET", "C#", "Google Analytics"]}
              github="https://github.com/nicou08/xBird_Imitation"
            />
            <ProjectItem
              name="Ordering and Reservation Mobile App UI/UX"
              image="/OrdinePic.png"
              description="Created the UI of a mobile app idea named 'Ordine'. The app allows users to make resarvations and pre-order food at restaurants. Created various prototypes using technologies such as Figma."
              link="https://cloudyyoung.github.io/ordine-ui-ux/"
              tags={["Figma"]}
              github="https://github.com/nicou08/xBird_Imitation"
            />
            <ProjectItem
              name="Stadium Management System"
              image="/StadiumPic.png"
              description="Developed a RESTful API of a stadium management system using the following techonlogies: Node.js, Express.js, Microsoft SQL Server hosted on AWS, and Postman."
              tags={["Express.js", "Node.js"]}
              github="https://github.com/nicou08/xBird_Imitation"
            />
          </div>
        </div>
        <div className=" w-full pt-14 p-20 h-[900px] ">
          <div className="text-stone-100 text-2xl font-gillSans ">CONTACT</div>
          <div className="flex flex-col justify-center items-center h-full -mt-10">
            <div className="text-stone-100 text-lg font-gillSans ">
              Feel free to get in contact with me at:
            </div>
            <div className="flex flex-row h-7 gap-5 mt-10">
              <Image
                src="/mailPic.png"
                alt="Email Pic"
                sizes="100vh"
                style={{
                  width: "auto",
                  height: "100%",
                }}
                width={0}
                height={0}
              />
              <div className="text-stone-100 text-2xl font-gillSans hover:text-red-300 cursor-pointer">
                nicolasuguasca@outlook.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
