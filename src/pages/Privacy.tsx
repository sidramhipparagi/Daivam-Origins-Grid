import { Layout } from "@/components/layout/Layout";

type Section = {
  heading: string;
  body: string;
};

const sections: Section[] = [
  {
    heading: "Last Updated",
    body: "April 20, 2026",
  },

  {
    heading: "Overview",
    body: `Daivam Origins operates this store and website, including all related information, content, features, tools, products, and services, in order to provide you, the customer, with a curated shopping experience (the "Services") powered by Shopify, which enables us to provide the Services to you. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us, and if there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information. Please read this Privacy Policy carefully, as by using and accessing any of the Services, you acknowledge that you have read and understand the collection, use, and disclosure of your information as described herein.`,
  },

  {
    heading: "Personal Information We Collect or Process",
    body: `When we use the term "personal information," we are referring to information that identifies or can reasonably be linked to you or another person, excluding anonymous or de-identified data. Depending on how you interact with the Services, where you live, and as permitted or required by applicable law, we may collect or process contact details (name, billing and shipping addresses, phone number, email), financial information (credit/debit card numbers, transaction details, payment confirmations), account credentials (username, password, security questions, settings), transaction history (items viewed, added to cart or wishlist, purchased, returned, or canceled), communication logs (customer support inquiries), device details (IP address, browser type, network connection, unique identifiers), and usage data regarding your navigation and interaction with the Services.`,
  },

  {
    heading: "Personal Information Sources",
    body: `We collect personal information directly from you when you create an account, use the Services, or communicate with us; automatically from your device through the use of cookies and similar tracking technologies; from our service providers who collect or process data on our behalf to enable certain technologies; and from our business partners or other third parties.`,
  },

  {
    heading: "How We Use Your Personal Information",
    body: `We use your personal information to provide, tailor, and improve the Services (such as processing payments, fulfilling orders, managing accounts, arranging shipping, facilitating returns, and offering customized product recommendations); for marketing and advertising purposes (including sending promotional emails, texts, or mail, and displaying targeted online advertisements based on your past activity); for security and fraud prevention (authenticating accounts, ensuring secure transactions, and detecting or investigating malicious or illegal activity); to communicate with you and provide customer support; and for legal reasons to comply with applicable laws, respond to valid legal processes, or enforce our terms and policies.`,
  },

  {
    heading: "How We Disclose Personal Information",
    body: `We may disclose your personal information to third parties for legitimate business purposes, including sharing data with Shopify and other vendors who perform services on our behalf (such as IT management, payment processing, data analytics, customer support, and order fulfillment); with business and marketing partners to support personalized advertising (subject to your right to opt-out depending on your residence); with third parties when you explicitly direct or consent to the disclosure (such as via social media widgets or shipping carriers); with our corporate affiliates; and in connection with business transactions like mergers or bankruptcies, or to comply with legal obligations and protect our corporate rights.`,
  },

  {
    heading: "Third Party Websites and Links",
    body: `The Services may provide hyperlinks to third-party websites or online platforms that are not affiliated with or controlled by us; therefore, we do not guarantee and are not responsible for their privacy or security policies, meaning that any information you provide on these external sites or public venues is shared entirely at your own risk.`,
  },

  {
    heading: "Children's Data",
    body: `The Services are not intended for use by children, and we do not knowingly collect personal information from individuals under the age of majority in their jurisdiction; if you are a parent or guardian who believes a child has provided us with personal data, you may contact us to request its deletion, and as of the effective date, we have no actual knowledge that we "share" or "sell" personal information of individuals under 16 years of age.`,
  },

  {
    heading: "Security and Retention of Your Information",
    body: `While we employ industry-standard practices, no security measures are perfect or impenetrable, and because information sent to us may not be secure while in transit, we recommend against using unsecure channels to communicate sensitive information. We retain your personal data based on various factors, including the necessity to maintain your account, provide the Services, comply with legal obligations, resolve disputes, and enforce our contracts and policies.`,
  },

  {
    heading: "Your Rights and Choices",
    body: `Depending on where you live, you may have the right to access, delete, correct, or port your personal information, as well as the right to opt-out of the "sale" or "sharing" of your data for targeted advertising (which we automatically honor via the Global Privacy Control signal for compatible browsers), though these rights are not absolute and may be declined as permitted by law. You can manage your communication preferences and opt-out of promotional emails at any time by using the unsubscribe link provided in our emails, though we may still send you essential non-promotional messages regarding your account or active orders. To exercise your rights, or to learn more about how Shopify processes your data, you can submit a request to us or visit the Shopify Privacy Portal, and we guarantee that you will not be discriminated against, though we may require identity verification or proof of authorization if you are using an authorized agent.`,
  },

  {
    heading: "Complaints",
    body: `If you have complaints about how we process your personal information, please reach out to us directly, and depending on your jurisdiction, you may also have the right to appeal our decision or lodge an official complaint with your local data protection authority.`,
  },

  {
    heading: "International Transfers",
    body: `Please note that we may transfer, store, and process your personal information outside of your home country; however, if we transfer data out of the European Economic Area (EEA) or the United Kingdom (UK), we will rely on recognized transfer mechanisms such as the European Commission's Standard Contractual Clauses (SCCs) unless the destination country has been formally designated as providing an adequate level of data protection.`,
  },

  {
    heading: "Changes to This Privacy Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons, and we will notify you of any updates by posting the revised version on this website and updating the "Last updated" date accordingly.`,
  },

  {
    heading: "Contact Information",
    body: `Should you have any questions about our privacy practices, wish to file a complaint, or would like to exercise any of the consumer rights available to you, please contact us via email at contact@daivamorigins.com.`,
  },
];

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto w-full px-5 md:px-10 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">
            Daivam Origins
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-3">
                {section.heading}
              </h2>

              <p className="text-sm text-black/70 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}