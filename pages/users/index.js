function Users({users}){
    return(
        <>
        <h1>Users Page</h1>
        {
            users.map((user)=>{
                return(
                 <div key={user.id}>
                     <h4>{user.title}</h4>
                 </div>
                )
            })
        }
        </>
    )
}
export default Users
export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return{
        props:{
            users:data
        }
    }
}