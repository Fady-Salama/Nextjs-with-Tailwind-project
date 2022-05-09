import Image from 'next/image'
import img from '../public/oip.jpg'
import styles from '../styles/Navbar.module.css'
import Link from "next/link";
import {useSession,signIn,signOut} from 'next-auth/react'
function Navbar() {
  const {data:session} = useSession()
  if(session){
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  className={styles.green} >
      <div class="container">
        <a class="navbar-brand" href="#">
        ClothesShop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link active">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/product">
                <a class="nav-link active">Menu</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contactus">
                <a class="nav-link active">Contact Us</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/api/auth/signout">
                <a class="navbar-brand" onClick={e=>{e.preventDefault()
                signOut()}}>Sign Out</a>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
        </nav>
  );
}
return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  className={styles.green} >
    <div class="container">
      <a class="navbar-brand" href="#">
      ClothesShop
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <Link href="/product">
              <a class="nav-link active">Menu</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/contactus">
              <a class="nav-link active">Contact Us</a>
            </Link>
          </li>
          
          <li class="nav-item">
              <Link href="/api/auth/signin">
                <a class="navbar-brand" onClick={e=>{e.preventDefault()
                signIn('github')}}>Sign In</a>
              </Link>
            </li>
        </ul>
      </div>
    </div>
      </nav>
);
}
export default Navbar;

