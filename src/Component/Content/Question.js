import React, { useState } from 'react'


const Question = ({formData,setFormData}) => {
  
    
    const handlChange=event=>{
        const target = event.target
        const name =target.name
        const value = target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    let ResultData=
      [formData.result1,formData.result2,formData.result3,formData.result4,formData.result5]

    console.log(ResultData)
    


  return (
    <>
    <form>
    <div>
      <label>Have you been dignosed with this problem ?:  Not Relavent</label>
      <input type="radio" name= "result1" value="Not Relavent" 
      onChange={handlChange}></input>

     <label>Yes</label>
      <input type="radio" name= "result1" value="Yes"
       onChange={handlChange}></input>
     
     <label>No</label>
      <input type="radio" name= "result1" value="No"
       onChange={handlChange}></input>
    </div>

   <br></br>
    <div>
      <label>Did the problem start after a physical trauma? :  Not Relavent</label>
      <input type="radio" name= "result2" value="Not Relavent" 
      onChange={handlChange}></input>

     <label>Yes</label>
      <input type="radio" name= "result2" value="Yes"
       onChange={handlChange}></input>
     
     <label>No</label>
      <input type="radio" name= "result2" value="No"
       onChange={handlChange}></input>
    </div>
   <br></br>
    <div>
      <label>Did the problem start after a metal trauma? :  Not Relavent</label>
      <input type="radio" name= "result3" value="Not Relavent" 
      onChange={handlChange}></input>

     <label>Yes</label>
      <input type="radio" name= "result3" value="Yes"
       onChange={handlChange}></input>
     
     <label>No</label>
      <input type="radio" name= "result3" value="No"
       onChange={handlChange}></input>
    </div>
  <br></br>
    <div>
      <label>When do you experience this problem? :  Not Relavent</label>
      <input type="checkbox" name= "result4" value="Not Relavent" 
      onChange={handlChange}></input>

     <label>When lying down</label>
      <input type="checkbox" name= "result4" value="When lying down" 
       onChange={handlChange}></input>
     
     <label>When sitting</label>
      <input type="checkbox" name= "result4" value="When sitting" 
       onChange={handlChange}></input>

       <label>Under standing</label>
      <input type="checkbox" name= "result4" value="Under standing" 
       onChange={handlChange}></input>

       <label>In walking</label>
      <input type="checkbox" name= "result4" value="In walking" 
       onChange={handlChange}></input>
    </div>
    <br></br>
    <div>
      <label>How instense is the experience the problem on average on a 0-10 scale?  :  1</label>
      <input type="radio" name= "result5"  value="1"
      onChange={handlChange}></input>

     <label>2</label>
      <input type="radio" name= "result5"  value="2"
       onChange={handlChange}></input>
     
     <label>3</label>
      <input type="radio" name= "result5"   value="3"
       onChange={handlChange}></input>

       <label>4</label>
      <input type="radio" name= "result5"   value="4"
       onChange={handlChange}></input>

       <label>5</label>
      <input type="radio" name= "result5"  value="5"
       onChange={handlChange}></input>

     <label>6</label>
      <input type="radio" name= "result5"  value="6"
      onChange={handlChange}></input>

     <label>7</label>
      <input type="radio" name= "result5"  value="7"
       onChange={handlChange}></input>
     
     <label>8</label>
      <input type="radio" name= "result5"   value="8"
       onChange={handlChange}></input>

       <label>9</label>
      <input type="radio" name= "result5"   value="9"
       onChange={handlChange}></input>

       <label>10</label>
      <input type="radio" name= "result5"  value="10"
       onChange={handlChange}></input>

    </div>
   <br></br>

{/*
    <p>Have you been dignosed with this problem : {formData.result1}</p><br></br>
    <p>Did the problem start after a physical trauma : {formData.result2} </p><br></br>
    <p>Did the problem start after a mental trauma: {formData.result3}</p><br></br>
    <p>When do you experience this problem: {formData.result4}</p><br></br>
    <p>How instense is the experience the problem on average on a 0-10 scale: {formData.result5}</p><br></br>
  
  */}</form>
  
    </>
  )
}



const Summary= ({formData,setFormData})=>{

  return <div>
    <p>Have you been dignosed with this problem : {formData.result1}</p><br></br>
    <p>Did the problem start after a physical trauma : {formData.result2} </p><br></br>
    <p>Did the problem start after a mental trauma: {formData.result3}</p><br></br>
    <p>When do you experience this problem: {formData.result4}</p><br></br>
    <p>How instense is the experience the problem on average on a 0-10 scale: {formData.result5}</p><br></br>
  
  </div>
}

function SurvayData(props){
   const showSummry = props.showSummry
   const [formData, setFormData]= useState({
        result1: "-", //radio
        result2: "-",
        result3: "-",
        result4: "-",
        result5: "-"  
    })
   if(!showSummry){
    return <Question formData={formData} setFormData={setFormData}/>
   }
   return <Summary formData={formData} setFormData={setFormData}/>
}


function ParentSurvayData(){
  const [showSummry, setShowSummry]=useState(false)
  return <div>
    <SurvayData showSummry= {showSummry}/>
    <div>
    <button onClick={()=>setShowSummry(false)}>Back</button>
    <button onClick={()=>setShowSummry(true)}>Next</button>
  </div>
  </div>
  

}
export default ParentSurvayData;

