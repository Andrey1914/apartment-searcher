import { h } from "vue";

const Button = h.defineComponent("Btn", {
  render(h) {
    console.log(this.$slots);

    return h("button", this.$slots.default);
  },
});

export default Button;
