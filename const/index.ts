import { Briefcase , FileText, Gavel, Landmark, Plane, Radio, Scale, ShieldCheck, Users } from "lucide-react";






export const practiceAreasMini = [
  {
    slug: "aviation-maritime",
    title: "Aviation & Maritime",
    icon: Plane,
    description:
      "Specialized legal services for the transport sector, covering regulatory compliance and vessel operations.",
    capabilities: [
      "Aviation Law & Maritime Law",
      "Airliness & Vessel Registration",
      "Aircraft Financing"
    ]
  },

  // 🔹 NEW — 2nd item
  
  {
    slug: "airlines-passenger-dispute-resolutions",
    title: "Airlines & Passenger Dispute Resolutions",
    icon: Users,
    description:
    "Legal representation for carriers and passengers regarding regulatory claims and liability.",
    capabilities: [
      "Consumer Protection Claims",
      "Flight Delay & Cancellation Liability",
      "Baggage & Personal Injury Claims",
      "ICAO/IATA Compliance",
      "Ticket Refund Litigation"
    ]
  },
  {
    slug: "tender-specialist",
    title: "Tender Specialist",
    icon: FileText,
    description:
      "Expert legal advisory and documentation support for public and private sector tender processes.",
    capabilities: [
      "Tender Documentation Review",
      "Bid Compliance Advisory",
      "Government Procurement Rules",
      "Tender Dispute Resolution",
      "Contract Award Challenges"
    ]
  },

  // 🔹 NEW — 3rd item
  {
    slug: "legal-licensing",
    title: "Legal & Licensing",
    icon: ShieldCheck,
    description:
      "Comprehensive legal support for regulatory approvals, licenses, and statutory compliance.",
    capabilities: [
      "Trade License & Renewals",
      "Regulatory Permissions",
      "Industry-Specific Licensing",
      "Compliance Audits",
      "Authority Liaison & Approvals"
    ]
  },
  {
    slug: "taxation-vat",
    title: "Taxation & VAT",
    icon: FileText,
    description:
      "Optimizing tax efficiency and ensuring compliance with national and international tax laws.",
    capabilities: [
      "VAT Planning & Compliance",
      "Tax Controversy & Litigation",
      "International Tax Planning",
      "Wealth Transfer",
      "Corporate Tax Strategy"
    ]
  },
  {
    slug: "transport-cargo-dispute-resolutions",
    title: "Transport & Cargo Dispute Resolutions",
    icon: Plane,
    description:
      "Handling complex logistics litigation, freight claims, and maritime commerce disputes.",
    capabilities: [
      "Freight & Logistics Claims",
      "Cargo Damage Disputes",
      "Supply Chain Litigation",
      "Carrier Liability",
      "Warehousing Disputes"
    ]
  },
  // {
  //   slug: "corporate-foreign-direct-investments",
  //   title: "Corporate & Foreign Direct Investments",
  //   icon: Briefcase,
  //   description:
  //     "Providing strategic counsel on global market entry and high-value corporate restructuring.",
  //   capabilities: [
  //     "Foreign Direct Investment (FDI)",
  //     "Business Setup & Company Formation",
  //     "Joint Ventures",
  //     "Securities & Capital Markets",
  //     "Corporate Governance"
  //   ]
  // },
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    icon: Scale,
    description:
      "Trial-ready representation for high-stakes business and criminal disputes across all jurisdictions.",
    capabilities: [
      "Commercial & Civil Litigation",
      "Criminal Law Defense",
      "Family Law Matters",
      "Alternative Dispute Resolution (ADR)",
      "Appellate Practice"
    ]
  },
  {
    slug: "telecommunications-broadcasting",
    title: "Telecommunications & Broadcasting",
    icon: Radio,
    description:
      "Navigating the complex regulatory and licensing landscape of the media and tech sectors.",
    capabilities: [
      "Licensing Matters",
      "Regulatory Compliance",
      "Spectrum Allocation",
      "Broadcasting Rights",
      "Telecom Infrastructure"
    ]
  },
  {
    slug: "property-real-estate",
    title: "Property & Real Estate",
    icon: Gavel,
    description:
      "Comprehensive due diligence and advisory for property acquisition and development.",
    capabilities: [
      "Property Vetting & Due Diligence",
      "Commercial Development",
      "Zoning & Land Use",
      "Real Estate Finance",
      "Construction Law"
    ]
  },
  {
    slug: "banking-financial-matters",
    title: "Banking & Financial Matters",
    icon: Landmark,
    description:
      "Representing financial institutions and borrowers in sophisticated lending and regulatory structures.",
    capabilities: [
      "Syndicated Lending",
      "Project Finance",
      "Restructuring & Insolvency",
      "Fintech Regulation",
      "Debt Recovery"
    ]
  },
  {
    slug: "labour-employment",
    title: "Labour & Employment",
    icon: Users,
    description:
      "Strategic advisory on workplace compliance, human capital, and labor relations.",
    capabilities: [
      "Prepare documents for DIFE License",
      "Workplace Investigations",
      "Labor Relations",
      "Executive Compensation",
      "Employment Contracts",
      "Discrimination Defense"
    ]
  }
];


