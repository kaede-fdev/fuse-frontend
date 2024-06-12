import type { Metadata } from "next";

import SignUpModule from "@/components/modules/SignUpModule";

export const metadata: Metadata = {
  title: "fuse - Đăng ký",
  description: "Generated by create next app",
  icons: "/fuse.svg",
};

export default function SignUpPage() {
  return <SignUpModule />;
}
