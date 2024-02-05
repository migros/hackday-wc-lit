import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WcSsrTest } from '../src/WcSsrTest.js';
import '../src/wc-ssr-test.js';

describe('WcSsrTest', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<WcSsrTest>(html`<wc-ssr-test></wc-ssr-test>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<WcSsrTest>(html`<wc-ssr-test></wc-ssr-test>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<WcSsrTest>(
      html`<wc-ssr-test header="attribute header"></wc-ssr-test>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<WcSsrTest>(html`<wc-ssr-test></wc-ssr-test>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
