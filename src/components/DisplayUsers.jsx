import { useSelector,useDispatch  } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import styled from "styled-components";
import { MdDeleteForever} from "react-icons/md"
import { removeUser } from "../store/slices/UserSlice";



const DisplayUsers=()=>{

    const dispatchh=useDispatch()

    const data = useSelector((state)=>{
        return state.users
    })

    const deleteUser=(id)=>{
        return dispatchh(removeUser(id))
    }

    // console.log(data)
    return <>
    {
        data.map((user, id)=>{
            return <li key={id}>
                {user}
                <button className="btn-delete" onClick={() => deleteUser(id)}>
                  <MdDeleteForever className="delete-icon"/>
                </button>
            </li>
        })
    }
    </>
}

export default DisplayUsers

// const Wrapper = styled.section