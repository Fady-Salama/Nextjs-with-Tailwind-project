import {useState,useEffect} from 'react'
function Dashboard(){
    const [loading,setLoading] = useState(true)
    const [dashData,setDashdata] = useState(null)
    useEffect(()=>{
        async function fetchingData(){
            const res = await fetch('  http://localhost:8080/dashboard')
            const data = await res.json()
            setDashdata(data[0])
            setLoading(false)
        }
        fetchingData()
    },[])
    if(loading) {
        return <h1>Loading...</h1>
    }
    return(
       <>
            <h1>Dashboard</h1>
            <h2>posts:{dashData.posts}</h2>
            <h2>likes:{dashData.likes}</h2>
            <h2>followers:{dashData.followers}</h2>
            <h2>following:{dashData.following}</h2>
       </>
    )
}
export default Dashboard