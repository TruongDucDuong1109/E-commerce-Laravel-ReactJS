import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Upload from "../Pages/Upload";
import Cart from "../Pages/Cart";
import AddProduct from "../Pages/Upload/AdminComponentScreen/AddProduct";
import EditProduct from "../Pages/Upload/AdminComponentScreen/Editproduct/Editproduct";
import ProductDetail from "../Pages/ProductDetails";
import {SidebarOnly} from "../Components/Layout";
import {DefaultLayoutBasic} from "../Components/Layout";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";


const publicRoutes = [
    {path: "/", component: Home, },
    {path: "product", component: Product, },
    {path: "upload", component: Upload, layout : SidebarOnly },
    {path: "addproduct", component: AddProduct, layout : SidebarOnly },
    {path: "editproduct/:id", component: EditProduct, layout : SidebarOnly },
    {path: "productdetail/:id", component: ProductDetail, layout:DefaultLayoutBasic },
    {path: "cart", component: Cart, layout : DefaultLayoutBasic }, 
    {path: "login", component: Login, layout : DefaultLayoutBasic },
    {path: "register", component: Register, layout : DefaultLayoutBasic },

    
       
   
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };