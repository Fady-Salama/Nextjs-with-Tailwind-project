import useSWR from "swr"
const fetcher = async()=>{
    const res = await fetch('http://localhost:8080/dashboard')
    const data = await res.json()
    return data[0]
}


function DashboardSWR(){
    const {error,data} = useSWR('dashboard',fetcher)
    if(error) return "error"
    if(!data) return "loading"
    return(
        <>
        <h1>DashboardSWR</h1>
        <h2>posts:{data.posts}</h2>
        <h2>likes:{data.likes}</h2>
        <h2>followers:{data.followers}</h2>
        <h2>following:{data.following}</h2>
        </>
    )
}
export default DashboardSWR