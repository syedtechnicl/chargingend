import React from "react";
import Link from "next/link";
import "../styles/module.css";
import { useSelector } from "react-redux";
import { RootState } from "../reduxx/store";
const Navbar = () => {
  const dd = useSelector((state: RootState) => state.cart);
  return (
    <div className="navbar">
      <h1 className="navTitle">Redux and TypeScript</h1>
      <div className="navLinks">
        <Link href="/" passHref>
          <span className="navLink">Home</span>
        </Link>
        <Link href="../Carts" passHref>
          <span className="navLink">Cart</span>
        </Link>
      </div>
      <span className="cartItem">Cart Item: {dd.length}</span>
    </div>
  );
};

export default Navbar;
