import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Upload from "../Pages/Upload";
import {HeaderOnly} from "../Components/Layout";

const publicRoutes = [
    {path: "/", component: Home,},
    {path: "product", component: Product, },
    {path: "upload", component: Upload, layout : HeaderOnly }
    
       
   
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };