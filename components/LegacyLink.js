// components/LegacyLink.js
import Link from "next/link";

export default function LegacyLink({ href, children, ...props }) {
  return (
    <Link href={href} legacyBehavior>
      <span {...props}>{children}</span>
    </Link>
  );
}
