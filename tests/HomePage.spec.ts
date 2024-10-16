import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import Product from '../src/views/Product.vue'

test('renders name and the counter', async () => {
  const { getByText, getByRole } = render(Product, {
    props: { name: 'Vitest' },
  })

  await expect.element(getByText('this is product page')).toBeInTheDocument()

  //await getByRole('button', { name: 'Increment' }).click()

  //await expect.element(getByText('Hello Vitest x2!')).toBeInTheDocument()
})