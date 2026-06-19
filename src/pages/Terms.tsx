import { Layout } from "@/components/layout/Layout";

type Section = {
  heading: string;
  body: string;
};

const sections: Section[] = [
  {
    heading: "Overview",
    body: `Welcome to Daivam Origins! The terms "we", "us" and "our" refer to Daivam Origins, which operates this store and website, including all related information, content, features, tools, products, and services in order to provide you, the customer, with a curated shopping experience (the "Services") powered by Shopify. The below terms and conditions, together with any policies referenced herein (these "Terms of Service" or "Terms"), describe your rights and responsibilities when you use the Services. Please read these Terms of Service carefully, as they include important information about your legal rights and cover areas such as warranty disclaimers and limitations of liability. By visiting, interacting with, or using our Services, you agree to be bound by these Terms of Service and our Privacy Policy; if you do not agree to these Terms of Service or Privacy Policy, you should not use or access our Services.`,
  },

  {
    heading: "Section 1 - Access and Account",
    body: `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, that you have given us your consent to allow any of your minor dependents to use the Services on devices you own, purchase, or manage, and you acknowledge that to use the Services—including accessing, browsing, or purchasing from our online stores—you may be asked to provide correct, current, and complete information (such as email, billing, payment, and shipping data) that you warrant you have all rights necessary to provide. Furthermore, you are solely responsible for maintaining the security of your account credentials and for all of your account activity, and you may not transfer, sell, assign, or license your account to any other person.`,
  },

  {
    heading: "Section 2 - Our Products",
    body: `We have made every effort to provide an accurate representation of our products and services in our online stores; however, colors or product appearance may differ on your screen due to your device settings, and we do not warrant that the quality or appearance of any purchased items will meet your expectations or perfectly match online renderings. All descriptions of products are subject to change at any time without notice at our sole discretion, and we reserve the right to discontinue any product at any time or limit the quantities of any products that we offer to any person, geographic region, or jurisdiction on a case-by-case basis.`,
  },

  {
    heading: "Section 3 - Orders",
    body: `When you place an order, you are making an offer to purchase that Daivam Origins reserves the right to accept or decline for any reason at its discretion, meaning your order is not accepted until we receive and process your payment and confirm acceptance; please review your order carefully before submitting because we may be unable to accommodate cancellation requests, though if we do change or cancel an order, we will attempt to notify you via the email, billing address, or phone number provided. Additionally, all purchases are subject to return or exchange solely in accordance with our Refund Policy [LINK], and you represent and warrant that your purchases are strictly for your own personal or household use and not for commercial resale or export.`,
  },

  {
    heading: "Section 4 - Prices and Billing",
    body: `Prices, discounts, and promotions are subject to change without notice, meaning the price charged will be the one in effect at the time the order is placed (as set out in your confirmation email) and will not include taxes, shipping, handling, customs, or import charges unless expressly stated. Prices posted online may differ from physical or third-party stores, and any separate promotional terms will govern in the event of a conflict with these Terms. Finally, you agree to provide prompt, current, complete, and accurate purchase, payment, and account information, and you represent and warrant that your provided credit card details are true, that you are authorized to use the card, and that all incurred charges, taxes, and shipping fees will be honored by your credit card company.`,
  },

  {
    heading: "Section 5 - Shipping and Delivery",
    body: `We are not liable for shipping and delivery delays, as all delivery times are estimates only and are not guaranteed, nor are we responsible for delays caused by shipping carriers, customs processing, or events outside our control; once we transfer products to the carrier, title and risk of loss officially passes to you.`,
  },

  {
    heading: "Section 6 - Intellectual Property",
    body: `Our Services, including all trademarks, brands, text, displays, images, graphics, reviews, video, audio, and their overall arrangement, are owned by Daivam Origins, its affiliates, or licensors and are protected by U.S. and foreign intellectual property laws, permitting you to use the Services for personal, non-commercial use only.`,
  },

  {
    heading: "Section 7 - Optional Tools",
    body: `You acknowledge and agree that we provide access to third-party customer tools "as is" and "as available" without any warranties, representations, conditions, or endorsements of any kind, meaning we shall have no liability whatsoever arising from or relating to your use of these optional tools, which you utilize entirely at your own risk and discretion in accordance with the relevant third-party provider's terms.`,
  },

  {
    heading: "Section 8 - Third-Party Links",
    body: `The Services may contain materials and hyperlinks to websites provided or operated by third parties, but we are not responsible for examining or evaluating their content or accuracy, meaning that if you choose to leave the Services to access them, you do so entirely at your own risk.`,
  },

  {
    heading: "Section 9 - Privacy Policy",
    body: `All personal information we collect through the Services is subject to our Privacy Policy [LINK], and certain information may be subject to Shopify's Privacy Policy, both of which you acknowledge having read by using our Services.`,
  },

  {
    heading: "Section 10 - Feedback",
    body: `If you submit, upload, post, email, or otherwise transmit any ideas, suggestions, feedback, reviews, proposals, plans, or other content (collectively, "Feedback"), you grant us a perpetual, worldwide, sublicensable, royalty-free license to use, reproduce, modify, publish, distribute, and display such Feedback in any medium for any purpose, including commercial use, without any obligation to maintain confidence, pay compensation, or respond.`,
  },

  {
    heading: "Section 11 - Errors, Inaccuracies and Omissions",
    body: `Occasionally there may be information on or in the Services that contains typographical errors, inaccuracies, or omissions relating to product descriptions, pricing, promotions, offers, product shipping charges, transit times, and availability; we reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information or cancel orders if any information is inaccurate at any time without prior notice, including after you have submitted your order.`,
  },

  {
    heading: "Section 12 - Prohibited Uses",
    body: `You may access and use the Services for lawful purposes only and are strictly prohibited from using them for unlawful activities, intellectual property infringement, malicious software distribution, automated scraping, impersonation, spam, fraud, harassment, or any activity that may disrupt or harm the Services, Daivam Origins, Shopify, or other users.`,
  },

  {
    heading: "Section 13 - Agents",
    body: `This section applies if you use, allow, enable, or cause the deployment of an Agent—defined as software or services that take autonomous or semi-autonomous actions—to access or interact with our Services.`,
  },

  {
    heading: "Section 14 - Termination",
    body: `We may terminate this agreement or your access to the Services at any time without notice, and you will remain liable for all amounts due up to the date of termination.`,
  },

  {
    heading: "Section 15 - Disclaimer of Warranties",
    body: `The Services and all products offered through the Services are provided "as is" and "as available" without any warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, durability, title, and non-infringement.`,
  },

  {
    heading: "Section 16 - Limitation of Liability",
    body: `To the fullest extent permitted by law, Daivam Origins and its affiliates, employees, partners, contractors, licensors, and Shopify shall not be liable for any indirect, incidental, punitive, special, or consequential damages arising from your use of the Services or products purchased through the Services.`,
  },

  {
    heading: "Section 17 - Indemnification",
    body: `You agree to indemnify, defend, and hold harmless Daivam Origins, Shopify, and all related affiliates, employees, contractors, licensors, and partners from any claims, liabilities, damages, losses, or expenses arising out of your breach of these Terms, violation of any law, or misuse of the Services.`,
  },

  {
    heading: "Section 18 - Severability",
    body: `If any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, the remaining provisions shall remain fully valid and enforceable to the fullest extent permitted by applicable law.`,
  },

  {
    heading: "Section 19 - Waiver; Entire Agreement",
    body: `These Terms of Service, together with all related policies and operating rules posted by us, constitute the entire agreement between you and Daivam Origins regarding your use of the Services and supersede any prior agreements or communications.`,
  },

  {
    heading: "Section 20 - Assignment",
    body: `You may not transfer or assign your rights or obligations under these Terms without our prior written consent, while Daivam Origins may freely assign or transfer these Terms without notice or consent.`,
  },

  {
    heading: "Section 21 - Governing Law",
    body: `These Terms of Service and any related agreements shall be governed and interpreted in accordance with the laws and courts of the jurisdiction where Daivam Origins is headquartered, and both parties consent to the exclusive jurisdiction of such courts.`,
  },

  {
    heading: "Section 22 - Headings",
    body: `The headings used in these Terms are included solely for convenience and shall not affect the interpretation or meaning of any provision.`,
  },

  {
    heading: "Section 23 - Changes to Terms of Service",
    body: `We reserve the right to update, modify, or replace any part of these Terms of Service at any time by posting updates to our website, and your continued use of the Services following any such changes constitutes acceptance of those modifications.`,
  },

  {
    heading: "Section 24 - Contact Information",
    body: `Questions about the Terms of Service should be sent to us at contact@daivamorigins.com.`,
  },
];

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto w-full px-5 md:px-10 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">
            Daivam Origins
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Terms of Service
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