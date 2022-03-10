import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akshay R R</title>
        <meta name="description" content="Akshay R R" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-2xl md:text-5xl font-bold pb-6 text-blue-400 dark:text-blue-400">
                Akshay R R 🖤🚀⚽
              </h1>
              <p className="text-xl pb-4">
                Hey, there! Welcome to my Website 🤟
              </p>
              <p className="text-xl pb-4">
                I am Akshay, a software engineer based from Puducherry, India. A 3rd year student at Puducherry Technology Univeristy, currently pursuing
                Electronics and Communication Engineering.
              </p>
              <p className="text-xl pb-4">
                My experience revolves around developing end-to-end full stack
                applications using JavaScript and Python as my base language.
                I write clean, modular, maintainable, and scalable code, thinking about various edge cases before pushing to production!
              </p>
              <p className="text-xl pb-4">
                I strongly believe in using the right tools/languages for the given task, always ready to upskill myself!
              </p>
              <p className="text-xl pb-4">
                Am an extremely motivated person and constantly want to expose myself to unfamiliar situations, which would help me to grow my technical nuance.
              </p>
              <p className="text-xl pb-4">
                Love to expland my knowledge in software development field, play football, sports in general and spend time with my friends and family.
              </p>
              <p className="text-lg pb-10">
                <Link href="/about">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Tech Stack 🛠
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span className="underline">Languages</span>: JavaScript,
                  TypeScript, Python, C++, HTML5, CSS3{" "}
                </li>
                <li className="my-2">
                  <span className="underline">Frameworks and Libraries</span>:
                  NodeJS, ExpressJS, Mongoose,
                  Django(DRF), ReactJS, NextJS, Axios, Material-UI, TailwindCSS
                </li>
                <li className="my-2">
                  <span className="underline">Tools</span>: Docker, Git (Github and
                  Gitlab), Heroku, Github Desktop,
                </li>
                <li className="my-2">
                  <span className="underline">Database</span>: MongoDB, PostgreSQL
                </li>
              </ul>
              <p className="text-lg pb-10">
                <Link href="/resume">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            {/* <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Recent Tech Talks 🎙
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.youtube.com/watch?v=bFkSf6g1vms&t=1984s"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      PULL REQUEST (Open source Workshop)
                    </a>
                  </span>
                  <span className="font-500"> @GDSC-GHRCE</span>{" "}
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.youtube.com/watch?t=4112&v=v13fju8L-Q8&feature=youtu.be"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      UNBUNDLED: The Future of Frontend Tooling
                    </a>
                  </span>
                  <span className="font-500"> @ReactNativeBLR</span>{" "}
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.youtube.com/watch?v=mp3SIa1H1rI"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Building, testing and Publishing your own React Component
                      Library
                    </a>
                  </span>
                  <span className="font-500"> @ReactJSBangalore</span>{" "}
                </li>
              </ul>
              <p className="text-lg pb-10">
                <Link href="/talks">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Recent Blog Posts 📚
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/top-12-tips-on-how-to-excel-at-your-developer-job"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Top 12 Tips on how to excel 🚀at your developer job!
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/know-how-git-works-behind-the-scenes-aa40567082ba"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Know how Git works: Behind the Scenes!🤯
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/7-open-source-spirits-you-must-know"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      7 Open Source Spirits you must know!
                    </a>
                  </span>
                </li>
              </ul>
              <p className="text-lg pb-10">
                <a
                  className="hover:underline"
                  href="https://sohamsshah.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More...
                </a>
              </p>
            </div> */}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
