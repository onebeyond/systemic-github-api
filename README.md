# ⚠️ This repository is not longer maintained ⚠️

This project is not longer maintained and has been archived. More details in [One Beyond Governance Tiers](https://onebeyond-maintainers.netlify.app/governance/tiers)

# systemic-github-api
A [systemic](https://github.com/guidesmiths/systemic-github-api) github-api component

## Usage
```js
const System = require('systemic')
const github = require('systemic-github-api')
const config = {
    github: {
        token: 'MY_OAUTH_TOKEN'
    }
}

new System()
    .add('config', config, { scoped: true })
    .add('github', github()).dependsOn('config')
    .start((err, components) => {
        // Do stuff with components.github
    })
```
