/**
 * Single source of truth for every string on the page.
 * Copy is transcribed from Figma `Redesign 2026` → `Website 2026` → `UNAWA - B2B`
 * (node 4879-47455).
 */

export const nav = {
  links: [
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#approach' },
    { label: 'Resources', href: '#resources' },
    { label: 'Get Support', href: '#support' },
  ],
  secondaryCta: { label: 'Verify document', href: '#verify' },
  primaryCta: { label: 'Book a demo', href: '#teams' },
} as const;

export const hero = {
  titleLead: 'Move your business',
  titleAccent: 'forward',
  body:
    'We build practical technology that helps organizations simplify workflows, ' +
    'meet compliance needs, and work more efficiently.',
  cta: { label: 'Explore our products', href: '#products' },
  session: {
    windowTitle: 'Live notarization session',
    liveLabel: 'Live',
    statusPill: 'Document notarized',
    participantRole: 'Notary Public',
  },
  signature: { hash: 'SHA-256 · 0x9f2a…e41c' },
  folder: { name: 'Affidavits', meta: '21 files' },
} as const;

export const trust = {
  groups: [
    {
      label: 'Accredited by',
      kind: 'seal' as const,
      items: [{ name: 'NotarizeIT by UNAWA · ENS-NFN-2026-00001' }],
    },
    {
      label: 'Recognized by',
      kind: 'logos' as const,
      items: [
        { name: 'KMC' },
        { name: 'Startup Awards 2025' },
        { name: 'PH Startup Week' },
        { name: 'ADB' },
        { name: 'LES' },
      ],
    },
    {
      label: 'Backed by',
      kind: 'logos' as const,
      items: [{ name: 'Investing in Women' }],
    },
  ],
} as const;

export const products = {
  eyebrow: 'Our products',
  brand: 'NotarizeIT',
  title: 'Notarize documents online',
  body:
    'Give clients a simpler way to complete eligible notarizations remotely or in ' +
    'person, through a Supreme Court-accredited Electronic Notarization Facility.',
  cta: { label: 'NotarizeIT now', href: '#notarizeit' },
  doc: {
    reference: '#NIF-2026-0294',
    checkLabel: 'Liveness + ID · matched',
    verifiedLabel: 'Verified',
    title: 'Special Power of Attorney',
    sealLine1: 'Notarized',
    sealLine2: 'ENF',
    hash: 'SHA-256 · 0x9f2a…e41c',
    footnote: 'Sealed · tamper-evident',
  },
  gridTitle: 'More than just notarization',
  items: [
    {
      name: 'SignSecure',
      mark: { src: '/brand/signsecure-mark.png', width: 528, height: 805 },
      body:
        'Help your team get documents signed faster with secure, auditable workflows ' +
        'designed to support legally valid electronic signatures under the ' +
        'E-Commerce Act (RA 8792).',
      cta: { label: 'Learn more', href: '#signsecure' },
    },
    {
      name: 'UCheck',
      mark: { src: '/brand/ucheck-mark.png', width: 695, height: 799 },
      body:
        'Screen individuals and businesses against relevant watchlists and risk ' +
        'indicators to support AML compliance and regulatory requirements.',
      cta: { label: 'Learn more', href: '#ucheck' },
    },
    {
      name: 'ForMA',
      mark: { src: '/brand/forma-mark.png', width: 660, height: 741 },
      body:
        'Turn your document library into a structured, searchable workspace with ' +
        'centralized records and controlled access.',
      cta: { label: 'Learn more', href: '#forma' },
    },
  ],
} as const;

export const whyTrust = {
  eyebrow: 'Why trust UNAWA?',
  title: 'Built to meet business demands',
  items: [
    {
      title: 'Local expertise you can rely on',
      body:
        "UNAWA's tools are designed around Philippine law and compliance, letting " +
        'you work digitally without compromising legal validity.',
    },
    {
      title: 'Purpose-built tools for every task',
      body:
        "UNAWA's tools are designed for specific legal or compliance needs, letting " +
        'teams adopt exactly what they require without unnecessary features.',
    },
    {
      title: 'Legality & compliance you can trust',
      body:
        "UNAWA's tools are built to ensure legal validity and meet regulatory " +
        'obligations, giving organizations confidence in every transaction.',
    },
  ],
} as const;

