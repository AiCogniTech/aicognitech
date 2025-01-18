
"use server";
import { z } from "zod";
import { formSchema } from "../schema/form";

export const formSubmit = async (values: z.infer<typeof formSchema>) => {
    const validatedTypes = formSchema.safeParse(values);

    if (!validatedTypes.success) {
        return { error: "Invalid Types" };
    }

    const { firstName, lastName, companyName, JobTitle, workEmail, projectBudget, services, message, agreed } = validatedTypes.data;

    try {
        console.log(firstName, lastName, companyName, JobTitle, workEmail, projectBudget, services, message, agreed);
        // Handle other spreadsheet operations here

        return { success: true, message: "Form submitted successfully!" };
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error.message };
        }
        return { error: "An unexpected error occurred", message: String(error) };
    }
};
