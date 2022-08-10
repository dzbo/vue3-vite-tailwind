import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import App from '../app.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Index, meta: { title: 'Home' } }],
})

test('can render route meta title', async () => {
  render(App, { global: { plugins: [router] } })

  expect(await screen.findByText('Home'))
})
