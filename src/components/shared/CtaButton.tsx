import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const CtaButton = ({primary=true}: {primary?: boolean}) => {
    return (
        <Button className={cn('rounded-[50px] font-bold text-base font-inter text-center',
            primary ? "bg-primary text-tertiary" : "bg-tertiary text-primary"
        )} size={"lg"}>
            Request Services
        </Button>
    )
}

export default CtaButton