import Layout from '@/app/components/layout'
import React from 'react'
import button from '@/app/components/button'

function page() {
  return (
    <div>
      <Layout>
        <div className=" bg-white rounded-xl pb-7  align-justify">
        
        <div className="pt-5 pl-5">
            <div className="text-blue-700 font-extrabold text-center text-[22px]">Enter Proposal Presentation Marks</div>
        </div>   
         <div className=" mt-4">  
              <label className=" ml-10 mr-4 text-blue-600 font-bold">Group ID</label>
              <input className="bg-gray-300" type="text" id="pgid" />
              
              <label className=" mr-4 ml-8 text-blue-600 font-bold">Project Topic</label>
              <input className="bg-gray-300 ml-1" type="text" id="pTopic" />
         </div> 



        <div className="grid grid-cols-3 gap-4">

            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 m-5 p-5 ">
                <div className="ml-[29px] mb-3">
                     <label className=" ml-3 text-blue-600 font-bold">Student ID</label>
                    <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                </div> 
                            <div className=" m-2">
                                <label className=" mr-[99px] m-4 ">Content</label>
                                <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                            </div>
                                
                            <div className=" m-2">
                                <label className=" mr-[30px] m-4">Presentation Skill</label>
                                <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                            </div>
                                
                            <div className=" m-2">
                                <label className=" mr-[19px]  m-4">Time Management</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                            </div>

                            <div className=" m-2">
                                <label className=" m-4">Comment</label> <br />
                                <input className=" ml-4 mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                            </div>

                            <div className="ml-[40px] mt-3">
                                <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                            </div>
                  
            </div>




            <div>
                        <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 m-5 p-5 ">
                            <div className="ml-[29px] mb-3">
                                <label className=" ml-3 text-blue-600 font-bold">Student ID</label>
                                <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                            </div>

                        
                                
                            <div className=" m-2">
                                <label className=" mr-[99px] m-4 ">Content</label>
                                <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                            </div>
                                
                            <div className=" m-2">
                                <label className=" mr-[30px] m-4">Presentation Skill</label>
                                <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                            </div>
                                
                            <div className=" m-2">
                                <label className=" mr-[19px]  m-4">Time Management</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                            </div>

                            <div className=" m-2">
                                <label className=" m-4">Comment</label> <br />
                                <input className=" ml-4 mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                            </div>

                            <div className="ml-[40px] mt-3">
                                <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                            </div>
                            
                        </div>
         </div>




          <div>
                        <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 mr-5 mt-[65px] px-5 pt-5 pb-14 ">
                          <h3 className="font-semibold text-center">Marking scheme</h3>
                             <ol>
                                <li>Content 5</li>
                                <li>prsenentatin Skill 3</li>
                                <li>Time Management 2</li>
                            </ol>
                        </div>   
         
            </div>






            <div className="">
            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 mx-5 p-5 ">
                <div className="ml-[29px] mb-3">
                     <label className=" ml-3 text-blue-600 font-bold">Student ID</label>
                    <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                </div>

              
                    
                <div className=" m-2">
                     <label className=" mr-[99px] m-4 ">Content</label>
                    <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                </div>
                    
                <div className=" m-2">
                    <label className=" mr-[30px] m-4">Presentation Skill</label>
                    <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                </div>
                    
                <div className=" m-2">
                     <label className=" mr-[19px]  m-4">Time Management</label>
                    <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                </div>

                <div className=" m-2">
                     <label className=" m-4">Comment</label> <br />
                    <input className=" ml-4 mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                </div>

                <div className="ml-[40px] mt-3">
                     <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                    <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                </div>
                  
            </div>


            
            </div>



            <div>
            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 mx-5 p-5 ">
                <div className="ml-[29px] mb-3">
                     <label className=" ml-3 text-blue-600 font-bold">Student ID</label>
                    <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                </div>

              
                    
                <div className=" m-2">
                     <label className=" mr-[99px] m-4 ">Content</label>
                    <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                </div>
                    
                <div className=" m-2">
                    <label className=" mr-[30px] m-4">Presentation Skill</label>
                    <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                </div>
                    
                <div className=" m-2">
                     <label className=" mr-[19px]  m-4">Time Management</label>
                    <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                </div>

                <div className=" m-2">
                     <label className=" m-4">Comment</label> <br />
                    <input className=" ml-4 mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                </div>

                <div className="ml-[40px] mt-3">
                     <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                    <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                </div>
                  
            </div>


            </div>
            <div className="">
                
            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 mr-5 p-5 ">
                                <h1 className="font-semibold text-center">Overall Comment</h1>
                                <input className=" w-[320px] h-[80px]" type="textarea" />
                            </div>   

                       <div><center><button className=" bg-blue-800 rounded-2xl text-white font-semibold w-[100px] mt-[60px] h-[40px]">save</button>
                            </center> 
                       </div>     
            </div>
        </div>
        </div>
        
      </Layout>
    </div>
  )
}

export default page
