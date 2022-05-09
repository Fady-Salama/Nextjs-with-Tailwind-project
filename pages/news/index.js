function News({news}){
    return(
        <>
        <h1>News Page</h1>
        {
            news.map((n)=>{
                return(
                <div key={n.id}>
                    <h2>{n.title}</h2>
                </div>
                )
            })
        }
        </>
    )
}
export default News 
export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return{
        props:{
            news:data
        }
    }
}