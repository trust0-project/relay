export default {
    branches: [
      'main',
      '+([0-9])?(.{+([0-9]),x}).x',
      { name: 'beta', prerelease: 'rc' } // make a branch 'beta' a pre-release branch as '6.6.0-rc1'
    ],
    plugins: [
      ['@semantic-release/commit-analyzer', { preset: "conventionalcommits" }],
      ['@semantic-release/release-notes-generator', { preset: "conventionalcommits" }],
      ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
      ['@semantic-release/exec', { "prepareCmd": 'npm version ${nextRelease.version} --git-tag-version false'}],
      ['@semantic-release/exec', { "prepareCmd": 'npm run build'}],
      ['@semantic-release/exec', { "prepareCmd": 'npm publish --access public'}],
      ['@semantic-release/exec', { "prepareCmd": 'docker build . -t trust0/relay:v${nextRelease.version} -t trust0/relay:latest'}],
      ['@semantic-release/exec', { "prepareCmd": 'docker push trust0/relay:v${nextRelease.version} && docker push trust0/relay:latest'}],
      [
        '@semantic-release/git',
        {
          assets: [
            'package.json',
            'package-lock.json',
            'CHANGELOG.md',
            'docs/**/*',
          ],
          message: 'chore(release): release ${nextRelease.version}\n\n${nextRelease.notes}',
        },
      ],
    ],
  };
  