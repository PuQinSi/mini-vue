import { h, ref } from "../../lib/guide-mini-vue.esm.js";

export const App = {
    name: "App",
    setup() {
        const count = ref(0);
        function onClick() {
            count.value++;
            console.log(count);
        }

        return {
            count,
            onClick,
        };
    },
    render() {
        return h("div", {}, [
            h("div", {}, `count: ${this.count}`),
            h("button", { onClick: this.onClick }, "点击"),
        ]);
    },
};
