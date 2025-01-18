import * as z from "zod";

export const formSchema = z.object({
    firstName: z.string().min(1, { message: "Please complete this required field." }),
    lastName: z.string().min(1, { message: "Please complete this required field." }),
    companyName: z.string().min(1, { message: "Please complete this required field." }),
    JobTitle: z.string().min(1, { message: "Please complete this required field." }),
    workEmail: z.string().email({ message: "Please complete this required field." }),
    projectBudget: z.enum(["<$10k", "$10-50k", "$50k-100K", "$100K+"], {
        required_error: "Please complete this required field.",
      }),
    services: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
    message: z.string().min(1, { message: "Please complete this required field." }),
    agreed: z.boolean({ message: "Please complete this required field." }),
});