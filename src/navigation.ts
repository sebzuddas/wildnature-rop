import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'What We Do',
      href: getPermalink('/services'),
    },
    {
      text: 'Safeguarding',
      href: getPermalink('/safeguarding'),
    },
    {
      text: 'Get Involved',
      href: getPermalink('/get-involved'),
    },
    {
      text: 'Support Us',
      href: getPermalink('/support'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      variant: 'primary' as const,
      text: 'Register Now',
      href: 'https://tally.so/r/A7Aeq0',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'The Camp',
      links: [
        { text: 'What We Do', href: getPermalink('/services') },
        { text: 'Safeguarding', href: getPermalink('/safeguarding') },
        { text: 'FAQs', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { text: 'Volunteer', href: getPermalink('/get-involved') },
        { text: 'Partner with us', href: getPermalink('/get-involved') },
        { text: 'Fund the work', href: getPermalink('/support') },
      ],
    },
    {
      title: 'Organisation',
      links: [
        { text: 'About Wildnature', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Safeguarding Policy', href: getPermalink('/safeguarding') }],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <span>
      &copy; ${new Date().getFullYear()} Wildnature Rites of Passage CIC. All rights reserved.
    </span>
  `,
};
