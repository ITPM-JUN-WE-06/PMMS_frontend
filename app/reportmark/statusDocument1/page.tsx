import Layout from '@/app/components/layout'
import React from 'react'
import button from '@/app/components/button'

function page() {
  return (
    <div>
      <Layout>
        <div className=" bg-white rounded-xl pb-5  align-justify">
        
        <div className="pt-5 pl-5">
            <div className="text-blue-700 font-extrabold text-center text-[22px]">Enter Status Document-1 Marks</div>
        </div>   
         <div className=" mt-4">  
              <label className=" ml-10 mr-4 text-blue-600 font-bold">Group ID</label>
              <input className="bg-gray-300" type="text" id="pgid" />
              
              <label className=" mr-4 ml-8 text-blue-600 font-bold">Project Topic</label>
              <input className="bg-gray-300 ml-1" type="text" id="pTopic" />
         </div> 



        <div className="grid grid-cols-3 gap-4">

            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 p-5 m-5">
                <div className=" mb-4">
                    <center>
                     <label className=" mr-2 text-blue-600 font-bold">Student ID</label>
                    <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                    </center>
                </div> 
                            <div className=" mx-8 my-2">
                                <label className=" mr-6">Component 1</label>
                                <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                            </div>
                                
                            <div className=" mx-8 my-2">
                                <label className=" mr-[21px]">Component 2</label>
                                <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                            </div>
                                
                            <div className="mx-8 my-2">
                                <label className="mr-[20px] ">Component 3</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                            </div>

                            <div className=" mx-8 my-2">
                                <label className=" my-4">Comment</label> <br />
                                <input className=" mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                            </div>

                            <div className="ml-[48px] mt-3">
                                <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                            </div>
                  
            </div>




            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 p-5 m-5">
                <div className=" mb-4">
                    <center>
                     <label className=" mr-2 text-blue-600 font-bold">Student ID</label>
                    <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                    </center>
                </div> 
                            <div className=" mx-8 my-2">
                                <label className=" mr-6">Component 1</label>
                                <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                            </div>
                                
                            <div className=" mx-8 my-2">
                                <label className=" mr-[21px]">Component 2</label>
                                <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                            </div>
                                
                            <div className="mx-8 my-2">
                                <label className="mr-[20px] ">Component 3</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                            </div>

                            <div className=" mx-8 my-2">
                                <label className=" my-4">Comment</label> <br />
                                <input className=" mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                            </div>

                            <div className="ml-[48px] mt-3">
                                <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                            </div>
                  
            </div>







          <div>
                        <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 p-5 m-5 mt-16 ">
                          <h3 className="font-semibold text-center">Marking scheme</h3>
                             <ol>
                                <li>Component 1  : 5 </li>
                                <li>Component 2 : 3</li>
                                <li>Component 3 : 2</li>
                            </ol>
                        </div>   
         
            </div>






            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 p-5 ml-5 mr-5 ">
                <div className=" mb-4">
                    <center>
                     <label className=" mr-2 text-blue-600 font-bold">Student ID</label>
                    <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                    </center>
                </div> 
                            <div className=" mx-8 my-2">
                                <label className=" mr-6">Component 1</label>
                                <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                            </div>
                                
                            <div className=" mx-8 my-2">
                                <label className=" mr-[21px]">Component 2</label>
                                <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                            </div>
                                
                            <div className="mx-8 my-2">
                                <label className="mr-[20px] ">Component 3</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                            </div>

                            <div className=" mx-8 my-2">
                                <label className=" my-4">Comment</label> <br />
                                <input className=" mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                            </div>

                            <div className="ml-[48px] mt-3">
                                <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                            </div>
                  
            </div>





            <div>
            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 mx-5 p-5 ">
            <div className=" mb-4">
                    <center>
                     <label className=" mr-2 text-blue-600 font-bold">Student ID</label>
                    <input className=" ml-2 w-[90px]" type="text" id="sid1" /> <br />
                    </center>
                </div> 
                            <div className=" mx-8 my-2">
                                <label className=" mr-6">Component 1</label>
                                <input className=" w-[60px]" type="number" id="sid1ProConM" /> <br />
                            </div>
                                
                            <div className=" mx-8 my-2">
                                <label className=" mr-[21px]">Component 2</label>
                                <input className=" w-[60px]" type="number" id="sid1ProPrM" /> <br />
                            </div>
                                
                            <div className="mx-8 my-2">
                                <label className="mr-[20px] ">Component 3</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTmM" /> <br />
                            </div>

                            <div className=" mx-8 my-2">
                                <label className=" my-4">Comment</label> <br />
                                <input className=" mb-2 w-[220px]" type="textarea" id="sid1ProCo" /> <br />
                            </div>

                            <div className="ml-[48px] mt-3">
                                <label className=" text-gray-400 mr-[15px] ml-3">Total Mark</label>
                                <input className=" w-[60px]" type="number" id="sid1ProTM" /> <br />
                            </div>
                  
            </div>


            </div>
            <div className="">
                
            <div className=" bg-blue-50 shadow-lg rounded-lg text-blue-600 p-5 m-5 ">
                                <h1 className="font-semibold text-center">Overol Comment</h1>
                                <input className=" w-[300px] h-[80px]" type="textarea" />
                            </div>   

                       <div><center><button className=" bg-blue-800 rounded-2xl text-white font-semibold w-[100px] mt-[30px] h-[40px]">save</button>
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
