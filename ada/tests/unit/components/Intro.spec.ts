import AdaIntro from "@/components/Intro.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Intro.vue", () => {
  it("renders with slot content", () => {
    const msg = "This is a test";
    const wrapper = shallowMount(AdaIntro, {
      localVue,
      slots: { default: msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("does not render with wrong slot content", () => {
    const expectedMsg = "This is a test";
    const notExpectedMsg = "This is not a test";
    const wrapper = shallowMount(AdaIntro, {
      localVue,
      slots: { default: expectedMsg }
    });
    expect(wrapper.text()).not.toMatch(notExpectedMsg);
  });
});
