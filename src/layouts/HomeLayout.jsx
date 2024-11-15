import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layoutComponent/LeftNavbar";
import RightNavbar from "../components/layoutComponent/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-6">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 pt-5 mx-auto md:grid grid-cols-12 gap-6">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;