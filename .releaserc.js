module.exports = {
    branches: ['main'],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'conventionalcommits',
          releaseRules: [
            { breaking: true, release: "major" },
            { revert: true, release: "patch" },
            { type: 'feat', release: 'minor' },
            { type: 'fix', release: 'patch' },
            { type: 'perf', release: 'patch' },
            { type: "build", release: "patch" },
            { type: 'refactor', release: 'patch' },
          ],
          parserOpts: {
            headerPattern: /^(:\w+:)?\s?(\w*)(?:\(([^)]+)\))?: (.*)$/,
            headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
            noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
          },
        },
      ],
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
    ],
  };
  