import React from "react";
import Experience from "./Experience";

export default function App() {
  return (
    <>
      <div className="h-screen relative w-full flex justify-center items-center z-10">
        <div className="m-12">
          <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center underline-offset-4">
            <img
              alt="Maite Croons"
              loading="lazy"
              width="20"
              height="20"
              className="ml-2"
              src={"/mc.png"}
            />
            <h1 className="text-8xl font-bold">Maite Croons</h1>
            <h2 className="text-4xl font-semibold">
              Passionate and forward-thinking product design student
            </h2>
            <h3 className="text-md">
              Constantly{" "}
              <span className="font-semibold underline">
                pushing the boundaries
              </span>{" "}
              to{" "}
              <span className="font-semibold underline">
                redefine the lifecycle of creations
              </span>
              . With a strong{" "}
              <span className="font-semibold underline">
                focus on innovation and sustainability
              </span>
              , I am dedicated to{" "}
              <span className="font-semibold underline">
                finding innovative solutions{" "}
              </span>{" "}
              within the{" "}
              <span className="font-semibold underline">circular economy</span>.
            </h3>
            <div>
              <a
                href="mailto:contact@maitecroons.com"
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full antialiased">
        <img
          alt="test"
          src={"/steps.png"}
          className="w-full"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
      <div style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen ">
          <Experience />
        </div>
      </div>
      <div className="flex flex-col gap-8 p-24">
        {[...Array(5)].map((_, i) => (
          <h1 className="text-3xl font-bold">Maite Croons Project {i + 1}</h1>
        ))}
      </div>
    </>
  );
}
