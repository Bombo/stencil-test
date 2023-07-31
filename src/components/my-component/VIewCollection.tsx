import { Host, h } from "@stencil/core";
import { MyComponent } from "./my-component";

function first($: MyComponent) {
  return (
    <Host>
      <div class="test">Hello, World! I'm {$.getText()}</div>
      <span>First</span>
    </Host>
  );
}

function second($: MyComponent) {
  return (
    <Host>
      <div class="test">Hello, World! I'm {$.getText()}</div>
      <span>Second</span>
    </Host>
  );
}

export const ViewCollection = { first, second };