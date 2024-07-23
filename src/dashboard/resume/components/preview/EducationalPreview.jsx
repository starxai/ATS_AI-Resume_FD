import React from 'react'

function EducationalPreview({resumeInfo}) {
  return (
    <div className='my-2'>
    <h2 className='font-bold text-sm mb-1 uppercase'
    style={{
        color:resumeInfo?.themeColor
    }}
    >Education</h2>
    <hr style={{
        // borderColor:resumeInfo?.themeColor
         borderColor:"#cccccc"
    }} />

    {resumeInfo?.education.map((education,index)=>(
        <div key={index} className='my-1'>
            <h2 className='text-sm font-bold'
                style={{
                    color:resumeInfo?.themeColor
                }}
            >{education.universityName}  <span className='float-right font-normal'>{education?.startDate} - {education?.endDate}</span></h2>
            <h2 className='text-xs flex justify-between'>{education?.degree} - {education?.major}  <span className='float-right font-normal'> CGPA : {education?.percentage}</span>
           
            </h2>
            <p className='text-xs my-1 ml-4'>
                {education?.description}
            </p>
        </div>
    ))}

    </div>
  )
}

export default EducationalPreview