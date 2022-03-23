import { getRequest } from './publicApiService'
import {isLogin} from './isUserLogged'

const getUsers = async () => {
	try {
		const response = await getRequest('/users')
		return response.data.data
	} catch (error) {
		console.log(error)
	}
}

function getRole() {
	getUsers().then((response) => {
		const user = response.filter((user) => {
			if (user.email === localStorage.getItem('email')) {
				localStorage.setItem('role', user.role_id)
			}
		return 
		})
	})
}

export default function isUserAdmin() {
	if (isLogin() && !localStorage.getItem('role')) {
		getRole()
		if (localStorage.getItem('role') === '1') {
			return true
		} else {
			return false
		}
	}
}

