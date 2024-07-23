import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
import Projectspreview from './preview/projectspreview'
import Achivementspreview from './preview/achivementspreview'

function ResumePreview() {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-10 border-t-[20px] '
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
        {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summery  */}
            <SummeryPreview resumeInfo={resumeInfo} />
        {/* Education  */}
        {resumeInfo?.education?.length>0&&   <EducationalPreview resumeInfo={resumeInfo} />}
        {/*experince */}
        {resumeInfo?.experience?.length>0&& <ExperiencePreview resumeInfo={resumeInfo} />}

           {/* {resumeInfo?.project?.length>0 &&   <Projectspreview resumeInfo={resumeInfo}  />   } */}
        {/* Project */}
       
        {resumeInfo?.projects?.length>0 &&   <Projectspreview resumeInfo={resumeInfo}  />   }
        {/* Skilss  */}
        {resumeInfo?.Skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>}
        {/*achivements*/}
        {resumeInfo?.achivements?.length>0 &&  <Achivementspreview resumeInfo={resumeInfo} />}
    </div>
  )
}

export default ResumePreview