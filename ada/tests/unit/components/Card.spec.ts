import AdaCard from "@/components/Card.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Card.vue", () => {
  it("renders with slot content", () => {
    const msg = "This is a test";
    const wrapper = shallowMount(AdaCard, {
      localVue,
      slots: { default: msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("does not render with wrong slot content", () => {
    const expectedMsg = "This is a test";
    const notExpectedMsg = "This is not a test";
    const wrapper = shallowMount(AdaCard, {
      localVue,
      slots: { default: expectedMsg }
    });
    expect(wrapper.text()).not.toMatch(notExpectedMsg);
  });

  it("renders with slot title", () => {
    const msg = "This is a title";
    const wrapper = shallowMount(AdaCard, {
      localVue,
      slots: { title: msg }
    });
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.get("h2").text()).toMatch(msg);
  });

  it("does not render an empty title", () => {
    const emptyTitle = "";
    const someContent = "Some content"
    const wrapper = shallowMount(AdaCard, {
      localVue,
      slots: { title: emptyTitle, default: someContent }
    });
    expect(wrapper.find("h2").exists()).toBeFalsy();
  });
});
