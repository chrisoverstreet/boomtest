import { SSTConfig } from "sst";
import { SiteStack } from "./stacks/site-stack";

export default {
  config(_input) {
    return {
      name: "boomtest",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(SiteStack);
  }
} satisfies SSTConfig;
