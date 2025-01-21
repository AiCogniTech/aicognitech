"use client";
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation';


const CtaButton = ({primary=true, text="#contact"}: {primary?: boolean,text?: string}) => {
    const router = useRouter();
    return (
        <Button className={cn('rounded-[50px] font-bold text-base font-helvetica text-center w-40',
            primary ? "bg-primary text-secondary" : "bg-secondary text-primary hover:bg-secondary/80"
        )} size={"lg"}
        onClick={() => router.push(`${text}`)}
        >
            Request Services
        </Button>
    )
}

export default CtaButton