function Achivementspreview ({resumeInfo}){
    return(

            
    <div className='my-2'>
    <h2 className=' font-bold text-sm mb-1 uppercase'
    style={{
        color:resumeInfo?.themeColor
    }}
    >Achivements</h2>
    <hr style={{
        // borderColor:resumeInfo?.themeColor
         borderColor:"#cccccc"
    }} />

     {resumeInfo?.achivements.map((achivement,index)=>(
          <div key={index} className='my-1'>
             <h2 className='text-xs flex justify-between'>  <div className='text-xs my-2 ml-10' dangerouslySetInnerHTML={{__html:achivement.achivements}} />   
      </h2>
            
      </div>
     ))}

        </div>
    )
}


export default Achivementspreview