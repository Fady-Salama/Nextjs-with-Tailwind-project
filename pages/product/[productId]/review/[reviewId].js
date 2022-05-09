import {useRouter} from 'next/router'
function Review(){
    const router = useRouter()
    const {productId, reviewId} = router.query
    return(
        <div>
               <h1>Review Page</h1>
               <h2>The review of product num {productId} is {reviewId} </h2>
        </div>
       
    )
}
export default Review