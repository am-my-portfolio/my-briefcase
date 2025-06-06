import { Item, AllRoles, NavType } from '@/helpers';

export const primary_navigation: Item[] = [
  {
    name: 'Integrations',
    description:
      'Integrate Socials, Calendar, Email, Storage (Dropbox, Google Drive), Bank',
    icon: 'fa fa-plug',
    current: false,
    roles: [AllRoles.SUPER_ADMIN],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: 'List of your integrations',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Inbox',
        description: '<Available Email providers>',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Calendar',
        description: '<Available Calendar providers>',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab4',
        name: 'Listing Site',
        description: '<Property Listing providers>',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab5',
        name: 'Social Media',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'My Team',
    description: 'Collaborate with your team, streamline tasks',
    icon: 'fa-solid fa-users',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.CONSUMER],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: '',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Roles',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'My Vendors',
    description:
      'Manage vendors, check their expertise and product/service list',
    icon: 'fa-solid fa-user-tag',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: '',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Booking & Scheduling', // https://schedule-x.dev/docs/frameworks/vue
        description:
          '<Book appointments according to yours and your clients availability check https://schedule-x.dev/docs/frameworks/vue>',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Communication',
        description:
          '<Draft and send emails (e.g welcome emails, acknoledgements, confirmations, reminders, reports, FAQs>',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab4',
        name: 'Marketing',
        description:
          'Draft and post social media content, advertisement emails',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'My Listings',
    description: 'Manage property listings',
    icon: 'fa-solid fa-sign-hanging',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: '',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Model',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'My Properties',
    description: 'Manage properties currently rented out',
    icon: 'fa-solid fa-house-user', // truck-ramp-box, dolly, people-carry-box
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: '',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Roles',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Groups',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab4',
        name: 'Api Keys',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Owners & Investors',
    description: 'Manage users, check their roles and connections',
    icon: 'fa-solid fa-users-line',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.ADMIN, AllRoles.VENDOR],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: '',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Roles',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Groups',
        description: '',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Performance & Trends',
    description: 'Manage users, check their roles and connections',
    icon: 'fa-solid fa-money-bill-trend-up', // fa-circle-dollar-to-slot regular fa-money-bill-1, solid: money-check-dollar, dollar-sign, hand-holdinig-dollar
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: '',
        current: true,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Chat',
    description: 'Chat with the AI',
    icon: 'fa-solid fa-comment-dots',
    current: false,
    roles: [AllRoles.SUPER_ADMIN],
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        description: '',
        current: true,
        icon: '',
        items: [],
      },
    ],
  },
];
