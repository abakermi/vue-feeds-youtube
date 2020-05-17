import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import VFeedYoutube from "@/components/VFeedYoutube.vue";

describe("VFeedYoutube.vue", () => {
  it("render videos feed", async () => {
    const ChannelUrl =
      "https://www.youtube.com/feeds/videos.xml?channel_id=UC3SdeibuuvF-ganJesKyDVQ";
    const wrapper = shallowMount(VFeedYoutube, {
      propsData: { ChannelUrl }
    });
   
    expect(wrapper.find("#videogroup").exists()).to.be.true;
  });
});
