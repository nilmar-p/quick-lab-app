import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <SideBar />
            </div>
            <div className="col-9">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Layout;
