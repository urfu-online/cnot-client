import React, { createContext, useReducer } from 'react'
import { userReducer } from './userReducer'
import { REMOVE_USER, SET_LOADING, SET_USER } from './types'
import axios from 'axios'

interface User {
  name: string
  year_of_birth: number
  mailing_address: string
  city: string
  goals: string
  allow_certificate: boolean
  bio: string | null
  phone_number: string | number | null
  user: {
    username: string
    email: string
    is_staff: boolean
    is_active: boolean
    is_superuser: boolean
  }
  has_profile_image: boolean
  age: number
  level_of_education_display: string
  gender_display: string
  country: string | null
}

interface UserStateProps {
  children: JSX.Element | JSX.Element[]
}
export interface IState {
  user: User | null
  loading: boolean
}

interface IContext {
  state: IState
  checkUser: () => void
}

export const UserContext = createContext({} as IContext)

export const UserState = ({ children }: UserStateProps): JSX.Element => {
  const initialState: IState = {
    user: null,
    loading: false,
  }
  const [state, dispatch] = useReducer(userReducer, initialState)
  const apiUrl = 'https://courses.urfu.online/cnot/api/me'

  const checkUser = async () => {
    setLoading()
    axios
      .get(apiUrl, { withCredentials: true })
      .then((resp) => {
        const user: User = resp.data
        setUser(user)
        console.log(user)
        setLoading()
      })
      .catch((error) => {
        if (error.response.status === 401) {
          removeUser()
        }
      })
  }

  const setUser = (user: User) =>
    dispatch({
      type: SET_USER,
      payload: user,
    })
  const removeUser = () => dispatch({ type: REMOVE_USER })
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <UserContext.Provider value={{ state, checkUser: checkUser }}>{children}</UserContext.Provider>
}
