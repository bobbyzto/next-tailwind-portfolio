import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/legacy/image";
import Link from "next/link";
import bobby from "../../public/bobby.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import learn from "../../public/learn.png";
import movies from "../../public/we-love-movies.png";
import reservations from "../../public/reservations-app.png";
import recipes from "../../public/recipes-app.png";
import library from "../../public/local-library.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // this hook persists user-selected appearance mode through page reloads
  useEffect(() => {
    const data = window.localStorage.getItem('DARK_MODE_STATE');
    if ( JSON.parse(data) === true ) setDarkMode(JSON.parse(data));
  }, []);
  
  // this hook adds/updates appearance state to browser cache to be read by the above hook
  useEffect(() => {
    window.localStorage.setItem('DARK_MODE_STATE', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Robert C. Weche</title>
        <meta name="description" content="Next.js Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Navigation */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="flex text-xl font-burtons">
              <a
                href="https://www.github.com/bobbyzto"
                title="Visit my GitHub"
                className="flex  dark:text-white hover:text-teal-500 dark:hover:text-teal-500 transform transition duration-500 hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                /bobbyzto
              </a>
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    title="Light Mode"
                    onClick={() => setDarkMode(false)}
                    className="cursor-pointer text-2xl dark:text-gray-100"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    title="Dark Mode"
                    onClick={() => setDarkMode(true)}
                    className="cursor-pointer text-2xl dark:text-gray-100"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/50 text-white px-4 py-2 rounded-md ml-8 hover:bg-fuchsia-600"
                  title="View my Resume"
                  href="/Robert_Weche_Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Home Page */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Robert Weche
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-100">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl  max-w-lg mx-auto dark:text-gray-300">
              Full-stack software engineer providing services for programming
              and UI/UX for your organization&#39;s web app needs. Connect with
              me on LinkedIn down below and let&#39;s work together!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/robertweche/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="hover:text-teal-500 transform transition duration-500 hover:scale-110" />
            </a>
          </div>

          {/* Profile image */}
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={bobby}
              alt={"deved"}
              fill="true"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Services Offered */}
        <section>
          <div className="pt-6">
            <h3 className="text-3xl py-1 dark:text-gray-100">
              My journey to full-stack
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I began learning computer programming near the end of 2021 in{" "}
              <span className="text-teal-500">Python</span> with{" "}
              <span className="text-teal-500">FreeCodeCamp</span> and{" "}
              <span className="text-teal-500">PY4E</span>. I made basic
              automation scripts, web-scrapers, web-crawlers, and interacted
              with APIs. I loved discovering the power of code on my own, but I
              wanted a more immersive learning experience with the aid of
              professional developers.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              In mid-2022, I signed up for the Software Engineering Immersion
              course at <span className="text-teal-500">Thinkful</span>. Over
              the course of 6 months, I learned modern web development using{" "}
              <span className="text-teal-500">HTML5</span>,{" "}
              <span className="text-teal-500">CSS3</span>, client-side
              programming with{" "}
              <span className="text-teal-500">JavaScript ES6</span>,{" "}
              <span className="text-teal-500">ReactJS</span>,{" "}
              <span className="text-teal-500">Bootstrap</span>, and server-side
              programming with <span className="text-teal-500">NodeJS</span>,{" "}
              <span className="text-teal-500">Express.js</span>,{" "}
              <span className="text-teal-500">PostgreSQL</span>, and applied
              best practices along the way by building projects{" "}
              <Link className="hover:text-teal-500" href="#portfolio">
                (see below)
              </Link>
              .
            </p>
          </div>

          {/* Cards */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 transform transition duration-500 hover:scale-110">
              <Image
                src={design}
                width={100}
                height={100}
                alt={"design card"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks I use</h4>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 transform transition duration-500 hover:scale-110">
              <Image
                src={code}
                width={100}
                height={100}
                alt={"code card"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Functional Programs
              </h3>
              <p className="py-2">
                Building web applications with a focus on functionality, code
                readability, and reusability.
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">HTML/CSS</p>
              <p className="text-gray-800 py-1">Python</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 transform transition duration-500 hover:scale-110">
              <Image
                src={learn}
                width={100}
                height={100}
                alt={"learn card"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Continued Education
              </h3>
              <p className="py-2">
                Learning how to code opened a whole new world of technological
                curiosity for me.
              </p>
              <h4 className="py-4 text-teal-600">
                What I study in my free time
              </h4>
              <p className="text-gray-800 py-1">C/C++</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">OpenGL</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              These are a few of the projects I completed during my time at{" "}
              <span className="text-teal-500">Thinkful</span>. Please have a
              look!
            </p>
          </div>

          {/* Project Screencaps */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
              <a
                href="https://github.com/bobbyzto/WeLoveMovies"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={movies}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100&"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
              <a
                href="https://github.com/bobbyzto/starter-restaurant-reservation"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={reservations}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100&"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
              <a
                href="https://github.com/bobbyzto/recipe-book-app"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={recipes}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100&"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
              <a
                href="https://github.com/bobbyzto/local-library-project"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={library}
                  alt=""
                  className="rounded-lg object-cover"
                  width={"100&"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="py-3 text-center">
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a
                href="https://github.com/bobbyzto/"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="transform transition duration-500 hover:scale-105 hover:text-teal-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/robertweche/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="transform transition duration-500 hover:scale-105 hover:text-teal-500" />
              </a>
            </div>
            <p className="text-sm mt-2 opacity-60 dark:text-gray-300">
              &copy; {new Date().getFullYear()} Robert Weche. <br /> Built with
              JavaScript, React, Next.js, and TailwindCSS.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
