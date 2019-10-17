import React from 'react';

export default {
  title: 'Welcome',
};

export const baseCss = () => (
  <div>
    <h1>Base CSS</h1>
    <p>This library is based on <a href="https://every-layout.dev">every-layout.dev</a>, and its layouts have CSS variables as default values.</p>
    <p>For example, here's the CSS file used in this Storybook</p>
    <pre>
{`:root {
  --borderThin: 2px;
  --measure: 70ch;
  --ratio: 1.5;
  --s-5: calc(var(--s-4) / var(--ratio));
  --s-4: calc(var(--s-3) / var(--ratio));
  --s-3: calc(var(--s-2) / var(--ratio));
  --s-2: calc(var(--s-1) / var(--ratio));
  --s-1: calc(var(--s0) / var(--ratio));
  --s0: 1em;
  --s1: calc(var(--s0) * var(--ratio));
  --s2: calc(var(--s1) * var(--ratio));
  --s3: calc(var(--s2) * var(--ratio));
  --s4: calc(var(--s3) * var(--ratio));
  --s5: calc(var(--s4) * var(--ratio));

  color: #02091A;
}

* {
  box-sizing: border-box;
}

a {
  color: #177366;
}

/* Common Classes */
.measure-section {
  max-width: var(--measure);
  padding-left: var(--s2);
  padding-right: var(--s2);
}

.font-piek {
  font-family: "Piek";
  font-size: 0.8em;
}`}
    </pre>
  </div>
);
