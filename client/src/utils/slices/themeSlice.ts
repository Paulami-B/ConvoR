import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface ThemeState{
  theme: 'light' | 'dark'
  toggleTheme: () => void
}
  
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({
        theme: state.theme=='dark' ? 'light' : 'dark'
      }))
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => localStorage)
    }
  )
)