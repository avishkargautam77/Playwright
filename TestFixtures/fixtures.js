import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/LoginPage'

const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	}
})
export default test