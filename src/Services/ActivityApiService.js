import {
	privateGET,
	privatePOST,
	privateDelete,
	privatePUT,
} from './privateApiService'

const endPointGet = process.env.REACT_APP_API_GET_ACTIVITIES
const endPointGetID = process.env.REACT_APP_API_GET_ACTIVITIES_ID
const endPointPost = process.env.REACT_APP_API_POST_ACTIVITIES
const endPointDelete = process.env.REACT_APP_API__DELETE_ACTIVITIE
const endPointPut = process.env.REACT_APP_API_PUT_ACTIVITIES

export const getActivities = async () => {
	return await privateGET(endPointGet)
}

export const getActivitiesId = async (id) => {
	return await privateGET(endPointGetID, id)
}

export const postActivities = async (data) => {
	return await privatePOST(endPointPost, data)
}

export const deleteActivities = async (id) => {
	return await privateDelete(endPointDelete, id)
}

export const updateActivities = async (id, data) => {
	return await privatePUT(endPointPut, id, data)
}