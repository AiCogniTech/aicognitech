import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';


const CtaButton = async ({ primary = true, text = "#contact" }: { primary?: boolean, text?: string }) => {
    const t = await getTranslations("button");
    return (
        <Button className={cn('rounded-[50px] font-bold text-base font-helvetica text-center w-auto',
            primary ? "bg-primary text-secondary" : "bg-secondary text-primary hover:bg-secondary/80"
        )} size={"lg"}
        >
            <Link href={text}>
                {t("ctabuton")}
            </Link>
        </Button>
    )
}

export default CtaButton