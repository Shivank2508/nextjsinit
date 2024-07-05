"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot_password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav>
        {navLink.map((item) => {
          const isActive = pathname.startsWith(item.href);
          console.log(pathname, "isActive");
          return (
            <Link key={item.name} href={item.href} className={isActive ? "text-success" : "text-danger"}>
              {item.name}
            </Link>
          );
        })}
      </nav>
      <button className="btn btn-primary">Bootstrap Button</button>
      <h1>Auth Layout</h1>
      {children}
    </>
  );
}
