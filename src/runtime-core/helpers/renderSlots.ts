import { createVNode } from "../vnode";

export function renderSlots(slots: any, name: string) {
    const slot = slots[name];
    if (slot) {
        return createVNode("div", {}, slot);
    }
}
