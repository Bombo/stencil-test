import { Host, h } from '@stencil/core';
import { MyComponent } from './my-component';

export default function ($: MyComponent) {
  return (
    <Host>
      <div class="test">Hello, World! I'm {$.getText()}</div>
    </Host>
  );
}
