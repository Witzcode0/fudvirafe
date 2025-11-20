import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo/fudvira-logo.png";  // your real logo
import { FiHeart, FiUser, FiMenu, FiSearch, FiHome, FiPhone, FiGrid } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);

    return (
        <header className="fud-navbar">

            <div className="container nav-content">

                {/* LOGO */}
                <div className="nav-logo">
                    <img src={logo} alt="Fudvira Logo" />
                </div>

                {/* DESKTOP NAV LINKS */}
                <nav className="nav-links">

                    <a href="/">Home</a>

                    {/* CATEGORY + MEGA MENU */}
                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setMegaOpen(true)}
                        onMouseLeave={() => setMegaOpen(false)}
                    >
                        <span className="dropdown-title">Categories ▾</span>

                        <div className={`mega-menu ${megaOpen ? "show" : ""}`}>
                            <a href="/fruits">Fruit Powders</a>
                            <a href="/herbs">Herbal Powders</a>
                            <a href="/veg">Vegetable Powders</a>
                            <a href="/spices">Spices</a>
                        </div>
                    </div>


                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>

                {/* SEARCH BAR */}
                <div className="nav-search">
                    <input type="text" placeholder="Search Fudvira products..." />
                    <button className="search-icon-btn">
                        <FiSearch size={20} />
                    </button>
                </div>

                {/* RIGHT SIDE ICONS */}
                <div className="nav-right">
                    <FiHeart className="nav-icon" />
                    <FiUser className="nav-icon" />

                    <div className="cart-wrapper">
                        <HiOutlineShoppingBag className="nav-icon" />
                        <span className="cart-count">3</span>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <FiMenu
                        className="nav-menu-btn"
                        onClick={() => setDrawerOpen(true)}
                    />
                </div>

            </div>


            {/* ================= MOBILE DRAWER ================= */}
            <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>

                <div className="drawer-header">
                    <img src={logo} alt="Fudvira" />
                    <span
                        className="drawer-close"
                        onClick={() => setDrawerOpen(false)}
                    >
                        ✕
                    </span>
                </div>

                <div className="drawer-links">
                    <a href="/"><FiHome /> Home</a>
                    <a href="/categories"><FiGrid /> Categories</a>
                    <a href="/about"><FiUser /> About</a>
                    <a href="/contact"><FiPhone /> Contact</a>
                    <a href="/wishlist"><FiHeart /> Wishlist</a>
                    <a href="/cart"><HiOutlineShoppingBag /> Cart</a>
                </div>
            </div>

            {/* OVERLAY */}
            {drawerOpen && (
                <div
                    className="overlay"
                    onClick={() => setDrawerOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Navbar;