export const mapEdgesToNode = (data: any) =>
  data.edges ? data.edges.map((edge: any) => edge.node) : []

export const getReadTime = (blocks: any) => {
  let readTime = 1
  if (blocks) {
    const text = blocks.reduce((res: string, block: any) => {
      if (block._type === 'block') {
        res += ' ' + block.children.map((child: any) => child.text).join(' ')
      }
      return res
    }, '')
    const wordAmount = text.split(' ').length
    const images = blocks.map((block: any) => block._type === 'figure').length

    readTime = Math.floor(wordAmount / 275 + images * 0.12)
  }

  return readTime > 0 ? readTime : '1'
}

const defaults = { nonTextBehavior: 'remove' }

export const blocksToText = (blocks: any, opts = {}) => {
  const options = Object.assign({}, defaults, opts)
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
