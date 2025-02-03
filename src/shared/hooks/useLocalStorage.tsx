import { toast } from 'react-toastify'

export type TUseLocalStorage<T> = [() => T | undefined, (value: T) => void, () => void]

// author https://github.com/serifcolakel

export function useLocalStorage<T>(key: string): TUseLocalStorage<T> {
  const setItem = (value: T): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      toast.error(error)
    }
  }

  const getItem = (): T | undefined => {
    try {
      const item = window.localStorage.getItem(key)

      if (item === null) {
        return undefined
      }

      return JSON.parse(item)
    } catch (error) {
      toast.error(error)

      return undefined
    }
  }

  const removeItem = (): void => {
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      toast.error(error)
    }
  }

  return [getItem, setItem, removeItem]
}