export const approach = {
  eyebrow: 'Our approach',
  title: 'Technology that makes sense',
  body:
    'Named after the Filipino word that means “to understand,” “to comprehend,” ' +
    'and “to make sense of,” UNAWA takes a practical, legal-first approach to ' +
    'digital transformation.',
  items: [
    {
      title: 'Understand before we build',
      icon: 'shield' as const,
      body:
        'We start with how organizations actually work, understanding the people, ' +
        'processes, and requirements behind each workflow.',
    },
    {
      title: 'Build for compliance',
      icon: 'person' as const,
      body:
        'We design technology around legal and regulatory requirements, so ' +
        'organizations can digitize with the right safeguards in place.',
    },
    {
      title: 'Simplify the complex',
      icon: 'lines' as const,
      body:
        'We turn complex document, signing, notarization, and compliance processes ' +
        'into clear, practical workflows.',
    },
    {
      title: 'Connect the workflow',
      icon: 'bulb' as const,
      body:
        'We bring processes, people, and technology together to create secure, ' +
        'connected workflows that help organizations work more efficiently.',
    },
  ],
} as const;

export const teams = {
  eyebrow: 'Built for teams',
  title: 'See what your team can do with UNAWA',
  body:
    'Schedule a discovery session to discuss your requirements, document types, ' +
    'and current workflows.',
  cta: { label: 'Talk to us', href: '#support' },
} as const;

export const support = {
  eyebrow: 'Get support',
  title: 'Need help with a request or issue?',
  body:
    "Send us a support ticket, and we'll get back to you within 1 to 2 business " +
    'days. Our team is ready to assist you with any concerns and make sure you get ' +
    'the help you need.',
  fields: {
    name: { label: 'Name*', placeholder: 'Enter name here' },
    email: { label: 'Email address*', placeholder: 'maria@domain.com' },
    ticketType: {
      label: 'Select ticket type',
      placeholder: 'Ticket Type',
      options: [
        'Account & access',
        'Billing',
        'Technical issue',
        'Document or notarization',
        'Something else',
      ],
    },
    message: { label: 'Message:', placeholder: 'Enter your concern here…' },
  },
  attach: 'Attach a File',
  submit: 'Submit',
} as const;

export const resources = {
  eyebrow: 'Resources',
  title: 'Tools and insights for your team',
  items: [
    {
      title: 'The skills you need to thrive in legal tech',
      date: 'March 12, 2026',
      href: '#article-1',
    },
    {
      title: 'The skills you need to thrive in legal tech',
      date: 'March 12, 2026',
      href: '#article-2',
    },
    {
      title: 'The skills you need to thrive in legal tech',
      date: 'March 12, 2026',
      href: '#article-3',
    },
  ],
  cta: 'Read more',
} as const;

export const footer = {
  address: [
    '10th Floor, 8 Rockwell Building, Hidalgo cor Plaza Drives,',
    'Rockwell Center, Makati, Philippines',
  ],
  notarizePrompt: 'Need a document notarized?',
  notarizeLink: { label: 'Notarize online →', href: '#notarizeit' },
  badges: ['Supreme Court accredited', 'Secure SSL'],
  newsletter: {
    title: 'Stay in the loop',
    body: 'Updates on e-notarization in the Philippines — no spam.',
    placeholder: 'you@example.com',
    submit: 'Subscribe',
  },
  social: [
    { name: 'Facebook', href: '#facebook', icon: 'facebook' as const },
    { name: 'Instagram', href: '#instagram', icon: 'instagram' as const },
    { name: 'LinkedIn', href: '#linkedin', icon: 'linkedin' as const },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Privacy Preferences', href: '#privacy-preferences' },
    { label: 'Terms of Service', href: '#terms' },
  ],
  disclaimer:
    'NotarizeIT does not provide legal advice or legal representation. ' +
    'Notarization is performed solely and independently by Electronic Notaries ' +
    'Public commissioned by the Supreme Court of the Philippines. ' +
    '© 2026 UNAWA. All rights reserved.',
  privacyButton: 'Privacy preferences',
} as const;

export const meta = {
  title: 'UNAWA — Move your business forward',
  description:
    'UNAWA builds practical, legal-first technology for Philippine organizations: ' +
    'e-notarization, e-signatures, AML screening, and document management.',
} as const;
