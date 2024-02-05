import { html, css, LitElement } from 'lit';

export class WcSsrTest extends LitElement {
  static styles = css`
    div {
      border: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span {
      color: rebeccapurple;
    }

    p {
      font-family: sans-serif;
    }
  `;

  count = 0;

  name = 'someone';

  static properties = {
    name: {},
    count: { type: Number },
  };

  render() {
    return html`
      <div>
        <h1>Hello, <span>${this.name}</span>!</h1>
        <p>Count: ${this.count}</p>
        <button
          @click=${() => {
            this.count += 1;
          }}
        >
          ++
        </button>
      </div>
    `;
  }
}

customElements.define('wc-ssr-test', WcSsrTest);
