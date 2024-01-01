import HeaderBasic from "../components/HeaderBasic/index";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function DefaultLayoutBasic({ children }) {
  return (
    <div>
      <HeaderBasic />
      <div className="Container">
        <Sidebar />
        <div className="content" >{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayoutBasic;
