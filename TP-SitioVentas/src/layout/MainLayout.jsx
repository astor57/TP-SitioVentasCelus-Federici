import { Outlet } from "react-router-dom";
// import Nav from './NavBar';
// import Footer from './';

const Layout= () =>{
    return (
        <div className="">
          <Nav />
          <Footer />
            <Outlet />
          
        </div>
      );
}
export default Layout;