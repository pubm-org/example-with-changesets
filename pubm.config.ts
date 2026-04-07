import { defineConfig } from "@pubm/core";

export default defineConfig({
  versioning: "independent",
  versionSources: "changesets",
  packages: [
    { path: "packages/core", registries: ["npm"] },
    { path: "packages/utils", registries: ["npm"] },
  ],
  branch: "main",
});
