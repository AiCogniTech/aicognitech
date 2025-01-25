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
import { Locale, routing, usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

const MultiLingualTool = () => {
    const router = useRouter();

    const pathname = usePathname();
    const params = useParams();

    const localeLang = useLocale();
  
    function onSelectChange(nextLocale: string) {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale as Locale }
      );
    }
  
      
    // console.log(routing)
    // console.log(`Router: ${router}`)
    const data = [
        {
            title: "EN",
            value: routing?.locales[0],
            icon: UK,
        },
        {
            title: "DE",
            value: routing?.locales[2],
            icon: Gr,
        },
        {
            title: "ES",
            value: routing?.locales[4],
            icon: Sp,
        },
        {
            title: "FR",
            value: routing?.locales[1],
            icon: Fr,
        },
        {
            title: "IT",
            value: routing?.locales[3],
            icon: It,
        },
    ]
    return (
        <Select defaultValue={localeLang} onValueChange={onSelectChange}>
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