
"use server";
import { z } from "zod";
import { formSchema } from "../schema/form";
const hubspot = require('@hubspot/api-client');


export const formSubmit = async (values: z.infer<typeof formSchema>) => {
    const validatedTypes = formSchema.safeParse(values);

    if (!validatedTypes.success) {
        return { error: "Invalid Types" };
    }

    const hubspotClient = new hubspot.Client({ "accessToken": process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN! });

    const { firstName, lastName, companyName, JobTitle, workEmail, projectBudget, services, message, agreed } = validatedTypes.data;

    const agree = agreed ? "true" : "false";

    try {
        const BatchInputSimplePublicObjectInputForCreate = {
            inputs: [{
                "properties": {
                    "email": workEmail,
                    "firstname": firstName, "lastname": lastName,
                    "company": companyName, "jobtitle": JobTitle,
                    "projectbudget": projectBudget,
                    "services": `;${services.join(';')}`,
                    "message": message, "agreed": agree
                }
            }, { "properties": {} }, { "properties": {} }, { "properties": {} }]
        };
        try {
            const apiResponse = await hubspotClient.crm.contacts.batchApi.create(BatchInputSimplePublicObjectInputForCreate);
            console.log(JSON.stringify(apiResponse, null, 2));
        } catch (e:any) {
            e.message === 'HTTP request failed'
                ? console.error(JSON.stringify(e.response, null, 2))
                : console.error(e)
        }
        return { success: true, message: "Form submitted successfully!" };
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error.message };
        }
        return { error: "An unexpected error occurred", message: String(error) };
    }
};
