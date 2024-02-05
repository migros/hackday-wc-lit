"use client";
import { useEffect } from "react";

export const SsrTestClient = ({ ssrData }: { ssrData?: string }) => {
  useEffect(() => {
    import("wc-ssr-test/WcSsrTest.js");
  }, []);

  return (
    <div id="ssr-test-client">
      <h1>MyTest</h1>
      <div
        dangerouslySetInnerHTML={ssrData ? { __html: ssrData } : undefined}
      ></div>
    </div>
  );
};
