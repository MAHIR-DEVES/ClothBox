import React from 'react';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Privacy Policy for{' '}
        <Link className="text-blue-500" to={'https://zerodegree.com.bd/'}>
          ZERO DEGREE
        </Link>
      </h1>
      <p>
        At{' '}
        <Link className="text-blue-500" to={'https://zerodegree.com.bd/'}>
          {' '}
          ZERO DEGREE
        </Link>{' '}
        accessible , one of our main priorities is the privacy of our visitors.
        This Privacy Policy document contains types of information that is
        collected and recorded by{' '}
        <Link className="text-blue-500" to={'https://zerodegree.com.bd/'}>
          ZERO DEGREE
        </Link>{' '}
        and how we use it.
      </p>

      <p className="mt-4">
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>

      <p className="mt-4">
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in{' '}
        <Link className="text-blue-500" to={'https://zerodegree.com.bd/'}>
          ZERO DEGREE
        </Link>
        . This policy is not applicable to any information collected offline or
        via channels other than this website. Our Privacy Policy was created
        with the help of the Free Privacy Policy Generator.
      </p>

      {/* Section Headings */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Information We Collect
      </h2>
      <p>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </p>
      <p className="mt-4">
        If you contact us directly, we may receive additional information about
        you such as your name, email address, phone number, the contents of the
        message and/or attachments you may send us, and any other information
        you may choose to provide.
      </p>
      <p className="mt-4">
        When you register for an Account, we may ask for your contact
        information, including items such as name, company name, address, email
        address, and telephone number.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        How we use your information
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>
          Communicate with you, either directly or through one of our partners,
          including for customer service, updates, and marketing purposes
        </li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>

      {/* একইভাবে বাকিগুলো তুমি headings + paragraph/list দিয়ে সাজাতে পারো */}
      {/* Log Files, Cookies, Advertising Partners, CCPA, GDPR, Children’s Info ইত্যাদি */}

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Children’s Information
      </h2>
      <p>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>
      <p className="mt-4">
        <Link className="text-blue-500" to={'https://zerodegree.com.bd/'}>
          ZERO DEGREE
        </Link>{' '}
        does not knowingly collect any Personal Identifiable Information from
        children under the age of 13. If you think that your child provided this
        kind of information on our website, we strongly encourage you to contact
        us immediately and we will do our best efforts to promptly remove such
        information from our records.
      </p>
    </div>
  );
};

export default Policy;
