import { Outlet } from "react-router-dom";
import Nav from './NavBar';
// import Footer from './';


const Layout= () =>{
    return (
        <div className="">
          <Nav />
          <main className="">
            <Outlet />
          </main>
          
        </div>
      );
}
export default Layout;