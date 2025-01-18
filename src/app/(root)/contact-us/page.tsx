import ContactForm from '@/components/contacts/ContactForm'
import ContactHero from '@/components/contacts/ContactHero'
import TransformBusiness from '@/components/root/TransformBusiness'
import React from "react";

const ContactPage = () => {
    return (
        <main>
            <ContactHero />
            <TransformBusiness>
                <ContactForm />
            </TransformBusiness>
        </main>
    )
}

export default ContactPage