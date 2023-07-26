import { Routes, Route } from "react-router-dom"
import { Card, Home } from "../pages"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/card"  element={<Card/>}/>
        </Routes>
    )
}
