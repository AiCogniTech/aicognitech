import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const TechButton = ({ text, primary = true }: { text: string, primary?: boolean }) => {
    return (
        <Button className={cn('rounded-[50px] font-bold text-base font-helvetica text-center border hover:cursor-text',
            primary ? "border-secondary text-secondary bg-transparent" : "border-primary text-primary bg-transparent hover:bg-transparent"
        )} size={"lg"}>
            {text}
        </Button>
    )
}

export default TechButton