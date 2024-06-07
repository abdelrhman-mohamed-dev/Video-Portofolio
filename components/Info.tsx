import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/fetch'
import { Collaborations, PresonaInformation } from '@/sanity/lib/queries'
import { SanityDocument } from 'next-sanity'


const Info = async () => {
    const PresonaInformationData: SanityDocument[] = await sanityFetch({
        query: PresonaInformation,
    })
    const CollaborationsData: SanityDocument[] = await sanityFetch({
        query: Collaborations
    })
    // console.log(CollaborationsData);
    return (
        <div className='my-8 w-full h-full'>

            <h2 className=' my-12 text-6xl text-teal-200 font-semibold text-center' >Who am I ?</h2>
            <div className=' flex flex-col md:flex-row gap-5 items-center justify-center'>

                <Card className='min-h-80'>
                    <CardHeader>
                        <CardTitle>Presonal Information</CardTitle>

                    </CardHeader>
                    <CardContent>
                        <div className='flex gap-2'>
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>YN</AvatarFallback>
                            </Avatar>
                            <div className='max-w-[400px]'>
                                {PresonaInformationData.length > 0 ? (
                                    <>
                                        <p className='font-medium md:text-2xl underline'>{`@${PresonaInformationData[0].Name}`}</p>
                                        <span>{PresonaInformationData[0].Bio}</span>
                                    </>
                                ) : (
                                    <>
                                        <p className='font-medium md:text-2xl underline'>No data available</p>
                                        <span>No data available</span>
                                    </>
                                )}


                            </div>
                        </div>
                        <div className=''>
                            <p className='mt-2 font-bold text-center'>Contant information</p>
                            <div className=' w-28 mx-auto mt-8 flex items-center justify-between '>
                                <Link target='_blank' href={`${PresonaInformationData[0].WhatsAppLink}`} >
                                    <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp" />
                                </Link>
                                <Link target='_blank' href={`${PresonaInformationData[0].TwitterLink}`} >
                                    <img className='w-8 h-8 bg-slate-100 rounded-md' src="/twitter.png" alt="twitter" />
                                </Link>
                                <Link target='_blank' href={`${PresonaInformationData[0].discordLink}`} >
                                    <img className='w-8 h-8' src="/discord.png" alt="discord" />
                                </Link>

                            </div>
                        </div>
                    </CardContent>

                </Card>
                <Card className='min-h-80'>
                    <CardHeader>
                        <CardTitle>Collaborations</CardTitle>
                        <CardDescription>Collaborations With Leading YouTube Influencers</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='grid gap-5 justify-center'>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                                {CollaborationsData.map((collaboration) => (
                                    <Link href={`${collaboration.ChannelUrl}`} key={collaboration._id} className='flex flex-col gap-2 items-center'>
                                        <p>{collaboration.ChannelName}</p>
                                        <img className='w-24 h-24 rounded-lg' src={collaboration.imageURL} alt="" />
                                    </Link>
                                ))}

                            </div>
                        </div>

                    </CardContent>

                </Card>

            </div>
        </div>
    )
}

export default Info
