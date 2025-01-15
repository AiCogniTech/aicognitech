import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const TechButton = ({ text, primary = true }: { text: string, primary?: boolean }) => {
    return (
        <Button className={cn('rounded-[50px] font-bold text-base font-helvetica text-center border',
            primary ? "border-secondary text-secondary" : "border-primary text-primary"
        )} size={"lg"}>
            {text}
        </Button>
    )
}

export default TechButton