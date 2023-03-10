// Storage functions to handle (Read, Save and Delete) session storage status
export const storageSave = (key, value) => {

    if (!key && typeof key !== 'string') {
            throw new Error('storageSave: No storage key provided')
    }

    if (!value) {
        throw new Error('storageSave: No value provided' + key)
}
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
    const data = sessionStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }
    return null
}

export const storageDelete = key => {
    sessionStorage.removeItem(key)
}
