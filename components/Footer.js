import Link from "next/link";
import NowPlaying from "@/components/NowPlaying";
import { FaLinkedin } from "react-icons/fa";
import LegacyLink from "@/LegacyLink";

const ExternalLink = ({ href, children }) => (
  <span
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </span>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <NowPlaying />
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <LegacyLink href="/">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Home
            </span>
          </LegacyLink>
          <LegacyLink href="/blog">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Blog
            </span>
          </LegacyLink>
          <LegacyLink href="/dashboard">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </span>
          </LegacyLink>
          <LegacyLink href="/projects">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </span>
          </LegacyLink>
          <LegacyLink href="/links">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Links
            </span>
          </LegacyLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/rtom03">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/tomiwa-raheem-98b19a398/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://www.upwork.com/freelancers/~01b34de894dd66e2f3">
            Upwork
          </ExternalLink>
          <ExternalLink href="https://instagram.com/maninthere">
            Instagram
          </ExternalLink>
          <LegacyLink href="/freelance">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Freelancing
            </span>
          </LegacyLink>
        </div>
        <div className="flex flex-col space-y-4">
          <LegacyLink href="/snippets">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </span>
          </LegacyLink>
          <LegacyLink href="/tweets">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </span>
          </LegacyLink>
          <LegacyLink href="/resources">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Resources
            </span>
          </LegacyLink>
          <LegacyLink href="/demos">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Live Demos
            </span>
          </LegacyLink>
          <LegacyLink href="/freecodecamp">
            <span className="text-gray-500 hover:text-gray-600 transition">
              freeCodeCamp
            </span>
          </LegacyLink>
          <LegacyLink href="/boxshadows">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Box Shadows
            </span>
          </LegacyLink>
          <LegacyLink href="/design-inspiration">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Design Inspiration
            </span>
          </LegacyLink>
        </div>
      </div>
      <p className="flex flex-row text-gray-400 items-center gap-2">
        Find me on
        <span
          href="https://www.linkedin.com/in/tomiwa-raheem-98b19a398/"
          target="__blank"
        >
          {/* <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" /> */}
          <FaLinkedin />
        </span>{" "}
      </p>
      <p className="flex flex-row text-gray-400 items-center mt-2">
        Portfolio inspired by{" "}
        <span
          href="https://www.linkedin.com/in/tomiwa-raheem-98b19a398/"
          className="ml-1"
          target="__blank"
        >
          rtom
        </span>
      </p>
    </footer>
  );
}
