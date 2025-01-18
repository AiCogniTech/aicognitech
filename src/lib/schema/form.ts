import * as z from "zod";

export const formSchema = z.object({
    firstName: z.string().min(1, { message: "Please complete this required field." }),
    lastName: z.string().min(1, { message: "Please complete this required field." }),
    companyName: z.string().min(1, { message: "Please complete this required field." }),
    JobTitle: z.string().min(1, { message: "Please complete this required field." }),
    workEmail: z.string().email({ message: "Please complete this required field." }),
    projectBudget: z.number().min(1, { message: "Please complete this required field." }),
    services: z.string().min(1, { message: "Please complete this required field." }),
    message: z.string().min(1, { message: "Please complete this required field." }),
    agreed: z.boolean({ message: "Please complete this required field." }),
});