import React from 'react'

function SkillsPreview({resumeInfo}) {
  return (
    
    <div className='my-2'>
        
    <h2 className=' font-bold text-sm mb-1 uppercase'
    style={{
        color:resumeInfo?.themeColor
    }}
    >Skills</h2>
    <hr style={{
        // borderColor:resumeInfo?.themeColor
         borderColor:"#cccccc"
    }} />

    {/* <div className='grid grid-cols-2 gap-3 my-4'> */}
    <div className='grid grid-cols-6 col gap-6 my-1 '>
        {resumeInfo?.Skills.map((skill,index)=>(
            <div key={index} className='flex items-center col justify-between ml-10 '>
                <ol >
               <li >   <h2 className='text-xs'> {skill.name} </h2>     </li>
                </ol>
               
               
            </div>
        ))}
    </div>
    </div>
  )
}

export default SkillsPreview