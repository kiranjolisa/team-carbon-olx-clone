export const loadData = (key) => {
    try {
        let value = localStorage.getItem(key)
        return JSON.parse(value)
    }
    catch(err) {
        return null
    }
}

export const saveData = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value))
}