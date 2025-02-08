export type TUseLocalStorage<T> = [() => T | undefined, (value: T) => void, () => void]

export function useSessionStorage<T>(key: string): TUseLocalStorage<T> {
  const isBrowser = typeof window !== 'undefined'

  const setItem = (value: T): void => {
    if (isBrowser) {
      try {
        window.sessionStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error))
      }
    }
  }

  const getItem = (): T | undefined => {
    if (!isBrowser) {
      return undefined
    }

    try {
      const item = window.sessionStorage.getItem(key)

      if (item === null) {
        return undefined
      }

      return JSON.parse(item)
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error))
    }
  }

  const removeItem = (): void => {
    if (isBrowser) {
      try {
        window.sessionStorage.removeItem(key)
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error))
      }
    }
  }

  return [getItem, setItem, removeItem]
}
