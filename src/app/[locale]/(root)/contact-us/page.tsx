import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
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