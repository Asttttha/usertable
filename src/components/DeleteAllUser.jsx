import React from 'react'
// import { deleteUsers } from '../store/slices/UserSlice'
import { deleteUsers } from '../store/actions'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch=useDispatch()
  const clearUsers=()=>{
    dispatch(deleteUsers())
  }
  return (
    <div> <button className="btn" onClick={clearUsers}>Delete all users</button></div>
  )
}

export default DeleteAllUser