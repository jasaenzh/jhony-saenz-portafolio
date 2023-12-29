import { createWithEqualityFn } from "zustand/traditional";
import { instanceAxios } from "../Axios";
import Cookies from 'js-cookie'

interface Experiences {
  id: string,
  position: string,
  company: string,
  currently: boolean,
  description: string,
  startDate: string,
  endDate: string,
  UserId: string
}

interface Projects {
  id: string,
  projectName: string,
  description: string,
  images: string[],
  urlBackend: string,
  urlFrontend: string,
  UserId: string,
}

interface Skills {
  nameSkill: string,
  description: string
  image: string,
}

export interface Users {
  id: string,
  firstName: string,
  secondName: string,
  lastName: string,
  secondLastName: string,
  birthdate: string,
  aboutMe: string,
  image: string,
  role: string,
  email: string,
  Skills: Skills[],
  Projects: Projects[],
  Experiences: Experiences[]
}

export interface UserLogin {
  email: string,
  password: string
}

export interface UserToken {
  token: string,
  userId: string
}

interface GlobalStoreInterface {
  count: number,
  menuOpen: boolean,
  isAuthenticated: boolean,
  loading: boolean,
  increment: (value: number) => void,
  setMenuOpen: (value: boolean) => void,
  users: Users[]
  userToken: UserToken,
  getUsers: () => Promise<void>
  multiply: (value: number) => void,
  singIn: (user: UserLogin) => void,
  checkLogin: () => void,
}

const globalStore = createWithEqualityFn<GlobalStoreInterface>((set, get) => ({
  count: 10,
  menuOpen: false,
  isAuthenticated: false,
  loading: true,
  users: [],
  userToken: {
    token: "",
    userId: ""
  },
  increment: (value: number) => set(state => ({
    count: state.count + value
  })),
  setMenuOpen: (value: boolean) => set({ menuOpen: value }),
  getUsers: async () => {
    try {
      const res = await instanceAxios.get("/users")
      const users = await res.data
      set(state => ({
        ...state,
        users
      }))
    } catch (error) {
      console.error("Error al obtener usuarios", error);
    }
  },
  multiply: (value: number) => {
    const { count } = get()
    set({ count: count * value })
  },
  singIn: async (userLogin) => {
    try {
      const user = await instanceAxios.post("/auth/login", userLogin)
      const token = user.data.token;
      Cookies.set("token", token);
      set(state => ({
        ...state,
        userToken: { token, userId: user.data.userId },
        isAuthenticated: true,
      }))
    } catch (error) {
      console.log(error);
      return error
    }
  },
  checkLogin: async () => {
    const token = Cookies.get("token");
    if (!token) {
      set(state => ({
        ...state,
        isAuthenticated: false,
        loading: false
      }))
    }

    try {

      const response = await instanceAxios.get("/auth/verifyUser", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!response.data) {
        set(state => ({
          ...state,
          isAuthenticated: false,
          loading: false
        }))
      }

      set(state => ({
        ...state,
        isAuthenticated: true,
        loading: false,
      }))


    } catch (error) {
      console.log(error);
    }
  }
}))

export { globalStore }