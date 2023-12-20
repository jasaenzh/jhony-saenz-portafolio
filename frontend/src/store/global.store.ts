import axios from "axios";
import { createWithEqualityFn } from "zustand/traditional";

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

interface GlobalStoreInterface {
  count: number,
  menuOpen: boolean,
  isAuthenticated: boolean,
  increment: (value: number) => void,
  setMenuOpen: (value: boolean) => void,
  users: Users[]
  getUsers: () => Promise<void>
  multiply: (value: number) => void,
}

const globalStore = createWithEqualityFn<GlobalStoreInterface>((set, get) => ({
  count: 10,
  menuOpen: false,
  isAuthenticated: false,
  users: [],
  increment: (value: number) => set(state => ({
    count: state.count + value
  })),
  setMenuOpen: (value: boolean) => set({ menuOpen: value }),
  getUsers: async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/users")
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
  }
}))

export { globalStore }