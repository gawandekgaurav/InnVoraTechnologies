export const contactInfo = {
  email: 'gkggawande@gmail.com',
  phone: '9322287523',
  phoneDisplay: '9322287523',
  phoneHref: 'tel:+919322287523',
  address: 'Nagpur, Maharashtra, India',
}

export const contactCards = [
  {
    label: 'Email Us',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: '#3b82f6',
  },
  {
    label: 'Call Us',
    value: contactInfo.phoneDisplay,
    href: contactInfo.phoneHref,
    color: '#10b981',
  },
  {
    label: 'Our Office',
    value: contactInfo.address,
    href: null,
    color: '#9333ea',
  },
]
