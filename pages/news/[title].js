function Title({newss}){
    return(
        <>
        <h1>Title Page</h1>
        {
            newss.map((n)=>{
                return(
               <div key={n.userId}>
                   <h2>{n.id}</h2>
                   <h2>{n.title}</h2>
                   <p>{n.body}</p>
               </div>
                )
            })
        }
        </>
    )
}
export default Title
export async function getServerSideProps(context){
    const {params} = context
    const res = await fetch(` https://jsonplaceholder.typicode.com/posts?title=${params.title}`)
    const data = await res.json()
    return{
        props:{
            newss:data
        }
        }
       
}