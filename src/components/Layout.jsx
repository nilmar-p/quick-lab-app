import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";
import FooterContent from "./FooterContent";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <div class="container text-center">
          <div class="row">
            <div class="col-3">
              <SideBar />
            </div>
            <div className="col-9">
              <Outlet />
              <FooterContent />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Layout;
