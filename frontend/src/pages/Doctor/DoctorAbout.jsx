import React from 'react'
import { formatDate } from '../../utils/formateDate'
const DoctorAbout = ({name,about, qualification,experiences}) => {
  return (
    <div>
    <div>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
        About of 
        <span className='text-irisBlueColor'>
            vishal sharma 
            </span>
      </h3>
      <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
       i dv hdasyufdbyu fjfvthfdabggfxd hjfgtfdxjgf
      </p>
    </div>
    
    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>
            Education
        </h3>

        <ul className='pt-4 md:p-5'>
        <li 
       className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]
       `'>
                 <div>
                      <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                      {formatDate("12-12-12")} - {formatDate("12-12-12")}
                      </span>

                  <p className='text-[16px] leading-6 font-medium text-textColor'
                  > BDS (Bachealor of Dental Surgery)
                  </p>
                  </div>
                  <p className='text-[16px] leading-6 font-medium text-textColor'
                  >Himachal Pradesh university 
                  </p>
                  </li>

        {/* {qualification?.map((item,index)=>
       <li key={index} 
       className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]
       `'>
                 <div>
                      <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                      {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                      </span>

                  <p className='text-[16px] leading-6 font-medium text-textColor'
                  > {item.degree}
                  </p>
                  </div>
                  <p className='text-[16px] leading-6 font-medium text-textColor'
                  >{item.university}
                  </p>
                  </li> )} */}
       
        </ul>
     
    </div>


    <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold' >
        Experience
      </h3>

      <ul className='grid sm:grid-cols-2  gap-[30px] pt-4 mb:p-5'>
        {/* {experiences?.map((item,index)=> */}
      <li  className='p-4 roounded bg-[#fff9ea]'>
          <span className='text-yellowColor text-[15px] leading-6 font-semibold '>
            {formatDate("12-12-12")} - {formatDate("12-12-12")}
          </span>
          <p className='text-[16px] leading-6 font-medium text-textColor'>
          sr. dental surgeon
          </p>

          <p className='text-[14px] leading-5 font-medium text-textColor'>
          civil hospital
          </p>
        
      </li>
             
    
         </ul>
      
    </div>

    </div>
  )
}

export default DoctorAbout
