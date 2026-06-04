import { describe, it, expect } from 'vitest'
import App from '../app/app.vue'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

await setup({
  server: true,
})

describe('home page', () => {
  it('renders', async () => {
    const html = await $fetch('/')

    expect(html).toContain('CI/CD Demo')
  })
})