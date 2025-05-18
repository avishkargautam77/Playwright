import BasePage from './BasePage'
import { baseUrl } from '../config'
import fs from 'fs'
import {
	loginPageLogo,
	username,
	password,
	loginButton,
	dashboardPage
} from '../PageObjects/login'

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForSelectorVisible(username)
	}

	async loginPageLogo() {
		return await this.isElementVisible(loginPageLogo, "Element Not Visible")
	}

	async usernameFieldVisible() {
		return await this.isElementVisible(username, "Element Not Visible")
	}

	async passwordFieldVisible() {
		return await this.isElementVisible(password, "Element Not Visible")
	}

	async loginButtonIsEnabled() {
		return await this.isElementEnabled(loginButton, "Element Not Visible")
	}



	async loginAsStandardUser() {
		await this.waitAndFill(username, "rahultesting5@yopmail.com")
		await this.waitAndFill(password, "123456")
		await this.waitAndClick(loginButton)
		await this.waitForSelectorVisible(dashboardPage);
	}

}
export default LoginPage