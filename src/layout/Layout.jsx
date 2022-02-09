import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <h1>Desde Layout.jsx</h1>
            <Outlet />
        </>
    )
}
export default Layout;