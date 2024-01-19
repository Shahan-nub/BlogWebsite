import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Socialmedia.module.css"
import { SiOnlyfans } from "react-icons/si";
import { Createpost, Post, PostList } from './Createpost';
import { PostListProvider } from '../store/postlist-store';

export const Socialmedia = () => {
    const [selectedTab, setSelectedTab] = useState("Home")
    const handleTabs = (event) => {
        setSelectedTab(event.target.innerText)
    }
   
    return (
        <PostListProvider>
            <div className={styles.container}>
                <Sidebar onTabClick={handleTabs} tabName={selectedTab}></Sidebar>
                <div className={styles.columnRight}>
                    <Header></Header>
                    {(selectedTab === "Home") ? <PostList></PostList> : <Createpost></Createpost>}
                    <Footer></Footer>
                </div>
            </div>
        </PostListProvider>
    )
}

const Header = () => {
    return (<header className="p-3 text-bg-dark">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        {/* <use xlink:href="#bootstrap"></use> */}
                    </svg>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
            </div>
        </div>
    </header>)
}
const Sidebar = ({ onTabClick, tabName }) => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark " style={{ width: "15vw", height: "100vh" }}>
            <a href="/" style={{ paddingLeft: "18px" }} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none ">
                <span className="fs-4 " ><p style={{ height: "20px", textAlign: "center" }}><SiOnlyfans /></p>OnlyNiggas</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={(event) => onTabClick(event)}>
                    <a href="#" className={`nav-link text-white ${tabName === "Home" && 'active'}`} aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Home
                    </a>
                </li>
                <li onClick={(event) => onTabClick(event)}>
                    <a href="#" className={`nav-link text-white ${tabName === "Create Post" && 'active'}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Create Post
                    </a>
                </li>

            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="py-2 my-20px text-bg">
            <ul className="nav justify-content-center border-bottom pb-1 mb-1">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
    )
}
