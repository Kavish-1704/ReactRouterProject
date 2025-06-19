import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Kavish-1704`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center bg-orange-400 rounded-4xl text-white p-4 text-4xl'> Github followers : {data.followers}
    <img src={data.avatar_url} alt="Github profile picture" className='mb-7' />
    </div>
    
  )
}

export default Github

export const GithubInfoLoader = async() => {
    const response = await fetch(`https://api.github.com/users/Kavish-1704`)
    return response.json()
}