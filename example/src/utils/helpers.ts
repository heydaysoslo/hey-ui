export const setOverflowHidden = (state: boolean) => {
  document.body.style.overflow = state ? 'hidden' : ''
  // document.querySelector('html').style.overflow = state ? 'hidden' : ''
}

export const random = (min: number, max: number, { float = false } = {}) =>
  float
    ? Math.random() * (max - min) + min
    : Math.floor(Math.random() * (max - min)) + min

// @ts-ignore
export const uniq: (arr: any[]) => any[] = (arr) => [...new Set(arr)]

export const removeTrailingSlash = (string: string) => {
  return string.replace(/\/$/, '')
}

export const toPlainText = (blocks: any, opts = {}) => {
  const options = Object.assign({}, { nonTextBehavior: 'remove' }, opts)
  return blocks
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`
      }

      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')
}
