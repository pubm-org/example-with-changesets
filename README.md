# example-with-changesets

pubm example: monorepo using the full changeset workflow (add → version → publish).

## Configuration

See [pubm.config.ts](./pubm.config.ts) for the configuration. Key setting: `versionSources: "changesets"`.

## Workflow

1. Create a changeset: `pubm changesets add`
2. Consume changesets and bump versions: `pubm --mode ci --phase prepare`
3. Publish: `pubm --mode ci --phase publish`
