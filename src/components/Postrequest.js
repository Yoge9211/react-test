import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PostRequest = () => {
  const [postData, setPostData] = useState('')
  const url = 'https://reqres.in/api/users'
  const data = {
    name: 'test1',
    job: 'leader',
  }
  const getData = async () => {
    const response = await axios.post(url, data)
    console.log(response.data)
    setPostData(response.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div>{postData.name}</div>
      <div>{postData.job}</div>
    </>
  )
}

export default PostRequest
