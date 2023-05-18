import axios from 'axios'

export const createUser = (data: object) => {
    return axios.post(`/api/user/`, data)
}
export const getUser = (id: number) => {
    return axios.get(`/api/user/${id}`)
}

export const getUsers = () => {
    return axios.get(`/api/user/`)
}

export const deleteUser = (id: number) => {
    return axios.delete(`/api/user/${id}`)
}

export const updateUsers = (id: number) => {
   return axios.put(`/api/user/${id}`)
}

// groups
export const createGroup = (data: []) => {
    return axios.post(`/api/groups/create`, data)
}
export const getGroupById = (id: string) => {
    return axios.get(`/api/groups/${id}`)
}

export const getGroups = ( props:any) => {
    return axios.get(`/api/groups?${props}`)
}

export const deleteGroup = (id: string) => {
    return axios.delete(`/api/groups/${id}`)
}

export const updateGroup = (id: number, data: [] ) => {
    return axios.put(`/api/groups/${id}`, data)
}