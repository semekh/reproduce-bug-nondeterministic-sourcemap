import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

const USE_V1 = process.env.USE_V1 === "1";

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

  moduleFederation: USE_V1 ? { options: options } : null,

  tools: {
    rspack: (config, { appendPlugins }) => {
      if(!USE_V1) {
        appendPlugins([new ModuleFederationPlugin(options)]);
      }
    },
  },
});
