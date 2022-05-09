function Product({users}){
    return(
        <div>
               <h1>Our Products:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>T-Shirt</td>
              <td>60</td>
              <td></td>
            </tr>
            <tr>
            <td>Jeans</td>
              <td>100</td>
              <td></td>
            </tr>
            <tr>
            <td>Jacket</td>
              <td>500</td>
              <td></td>
            </tr>
        </tbody>
      </table>
 </div>
    )
}
export default Product
Product.getLayout = function pageLayout(page){
  return(
    <>
    {page}
    </>
  )
}

