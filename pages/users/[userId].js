import {useRouter} from 'next/router'
function UserId({user}){
    const router = useRouter()
    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    return(
        <>
        <h1>UserId Page</h1>
        <h3>{user.id} / {user.title}</h3>
        <p>{user.body}</p>
        </>
    )
}
export default UserId
export async function getStaticPaths(){
    return{
        paths:[
            {params:{userId:'1'}},
            {params:{userId:'2'}},
            {params:{userId:'3'}},
            {params:{userId:'4'}},
        ],
        fallback:'blocking'
    }
}
export async function getStaticProps(context){
    const {params} = context
    const res = await fetch(`  https://jsonplaceholder.typicode.com/posts/${params.userId}`)
     const data = await res.json()
     return{
         props:{
             user:data
         },
         revalidate:10
     }
}