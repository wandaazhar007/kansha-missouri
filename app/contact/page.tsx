import BreadcrumbContact from "../components/contact/BreadcrumbContact";
import FormContact from "../components/contact/FormContact";

export const metadata = {
  title: 'Contact Kansha Hibachi Express',
  description: 'Connect with Kansha Hibachi Express. Reach out to us for reservations, inquiries, and a sizzling hibachi experience. Our team is here to assist you in creating unforgettable dining memories.',
}

const ContactPage: React.FC = () => {
  return (
    <>
      <BreadcrumbContact />
      <FormContact />
    </>
  );
}

export default ContactPage;