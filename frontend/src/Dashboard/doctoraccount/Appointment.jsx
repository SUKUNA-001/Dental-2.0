import React from 'react'
import { formatDate } from '../../utils/formateDate'
const Appointment = ({appointment}) => {
  return (
    <table className='w-full text-left text-sm text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
                <th scope='col' className='px-6 py-3 '>Name</th>
                <th scope='col' className='px-6 py-3 '>Gender</th>
                {/* <th scope='col' className='px-6 py-3 '>Phone NO.</th> */}
                <th scope='col' className='px-6 py-3 '>Payment</th>
                <th scope='col' className='px-6 py-3 '>Price</th>
                <th scope='col' className='px-6 py-3 '>Booked On</th>
            </tr>
        </thead>

        <tbody>
            {appointment?.map(item=>
                <tr key={item._id}>
                <th scope= "row" className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap '>
                    <img src={item.user.photo} className='w-10 h-10 rounded-full'/>
                    <div className='pl-3'>
                        <div className='text-base font-semibold'>
                            {item.user.name}
                        </div>
                        <div className='text-normal text-gray-500'>
                            {item.user.email}
                        </div>
                    </div>
                </th>
                <td className='px-6 py-4'>{item.user.gender}</td>
                <td className='px-6 py-4'>
                    {item.isPaid && (<div className='flex item-cenetr'>
                        <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2' >
                            
                        </div>
                        Paid
                    </div>)}
                    {!item.isPaid && (<div className='flex item-cenetr'>
                        <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2' >
                            
                        </div>
                        UnPaid
                    </div>)}
                </td>
                <td className='px-6 py-4'>{item.feePrice}</td>
                <td className='px-6 py-4'>{formatDate(item.createdAt)}</td>
            </tr>
        )}
        </tbody>
      
    </table>
  )
}

export default Appointment