export const practiceAreasLarge = [
  {
    slug: "aviation-maritime",
    title: "Aviation & Maritime",
    icon: Plane,
    description:
      "Specialized legal services for the transport sector, covering regulatory compliance and vessel operations.",
    detailedContent:
      "Our Aviation & Maritime practice focuses on legal matters affecting air and sea transport operations. We advise clients on regulatory compliance, vessel registration, and aircraft financing while addressing operational and jurisdictional challenges within the transport sector.",
    capabilities: [
      "Aviation Law & Maritime Law",
      "Vessel Registration",
      "Aircraft Financing"
    ]
  },

  {
    slug: "airlines-passenger-dispute-resolutions",
    title: "Airlines & Passenger Dispute Resolutions",
    icon: Users,
    description:
      "Legal representation for carriers and passengers regarding regulatory claims and liability.",
    detailedContent:
      "This practice area provides legal representation for both airlines and passengers in disputes arising from flight operations. We handle claims related to consumer protection, flight disruptions, baggage issues, personal injury, and compliance with international aviation standards.",
    capabilities: [
      "Consumer Protection Claims",
      "Flight Delay & Cancellation Liability",
      "Baggage & Personal Injury Claims",
      "ICAO/IATA Compliance",
      "Ticket Refund Litigation"
    ]
  },
  // 🔹 NEW — 2nd item
  {
    slug: "tender-specialist",
    title: "Tender Specialist",
    icon: FileText,
    description:
      "Expert legal advisory and documentation support for public and private sector tender processes.",
    detailedContent:
      "Our Tender Specialist practice provides end-to-end legal support for tender participation across government and private entities. We assist clients with bid documentation, compliance analysis, evaluation challenges, and dispute resolution relating to procurement processes.",
    capabilities: [
      "Tender Documentation Review",
      "Bid Compliance Advisory",
      "Government Procurement Rules",
      "Tender Dispute Resolution",
      "Contract Award Challenges"
    ]
  },

  // 🔹 NEW — 3rd item
  {
    slug: "legal-licensing",
    title: "Legal & Licensing",
    icon: ShieldCheck,
    description:
      "Comprehensive legal support for regulatory approvals, licenses, and statutory compliance.",
    detailedContent:
      "Our Legal & Licensing practice assists businesses in obtaining, maintaining, and renewing statutory licenses and regulatory approvals. We work closely with regulatory authorities to ensure full compliance across industry-specific and general legal requirements.",
    capabilities: [
      "Trade License & Renewals",
      "Regulatory Permissions",
      "Industry-Specific Licensing",
      "Compliance Audits",
      "Authority Liaison & Approvals"
    ]
  },

  {
    slug: "taxation-vat",
    title: "Taxation & VAT",
    icon: FileText,
    description:
      "Optimizing tax efficiency and ensuring compliance with national and international tax laws.",
    detailedContent:
      "Our Taxation & VAT practice assists individuals and businesses with tax planning, compliance, and dispute resolution. We advise on domestic and international tax matters while helping clients manage risk and meet regulatory obligations.",
    capabilities: [
      "VAT Planning & Compliance",
      "Tax Controversy & Litigation",
      "International Tax Planning",
      "Wealth Transfer",
      "Corporate Tax Strategy"
    ]
  },
  {
    slug: "transport-cargo-dispute-resolutions",
    title: "Transport & Cargo Dispute Resolutions",
    icon: Plane,
    description:
      "Handling complex logistics litigation, freight claims, and maritime commerce disputes.",
    detailedContent:
      "We represent clients in disputes arising from transport and cargo operations. Our work includes handling freight claims, cargo damage issues, carrier liability, and conflicts across supply chains and warehousing arrangements.",
    capabilities: [
      "Freight & Logistics Claims",
      "Cargo Damage Disputes",
      "Supply Chain Litigation",
      "Carrier Liability",
      "Warehousing Disputes"
    ]
  },
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    icon: Scale,
    description:
      "Trial-ready representation for high-stakes business and criminal disputes across all jurisdictions.",
    detailedContent:
      "Our Litigation & Dispute Resolution practice provides representation in commercial, civil, criminal, and family law matters. We also advise on alternative dispute resolution and appellate proceedings across multiple forums.",
    capabilities: [
      "Commercial & Civil Litigation",
      "Criminal Law Defense",
      "Family Law Matters",
      "Alternative Dispute Resolution (ADR)",
      "Appellate Practice"
    ]
  },
  {
    slug: "telecommunications-broadcasting",
    title: "Telecommunications & Broadcasting",
    icon: Radio,
    description:
      "Navigating the complex regulatory and licensing landscape of the media and tech sectors.",
    detailedContent:
      "This practice area advises clients operating in telecommunications and broadcasting on licensing, regulatory compliance, spectrum allocation, and infrastructure-related legal matters within the media and technology sectors.",
    capabilities: [
      "Licensing Matters",
      "Regulatory Compliance",
      "Spectrum Allocation",
      "Broadcasting Rights",
      "Telecom Infrastructure"
    ]
  },
  {
    slug: "property-real-estate",
    title: "Property & Real Estate",
    icon: Gavel,
    description:
      "Comprehensive due diligence and advisory for property acquisition and development.",
    detailedContent:
      "Our Property & Real Estate practice provides legal support for property acquisition, development, and financing. We conduct due diligence and advise on zoning, land use, and construction-related legal issues.",
    capabilities: [
      "Property Vetting & Due Diligence",
      "Commercial Development",
      "Zoning & Land Use",
      "Real Estate Finance",
      "Construction Law"
    ]
  },
  {
    slug: "banking-financial-matters",
    title: "Banking & Financial Matters",
    icon: Landmark,
    description:
      "Representing financial institutions and borrowers in sophisticated lending and regulatory structures.",
    detailedContent:
      "We advise banks, financial institutions, and borrowers on lending transactions, project finance, restructuring, insolvency, and regulatory compliance, including emerging fintech-related matters.",
    capabilities: [
      "Syndicated Lending",
      "Project Finance",
      "Restructuring & Insolvency",
      "Fintech Regulation",
      "Debt Recovery"
    ]
  },
  {
    slug: "labour-employment",
    title: "Labour & Employment",
    icon: Users,
    description:
      "Strategic advisory on workplace compliance, human capital, and labor relations.",
    detailedContent:
      "We advise employers and employees on labor and employment matters, including workplace investigations, employment contracts, executive compensation, labor relations, and discrimination-related issues.",
    capabilities: [
      "Prepare documents for DIFE License",
      "Workplace Investigations",
      "Labor Relations",
      "Executive Compensation",
      "Employment Contracts",
      "Discrimination Defense"
    ]
  }
];
