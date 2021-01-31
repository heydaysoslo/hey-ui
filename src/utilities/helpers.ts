export const setOverflowHidden = (state: boolean) => {
  document.body.style.overflow = state ? 'hidden' : ''
}

export const random = (min: number, max: number, { float = false } = {}) =>
  float
    ? Math.random() * (max - min) + min
    : Math.floor(Math.random() * (max - min)) + min

export const uniq = (arr: any[]) => [...Array.from(new Set(arr))]

export const removeTrailingSlash = (string: string) => {
  return string.replace(/\/$/, '')
}
