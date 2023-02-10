export const tokenExists = () => {
    return localStorage.getItem('token') !== null;
}
