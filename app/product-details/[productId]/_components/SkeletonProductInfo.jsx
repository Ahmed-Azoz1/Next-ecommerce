import React from 'react'

const SkeletonProductInfo = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='h-[20px] w-[400px] bg-slate-600 rounded-lg animate-pulse'></div>
            <div className='h-[20px] w-[70px] bg-slate-600 rounded-lg animate-pulse'></div>
            <div className='h-[20px] w-[350px] bg-slate-600 rounded-lg animate-pulse'></div>
            <div className='h-[20px] w-[300px] bg-slate-600 rounded-lg animate-pulse'></div>
            <div className='h-[20px] w-[150px] bg-slate-600 rounded-lg animate-pulse'></div>
        </div>
    )
}

export default SkeletonProductInfo