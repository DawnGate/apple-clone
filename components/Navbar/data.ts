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
    height: 416,
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
    height: 572,
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
}
