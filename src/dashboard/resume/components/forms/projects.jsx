import { useState,useContext,useEffect } from "react"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi';
import { LoaderCircle } from 'lucide-react';
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'


const Projects= ()  =>  {

  const [loading,setLoading]=useState(false);
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
  const params=useParams();

    const[projects,setprojects]=useState([{
        projectname:'',
        Discription:'',
        link:''
    }])

    const handleChange=(event,index)=>{
        const newEntries=projects.slice();
        const {name,value}=event.target;
        newEntries[index][name]=value;
        setprojects(newEntries);
      }


      const   ADDNEWPROJECT=()=>{
        setprojects([...projects,
          {
            projectname:'',
            Discription:'',
            link:''
          }
        ])
      }

      const RemoveEducation=()=>{
        setprojects(projects=>projects.slice(0,-1))
    
      }

      useEffect(()=>{
        setResumeInfo({
          ...resumeInfo,
          projects:projects
        })
      },[projects])

      useEffect(()=>{
        //resumeInfo&&setEducationalList(resumeInfo?.education)
        if (resumeInfo?.projects && resumeInfo.projects.length > 0) {
          setprojects(resumeInfo.projects);
        }
       console.log(projects)
      },[])
    



      const onSave = () => {
        setLoading(true);
        const data = {
          data: {
            projects: projects.map(({ id, ...rest }) => rest),
          },
        };
    
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(res => {
          setLoading(false);
          toast('Details updated!');
          console.log(res.data.data)
        }, error => {
          setLoading(false);
        });
      };
      




     return(
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>

            <h2 className='font-bold text-lg'>Projects</h2>
            <p>Add Your project</p>
            <div>
            {projects.map((item,index)=>(
                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                <div className='col-span-2'>
                    <label>Project Name</label>
                     <Input name="projectname" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.projectname}
              value={item?.projectname || ''}
              />
                </div>


                <div>
                <label>Project Link</label>
                <Input name="link" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.link}
              value={item?.link || ''}
              />
                    </div>



                <div className='col-span-2'>
                    <label>Project Discription</label>
                    {/* <Textarea className="mt-5" required
               
                defaultValue={item?.Discription}
                onChange={(e)=>handleChange(e,index)}
            /> */}

<EditorProvider>
              <Editor value={item.Discription||''}
   onChange={(e)=>handleChange(e,index)}
   name="Discription"
      >

            <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
         
         
        </Toolbar>


        </Editor>
                </EditorProvider>

                </div>


          </div>  ))}  

            </div>

            <div className='flex justify-between'>
            <div className='flex gap-2'>
           
            <Button variant="outline" onClick={ADDNEWPROJECT} className="text-primary"> + Add More Education</Button>
            <Button variant="outline" onClick={RemoveEducation} className="text-primary"> - Remove</Button>
                      
            </div>
            <Button disabled={loading} onClick={onSave}> {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}</Button>
         
            </div>
    </div>
    </div>
     )
}

export default Projects