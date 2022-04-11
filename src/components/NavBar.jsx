import Logo from "./Logo"
import '../assets/css/header.css'
import { useState } from "react"
const NavBar = (props) => {
    const [navBarVisblity, setVisiblity] = useState(window.innerWidth < 820 ? false : true)
    return (
        <>
            <header className="row df fixed-top center bg-primary">
                <div className="space-between df container-full row-center">


                    <div>
                        <Logo />
                    </div>
                    <div className="border-light bar-icon radius-primary df center" onClick={() => { setVisiblity(!navBarVisblity) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none"><g clipPath="url(#clip0_1076:311)"><path d="M1.93457 1.33301H19.2679" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round"></path><path d="M1.93457 8H19.2679" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round"></path><path d="M1.93457 14.666H19.2679" stroke="white" strokeWidth="3" strokeMiterlimit="1" strokeLinecap="round"></path></g><defs><clipPath id="clip0_1076:311"><rect x="0.600586" width="20" height="16" fill="white"></rect></clipPath></defs></svg>
                    </div>
                    <div className="df row-center nav-bar" style={{ height: window.innerWidth < 820 ? navBarVisblity ? "200px" : "0px" : "auto"}}>
                        <ul className="df row nav-ui">
                            <li className="nav-link df  mr-4 p-primary">
                                <a href="https://www.wehear.in/" className="nav-link df p-h-primary font-metropolis-bold">HOME</a>
                            </li>
                            <li className="nav-link df  mr-4 p-primary">
                                <a href="https://www.wehear.in/about-us/" className="nav-link df p-h-primary font-metropolis-bold">ABOUT US</a>
                            </li>
                            <li className="nav-link df  mr-4 p-primary">
                                <a href="https://www.wehear.in/product/wehear-ox/" className="nav-link df p-h-primary font-metropolis-bold">WEHEAR OX</a>
                            </li>
                            <li className="nav-link df  mr-4 p-primary">
                                <a href="https://www.wehear.in/blog/" className="nav-link df p-h-primary font-metropolis-bold">BLOG</a>
                            </li>
                            <li className="nav-link df  mr-4 p-primary">
                                <a href="https://www.wehear.in/contacts/" className="nav-link df p-h-primary font-metropolis-bold">CONTACT US</a>
                            </li>
                            <li className="nav-link df  df mr-4 p-primary" >
                                <a href="/" className="nav-link nav-link-active df font-metropolis-bold">HEARING TEST</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </header>
            <main className="row df">
                {/* <button className="button_neon">ksjd</button> */}
                {props.children}
            </main>

        </>
    )
}
export default NavBar