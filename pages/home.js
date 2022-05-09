import Link from "next/link";
import Image from 'next/image'
import img from '../public/b.jpg'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
function Home(){
    const router = useRouter()
    const progRouting = () =>{
        router.push('/home')
    }
return(
<div>
{/* First Section */}
<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="/slide1.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">ONSECTETUER ADIPISCING ELIT SIT AMET JUSTO</h5>
        <p>Layered PSD Files and Mockups</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="/slide2.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">ONSECTETUER ADIPISCING ELIT SIT AMET JUSTO</h5>
        <p>Beautifully Crafted Designs</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="/slide3.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">ONSECTETUER ADIPISCING ELIT SIT AMET JUSTO</h5>
        <p>Creative & Modern Agency Studio</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className={styles.text}>
        <h1>Who we are and what we do</h1>
        <h2>for successful business</h2>
         <p className={styles.mtext}>Praesent mattis commodo augue Aliquam ornare hendrerit 
             augue Cras tellus In pulvinar lectus</p>
         <p className={styles.mtext}> a est Curabitur eget orci Cras laoreet ligula.
              Etiam sit amet dolor Vestibulum ante ipsum primis</p>
         <p className={styles.mtext}> in faucibus orci luctus et ultrices posuere cubilia Curae Nullam tellus diam volutpat.</p>
</div>
{/* cards */}
<div className={styles.inline}>
    {/* card#1 */}
<div className={styles.mright}>
<div className="flex justify-left">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/a.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">T-Shirt</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show Details</button>
    </div>
  </div>
</div>
</div>
{/* card#2 */}
<div className={styles.mright}>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/pullover.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Pullover</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show Details</button>
    </div>
  </div>
</div>
</div>
{/* card#3 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/c.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Shirt</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show Details</button>
    </div>
  </div>
</div>
</div>
</div>


{/* cards */}
<div className={styles.inline}>
    {/* card#1 */}
<div className={styles.mright}>
<div className="flex justify-left">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Dresses.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Dresses</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show Details</button>
    </div>
  </div>
</div>
</div>
{/* card#2 */}
<div className={styles.mright}>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/sweaters.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Sweaters</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show Details</button>
    </div>
  </div>
</div>
</div>
{/* card#3 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/coats.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Coats, Jackets & Vests</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show Details</button>
    </div>
  </div>
</div>
</div>
</div>
{/* Second Section */}
<div className={styles.bgred}>
        <h1>We offer high Quality Templates</h1>
        <h2>and Detailed digital Works</h2>
</div>

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
<div className={styles.inline}>
    {/* card#1 */}
<div className={styles.mright}>
<div className="flex justify-left">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Alexander.png" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Alexander</h5>
      <p className="text-gray-700 text-base mb-4">
      Founder and CEO
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
{/* card#2 */}
<div className={styles.mright}>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Matthew.png" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Matthew</h5>
      <p className="text-gray-700 text-base mb-4">
      Founder and CEO
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
{/* card#3 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Dario.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Dario</h5>
      <p className="text-gray-700 text-base mb-4">
      Founder and CEO
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
{/* card#4 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Jennifer.png" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Jennifer</h5>
      <p className="text-gray-700 text-base mb-4">
      Founder and CEO
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>

{/* card#5 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/Benjamin.jpg" alt="" width="200px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Benjamin</h5>
      <p className="text-gray-700 text-base mb-4">
      Founder and CEO
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
</div>

{/* New Section */}
<div className={styles.text}>
        <h1>Subscribe to our newsletter to get</h1>
        <h2>latest news and updates</h2>
         <p className={styles.mtext}>Praesent mattis commodo augue Aliquam ornare hendrerit 
             augue Cras tellus In pulvinar lectus</p>
         <p className={styles.mtext}> a est Curabitur eget orci Cras laoreet ligula.
              Etiam sit amet dolor Vestibulum ante ipsum primis</p>
         <p className={styles.mtext}> in faucibus orci luctus et ultrices posuere cubilia Curae Nullam tellus diam volutpat.</p>
</div>

{/* cards */}
<div className={styles.inline}>
    {/* card#1 */}
<div className={styles.mright}>
<div className="flex justify-left">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <div className="p-6">
    <h6 className={styles.red}>2018-08-24</h6>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Matthew</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit amet Suspendisse et justo.
      </p>
      <a href="#!">
      <Image className="rounded-t-lg" src="/matthew.jpg" alt="" width="50px" height="50px"/>
    </a>
    </div>
  </div>
</div>
</div>
{/* card#2 */}
<div className={styles.mright}>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <div className="p-6">
    <h6 className={styles.red}>2018-08-24</h6>
      <h5 className="text-gray-900 text-xl font-medium mb-2">John Doe</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit amet Suspendisse et justo.
      </p>
      <a href="#!">
      <Image className="rounded-t-lg" src="/john.jpg" alt="" width="50px" height="50px"/>
    </a>
    </div>
  </div>
</div>
</div>
{/* card#3 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <div className="p-6">
    <h6 className={styles.red}>2018-08-24</h6>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Charlotte</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit amet Suspendisse et justo.
      </p>
      <a href="#!">
      <Image className="rounded-t-lg" src="/charlotte.jpg" alt="" width="50px" height="50px"/>
    </a>
    </div>
  </div>
</div>
</div>
{/* card#4 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <div className="p-6">
    <h6 className={styles.red}>2018-08-24</h6>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Christeen</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit amet Suspendisse et justo.
      </p>
      <a href="#!">
      <Image className="rounded-t-lg" src="/christeen.jpg" alt="" width="50px" height="50px"/>
    </a>
    </div>
  </div>
</div>
</div>

{/* card#5 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <div className="p-6">
        <h6 className={styles.red}>2018-08-24</h6>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Benjamin</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit amet Suspendisse et justo.
      </p>
      <a href="#!">
      <Image className="rounded-t-lg" src="/Benjamin.jpg" alt="" width="50px" height="50px"/>
    </a>
    </div>
  </div>
</div>
</div>
</div>


{/* New Section */}


<div className={styles.text}>
        <h1>Our blogs help you to success your</h1>
        <h2>new business and goals</h2>
         <p className={styles.mtext}>Praesent mattis commodo augue Aliquam ornare hendrerit 
             augue Cras tellus In pulvinar lectus</p>
         <p className={styles.mtext}> a est Curabitur eget orci Cras laoreet ligula.
              Etiam sit amet dolor Vestibulum ante ipsum primis</p>
         <p className={styles.mtext}> in faucibus orci luctus et ultrices posuere cubilia Curae Nullam tellus diam volutpat.</p>
</div>

{/* cards */}
<div className={styles.inline}>
    {/* card#1 */}
<div className={styles.mright}>
<div className="flex justify-left">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/com.jpg" alt="" width="340px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Praesent mattis commodo augue amet justo</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
{/* card#2 */}
<div className={styles.mright}>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/gi.jpg" alt="" width="340px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Praesent mattis commodo augue amet justo</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
{/* card#3 */}
<div className={styles.mright}>
<div className="flex justify-right">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <Image className="rounded-t-lg" src="/gir.jpg" alt="" width="340px" height="200px"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Praesent mattis commodo augue amet justo</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Info</button>
    </div>
  </div>
</div>
</div>
</div>







{/* 
<div className={styles.hometext}>

<h1>Welcome to ClothesShop</h1>
<h2>Let's Make A Better Planet</h2>
<p>We are an online shop offering a wide range of trendy Clothess.Use</p> 
    <p>our Clothess to create an urban jungle. Order your favourite Clothess.</p>
<button className={styles.btn}> Shop Now</button>


</div>
<div>
<h2 className={styles.center}>Integrate easily with all your favorite tools</h2>
         
</div>
<div>
                <div className={styles.row3}>
   
            <div className={styles.marg} data-filter="Top-Product" item-filter="House-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(1)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(1)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/d.jpg" width='150px' height='150px'/>
                <p class="name">A.Clothes</p>
                <span class="price">150 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Top-Product" item-filter="Terrariums">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(2)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(2)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/d.jpg" width='150px' height='150px'/>
                <p class="name">B.Clothes</p>
                <span class="price">200 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Top-Product" item-filter="Seeds">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(3)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(3)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/c.jpg" width='150px' height='150px'/>
                <p class="name">C.Clothes</p>
                <span class="price">100 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Top-Product" item-filter="Small-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(4)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(4)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/f.jpg" width='150px' height='150px'/>
                <p class="name">D.Clothes</p>
                <span class="price">150 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Top-Product" item-filter="House-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(5)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(5)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/a.jpg" width='150px' height='150px'/>
                <p class="name">E.Clothes</p>
                <span class="price">200 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Small-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(6)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(6)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/e.jpg" width='150px' height='150px'/>
                <p class="name">F.Clothes</p>
                <span class="price">100 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Small-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(7)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(7)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/c.jpg" width='150px' height='150px'/>
                <p class="name">G.Clothes</p>
                <span class="price">200 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Big-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(8)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(8)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/b.jpg" width='150px' height='150px'/>
                <p class="name">H.Clothes</p>
                <span class="price">100 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Seeds">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(9)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(9)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/a.jpg" width='150px' height='150px'/>
                <p class="name">I.Clothes</p>
                <span class="price">150 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="House-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(10)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(10)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/f.jpg" width='150px' height='150px'/>
                <p class="name">J.Clothes</p>
                <span class="price">200 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Gardening">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(11)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(11)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/e.jpg" width='150px' height='150px'/>
                <p class="name">K.Clothes</p>
                <span class="price">100 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Terrariums">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(12)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(12)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/d.jpg" width='150px' height='150px'/>
                <p class="name">L.Clothes</p>
                <span class="price">250 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Snake-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(13)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(13)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/c.jpg" width='150px' height='150px'/>
                <p class="name">M.Clothes</p>
                <span class="price">250 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="New-Arrival" item-filter="Gardening">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(14)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(14)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/b.jpg" width='150px' height='150px'/>
                <p class="name">N.Clothes</p>
                <span class="price">250 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Best-Selling" item-filter="Gardening">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(15)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(15)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/a.jpg" width='150px' height='150px'/>
                <p class="name">O.Clothes</p>
                <span class="price">250 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Best-Selling" item-filter="Snake-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(16)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(16)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/f.jpg" width='150px' height='150px'/>
                <p class="name">P.Clothes</p>
                <span class="price">250 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Best-Selling" item-filter="Peace-lily">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(17)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(17)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/e.jpg" width='150px' height='150px'/>
                <p class="name">Q.Clothes</p>
                <span class="price">250 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Best-Selling" item-filter="Peace-lily">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(18)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(18)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/d.jpg" width='150px' height='150px'/>
                <p class="name">R.Clothes</p>
                <span class="price">250 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Top-Product" item-filter="Snake-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(19)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(19)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/c.jpg" width='150px' height='150px'/>
                <p class="name">S.Clothes</p>
                <span class="price">150 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Top-Product" item-filter="Snake-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(20)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(20)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/b.jpg" width='150px' height='150px'/>
                <p class="name">T.Clothes</p>
                <span class="price">100 $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            
            <div className={styles.marg} data-filter="Top-Product" item-filter="Big-Clothess">
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(21)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(21)">Show Details</div>
                </div>
                <div class="prod"> </div>
                <Image src="/a.jpg" width='150px' height='150px'/>
                <p class="name">V.Clothes</p>
                <span class="price">300 $</span><span class="stars">
                    <i class="fas fa-star"></i><i class="fas fa-star">
                        </i><i class="fas fa-star"></i><i class="fas fa-star">
                            </i><i class="fas fa-star"></i></span>
            </div>       
            </div>


            </div> */}
        

</div>
)
}
export default Home