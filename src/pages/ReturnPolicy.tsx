import { Layout } from "@/components/layout/Layout";

type Section = {
  heading: string;
  body: string;
};

const sections: Section[] = [
  {
    heading: "30-Day Return Window",
    body: `We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.`,
  },

  {
    heading: "Eligibility Criteria",
    body: `To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.`,
  },

  {
    heading: "How to Start a Return",
    body: `To start a return, you can contact us at contact@daivamorigins.com. If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. You can always contact us for any return questions at contact@daivamorigins.com, WhatsApp: +91 96866 92255.`,
  },

  {
    heading: "Damages and Issues",
    body: `Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right.`,
  },

  {
    heading: "Non-Returnable Items and Exceptions",
    body: `Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Unfortunately, we cannot accept returns on sale items or gift cards. Please get in touch if you have questions or concerns about your specific item.`,
  },

  {
    heading: "Product Exchanges",
    body: `The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.`,
  },

  {
    heading: "European Union 14-Day Cooling-Off Period",
    body: `Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.`,
  },

  {
    heading: "Refunds and Deductions",
    body: `We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you will be automatically refunded on your original payment method within 10 business days. Please note that all refunds will be processed after the deduction of non-refundable processing fees charged by our payment gateways (such as PayPal & Stripe). Please remember it can take some time for your bank or credit card company to process and post the refund too. If more than 15 business days have passed since we’ve approved your return, please contact us at contact@daivamorigins.com.`,
  },
];

export default function ReturnPolicy() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto w-full px-5 md:px-10 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">
            Daivam Origins
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Return & Refund Policy
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