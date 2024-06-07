import React from 'react'
import PopupIframe from './PopupVideo '
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/fetch'
import { SanityDocument } from 'next-sanity'
import { WorkShow } from '@/sanity/lib/queries'


const Work = async () => {
    const WorkShowData: SanityDocument[] = await sanityFetch({
        query: WorkShow,
    })

    console.log(WorkShowData)
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='my-12 text-center text-6xl text-emerald-400 font-semibold'>Wanna See My Work !</h1>
            <div className=' flex flex-col items-center justify-center mt-16'>
                <div className='grid gap-16 sm:grid-cols-1 lg:grid-cols-2'>
                    {WorkShowData.map((item) => (
                        <div key={item._id} className=''>
                            <PopupIframe imageURL={item.imageURL} VideoUrlPreview={item.VideoUrlPreview} _id={item._id} />
                        </div>
                    ))}
                </div>

                <Link href={"https://drive.google.com/"} className='my-12 text-center text-2xl p-4 bg-blue-100 rounded-md text-black font-medium'>See More !</Link>

            </div>
        </div>
    )
}

export default Work
