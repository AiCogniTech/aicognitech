"use client";
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Building2, FileSpreadsheet, LoaderCircle, Mail, MapPin, MessageCircleMore, Phone, User } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';
import { formSchema } from '@/lib/schema/form';
import { formSubmit } from '@/lib/actions/form.actions';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Checkbox } from '../ui/checkbox';
import { servicesItems } from '@/constant/constant';
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
            projectBudget: "<$10k",
            services: [],
            message: "",
            agreed: false,
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
                    if (data?.success) {
                        toast({
                            title: "Submitted!!",
                            description: (data?.message) as string,
                            duration: 2000,
                        });
                    }
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
        <div className="h-full flex flex-col justify-around items-center gap-8 p-8 border-2 border-tertiary rounded-xl bg-secondary text-white">
            <div>
                <h4 className="text-2xl text-primary font-bold">
                    Let’s Grow Together
                </h4>
                <p>
                    Join leading AI Agency growing their business with AiCogniTech,
                    Book a 1:1 demo with us to get started.
                </p>
            </div>
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
                            <FormItem className='col-span-2'>
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
                                    Project Budget:*
                                </FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="<$10k" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {"<$10k"}
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="$10-50k" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {"$10-50k"}
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="$50k-100K" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {"$50k-100K"}
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="$100K+" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {"$100K+"}
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"services"}
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel htmlFor={'services'} className="form_label">
                                    What can we help with? Select all that apply*
                                </FormLabel>
                                {servicesItems.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="services"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item.id)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item.id
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-sm font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
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
                                        placeholder="Please provide us with your project details (data type, volume, timeline, budget, etc)*"
                                        className={'startup-form_textarea'}
                                        rows={5}
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
                        name={"agreed"}
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-center gap-3 shadow col-span-2">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel>
                                    By checking this box you agree to receive promotional email communications from Scale AI. Your data will be processed in accordance with our Privacy Policy and Terms and Conditions. You may opt out of receiving promotional communications at any time.
                                </FormLabel>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="rounded-lg disabled:cursor-progress text-lg py-6 text-secondary"
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