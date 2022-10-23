import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { showcinema } from 'modules/Home/slices/cinemaSlice';
const Adress = () => {
  const dispatch = useDispatch();
  const {cinemas, isLoading,error, cinema , cart,addresses ,cart2} = useSelector((state) => state.cinema);
  // console.log()
  if(!addresses){
    return
  }
  const handlleShowcinema = (address)=>{
    dispatch(showcinema(address))
  }
  // console.log(address)
  return (
    <div  className={addresses.length > 6 ? "scrollcss " :""} >
      {addresses.map((address)=>{
        let backgroundColors = "white"
        
        
          if (address.maCumRap === cart2.maCumRap){
            {/* console.log(cart.maHeThongRap) */}
            backgroundColors = "greenyellow"
          
          
         }
        return(
         <button   style={{ border:"none",borderBottom:"1px solid black",borderLeft:"1px solid black",borderRight:"1px solid black",width:"100%",height:"110px",backgroundColor:backgroundColors}} onClick={()=>handlleShowcinema(address)}  key={address.maCumRap}>
          <div style={{textAlign:"left"}}>
          <h3>{address.tenCumRap}</h3>
          <p>{address.diaChi}</p>
          </div>
         </button>
         
        )
      })}
    </div>
  )
}

export default Adress