"use client";
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Building2, FileSpreadsheet, LoaderCircle, Mail, MapPin, MessageCircleMore, Phone, User } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';
import { formSchema } from '@/lib/schema/form';
import { formSubmit } from '@/lib/actions/form.actions';
// import { cn } from '@/lib/utils';

const ContactForm = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            companyName: "",
            JobTitle: "",
            workEmail: "",
            projectBudget: 3000,
            services: "",
            message: "",
            agreed: undefined,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        startTransition(() => {
            formSubmit(values)
            .then((data) => {
                if (data?.error) {
                    toast({
                        title: "Failed Form",
                        description: (data?.error) as string,
                        variant: "destructive",
                        duration: 2000,
                    });
                }
                // if (data?.success) {
                //     toast({
                //         title: "Sended!",
                //         description: (data?.message) as string,
                //         duration: 2000,
                //     });
                // }
            })
            .catch((error) => {
                toast({
                    title: "Failed",
                    description: error.message,
                    variant: "destructive",
                    duration: 2000,
                });
            })
            .finally(() => {
                form.reset();
            });
        });
    }


    return (
        <div className="h-auto flex flex-col justify-around items-center gap-8 border border-secondary">
            <h4 className="text-2xl text-secondary font-bold">
                Book a Free Consultation Call
            </h4>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins'
                >
                    <FormField
                        control={form.control}
                        name={"firstName"}
                        render={({ field }) => (
                            <FormItem className='col-span-2 md:col-span-1'>
                                <FormControl>
                                    <Input
                                        id={'firstName'}
                                        {...field}
                                        type="text"
                                        placeholder="First name*"
                                        className={'startup-form_input'}
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                        }}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"lastName"}
                        render={({ field }) => (
                            <FormItem className='col-span-2 md:col-span-1'>
                                <FormControl>
                                    <Input
                                        id={'lastName'}
                                        {...field}
                                        type="text"
                                        placeholder="Last name*"
                                        className={'startup-form_input'}
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                        }}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"companyName"}
                        render={({ field }) => (
                            <FormItem className='col-span-2 md:col-span-1'>
                                <FormControl>
                                    <Input
                                        id={'companyName'}
                                        {...field}
                                        type="text"
                                        placeholder="Company Name*"
                                        className={'startup-form_input'}
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                        }}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"JobTitle"}
                        render={({ field }) => (
                            <FormItem className='col-span-2 md:col-span-1'>
                                <FormControl>
                                    <Input
                                        id={'JobTitle'}
                                        {...field}
                                        type="text"
                                        placeholder="Job Title*"
                                        className={'startup-form_input'}
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                        }}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"workEmail"}
                        render={({ field }) => (
                            <FormItem className='col-span-2 md:col-span-1'>
                                <FormControl>
                                    <Input
                                        id={'workEmail'}
                                        {...field}
                                        type="email"
                                        placeholder="Work Email*"
                                        className={'startup-form_input'}
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                        }}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"projectBudget"}
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel htmlFor={'projectBudget'} className="form_label">
                                    Project Budget: ${field.value}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id={'projectBudget'}
                                        onChange={(e) => {
                                            field.onChange(e.target.value); // Set the first value from the array
                                        }}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name={"message"}
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel htmlFor={'message'} className="form_label">
                                    <MessageCircleMore />
                                    Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        id={'description'}
                                        {...field}
                                        placeholder="Please provide us with your project brief before the meeting, so we can prepare and align the relevant team. If you have PDF document of your brief, we highly recommend uploading it using the field below."
                                        className={'startup-form_textarea'}
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                        }}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="rounded-lg disabled:cursor-progress text-lg py-6 bg-secondary"
                        disabled={isPending}
                    >
                        {isPending ? <LoaderCircle className="animate-spin size-6" /> : 'Submit'}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm