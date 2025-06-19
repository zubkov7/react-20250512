"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";
  return (
    <div>
      <Link href='/about' prefetch={false}>
        to about
      </Link>
      <button onClick={() => router.push("/about")}>to about</button>
      {!isHomePage && <Link href='/'>to home</Link>}
      <div>home page</div>
    </div>
  );
};

export default Page;
