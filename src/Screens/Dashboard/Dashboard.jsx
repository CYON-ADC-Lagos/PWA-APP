"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function DashboardGuard({ children }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let token = null;
    try {
      const raw = window.localStorage.getItem("user");
      token = raw ? JSON.parse(raw)?.token || null : null;
    } catch (_) {
      token = null;
    }
    if (!token) {
      router.replace("/admin");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) return null;
  return <>{children}</>;
}

export default DashboardGuard;
