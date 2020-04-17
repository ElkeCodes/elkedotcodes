import Overview from "@/Overview.vue";
import { shallowMount } from "@vue/test-utils";

describe("Overview.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Overview);
    expect(wrapper).toBeTruthy();
  });
});
