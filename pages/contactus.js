import Link from "next/link";
import Image from 'next/image'
import img from '../public/b.jpg'
import styles from '../styles/Contactus.module.css'
import {useRouter} from 'next/router'
function Contactus(){
    const router = useRouter()
    const progRouting = () =>{
        router.push('/contactus')
    }
    return(
        <div>
            <h4>The most powerful ecommerce</h4> 
            <h4> popups your customers will actually love</h4> 
            <button type="submit" className="btn btn-primary" className={styles.but}>
            Create free account
          </button>
          <div class="container">
            <h1>Get In Touch:</h1>
            <p>Send us your question or inquery,
             we will be happy to reply to you very soon.</p>

            <div class="row">

                <div class="Addresses">

                    <form width="40%">
                        <input className={styles.block}type="text" placeholder="First Name*" required=""/>
                        <input class={styles.block}type="text" placeholder="Last Name*" required=""/>
                        <input class={styles.block}type="email" placeholder="Email*" required=""/>
                        <input class={styles.block}type="phone" placeholder="phone*" required=""/>
                        <input className={styles.block} type="message" placeholder="Enter Your message"/>
                        <button class="cott">SUBMIT</button>
                    </form>

                </div>


            </div>
            <div class="Addres">
                <h4>Address</h4>
                <p>7-Nabulsi Street-Smouha</p>
                <p>Alexandria-Egypt</p>
                <h4 class="contactt Add">Contact-Us</h4>
                <p><i class="far fa-envelope"></i> info@PlantShop.com</p>
                <p><i class="fas fa-phone"></i> +2 100-134-767</p>
            </div>
        </div>
         
        </div>
    )
}
export default Contactus