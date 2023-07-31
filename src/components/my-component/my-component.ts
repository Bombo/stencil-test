import { Component, Prop } from "@stencil/core";
import { format } from "../../utils/utils";
import { ViewCollection } from "./VIewCollection";

@Component({
  tag: "my-component",
  styleUrl: "my-component.scss",
  shadow: true,
})
export class MyComponent {
  @Prop()
  view: "first" | "second" = "first";

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return ViewCollection[this.view](this);
  }
}
