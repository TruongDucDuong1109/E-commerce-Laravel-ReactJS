import Header from "../components/Header/index";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="Container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
