export const copyInNewObject = (obj) => {
    const newState = {}
    for (let key in obj) {
      newState[key] = obj[key];
    }
    return newState
}
 
