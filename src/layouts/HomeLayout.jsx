import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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
            <main className="w-11/12 pt-5 mx-auto md:grid grid-cols-12">
                <aside className="col-span-3">Left Navbar</aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;