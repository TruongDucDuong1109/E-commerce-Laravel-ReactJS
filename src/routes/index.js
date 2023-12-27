import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Upload from "../Pages/Upload";
import AddProduct from "../Pages/Upload/AdminComponentScreen/AddProduct";
import EditProduct from "../Pages/Upload/AdminComponentScreen/Editproduct/Editproduct";
import ProductDetail from "../Pages/ProductDetails";
import {SidebarOnly} from "../Components/Layout";
import {DefaultLayoutBasic} from "../Components/Layout";

const publicRoutes = [
    {path: "/", component: Home, },
    {path: "product", component: Product, },
    {path: "upload", component: Upload, layout : SidebarOnly },
    {path: "addproduct", component: AddProduct, layout : SidebarOnly },
    {path: "editproduct/:id", component: EditProduct, layout : SidebarOnly },
    {path: "productdetail/:id", component: ProductDetail, layout:DefaultLayoutBasic }
    
       
   
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };