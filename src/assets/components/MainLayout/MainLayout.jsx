import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <section className="flex justify-between shadow-md px-10 py-7 ">
                <div>
                    <h1 className="text-xl font-bold">Amajoh</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/dashbord">Dashbord</Link></li>
                    </ul>
                </nav>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;