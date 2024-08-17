import { Outlet } from "react-router-dom"
import Navbar from "../Componentes/Navbar/Navbar"

export default (() => {
    return <>
        <Navbar />
        <Outlet />
    </>

})