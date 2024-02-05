import { render, html, collectResult } from "wc-ssr-test";
import "wc-ssr-test/WcSsrTest.js";
import { SsrTestClient } from ".";

export const SsrTestServer = async () => {
  const name = "wc-ssr-test";
  const template = html`<wc-ssr-test name=${name}>${name}</wc-ssr-test>`;
  const out = await collectResult(
    render(template)
  );
  return (
    <div>
      <h1>SSR Test</h1>
      <div dangerouslySetInnerHTML={{ __html: out }}></div>
      <SsrTestClient />
    </div>
  );
};
