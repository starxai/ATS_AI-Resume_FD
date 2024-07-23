import { useEffect, useState,useContext } from "react"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import GlobalApi from './../../../../../service/GlobalApi';
import { ConstructionIcon, LoaderCircle } from 'lucide-react';
import { useParams } from "react-router-dom"
const Achivements = () =>{
    const [value,setValue]=useState();
    const [loading,setLoading]=useState(false);
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const params=useParams();
    const[achivementslist,setachivements]=useState([{
        achivements:''
    }])

    const handleChange=(event,index)=>{
        const newEntries=achivementslist.slice();
        const {name,value}=event.target;
        console.log(name,value)
        newEntries[index][name]=value;
        setachivements(newEntries);
      }

      const   ADDNEWPROJECT=()=>{
        setachivements([...achivementslist,
          {
             achivements:''
          }
        ])
      }

      const RemoveEducation=()=>{
        setachivements(achivementslist=>achivementslist.slice(0,-1))
      }

      useEffect(()=>{
        //resumeInfo&&setEducationalList(resumeInfo?.education)
        if (resumeInfo?.achivements && resumeInfo.achivements.length > 0) {
          setachivements(resumeInfo.achivements);
        }
       
      },[])


      useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            achivements:achivementslist
          })
      },[achivementslist])

      
      const onSave = () => {
        console.log("save button comming")
        setLoading(true);
        console.log("achivements")
        console.log(achivementslist)
        const data = {
          data: {
            achivements: achivementslist.map(({ id, ...rest }) => rest),
          },
        };
    
        GlobalApi.UpdateResumeDetail(params?.resumeId, data)
      .then(resp => {
        console.log(resp);
        setLoading(false);
        toast('Details updated!');
      }, error => {
        setLoading(false);
        toast('Server Error, Try again!');
      });
  };

    return(
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Achivements</h2>
            <p>Add Your Achivements</p>
           <div>
            {achivementslist.map((item,index)=>(
                <div>
               {/* <Input name="achivement" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.universityName} 
              */}
              

              <EditorProvider>
              <Editor defaultValue={item?.achivements} value={item?.achivements||''} 
               onChange={(e)=>handleChange(e,index)}
                name="achivements"
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
            ))}
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
export default Achivements