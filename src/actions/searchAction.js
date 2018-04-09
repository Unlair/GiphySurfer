export default function setTerm (searchTerm) {
    return {
        type: 'SET_TERM',
        payload: searchTerm
    }
}
