import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

const NotFound = lazy(() => import('../components/error/notfound/NotFound'));

const MainRoutes: FC<any> = () => {
    return(
        <Routes>
           <Route path={"/admin/*"} element={<AdminRoutes />}  />
        </Routes>
    )
}

export default MainRoutes