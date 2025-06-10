"use client";
import { useEffect, useState } from "react";
import RocketLoader from "./RocketLoader";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <RocketLoader />}
      {!loading && children}
    </>
  );
} 