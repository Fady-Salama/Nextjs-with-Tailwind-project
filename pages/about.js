import Link from "next/link";
import Image from 'next/image'
import img from '../public/b.jpg'
import {useRouter} from 'next/router'
import styles from '../styles/About.module.css'
function About(){
    const router = useRouter()
    const progRouting = () =>{
        router.push('/product')
    }
    return(
        <div>
              <div className={styles.text}>
        <h1>Our Creative Team gives You best</h1>
        <h2>Service and excellent Support</h2>
         <p className={styles.mtext}>Praesent mattis commodo augue Aliquam ornare hendrerit 
             augue Cras tellus In pulvinar lectus</p>
         <p className={styles.mtext}> a est Curabitur eget orci Cras laoreet ligula.
              Etiam sit amet dolor Vestibulum ante ipsum primis</p>
         <p className={styles.mtext}> in faucibus orci luctus et ultrices posuere cubilia Curae Nullam tellus diam volutpat.</p>
</div>

{/* cards */}
<div className={styles.text2}>
        <h1>MEET OUR TEAM</h1>
         <p className={styles.mtext}>Praesent mattis commodo augue Aliquam ornare hendrerit 
             augue Cras tellus In pulvinar lectus</p>
         <p className={styles.mtext}> a est Curabitur eget orci Cras laoreet ligula.
              Etiam sit amet dolor Vestibulum ante ipsum primis</p>
         <p className={styles.mtext}> in faucibus orci luctus et ultrices posuere cubilia Curae Nullam tellus diam volutpat.</p>
</div>
<div className={styles.inline}>
    {/* card#1 */}
<div className={styles.mright}>
<div className="flex justify-left">
  <div className="rounded-lg shadow-lg bg-black max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/man.png" alt="" width="445px" height="534px"/>
    </a>
    <div className="p-6">
      <h4>Junior</h4>
      <p>
      Founder and CEO
      </p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.</p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
{/* card#2 */}
<div className={styles.mright}>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-black max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Matthew.png" alt="" width="445px" height="534px"/>
    </a>
    <div className="p-6">
      <h4>Matthew</h4>
      <p>
      Founder and CEO
      </p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.</p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
{/* card#3 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-black max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Jennifer.png" alt="" width="445px" height="534px"/>
    </a>
    <div className="p-6">
      <h4>Jennifer</h4>
      <p>
      Founder and CEO
      </p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.</p>
      <button type="button"
       className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium 
       text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
         active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
</div>


        </div>
    )
}
export default About