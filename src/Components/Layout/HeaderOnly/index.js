import Header from "../components/Header/index";


function DefaultLayout({ children }) {
  return (
    <div>
    <Header />
    <div className="Container">
      <div className="content">{children}</div>
    </div>
  </div>
  );
}

export default DefaultLayout;
