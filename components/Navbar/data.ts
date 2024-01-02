interface MenuGroupItem {
  title: string
  url: string
  isSmall?: boolean
}

export interface MenuItem {
  height: number
  groupElevated: {
    title: string
    items: MenuGroupItem[]
  }
  groups: {
    title: string
    items: MenuGroupItem[]
  }[]
}

export const menus: {
  [key: string]: MenuItem
} = {
  store: {
    height: 406,
    groupElevated: {
      title: 'Shop',
      items: [
        {
          title: 'Shop the Latest',
          url: '/',
        },
        {
          title: 'Mac',
          url: '/',
        },
        {
          title: 'iPad',
          url: '/',
        },
        {
          title: 'iPhone',
          url: '/',
        },
        {
          title: 'Apple Watch',
          url: '/',
        },
        {
          title: 'Accessories',
          url: '/',
        },
      ],
    },
    groups: [
      {
        title: 'Quick Links',
        items: [
          {
            title: 'Shop Holiday Gifts',
            url: '/',
          },
          {
            title: 'Find a Store',
            url: '/',
          },
          {
            title: 'Order Status',
            url: '/',
          },
          {
            title: 'Apple Trade In',
            url: '/',
          },
          {
            title: 'Financing',
            url: '/',
          },
        ],
      },
      {
        title: 'Shop Special Stores',
        items: [
          {
            title: 'Certified Refurbished',
            url: '/',
          },
          {
            title: 'Education',
            url: '/',
          },
          {
            title: 'Business',
            url: '/',
          },
          {
            title: 'Veterans and Military',
            url: '/',
          },
          {
            title: 'Government',
            url: '/',
          },
        ],
      },
    ],
  },

  mac: {
    height: 558,
    groupElevated: {
      title: 'Explore Mac',
      items: [
        {
          title: 'Explore All Mac',
          url: '/',
        },
        {
          title: 'Macbook Air',
          url: '/',
        },
        {
          title: 'Macbook Pro',
          url: '/',
        },
        {
          title: 'iMac',
          url: '/',
        },
        {
          title: 'Mac mini',
          url: '/',
        },
        {
          title: 'Mac studio',
          url: '/',
        },
        {
          title: 'Mac Pro',
          url: '/',
        },
        {
          title: 'Displays',
          url: '/',
        },
        {
          title: 'Compare Mac',
          url: '/',
          isSmall: true,
        },
        {
          title: 'Mac Does That',
          url: '/',
          isSmall: true,
        },
      ],
    },
    groups: [
      {
        title: 'Shop Mac',
        items: [
          {
            title: 'Shop Mac',
            url: '/',
          },
          {
            title: 'Mac Accessories',
            url: '/',
          },
          {
            title: 'Apple Trade In',
            url: '/',
          },
          {
            title: 'Financing',
            url: '/',
          },
        ],
      },
      {
        title: 'More from Mac',
        items: [
          {
            title: 'Mac Support',
            url: '/',
          },
          {
            title: 'AppleCare+ for Mac',
            url: '/',
          },
          {
            title: 'macOS Sonoma',
            url: '/',
          },
          {
            title: 'Apps by Apple',
            url: '/',
          },
          {
            title: 'Continuity',
            url: '/',
          },
          {
            title: 'iCloud+',
            url: '/',
          },
          {
            title: 'Mac for Business',
            url: '/',
          },
          {
            title: 'Education',
            url: '/',
          },
        ],
      },
    ],
  },

  ipad: {
    height: 538,
    groupElevated: {
      title: 'Explore iPad',
      items: [
        {
          title: 'Explore All iPad',
          url: '/',
        },
        {
          title: 'iPad Pro',
          url: '/',
        },
        {
          title: 'iPad Air',
          url: '/',
        },
        {
          title: 'iPad',
          url: '/',
        },
        {
          title: 'iPad mini',
          url: '/',
        },
        {
          title: 'Apple Pencil',
          url: '/',
        },
        {
          title: 'Keyboards',
          url: '/',
        },
        {
          title: 'Compare iPad',
          url: '/',
        },
        {
          title: 'Why iPad',
          url: '/',
        },
      ],
    },
    groups: [
      {
        title: 'Shop iPad',
        items: [
          {
            title: 'Shop iPad',
            url: '/',
          },
          {
            title: 'iPad Accessories',
            url: '/',
          },
          {
            title: 'Why iPad',
            url: '/',
          },
          {
            title: 'Apple Trade In',
            url: '/',
          },
          {
            title: 'Financing',
            url: '/',
          },
        ],
      },
      {
        title: 'More from iPad',
        items: [
          { title: 'iPad Support', url: '/' },
          { title: 'AppleCare+ for iPad', url: '/' },
          { title: 'iPadOS 17', url: '/' },
          { title: 'Apps by Apple', url: '/' },
          { title: 'iCloud+', url: '/' },
          { title: 'Education', url: '/' },
        ],
      },
    ],
  },

  iphone: {
    height: 470,
    groupElevated: {
      title: 'Explore iPhone',
      items: [
        {
          title: 'Explore All iPhone',
          url: '/',
        },
        {
          title: 'iPhone 15 Pro',
          url: '/',
        },
        {
          title: 'iPhone 15',
          url: '/',
        },
        {
          title: 'iPhone 14',
          url: '/',
        },
        {
          title: 'iPhone 13',
          url: '/',
        },
        {
          title: 'iPhone SE',
          url: '/',
        },
        {
          title: 'Compare iPhone',
          url: '/',
          isSmall: true,
        },
        {
          title: 'Switch from Android',
          url: '/',
          isSmall: true,
        },
      ],
    },
    groups: [
      {
        title: 'Shop iPhone',
        items: [
          {
            title: 'Shop iPhone',
            url: '/',
          },
          {
            title: 'iPhone Accessories',
            url: '/',
          },
          {
            title: 'Apple Trade In',
            url: '/',
          },
          {
            title: 'Carrier Deals at Apple',
            url: '/',
          },
          {
            title: 'Financing',
            url: '/',
          },
        ],
      },
      {
        title: 'More from iPhone',
        items: [
          {
            title: 'iPhone Support',
            url: '/',
          },
          {
            title: 'AppleCare+ for iPhone',
            url: '/',
          },
          {
            title: 'iOS 17',
            url: '/',
          },
          {
            title: 'Apps by Apple',
            url: '/',
          },
          {
            title: 'iPhone Privacy',
            url: '/',
          },
          {
            title: 'iCloud+',
            url: '/',
          },
          {
            title: 'Wallet, Pay, Card',
            url: '/',
          },
          {
            title: 'Siri',
            url: '/',
          },
        ],
      },
    ],
  },

  default: {
    height: 400,
    groupElevated: {
      title: '',
      items: [],
    },
    groups: [
      {
        title: '',
        items: [],
      },
    ],
  },
}
