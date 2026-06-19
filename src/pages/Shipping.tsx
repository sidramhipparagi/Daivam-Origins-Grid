import { Layout } from "@/components/layout/Layout";

export default function Shipping() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto w-full px-5 md:px-10 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Shipping Policy</h1>
        </div>

        <div className="space-y-10">
          {[
            {
              body: (
                <>
                  <p>Effective Date: April 20, 2026</p>
                  <p>Website: https://daivamorigins.com</p>
                  <p>Business Name: Daivam Origins</p>
                  <p>Contact Email: contact@daivamorigins.com</p>
                </>
              ),
            },
            {
              heading: "Introduction",
              body: "This Shipping Policy explains how orders are processed, packed, and shipped by Daivam Origins for customers in India and international destinations. By placing an order with us, you acknowledge that shipping timelines, carrier availability, customs procedures, and destination-country regulations may affect delivery. This policy should be read together with our Terms of Service, Privacy Policy, and any order-specific communication.",
            },
            {
              heading: "Shipping Scope",
              body: "We ship metal craft products to selected domestic and international destinations, subject to product availability, legal restrictions, and carrier serviceability. International shipments are handled through trusted logistics partners such as DHL, FedEx, UPS, or equivalent courier or freight providers, depending on destination, shipment size, and service suitability. The shipping method used for each order may vary based on product type, quantity, value, destination, and delivery urgency.",
            },
            {
              heading: "Order Processing and Production Time",
              body: "Orders are processed after confirmation of payment and verification of shipping details. Because our metal crafts are intricately handmade, they require a production and processing time of approximately 3 to 4 weeks before dispatch. Processing times may also vary based on customization requirements, packaging needs, export documentation, and seasonal order volumes. If any additional information is required to complete shipping, we may contact you by email or phone.",
            },
            {
              heading: "Shipping Methods",
              body: "For international deliveries, we use express courier services, air freight, or other logistics solutions depending on the order. Common shipping partners include DHL, FedEx, UPS, and other trusted local or international carriers. The final carrier selection is made by us unless a specific service has been agreed upon in writing.",
            },
            {
              heading: "Estimated Delivery Time",
              body: "Once production is complete and your order is dispatched, international shipping generally takes approximately 1 week to reach its destination. Please note that delivery timelines are estimates and not guaranteed delivery dates. Delays may occur due to customs inspections or clearance, public holidays, carrier delays, weather or transport disruptions, incorrect shipping information, or destination-country restrictions.",
            },
            {
              heading: "Shipping Charges",
              body: "There are no shipping charges applicable to your order; we offer complimentary shipping to our domestic and international destinations. However, please note that any duties, taxes, customs fees, or local import charges imposed by the destination country remain the responsibility of the buyer unless otherwise agreed in writing.",
            },
            {
              heading: "Customs, Duties, and Import Clearance",
              body: "International shipments may be subject to customs inspection, import duties, taxes, brokerage charges, or other local government fees. We handle all customs clearance procedures and cover any applicable import duties or local fees on your behalf. While we provide all necessary export documentation and manage the clearance process, please note that any unexpected regulatory delays at the destination country’s customs checkpoints remain outside our direct control.",
            },
            {
              heading: "Packaging",
              body: "We take great care to pack products securely and appropriately using specialized materials to reduce the risk of damage during transit. Packaging is selected based on the product’s nature, fragility, size, and export requirements. Special packaging or additional protective materials may be used at our discretion or upon request, subject to additional charges.",
            },
            {
              heading: "Shipping Address and Order Accuracy",
              body: "The buyer is responsible for providing complete and accurate shipping information, including full name, complete address, postal code, country, valid phone number, and email address. We are not responsible for delays, failed delivery, or extra charges caused by incorrect or incomplete information supplied by the buyer.",
            },
            {
              heading: "Shipment Tracking",
              body: "Where tracking is available, tracking details will be shared with the buyer after dispatch. Tracking updates are controlled by the shipping carrier and may not always appear in real time. We are not responsible for missing or delayed tracking updates caused by the carrier's system.",
            },
            {
              heading: "Delivery Attempts and Failed Delivery",
              body: "Carriers attempt delivery based on their own service policies. If a shipment cannot be delivered due to an incorrect address, refusal to accept the parcel, or absence of the recipient, the order may be held, returned, or abandoned depending on carrier policy. Any re-shipping, return-to-origin, storage, or redelivery charges will be borne by the buyer.",
            },
            {
              heading: "Damage, Loss, or Missing Shipment",
              body: "If a package arrives damaged or appears tampered with, the buyer should notify us promptly with photographs and relevant details. If a shipment is lost in transit, we will coordinate with the carrier and review the matter in accordance with the carrier’s claim process. Resolution, compensation, or replacement will depend on the carrier's investigation, order value, and evidence provided. Claims must be raised within a reasonable time after delivery or the expected delivery date.",
            },
            {
              heading: "Shipping Insurance",
              body: "Shipping insurance may be included, optional, or added on request, depending on the order and destination. If insurance is not included, any compensation for transit loss or damage may be limited by the carrier’s liability terms. Where insurance is available or purchased, the claim will be handled according to the insurer’s or carrier’s process.",
            },
            {
              heading: "Special and Bulk Orders",
              body: "Bulk, made-to-order, or customized export orders may require special handling, longer production schedules, or separate shipping arrangements. In such cases, timelines and freight methods may differ from standard parcel shipments. Any special terms agreed upon in a quotation, invoice, or written communication will apply to that order.",
            },
            {
              heading: "Force Majeure and Shipping Interruptions",
              body: "We are not responsible for delays or inability to ship caused by events beyond our reasonable control, including natural disasters, war, civil unrest, port congestion, carrier strikes, government restrictions, or global supply chain disruptions. In such cases, shipping schedules may be extended without liability to us.",
            },
            {
              heading: "Changes to This Policy",
              body: "We may update this Shipping Policy from time to time to reflect changes in our business, carriers, or shipping procedures. Any updated version will be posted on this page with a revised effective date.",
            },
            {
              heading: "Contact Us",
              body: (
                <>
                  <p>For shipping-related questions, please contact:</p>
                  <p>DAIVAM ORIGINS</p>
                  <p>Phone: +91 96866 92255</p>
                  <p>WhatsApp: +91 96866 92255</p>
                  <p>Contact Email: contact@daivamorigins.com</p>
                </>
              ),
            },
          ].map((section) => (
            <div key={section.heading}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-3">{section.heading}</h2>
              <p className="text-sm text-black/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
