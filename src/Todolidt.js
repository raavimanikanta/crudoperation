import React,{useState} from 'react'

const Todolidt = () => {
    const [name,setname]=useState("");
    const [data,setdata]=useState([]);

    const HandleChange=(e)=>{
        e.preventDefault();
        setdata([...data,{item:name,key:Date.now()}]);
        setname("")
        console.log(data)
    }
    const DeleteItemsFromList=(key)=>{
       const newlist=data.filter((response)=>{
            return   response.key !== key ;    
    })
    setdata(newlist)
    }
  return (
    <div style={{width:"400px",height:"auto",border:"2px solid green",marginLeft:"500px",backgroundColor:"pink"}}>
        <h2 style={{textAlign:"center",color:"red",fontSize:"30px"}}>Todo-app react</h2>
        <div style={{display:"flex",justifyContent:"space-evenly"}} >
            <input type="text" className='input-field' placeholder='Enter input fields' value={name} onChange={(e)=>setname(e.target.value)}/>
            <button style={{backgroundColor:"green",color:"white",fontSize:"15px"}} onClick={HandleChange}>Add items</button>
        </div>
        <div style={{width:"250px"}}>
            {
                data.map(res=>
                  <div className='items'>
                  <span>{res.item}</span><button style={{backgroundColor:"red",color:"white",border:"none"}}  onClick={()=>DeleteItemsFromList(res.key)}>Delete</button>
                  </div>
                )
            }
        </div>
    </div>
  )
}

export default Todolidt