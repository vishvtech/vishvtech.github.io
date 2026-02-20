"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RedirectProps {
  code: string;
  phoneMap: Record<string, string>;
}

export default function RedirectClient({ code, phoneMap }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    const number = phoneMap[code.toLowerCase()];
    if (number) {
      window.location.href = `tel:${number}`;
    } else {
      router.push("/");
    }
  }, [code, router, phoneMap]);

  return (
    <div className="flex h-screen items-center justify-center text-center p-4">
      <p className="text-xl">Preparing your phone dialer...</p>
    </div>
  );
}
