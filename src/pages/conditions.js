import * as React from "react";
import Contact from "../svgs/Contact.svg";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import X from "../images/phoeni-X.png";

const ConditionsPage = () => {
  return (
    <Layout>
      <Hero
        heroClass="hero-top"
        headingClass={"mb-5"}
        offsetMax={1}
        offsetMid={1}
        offsetMin={1}
        colSizeMax={10}
        colSizeMin={6}
        colSizeMid={5}
        svgImage={<Contact className="h-100 contact-hero" />}
        bg="bg-primary"
        heading={"TERMS & CONDITIONS"}
        coverImage={X}
        coverImageClassName="x-Mobile"
      />
      <Container fluid className="padding-xl">
        <div className="mx-auto mw-small">
          <p className="subheading">
            Phoenix Insights & Strategy B.V. - General Terms and Conditions
          </p>
          <p>
            These general Terms and Conditions have been filed with the Dutch
            Chamber of Commerce on <strong>March 17, 2022</strong>, under number{" "}
            <strong>83915370.</strong>
          </p>
          <p className="subheading mb-2">1. Definitions</p>
          <p>
            Unless explicitly stated otherwise in these terms and conditions,
            the following terms shall have the following definitions:
          </p>
          <ul>
            <li>
              1.1.1. Client: the party that assigns the Contractor to perform
              certain services.
            </li>
            <li>
              1.1.2 Confidential Information: the Engagement between the Client
              and the Contractor and the information provided by one Party to
              the other Party in the context of this Engagement, including, but
              not limited to, figures, reports, recommendations or other
              expressions of either Party. Notwithstanding the foregoing,
              Confidential Information shall not include information that (a) is
              already in or has become part of the public domain other than as a
              result of a breach of the confidentiality obligations under the
              Engagement and/or (b) has been independently developed by a Party
              without reference to or use of Confidential Information of the
              other Party.
            </li>
            <li>1.1.3 Contractor: Phoenix Insights & Strategy B.V.</li>
            <li>
              1.1.4. Engagement: the oral or written agreement in which the
              Contractor agrees to provide services for the Client as well as
              any other agreement between the Client and the Contractor,
              including but not limited to agreements for the sale of goods.
            </li>
            <li>
              1.1.5. Party or Parties: the Client or the Contractor,
              respectively the Client and the Contractor.
            </li>
            <li>
              1.1.6. Quote: a written or oral offer of the Contractor to the
              Client, containing a more or less specified description of the
              services to be provided by the Contractor and an estimate of the
              costs involved with the performance of these services.
            </li>
            <li>
              1.1.7. Terms and Conditions: these general terms and conditions.
            </li>
          </ul>
          <p className="subheading mb-2">2. Scope of Application</p>
          <ul>
            <li>
              2.1. The Terms and Conditions shall apply to all Quotes made by
              the Contractor to the Client and to all Engagements between the
              Client and the Contractor, unless both Parties have expressly and
              in writing declared the Terms and Conditions to be, in full or in
              part, non-applicable, or applicable only to the extent that they
              do not conflict with other written arrangements between the Client
              and the Contractor.
            </li>
            <li>
              2.2. The applicability of any other set of general terms and
              conditions, including but not limited to the general terms and
              conditions of the Client, is expressly rejected by the Contractor.
            </li>
            <li>
              2.3. The Contractor shall reserve the right to amend or supplement
              the Terms and Conditions at any time and with immediate effect.
              The Contractor shall endeavour to inform the Client of any
              material amendments or supplements made to the Terms and
              Conditions after the conclusion of the Engagement.
            </li>
          </ul>
          <p className="subheading mb-2">3. Quotes</p>
          <ul>
            <li>
              3.1. All Quotes are made free of obligation and are non-binding,
              unless explicitly stated otherwise by the Contractor in writing.
              The Contractor reserves the right to rescind their Quote at any
              time, and may amend their Quote at any time before acceptance by
              the Client upon becoming aware of any circumstances that would
              justify amendment.
            </li>
            <li>
              3.2 Every Quote is based on performance of the Engagement by the
              Contractor under normal conditions and during normal working
              hours.
            </li>
            <li>
              3.3. Unless explicitly agreed otherwise, Quotes provided by the
              Contractor to the Client shall not automatically apply to future
              similar Engagements with the same Client.
            </li>
          </ul>
          <p className="subheading mb-2">4. Conclusion of Engagement</p>
          <ul>
            <li>
              4.1. An Engagements between the Client and the Contractor shall be
              deemed to come into effect upon the earlier of a) the written
              confirmation by the Contractor of the acceptance of the Quote by
              the Client or b) the commencement of the execution of the
              Engagement by the Contractor upon acceptance of the Quote by the
              Client.
            </li>
            <li>
              4.2. If, at the request of the Client, the Contractor commences
              execution before an Engagement is concluded, the Contractor shall
              be entitled to compensation for the activities performed in
              accordance with the applicable rates of the Contractor, unless
              Parties have explicitly agreed otherwise in writing.
            </li>
            <li>
              4.3. Insofar as the acceptance by the Client of the Quote should
              deviate from, or supplement, the Quote of the Contractor, such
              deviating and/or supplementary provisions shall only be binding on
              the Contractor to the extent that the Contractor has explicitly
              accepted these provisions in writing.
            </li>
          </ul>
          <p className="subheading mb-2">5. Execution of the Engagment</p>
          <ul>
            <li>
              5.1. All Engagements shall be performed by the Contractor to best
              of the knowledge and ability of the Contractor, and in accordance
              with the applicable professional standards. The Contractor shall
              be bound by a best-efforts obligation in relation to the
              Engagement.
            </li>
            <li>
              5.2. The Contractor shall determine the manner in which the
              Engagement shall be executed and by whom. In situations in which
              it is the express intention of the Parties that the Engagement
              shall be performed by a specific natural person, the applicability
              of Sections 404 and 407(2) of Book 7 of the Dutch Civil Code is
              explicitly excluded.
            </li>
            <li>
              5.3. In the interest of ensuring a proper and timely execution of
              the Engagement, the Client shall provide the Contractor with all
              information and documents that the Client may reasonably require
              for a proper and timely execution of the Engagement. The Client
              shall do so in a timely manner, and, should the Contractor have
              asked the Client to provide certain information and/or documents
              before a given date, shall adhere to the deadline set by the
              Contractor.
            </li>
            <li>
              5.4. The Client and Contractor agree that the execution of the
              Engagement shall be dependent to a significant extent on the
              information and documents provided to the Contractor by the
              Client. The Contractor may trust that the information and
              documents provided by the Contractor are correct and complete.
            </li>
          </ul>
          <p className="subheading mb-2">6. Amendments of the Engagement</p>
          <ul>
            <li>
              6.1. Amendments to the Engagement shall only be effective insofar
              as they have been agreed to by both Parties in writing.
            </li>
            <li>
              6.2. If amendments to the Engagement should result in a price
              increase or price decrease, the Contractor shall duly inform the
              Client of this.
            </li>
          </ul>
          <p className="subheading mb-2">7. Performance by Third Parties</p>
          <ul>
            <li>
              7.1. The Contractor is authorised to engage third parties for the
              execution of the Engagement with written permission from the
              Client.
            </li>
          </ul>
          <p className="subheading mb-2">8. Duration of Engagement</p>
          <ul>
            <li>
              8.1. Insofar as the Client and Contractor have not, in writing,
              expressly agreed otherwise, the Engagement between the Client and
              the Contractor shall be deemed to be an agreement of indefinite
              duration.
            </li>
            <li>
              8.2. If the Contractor has indicated, verbally or in writing, an
              expected completion date or time frame for the Engagement or a
              part of the Engagement, such indications shall be considered to be
              indicative only and are non-binding and free of obligations,
              unless the Contractor has expressly and in writing indicated
              otherwise.
            </li>
          </ul>
          <p className="subheading mb-2">
            9. Confidentiality and Return of Material
          </p>
          <ul>
            <li>
              9.1. The Client and the Contractor agree that they shall not
              disclose Confidential Information to any employees and/or third
              parties, other than third parties who have a legitimate need to
              know in connection with this Engagement. Parties shall ensure that
              these employees and/or third parties are bound by confidentiality
              obligations in regard to the Confidential Information no less
              stringent than those set forth herein. All employees of the
              Contractor, as well as any third parties engaged by the
              Contractor, are bound by a Non-Disclosure Agreement which covers
              all existing and potential future Clients.
            </li>
            <li>
              9.2. The Client and the Contractor shall make no use of the
              Confidential Information, other than for the purpose of the
              execution of the Engagement.
            </li>
            <li>
              9.3. The confidentiality and non-use obligations set forth herein
              shall continue after the end of the Engagement.
            </li>
            <li>
              9.4. Notwithstanding the confidentiality obligations set forth in
              this clause, Parties agree and acknowledge that, in the interest
              of being able to engage new clients and promoting their business
              model, the Contractor shall be able to list the Client as their
              client without being in violation of their confidentiality
              obligations. Further, the Contractor shall be able to make use of,
              and publish, case studies based on their Engagement(s) with the
              Clients, containing, inter alia, a brief description of the
              challenge(s) faced by the Client, the opportunity and the insight
              and recommendations of the Contractor, without being in violation
              of their confidentiality and non-use obligations set forth in the
              Terms and Conditions.
            </li>
            <li>
              9.5. Insofar as any Party has, during the Engagement, furnished
              any tangible material to the other Party, the other Party shall
              promptly return or destroy, at the option of the furnishing Party,
              this material upon the end of the Engagement.
            </li>
          </ul>
          <p className="subheading mb-2">10. Intellectual Property</p>
          <ul>
            <li>
              10.1. All the documentation provided or made by the Contractor,
              including but not limited to any texts, reports, advice,
              agreements, drafts, designs, drawings, software etc., are only
              intended to be used by the Client and may not made public or
              forwarded to third parties by the Client without first obtaining
              the written permission of the Contractor, unless otherwise follows
              from the nature of the supplied documentation. All rights to or
              derived from this documentation, including all existing and future
              intellectual property rights related to the documentation, are the
              sole and exclusive property of the Contractor unless otherwise has
              been agreed in writing by both Parties or unless otherwise should
              follow from the nature of the documentation or the Engagement.
              This includes, but is not limited to, the rights and authority the
              Contractor holds pursuant to the Copyright Act.
            </li>
          </ul>
          <p className="subheading mb-2">10. Prices & Payment</p>
          <ul>
            <li>
              11.1. All prices are expressed in Euro and are excluding VAT and
              any office, telephone, travel, transport and postage costs, unless
              otherwise has been explicitly agreed in writing.
            </li>
            <li>
              11.2. If any pricing factors, including but not limited to
              salaries and/or rates, should be subject to change between the
              commencement of the execution of the Engagement and the completion
              of the Engagement, the Contractor shall inform the Client in
              advance. The new estimate shall be considered binding fourteen
              (14) days after the Contractor has informed the Client, unless the
              Client has communicated in writing their explicit disapproval of
              the new estimate before the expiry of this term.
            </li>
            <li>
              11.3. Unless Parties have explicitly agreed otherwise, the first
              50% of the price specified in the Quote shall be due by the Client
              prior to the commencement of the Engagement. The remainder shall
              be invoiced upon completion of the Engagement.
            </li>
            <li>
              11.4. The Contractor is authorized to invoice the amount due by
              the Client pursuant to clause 11.3, in several separate
              installments, or to invoice the total amount due in one
              installment, as they see fit.
            </li>
            <li>
              11.5. Unless explicitly agreed otherwise, payment by the Client
              shall be due, without any deduction, discount or debt settlement,
              within fifteen (15) days from the invoice date. All payments must
              be made into a bank account specified by the Contractor.
            </li>
            <li>
              11.6. Complaints about, or objections to, the amount invoiced by
              the Client shall not suspend the Client’s obligation to pay the
              invoice as specified in clause 11.4 of the Terms and Conditions
              and shall not alter the amount due.
            </li>
            <li>
              11.7. Any failure whatsoever to fully meet any payment term will
              place the Client in default (Dutch: ‘verzuim’) by operation of
              law, without notice of default being required. In the event the
              Client shall fail to meet their payment obligations, in part or in
              full, the Contractor shall immediately be owed, and the Client
              shall immediately forfeit, a penalty fee equal to 1% of the
              outstanding amount, as well as, from that date, interest over the
              outstanding amount at a rate equal to the statutory rate of
              interest applying in the Netherlands at that time. At the end of
              each year, the amount that is subject to interest will be
              increased by the interest owed for the past year.
            </li>
            <li>
              11.8. All costs incurred by the Contractor as a result of the
              Client’s failure to meet their payment obligations, in full in
              part, shall be for account of the Client. This shall expressly
              include all extra-judicial costs as well as judicial costs, such
              as attorneys’ fees. The Parties agree that the provisions of the
              Dutch Extrajudicial Collection Costs Regulation Decree (Dutch:
              Besluit vergoeding voor buitengerechtelijke incassokosten), shall
              not apply.
            </li>
            <li>
              11.9. If the Contractor has reason to believe that the financial
              position and/or payment performance would justify such action, the
              Contractor shall have the right to demand that the Client make an
              advance payment and/or provide security or additional security,
              such as a bank guarantee, to the Contractor. The Contractor may
              make such a demand at any time prior to or after the commencement
              of the execution of the Engagement.
            </li>
            <li>
              11.10. In the event of a jointly commissioned Engagement, each
              Client shall be jointly and severally liable for payment of the
              full fee charged insofar as the services were provided for the
              clients jointly.
            </li>
          </ul>
          <p className="subheading mb-2">12. Liability</p>
          <ul>
            <li>
              12.1. The Contractor shall at all times endeavour to execute the
              Engagement to the best of their ability and shall exercise the due
              care that may be expected from the Contractor.
            </li>
            <li>
              12.2. Except in case of wilful misconduct or gross negligence
              (Dutch: opzet of bewuste roekeloosheid), any liability of the
              Contractor arising out of or in connection with the Engagement is
              expressly excluded. This shall include any consequential, indirect
              or punitive damages and/or loss of profit.
            </li>
            <li>
              12.3. The liability of the Contractor arising out of or in
              connection with the Engagement shall in no event exceed the total
              amount paid by the Client to the Contractor under the terms of the
              Engagement.
            </li>
            <li>
              12.4. The Client shall indemnify the Contractor for any claims by
              any third parties arising out of or in connection to the
              Engagement.
            </li>
            <li>
              12.5. Insofar as the Engagement is carried out with the assistance
              of any third parties on the side of the Contractor, the
              limitations of liability set forth herein shall apply to these
              third parties too.
            </li>
          </ul>
          <p className="subheading mb-2"> 13. Complaints</p>
          <ul>
            <li>
              13.1. The Client shall notify the Contractor in writing of any
              complaint regarding the performance of the services rendered under
              the Engagement and must do so within fourteen (14) days after the
              performance of the specific service giving rise to the complaint,
              unless otherwise has been explicitly agreed by both Parties in
              writing. Upon the expiration of this term, any rights of the
              Client in regard to this complaint shall lapse.
            </li>
            <li>
              13.2. The Contractor shall respond to the complaint in a timely
              and adequate manner, and in any event within fourteen (14) days of
              receipt of the complaint. Should the complaint be legitimate as
              well as made in a timely manner, both Parties shall endeavour to
              remedy this complaint in a mutually satisfactory manner, with the
              Client having the option of having the service redone free of
              charge, receiving a proportionate discount on the price of the
              services or terminating the Engagement with due observance of
              clause 14.1 and 14.2 of the Terms and Conditions.
            </li>
          </ul>
          <p className="subheading mb-2">
            14. Early Termination of the Engagement
          </p>
          <ul>
            <li>
              14.1. Either Party shall have the right to terminate this
              Engagement prior to its completion, by giving notice to the other
              Party per e-mail and with due observance of a reasonable notice
              period, which shall be at least one (1) month.
            </li>
            <li>
              14.2. In the event the Engagement is terminated by the Client, the
              Contractor shall be entitled to compensation for services already
              provided. The Contractor shall also be entitled to any costs that
              the Contractor will reasonably have to incur as a result of the
              early termination of the Engagement (including costs relating to
              the involvement of third parties in the execution of the
              Engagement), unless the termination is due to circumstances that
              can reasonably be attributed to the Contractor.
            </li>
            <li>
              14.3. In the event the Engagement is terminated by the Contractor,
              the Contractor shall provide all assistance that may reasonably be
              expected from the Contractor to facilitate a transition of the
              Engagement to a third party appointed by the Client to execute a
              similar Engagement, unless the termination is due to circumstances
              that can reasonably be attributed to the Client.
            </li>
            <li>
              14.4. Either Party shall be able to terminate the Engagement prior
              to its completion, either in part or in full, in writing and
              without observance of a reasonable notice period if the other
              Party has been granted a provisional or final suspension of
              payment, or has been declared insolvent or bankrupt, or if its
              business is or shall be wound up or discontinued.
            </li>
          </ul>
          <p className="subheading mb-2">
            15. Termination, dissolution or suspension of the Engagement by the
            Contractor
          </p>
          <ul>
            <li>
              {" "}
              15.1. The Contractor shall be able to terminate or dissolve this
              Engagement without observance of a due notice period, or
              temporarily suspend the execution of the Engagement, in the event
              the Client fails to comply with any of their obligations under the
              Engagement or the Terms and Conditions, including but not limited
              their payment obligations as set forth herein or the obligation to
              provide the Contractor with the information reasonably required
              for the execution of the Engagement.
            </li>
            <li>
              15.2. Any damages sustained as a result of the termination and/or
              suspension of the execution of the Engagement, in whole or in
              part, by the Contractor shall be solely borne by the Client.
            </li>
          </ul>

          <p className="subheading mb-2">16. Force Majeure</p>
          <ul>
            <li>
              16.1. The Contractor shall not be obligated to fulfil any
              obligation arising out of the Engagement, if fulfilment is
              temporarily or permanently impossible due to events beyond the
              control of the Contractor. Such events shall include, without
              limitation: strikes, lock-out, fires, limiting governmental
              measures in any capacity whatsoever, road blocks, riots,
              epidemics, devaluation, flooding and storms and long-term and
              unforeseeable unavailability of one or more employees or third
              parties essential to the fulfilment of the obligations, long term
              being understood to mean a period of seven (7) days or longer.
            </li>
            <li>
              16.2. The Contractor is not liable towards the Client or any third
              parties for direct and/or indirect damage suffered as a result of
              the events beyond the control of the Contractor.
            </li>
            <li></li>
          </ul>

          <p className="subheading mb-2">17. Recruitment Ban</p>
          <ul>
            <li>
              17.1. During the execution of the Engagement and within one (1)
              year of termination of the Engagement, neither Party shall employ
              persons who are or were involved in executing the Engagement on
              behalf of the other Party or conduct negotiations with such
              persons about employment, other than in consultation with, and
              with the approval of, the other Party.
            </li>
            <li>
              17.2. If, despite the aforementioned recruitment ban, a Party
              decides to employ one or more persons who were involved in
              executing the Engagement on behalf of the other Party, the first
              Party undertakes to pay to the other Party at least the
              recruitment costs that the latter incurs in recruiting one or more
              replacement workers.
            </li>
          </ul>

          <p className="subheading mb-2">18. Waiver of Rights </p>
          <ul>
            <li>
              18.1. The rights and powers of the Contractor under the Engagement
              shall in no way be affected or limited by their failure to
              directly enforce any of these rights or powers. Notice to waive
              any right or power laid down in or ensuing from any provision or
              condition of the Engagement must be explicitly confirmed in
              writing.
            </li>
          </ul>

          <p className="subheading mb-2"> 19. Partial Invalidity </p>
          <ul>
            <li>
              19.1. In the event that any article of the Terms and Conditions
              should appear invalid, illegal, not binding, or unenforceable
              (either in whole or in part), the remainder of the Terms and
              Conditions shall continue to be effective to the extent that, in
              view of the substance and purpose of the Terms and Conditions,
              such remainder is not inextricably related to and therefore
              inseverable from the invalid, illegal, not binding or
              unenforceable provision.{" "}
            </li>
            <li>
              19.2. The Parties shall make every effort to reach an agreement on
              a new respective article which differs as little as possible from
              the invalid, illegal, not binding or unenforceable article, taking
              into account the substance and purpose of the Terms and
              Conditions.{" "}
            </li>
          </ul>

          <p className="subheading mb-2">20. No Assignment </p>
          <ul>
            <li>
              20.1. Neither Party shall be able to transfer the Engagement, nor
              any of the rights and obligations set forth therein, without the
              written consent of the other Party. Such consent shall not be
              withheld on unreasonable grounds.{" "}
            </li>
          </ul>

          <p className="subheading mb-2">21. Applicable Law </p>
          <ul>
            <li>
              21.1. All Quotes and Engagements between the Client and the
              Contractor shall be governed by the laws of the Netherlands. The
              Vienna Sales Convention expressly does not apply.{" "}
            </li>
            <li>
              21.2. The competent court in Amsterdam, the Netherlands, shall
              have exclusive jurisdiction over any disputes between the Parties
              arising out of or in connection to any Quotes and Engagements.
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default ConditionsPage;

export const Head = () => <title>Phoenix Terms & Conditions</title>;
