import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Upload from "../Pages/Upload";
import Menu from "../Components/Menu/Menu";
import {HeaderOnly} from "../Components/Layout";

const publicRoutes = [
    {path: "/", component: Home,},
    {path: "product", component: Product, },
    {path: "upload", component: Upload, layout : HeaderOnly },
    {path: "/menu", component: Menu}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };