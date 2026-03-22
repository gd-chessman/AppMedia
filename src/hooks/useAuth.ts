import { create } from "zustand"
import { Platform } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface AuthState {
  isAuth: boolean
  isLoading: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

// Hàm kiểm tra user trong storage
const checkUserInStorage = async (): Promise<boolean> => {
  try {
    if (Platform.OS === "web") {
      const user = localStorage.getItem("user")
      if (user) {
        const userData = JSON.parse(user)
        return userData === true || userData === "true"
      }
      return false
    } else {
      const user = await AsyncStorage.getItem("user")
      if (user) {
        const userData = JSON.parse(user)
        return userData === true || userData === "true"
      }
      return false
    }
  } catch (error) {
    console.error("Error checking user:", error)
    return false
  }
}

export const useAuth = create<AuthState>((set) => ({
  isAuth: false, // Default state: not logged in
  isLoading: true, // Loading state khi đang kiểm tra auth
  login: async () => {
    // Lưu user = true vào storage khi login
    try {
      if (Platform.OS === "web") {
        localStorage.setItem("user", JSON.stringify(true))
      } else {
        await AsyncStorage.setItem("user", JSON.stringify(true))
      }
    } catch (error) {
      console.error("Error saving user:", error)
    }
    set({ isAuth: true })
  },
  logout: async () => {
    // Xóa user khỏi storage khi logout
    try {
      if (Platform.OS === "web") {
        localStorage.removeItem("user")
      } else {
        await AsyncStorage.removeItem("user")
      }
    } catch (error) {
      console.error("Error removing user:", error)
    }
    set({ isAuth: false })
  },
  checkAuth: async () => {
    set({ isLoading: true })
    const hasUser = await checkUserInStorage()
    set({ isAuth: hasUser, isLoading: false })
  },
}))

// Tự động kiểm tra auth khi khởi tạo
useAuth.getState().checkAuth()