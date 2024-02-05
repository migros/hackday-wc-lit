"use client";
import { useEffect } from "react";

export const SsrTestClient = () => {
  useEffect(() => {
    import("wc-ssr-test/WcSsrTest.js");
  }, []);
  
  return (<></>);
};
