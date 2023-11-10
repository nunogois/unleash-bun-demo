import { initialize } from 'unleash-client'

const TOGGLE = 'unleash-bun-demo'

const unleash = initialize({
  url: 'http://localhost:4242/api',
  appName: 'unleash-bun-demo',
  customHeaders: {
    Authorization:
      '*:development.631e546e31c78428dfe25f65c3a811a930fe2b8670cb7e6d40a17bc2'
  }
})

const checkToggles = () => {
  const enabled = unleash.isEnabled(TOGGLE)
  const variant = unleash.getVariant(TOGGLE)
  console.log(TOGGLE)
  console.log('isEnabled', enabled)
  console.log('getVariant', variant)
  setInterval(checkToggles, 5000)
}

unleash.on('ready', checkToggles)
