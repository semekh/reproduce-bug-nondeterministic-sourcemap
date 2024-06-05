import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

const options = {
  name: "federation_provider",
  exposes: {
    "./button": "./src/Button.ts",
  },
};

export default defineConfig({
  server: {
    port: 3000,
  },
  output: {
    sourceMap: {
      js: "source-map",
    },
  },

  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      // config.output!.uniqueName = "federation_provider";
      appendPlugins([new ModuleFederationPlugin(options)]);
    },
  },
});
