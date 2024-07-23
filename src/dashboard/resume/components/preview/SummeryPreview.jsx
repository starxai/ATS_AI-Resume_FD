import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <div>
    <h2 className='mt-3 font-bold text-sm mb-1 uppercase'
    style={{
        color:resumeInfo?.themeColor
    }}
    >Summary</h2>
    <hr style={{
        borderColor:"#cccccc"
        // borderColor:resumeInfo?.themeColor
    }} />

    <p className='text-xs'>
        {resumeInfo?.summery}
    </p>
   </div> )
}

export default SummeryPreview