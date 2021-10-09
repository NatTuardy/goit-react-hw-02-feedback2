export const hasCountTotal = (obj)=> {
    const total = Object.values(obj).reduce((tot, feed)=> tot+=feed)
      return total
}