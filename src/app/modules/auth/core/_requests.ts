import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/me`
export const LOGIN_URL = `${API_URL}/login`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios
    .post<{data: AuthModel}>(LOGIN_URL, {
      identifier: email,
      password,
    })
    .then((response) => response.data.data) // استخراج البيانات من كائن الاستجابة
}

// This function should be a GET request based on your previous issue with 405 error
export function getUserByToken(token: string) {
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
