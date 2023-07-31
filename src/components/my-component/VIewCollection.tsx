import { Host, h } from "@stencil/core";
import { MyComponent } from "./my-component";

export class ViewCollection {
  private constructor() {}
  static first($: MyComponent) {
    return (
      <Host>
        <div class="test">Hello, World! I'm {$.getText()}</div>
        <span>First</span>
      </Host>
    );
  }
  static second($: MyComponent) {
    return (
      <Host>
        <div class="test">Hello, World! I'm {$.getText()}</div>
        <span>Second</span>
      </Host>
    );
  }
}

export function renderView($: MyComponent) {
  return (
    <Host>
      <div class="test">Hello, World! I'm {$.getText()}</div>
      <span>Single</span>
    </Host>
  );
}
