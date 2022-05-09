import {useRouter} from 'next/router'
function ProductId(){
    const router = useRouter()
    const {productId} = router.query
    return(
        <>
        <h1>Product ID Page </h1>
        <h2>The product id is {productId}</h2>
        </>
        
    )
}
export default ProductId