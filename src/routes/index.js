import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Upload from "../Pages/Upload";
import ProductDetail from "../Pages/ProductDetails";
import {HeaderOnly} from "../Components/Layout";

const publicRoutes = [
    {path: "/", component: Home,},
    {path: "product", component: Product, },
    {path: "upload", component: Upload, layout : HeaderOnly },
    {path: "productdetail", component: ProductDetail }
    
       
   
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };