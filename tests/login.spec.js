import test from '../TestFixtures/fixtures'
import { expect } from '@playwright/test'

test("verifyLogin",async ({loginPage}) => {
    await test.step(`Open the APP and check logo`, async () => {
				await loginPage.openApp()
			})

			await test.step(
				`Verify username and password fields are visible on login page`,
				async () => {
					await loginPage.usernameFieldVisible()
					await loginPage.passwordFieldVisible()
				}
			)

			await test.step(
				`Verify Login button is enabled and bot image is visible`,
				async () => {
					await loginPage.loginButtonIsEnabled()
				}
			)

			await test.step(`Login as a Standard user`, async () => {
				await loginPage.loginAsStandardUser()
			})

})