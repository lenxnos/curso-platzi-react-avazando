import { useState } from 'react'

export function useLocalStorage (key, initalValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initalValue
    } catch {
      return initalValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (e) {
      console.log(e)
    }
  }

  return [storedValue, setLocalStorage]
}
