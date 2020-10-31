
export default({path, children}) => {
    return window.location.pathname === path
    ? children
    : null;
}

