import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const CtaButton = ({primary=true}: {primary?: boolean}) => {
    return (
        <Button className={cn('rounded-[50px] font-bold text-base font-helvetica text-center',
            primary ? "bg-primary text-secondary" : "bg-secondary text-primary hover:bg-secondary/80"
        )} size={"lg"}>
            Request Services
        </Button>
    )
}

export default CtaButton