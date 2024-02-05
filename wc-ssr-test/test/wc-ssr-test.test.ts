import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WcSsrTest } from '../src/WcSsrTest.js';
import '../src/wc-ssr-test.js';

describe.skip('WcSsrTest', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<WcSsrTest>(html`<wc-ssr-test></wc-ssr-test>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
