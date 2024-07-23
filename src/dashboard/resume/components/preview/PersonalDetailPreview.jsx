import React from 'react'
import { PhoneIcon } from 'lucide-react'
import { MailIcon } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Linkedin } from 'lucide-react'
function PersonalDetailPreview({resumeInfo}) {
  return (
    <div>
        <h2 className='font-bold text-xl text-center '
        style={{
            color:resumeInfo?.themeColor
        }}
        >
            {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 className='text-center text-sm font-medium mb-3'
       >{resumeInfo?.jobTitle}</h2>
       {/* <h2 className='text-center font-normal text-xs'
        style={{
            color:resumeInfo?.themeColor
        }}>{resumeInfo?.address}</h2> */}

        <div className='flex justify-between'>
            <h2 className='font-normal text-xs '
             style={{
                color:resumeInfo?.themeColor,display:"flex"
            }}> <span>  <PhoneIcon className="h-4 w-3 ${resumeInfo?.themeColor}`" /> </span>   <span className='ml-2' >  {resumeInfo?.phone} </span>         </h2>
            <h2 className='font-normal text-xs ml-10'
             style={{
                color:resumeInfo?.themeColor,display:"flex"
            }}>     <span>  <MailIcon  className="h-4 w-3 `${resumeInfo?.themeColor}`"   />       </span>  <span className='ml-2'>  {resumeInfo?.email}    </span></h2>

            <h2 className='font-normal text-xs'
             style={{
                color:resumeInfo?.themeColor
            }}><a style={{display:"flex"}} href={resumeInfo?.linkdin}> <span><FontAwesomeIcon  className="h-4 w-4 `${resumeInfo?.themeColor}`"  icon={faLinkedin} /></span>  <span className='ml-2'>   {resumeInfo?.linkdin}  </span>  </a></h2>
        </div>
        {/* <hr className='border-[1.5px] my-2'
        style={{
            borderColor:resumeInfo?.themeColor
        }}
        /> */}
    </div>
  )
}

export default PersonalDetailPreview