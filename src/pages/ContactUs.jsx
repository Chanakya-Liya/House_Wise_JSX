import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './ContactUs.module.css';

function ContactUsPage() {
  // Handle form submission
  const handleFormSubmit = (formData) => {
    console.log('Form Submitted:', formData);
    alert(`Thank you, ${formData.name}. We will get back to you soon!`);
  };

  return (
    // Render the contact us page with a form
    <div className={styles.contactUsPage}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
}

// Export the ContactUsPage component as the default export
export default ContactUsPage;