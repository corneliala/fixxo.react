import React from 'react'
import Navbar from '../components/Navbar';
import BreadcrumbSection from '../components/BreadcrumbSection';
import MapSection from '../components/MapSection';
import ContactFormSection from '../components/ContactFormSection';

const ContactsView = () => {
  window.top.document.title= 'Contacts | Fixxo. '

  return (
    <>
        <Navbar />
        <BreadcrumbSection currentPage="Contacts" />
        <MapSection />
        <ContactFormSection />
    </>
    
  )
}

export default ContactsView;