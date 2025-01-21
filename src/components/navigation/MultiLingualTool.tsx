"use client";
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import UK from "@/../public/images/united-kingdom.png"
import Gr from "@/../public/images/germany.png"
import Sp from "@/../public/images/spain.png"
import Fr from "@/../public/images/france.png"
import It from "@/../public/images/italy.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const MultiLingualTool = () => {
    const router = useRouter();
    // const { pathname, query, asPath, locale } = router;
    // const switchLanguage = (lang: string) => {
    //     router.push({ pathname, query }, asPath, { locale: lang });
    //   };
    console.log(`Router: ${router}`)
    const data = [
        {
            title: "EN",
            value: "en",
            icon: UK,
            // onClick: () => switchLanguage('en')
        },
        {
            title: "DE",
            value: "de",
            icon: Gr,
            // onClick: () => switchLanguage('de')
        },
        {
            title: "ES",
            value: "es",
            icon: Sp,
            // onClick: () => switchLanguage('es')
        },
        {
            title: "FR",
            value: "fr",
            icon: Fr,
            // onClick: () => switchLanguage('fr')
        },
        {
            title: "IT",
            value: "it",
            icon: It,
            // onClick: () => switchLanguage('it')
        },
    ]
    return (
        <Select defaultValue='en'>
            <SelectTrigger className="rounded-full font-normal font-helvetica">
                <SelectValue placeholder="Select Language"/>
            </SelectTrigger>
            <SelectContent className='bg-secondary text-text'>
                {data.map((item, index) => (
                    <SelectItem key={index} value={item.value} className='focus:cursor-pointer'>
                        <div className='flex items-center gap-2'>
                            <Image src={item.icon} alt={item.title} height={20} width={20} />
                            <span className='font-helvetica font-normal hidden md:inline'>{item.title}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default MultiLingualTool