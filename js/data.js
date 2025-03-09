/**
 * Travel Industry Glossary Data
 * This file contains all the glossary terms and their definitions.
 */

const glossaryData = {
  // A Terms
  "Account management": {
      category: "Travel Management",
      letter: "A",
      definition: "Services offered by TMC to for managed travel. Depending on size of the account, the services offered by the account manager will vary. Responsible for overall account retention and relationship.",
      examples: [
          "Adoption advisement for online programs",
          "Strategic sourcing management and advisement",
          "Quarterly reviews on program performance, recommendations on compliance and policy to drive better spend decisions, cost control and savings",
          "Unused ticket management review",
          "Continuous monitoring, measuring, benchmarking and reporting of service-level agreements and key performance indicators",
          "Improve program: Airline RFP, Program Optimization, Hotel Sourcing"
      ],
      relatedTerms: ["TMC", "SLA", "KPI"]
  },
  "Agent touch/Agent Assist": {
      category: "Travel Management",
      letter: "A",
      definition: "Used interchangeably. Refers to the process in which an agent needs to do something to a transaction initiated online. Various reasons apply, depending on corporation, TMC, OBT business rules:",
      examples: [
          "Booking layer cant support request",
          "TMC cannot support booking layer technology",
          "Traveler request",
          "Booking layer failure",
          "Special support services",
          "TMC fare optimisation",
          "Intl re-faring, point of sale commissions",
          "Post ticket change",
          "Banked tkt on file"
      ],
      relatedTerms: ["TMC", "OBT", "Booking Layer"]
  },
  "Adoption advisement": {
      category: "Travel Management",
      letter: "A",
      definition: "Service provided by TMC to corporation on adoption of managed program. Refers to overall adoption as well as OBT adoption. Data analysis on non attachment and patterns help close gaps on root issue which is almost always content and user experience driven (sometimes configuration/poor process).",
      relatedTerms: ["TMC", "OBT", "Program Adoption"]
  },
  "ATPCO": {
      category: "Air Travel",
      letter: "A",
      pronunciation: "ay-tee-pee-see-oh",
      definition: "A corporation that publishes the latest airfares for more than 500 airlines multiple times per day. Based at Washington Dulles International Airport outside of Washington, D.C., ATPCO also has offices in Miami, Florida; London, UK; and Singapore. ATPCO is owned by a number of US and international airlines.\n\nATPCO provides fare data in an electronic format with the encoded rules associated with those fares, which make the information suitable for computer processing. The only competitor to ATPCO is SITA, who distributes some fares in Asia, Africa and Europe.\n\nThe users of the data are Global Distribution Systems (GDS), such as Sabre, Amadeus, Travel port, and their associated travel agents; the Computer Reservation Systems (CRS'PS) of airlines; online travel agencies such as Expedia, and other OTAs; and other service providers in the travel industry. Because the data is formatted for computer processing, the latest fares can be loaded automatically, allowing these new fares to be sold in the marketplace in the shortest possible time.\n\nFares are distributed hourly each day (except for a few hours on Saturday and Sunday) for international markets, and four times a weekday and once Saturday and Sunday in US/CA markets. Airlines carefully monitor new public fares filed by their competition for publication through ATPCO. Once the fares have been distributed by ATPCO, airlines detect the action of other airlines increasing or decreasing their fares for specific connections, and then use this information to set their own pricing strategy. For instance, if they see a competitor introducing special promotional pricing between two cities, they may want to quickly react by filing their own special fares through ATPCO for that market.",
      relatedTerms: ["GDS", "Fare Filing", "CRS"]
  },
  "Add Collect": {
      category: "Finance",
      letter: "A",
      definition: "The difference in fares collected when exchanging a ticket",
      relatedTerms: ["Fare Difference", "Ticket Exchange"]
  },
  "Affiliate Agency": {
      category: "Travel Management",
      letter: "A",
      definition: "A US based travel agency that has entered into an agreement with larger TMC to use trademarks and provide travel services to customers in the affiliate's territory. Extends (at times) to utilization of larger TMCs technical infrastructure and airline negotiated deals.",
      relatedTerms: ["TMC", "Franchise"]
  },
  "ARNK": {
      category: "Booking",
      letter: "A",
      definition: "Arrival Unknown. An ARNK is added to a reservation when there is a break in the itinerary and continuity is not recognized; it does count as a segment when ticketing",
      relatedTerms: ["Segment", "PNR"]
  },
  "After hours servicing": {
      category: "Travel Management",
      letter: "A",
      definition: "Post business hours servicing. This can be outsourced or in house. If outsourced, need to provide a way for the after hours agents to book and consume content and if external from GDS, this is problematic contractually. Outsourced after hours handle limited functions related to trip disruption or change. Their role is to get the passenger on the plane and typically does not do invoicing, mid office etc. which creates gaps and disruption. For in house, reservations will flow through normal processes typically, but not always.",
      tripGridNote: "Need robust functionality to handle post ticket change, particularly if outsourced as outsourced afterhours services involving manual servicing will affect TMC commercials and block adoption",
      relatedTerms: ["TMC", "Duty of Care", "Trip Disruption"]
  },
  
  // B Terms
  "BSP": {
      category: "Finance",
      letter: "B",
      fullName: "Billing Settlement Plan",
      definition: "A payment mediator between airlines and travel agents outside of North America. BSP is IATA owned and acts as a single point of remittance and settlement of money. ARC is not IATA owned.",
      relatedTerms: ["ARC", "IATA", "Settlement"]
  },
  "Banked tkt on file": {
      category: "Finance",
      letter: "B",
      definition: "Applies to a credit that is held when a reservation is cancelled. In NorAm, this is very prevalent but less so in other geographies. Sometimes called \"unused tickets\", there are several types that exist:",
      examples: [
          "ARC",
          "Full ticket, less penalties within fare rules applicability (cat 18, 31, 33)",
          "Partial ticket, less penalties within fare rules applicability (cat 18, 31, 33)",
          "Non ARC",
          "MCO",
          "Airline credits",
          "TP card",
          "Traveler specific"
      ],
      relatedTerms: ["ARC", "MCO", "Unused Tickets"]
  },
  "Back office": {
      category: "Travel Management",
      letter: "B",
      definition: "Transactional and financial systems. Most common in NorAm is Unit4 / Central command, Trams",
      relatedTerms: ["Unit4", "Trams", "Central Command"]
  },
  "Black out dates": {
      category: "Travel Management",
      letter: "B",
      definition: "Black-out dates are the specific dates set by the airline, hotel, or car rental agency when special discounts, promotions, or use of miles are not permitted. The Blackout Dates Category (Category 11) provides the capability to define single dates or date ranges when travel is not permitted. The date restriction applies to the departure of each flight in the fare component.",
      relatedTerms: ["Category 11", "Fare Rules", "ATPCO"]
  },
  "BTA": {
      category: "Finance",
      letter: "B",
      fullTitle: "Business Travel Account",
      definition: "If a company has a corporate credit card program where certain purchases such as air, rail, and associated transaction fees are centrally billed to one \"master\" credit card number, this is referred to as the Business Travel Account (BTA). This account allows for the purchase of certain air travel expenses for corporate employees without the need to issue individual credit cards to each traveler for the designated expenses. Because the account has no physical card, it's often called a \"ghost card.\"",
      relatedTerms: ["Ghost Card", "Corporate Card", "Centrally Billed Account"]
  },
  
  // C Terms
  "Cross border ticketing": {
      category: "Air Travel",
      letter: "C",
      definition: "A multi-sector airline ticket, issued for travel from a place that the passenger does not intend to fly from, in order to get a lower fare. e.g. BOS LHR issued from Mumbai, utilizing cross currency conversions.",
      relatedTerms: ["Currency Conversion", "Fare Arbitrage"]
  },
  "Consolidator": {
      category: "Travel Management",
      letter: "C",
      definition: "A person or company which forms groups to travel on charter or at group fares on scheduled flights to increase sales, earn override commissions or reduce the chance of tour cancellations. Can also apply to marketplace fares shared within TMC networks, or partners to take advantage of high volume discounts.",
      tripGridNote: "fragments servicing and adoption.",
      relatedTerms: ["Override Commissions", "Group Fares"]
  },
  "Cat 33": {
      category: "Air Travel",
      letter: "C",
      definition: "For voluntary refunds. See reference pdf",
      reference: "pdf",
      relatedTerms: ["Voluntary Refunds", "Fare Categories"]
  },
  "Cat 31": {
      category: "Air Travel",
      letter: "C",
      definition: "For voluntary changes. See reference pdf",
      reference: "pdf",
      relatedTerms: ["Voluntary Changes", "Fare Categories"]
  },
  "Cat 18": {
      category: "Air Travel",
      letter: "C",
      definition: "Endorsements. See reference doc",
      reference: "doc",
      relatedTerms: ["Endorsements", "Fare Categories"]
  },
  "Churn": {
      category: "Air Travel",
      letter: "C",
      definition: "Churning refers to any repeated booking or canceling of the same itinerary in the same class or different classes of service in one or more PNRs or GDS. Results in a debit memo and other penalties.",
      relatedTerms: ["Debit Memo", "PNR", "GDS"]
  },
  "CTD": {
      category: "Travel Management",
      letter: "C",
      fullTitle: "Corporate Travel Department",
      definition: "A company's in-house travel agency that purchases air transportation and related travel services on behalf of its own employees. CTDs are ARC accredited and often have their own GDS contract with gives them flexibility to a degree to control content strategy. Most CTDs will use some part of TMC infrastructure such as mid office but not always. Corporations also have another agreement called rent a plate, which differs from CTD",
      relatedTerms: ["ARC", "TMC", "Rent a Plate"]
  },
  
  // G Terms
  "GDS": {
      category: "Technology",
      letter: "G",
      fullTitle: "Global Distribution System",
      pronunciation: "gee-dee-es",
      definition: "A computerized network system that enables transactions between travel industry service providers, mainly airlines, hotels, car rental companies, and travel agencies. The major GDSs are Amadeus, Sabre, and Travelport (which operates the Apollo, Galileo, and Worldspan systems).",
      relatedTerms: ["Amadeus", "Sabre", "Travelport", "CRS"]
  },
  "Global Shared Service": {
      category: "Travel Management",
      letter: "G",
      definition: "Ability to service a global or multi national customer from any geography, regardless of where ticketed. Due to content limitations and business requirements, a large global organization even if serviced from the same TMC provider is rarely able to be globally serviced. GDS back end, booking tool, profiles are generally fragmented and not accessible within same TMC partner. If account is serviced by multiple service providers, this is even more complex.",
      example: "Traveler books via TMC in US, to London. Calls London office of same TMC used in US, but they typically cannot service the booking and if they can, it generally follows a different workflow path than what is required. This in turn affects approvals, compliance, etc.",
      relatedTerms: ["TMC", "Global Travel Program", "Follow the Sun"]
  },
  "Ghost card": {
      category: "Finance",
      letter: "G",
      definition: "In the credit card industry a system used by corporations whereby travel related charges made through designated travel agencies are centrally billed but no plastic card actually exists. Often referred to as \"Lodge card\" in Europe or BTA in NorAm",
      relatedTerms: ["BTA", "Lodge Card", "Central Payment"]
  },
  
  // N Terms
  "NDC": {
      category: "Technology",
      letter: "N",
      fullTitle: "New Distribution Capability",
      isNew: true,
      definition: "A travel industry-supported program launched by IATA for the development and market adoption of a new XML-based data transmission standard. NDC enables the travel industry to transform the way air products are retailed by addressing the industry's current distribution limitations.",
      relatedTerms: ["IATA", "GDS", "Direct Distribution"]
  },
  "Non ARC transactions": {
      category: "Finance",
      letter: "N",
      definition: "Any carrier not issues through ARC, usually booked outside of normal booking channels, such as GDS. Not ticketed via GDS, passive segments are typically added with an accouting line to drive transaction through to the back office. Many gaps exist in LCC bookings",
      relatedTerms: ["ARC", "LCC", "Passive Segments"]
  },
  "NUC": {
      category: "Finance",
      letter: "N",
      fullTitle: "Neutral Unit of Construction",
      definition: "An imaginary currency established by IATA that allows fares of different currencies to be added together; this fare construction principle is only used internationally",
      relatedTerms: ["IATA", "Fare Construction", "Currency Conversion"]
  },
  "Non Endorseable": {
      category: "Air Travel",
      letter: "N",
      definition: "This expression often appears in the endorsements box of an airline ticket and it means that the flight coupon on which the worlds appear may be used only on the services of the airline indicated.",
      relatedTerms: ["Endorsements", "Flight Coupon"]
  },
  "Non attachment": {
      category: "Travel Management",
      letter: "N",
      definition: "Refers to a travel product not booked within managed program. If not booked, justification or reason codes are collected to analyze if content related or other, which helps to drive compliance metrics.",
      relatedTerms: ["Compliance", "Reason Codes", "Justification Codes"]
  },
  
  // O Terms
  "OBT": {
      category: "Technology",
      letter: "O",
      fullTitle: "Online Booking Tool",
      definition: "A web-based application that allows travelers or travel arrangers to book travel arrangements (flights, hotels, car rentals, etc.) directly, while still adhering to corporate travel policies and negotiated rates.",
      relatedTerms: ["Self-Booking Tool", "Corporate Booking Tool", "TMC"]
  },
  "OI": {
      category: "Air Travel",
      letter: "O",
      fullTitle: "Original Issue",
      definition: "Refers to the original issue date of a ticket, is used to capture actual validity dates, e.g. if tkt is issued on 1 Jan, then reissed again on Mar 1, then again on June 1, the June 1 exchange cannot go from validate date of second exchange ticket but the first, original exchange rules",
      relatedTerms: ["Ticket Validity", "Exchange", "Reissue"]
  },
  "Offline Transaction": {
      category: "Travel Management",
      letter: "O",
      definition: "Used interchangeably but mean different things. Offline can mean a destination where a carrier doesn't fly, while an offline connection could mean I am connecting to a flight that is not on the same carrier. An offline transaction refers to anything not booked online, but is considered different than a \"touched\" transaction",
      relatedTerms: ["Agent Touch", "Online Transaction", "TMC"]
  },
  "Offload": {
      category: "Air Travel",
      letter: "O",
      definition: "This occurs when an airline has over-booked: that is, it has sold more seats on a particular flight than the aircraft has to offer. The passengers to be off-loaded are usually those who have paid the lowest fares. Off-loaded passengers will normally qualify for denied boarding compensation. Passengers may also be off-loaded at the captain's discretion if they are unfit to travel due to drink, drugs, illness or for bad behavior",
      relatedTerms: ["Denied Boarding Compensation", "Overbooking"]
  },
  "Operating Carrier": {
      category: "Air Travel",
      letter: "O",
      definition: "In a codeshare, the airline providing the plane, crew and ground handling services",
      relatedTerms: ["Codeshare", "Marketing Carrier"]
  },
  "Open Jaw": {
      category: "Air Travel",
      letter: "O",
      definition: "Open JAW is a term referred to when fltign into one city but out of another with a ground service segment e.g BOS LAX SFO BOS.",
      relatedTerms: ["Segment", "PNR"]
  },
  "OSI": {
      category: "Air Travel",
      letter: "O",
      fullTitle: "Other Service Information", 
      definition: "A GDS entry that provides information to a carrier that does not require action for traveler action such as contract discount code, record locators of additional family members traveling together (TCP), age information for children/infants, etc.",
      relatedTerms: ["GDS", "PNR", "SSR"]
  },
  
  // S Terms
  "SLA": {
        category: "Travel Management",
        letter: "S",
        fullTitle: "Service Level Agreement",
        definition: "A formal document that defines the level of service a client expects from a vendor, in this case a TMC. It typically includes metrics for response times, issue resolution timeframes, availability, and other service standards.",
        relatedTerms: ["KPI", "Account Management", "TMC"]
    },
    "Seat Improvement": {
        category: "Air Travel",
        letter: "S",
        definition: "A mid office process that audit for better seat options, if a preferred set is not available. It will move pax to improved seat but does need to account for exclusions of paid seats",
        relatedTerms: ["Mid Office", "Seat Assignment", "TMC"]
    },
    "Strategic Sourcing": {
        category: "Travel Management",
        letter: "S",
        definition: "Using historical data and metrics, TMCs and consultancies will advise a corporation on strategic vendor negotiations",
        relatedTerms: ["RFP", "Vendor Negotiations", "Travel Program"]
    },
    "SSR": {
        category: "Air Travel",
        letter: "S",
        fullTitle: "Special Service Request",
        definition: "Supplemental service request. Downstream messaging to airline for request to action – wheelchair, special meal etc.",
        relatedTerms: ["OSI", "PNR", "GDS"]
    },
    "Stored Fare": {
        category: "Air Travel",
        letter: "S",
        definition: "A stored fare, aka TST or PQR, is a record of all fare information for a PNR. Mid office will use a stored fare to drive ticket. Multiple stored fares can exists and can also be built manually",
        relatedTerms: ["TST", "PQR", "PNR"]
    },
    "Split ticketing": {
        category: "Air Travel",
        letter: "S",
        definition: "Issuance of two or more tickets usually for the purpose of obtaining a lower fare; usually applied to international itineraries to take advantage of fare and/or currency conversion differences. Also applies when no combinability is allowed, such as private fares or customer convenience e.g outbound DL return UA. If not split entire ticket is validated on DL. This would mean any change to UA flight has to be made through UA but revalidated with DL",
        relatedTerms: ["Combinability", "Private Fares", "Validation"]
    },
    
    // T Terms
    "TMC": {
        category: "Travel Management",
        letter: "T",
        fullTitle: "Travel Management Company",
        pronunciation: "tee-em-see",
        definition: "A specialized travel agency that manages business travel for companies. TMCs typically provide end-to-end travel services including booking, expense management, duty of care, and reporting.",
        relatedTerms: ["Corporate Travel", "Managed Travel", "Business Travel"]
    },
    "Touch code": {
        category: "Travel Management",
        letter: "T",
        definition: "Touch codes are added to a reservation whenever a transaction that initiated online is unable to be serviced online. Depending on the TMC, they may have either a high or mid touch and a billable vs non billable structure.",
        examples: [
            "A high touch is when an online transaction needs an agent to process one or more jobs.",
            "High touch due to process unsupported via booking layer or TMC optimization is not billed to the customer.",
            "High touch can be billable, such as instances where a traveler requests something such as \"call hotel to confirm something I am requesting\". It is not a modification or a change and thus wouldn't result in a transaction fee but rather a high touch fee.",
            "In some instances, a TMC could charge the fee for an agent assist and record the touch as non billable",
            "A low touch would be typically client initiated such as \"do xxx for me\" and are also billable.",
            "Some TMCs will cap fees at number of billable touches",
            "These codes are used to record metrics on OBT performance, as well as calculate Job v transaction ratios.",
            "Touches must have business logic when they may or may not apply"
        ],
        relatedTerms: ["TMC", "OBT", "Transaction Fee"]
    },
    "Touchless exchange": {
        category: "Technology",
        letter: "T",
        definition: "\"Touchless E-fulfillment transaction\" or exchange. An electronic transaction entirely processed through an online booking tool and fulfillment service, without any agent intervention and where invoicing is provided via email",
        relatedTerms: ["OBT", "E-Fulfillment", "Automation"]
    },
    
    // U Terms
    "UDID": {
        category: "Technology",
        letter: "U",
        fullTitle: "User-Defined Interface Data",
        definition: "UDID remarks are standard and contain predefined reporting information such as lost hotel night reason codes, merchant billing codes or additional traveler data fields. These fields are both static and trip level.",
        examples: [
            "Static UDIDs exist at profile level. e.g. cost code, employee number, project code.",
            "Trip level UDIDs ae conditional and collected at booking level. e.g. Reason for trip, project code (which may need to be replaced in static value or added as secondary field), Billable vs. Non Billable, and trip reportable conditions.",
            "Reason codes are sometimes passed in UDIDs but are often part of a different data set, depending on back office of fulfillment TMC used called MS lines.",
            "UDIDs, depending on back office are considered a reportable condition flat to itinerary and not always associated to segment."
        ],
        tripGridNote: "Need to support conditional logic for all types of reportable conditions and various mappings required by fulfillment provider",
        relatedTerms: ["Back Office", "Mid Office", "Reportable Conditions"]
    },
    "Unused Tickets": {
        category: "Finance",
        letter: "U",
        definition: "Tickets that have been purchased but not used, either in whole or in part. They often have residual value that can be applied to future travel, subject to fare rules and airline policies.",
        relatedTerms: ["Banked tkt on file", "MCO", "Credit Memo"]
    },
    
    // V Terms
    "VOID": {
        category: "Finance",
        letter: "V",
        definition: "The cancellation of a ticket transaction within 24 hours of issuance, typically resulting in no penalties and a full refund to the original form of payment.",
        relatedTerms: ["Refund", "Ticket", "ARC"]
    },
    "Validating carrier": {
        category: "Air Travel",
        letter: "V",
        definition: "Airline designated as the \"owning\" ticketed carrier; the carrier on whose \"plate\" the ticket is issued. The validating carrier is the carrier to which payment is submitted and is usually the first carrier on the itinerary (domestic) or the carrier on the first international flight (international). If a ticket is issued on multiple carriers or is validated on a carrier not on the itinerary, the validating carrier is responsible for payment to the other airlines on the ticket.",
        tripGridNote: "This can be an issue with private fares, and needs to be split faring from the booking layer. This is a typical configuration setting that would need to be supported",
        relatedTerms: ["Interline", "Split Ticketing", "Private Fares"]
    },
    "Validation": {
        category: "Air Travel",
        letter: "V",
        definition: "The process of stamping an air ticket or other airline document, at the time of issue, with the issue date, name and location of the issuing office and its IATA code number. Tickets not bearing such a stamp re invalid and will not be accepted by airlines",
        relatedTerms: ["IATA", "Ticket", "Issuance"]
    },
    "VIP servicing": {
        category: "Travel Management",
        letter: "V",
        definition: "Standard offering by TMC is which a designated VIP is eligible for a separate set of services for a fee.",
        relatedTerms: ["TMC", "Service Level", "Executive Travel"]
    },
    
    // W Terms
    "Waitlist": {
        category: "Booking",
        letter: "W",
        definition: "Applies to any leg where a fare type or class of service is sold out but a message is sent to carrier to waitlist that person for the fare type or cabin. Applies pre and post ticketing",
        relatedTerms: ["Class of Service", "Fare Type", "Availability"]
    },
    "Walker": {
        category: "Accommodation",
        letter: "W",
        definition: "When a hotel is sold out and there are no rooms available for a person who has a confirmed reservation, the hotel provide alternate accommodations at a different hotel.",
        relatedTerms: ["Hotel Booking", "Overbooking", "Alternate Accommodation"]
    }
};

// Export the glossary data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { glossaryData };
}