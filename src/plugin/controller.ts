// clear console on reload
console.clear();

const pluginFrameSize = {
  width: 340,
  height: 300,
};

figma.showUI(__html__, pluginFrameSize);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "update-settings") {
    console.log("set storage", msg.settings);
  }
};
