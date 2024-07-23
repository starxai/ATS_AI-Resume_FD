import React from 'react';

function ExperiencePreview({resumeInfo}) {
  console.log(resumeInfo)
  return (
    <div className='my-2'>
      <h2 className=' font-bold text-sm mb-1 uppercase'
        style={{ color: resumeInfo?.themeColor }}
      >
        Experience
      </h2>
      <hr style={{  borderColor:"#cccccc" }} />

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className='my-2'>
          <h2 className='text-sm font-bold'
            style={{ color: resumeInfo?.themeColor }}
          >
            {experience?.title} <span className='float-right font-normal '>{experience?.startDate} To {experience?.endDate || 'Present'}</span>
          </h2>
          <h2 className='text-xs flex justify-between'>
            {experience?.companyName}<span>     {experience?.city}, {experience?.state}    </span>
            
          </h2>
          {/* <div className='text-xs my-2'> */}
          <div className='text-xs my-2 ml-10' dangerouslySetInnerHTML={{__html:experience?.workSummery}} />
          {/* {console.log("summary")}
                {console.log(experience)}
              <h1>{experience.workSummery}</h1>  {console.log(experience.workSummery)} */}
             {/* {experience?.workSummery?.map((summary, summaryIndex) => (
              <p key={summaryIndex}>
              
                {summary?.children?.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            ))}  */}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;







// import React from 'react'

// function ExperiencePreview({resumeInfo}) {
//   return (
//     <div className='my-6'>
//         <h2 className='text-center font-bold text-sm mb-2'
//         style={{
//             color:resumeInfo?.themeColor
//         }}
//         >Professional Experience</h2>
//         <hr style={{
//             borderColor:resumeInfo?.themeColor
//         }} />

//         {resumeInfo?.experience?.map((experience,index)=>(
//             <div key={index} className='my-5'>
//                 <h2 className='text-sm font-bold'
//                  style={{
//                     color:resumeInfo?.themeColor
//                 }}>{experience?.title}</h2>
//                 <h2 className='text-xs flex justify-between'>{experience?.companyName}, 
//                 {experience?.city}, 
//                 {experience?.state}
//                 <span>{experience?.startDate} To {experience?.currentlyWorking?'Present':experience.endDate} </span>
//                 </h2>
//                 {/* <p className='text-xs my-2'>
//                     {experience.workSummery}
//                 </p> */}
//                 <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.workSummery.children}} />
//             </div>
//         ))}
//     </div>
//   )
// }

// export default ExperiencePreview