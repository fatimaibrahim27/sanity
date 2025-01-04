import React from "react";
import Link from "next/link";
import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "@/app/components/icons"; // Keeping all imports

const SocialMedia = () => {
  return (
    // Social Icons
    <nav className="flex gap-2">
      <Link href={"https://www.youtube.com/@Em-Aar?sub_confirmation=1"} target="_blank">
        <Youtube className={`w-6 h-6`} />
      </Link>
      <Link href={"https://www.linkedin.com"} target="_blank">
        <Linkedin className={`w-6 h-6`} />
      </Link>
      <Link href={"https://www.twitter.com"} target="_blank">
        <Twitter className={`w-4 h-4`} fill="light" />
      </Link>
      <Link href={"https://www.facebook.com"} target="_blank">
        <Facebook className={`w-4 h-4`} />
      </Link>
      <Link href={"https://github.com/Em-Aar"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
};

export default SocialMedia;

