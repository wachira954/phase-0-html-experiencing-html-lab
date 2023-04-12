import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Html" },
  { skill: "Css" },
  { skill: "TailwindCss" },
  { skill: "JavaScript" },
  { skill: "Reactjs" },
  { skill: "Nextjs" },
  { skill: "Ruby" },
  { skill: "RubyonRails" },
  { skill: "Git" },
  { skill: "Github" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-centre font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to Know Me!
            </h1>
            <p>
              Hi, my name is Alex and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{"self-motivated"}</span>, and
              <span className="font-bold">{"driven"}</span> Software Engineer
              based in Nairobi, Kenya.
            </p>
            <br />
            <p>
              I graduated from Kca University, Nairobi in 2020 with a Diploma in
              Information Technology and later on I joined Moringa School based
              in Nairobi also and graduated in 2022 with a certificate in
              Software Engineering and have been working in the field ever
              since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.From
              reading, playing sports, travelling, I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <br />
          </div>
          <div className="text-centre md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 rounded-full text-sm font-semibold tracking-wide"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div className="md:relative md:w-72 md:h-72 md:ml-4 md:mt-0 mt-8 mx-auto">
              <Image
                src="/public/hero.png"
                alt="laptop"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
