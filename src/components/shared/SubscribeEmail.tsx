"use client"
import React, { useTransition } from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import * as z from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'

const emailSchema = z.object({
    email: z.string().email()
})

const SubscribeEmail = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: ""
        }
    })
    const onSubmit = (values: z.infer<typeof emailSchema>) => {
        startTransition(() => {
            console.log(values)
            form.reset()
        });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-start md:flex-row md:items-center gap-3 w-full'>
                <FormField
                    control={form.control}
                    name={"email"}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    id={'workEmail'}
                                    {...field}
                                    type="email"
                                    placeholder="Enter your Email***"
                                    className={cn('rounded-[50px] font-bold text-base font-helvetica text-primary placeholder:text-text-secodnary border-2 border-secondary') }
                                    disabled={isPending}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className={cn('rounded-[50px] font-bold text-base font-helvetica text-center bg-secondary text-primary hover:bg-secondary/80')} size={"lg"} type={"submit"} disabled={isPending}>
                    Request Services
                </Button>
            </form>
        </Form>
    )
}

export default SubscribeEmail