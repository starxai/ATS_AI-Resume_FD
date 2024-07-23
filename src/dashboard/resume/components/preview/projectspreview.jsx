import { Link } from "lucide-react";
import React from "react";

function Projectspreview ({resumeInfo}){
 return(


    <div className='my-2'>
    <h2 className='font-bold text-sm mb-1 uppercase'
    style={{
        color:resumeInfo?.themeColor
    }}
    >Projects</h2>
    <hr style={{
        // borderColor:resumeInfo?.themeColor
         borderColor:"#cccccc"
    }} />

{resumeInfo?.projects.map((project,index) =>(
              <div key={index} className='my-1'>
              <h2 className='text-sm font-bold flex justify-between'
                  style={{
                      color:resumeInfo?.themeColor
                  }}
              >{project.projectname} <span className="font-normal"> <a href={project.link}>   Go live  </a> </span></h2>

          <div>
                       
            </div>

            <h2 className='text-xs flex justify-between'>
            <div className='text-xs my-2 ml-10' dangerouslySetInnerHTML={{__html:project?.Discription}} /> 
          </h2>
              </div>
        )
        )}


    </div>

    // <div>
    //     {resumeInfo?.project.map((project,index) =>(
    //         <div>
    //             <h1>projects</h1>
    //             {console.log(project)}
    //         </div>
    //     )
    //     )}
    // </div>
 )
}

export default Projectspreview