export const properties = [
    {
      id: '123',
      name: 'Oakwood Apartments',
      rating: 4,
      totalRated: 115,
      type: ['Apartment', 'Condo'],
      reviews: [],
      mainImage: '/assets/image-1.jpg',
      contact: ['Contact 1', 'Contact 2'],
      address: 'Pasig City, PH',
      images: {
        front: 'front1.jpg',
        back: 'back1.jpg',
        interior: 'interior1.jpg',
        top: 'top1.jpg'
      },
      category: 'for-sale',
      price: {
        amount: 1500000,
        type: 'once'
      }
    },
    {
      id: '1234',
      name: 'Maple Heights',
      rating: 3.4,
      totalRated: 100,
      type: ['House'],
      reviews: [],
      mainImage: '/assets/image-4.jpg',
      contact: ['Contact 3', 'Contact 4'],
      address: 'Parañaque, PH',
      images: {
        front: 'front2.jpg',
        back: 'back2.jpg',
        interior: 'interior2.jpg',
        top: 'top2.jpg'
      },
      category: 'for-sale',
      price: {
        amount: 1500000,
        type: 'once'
      }
    },
    {
      id: '1235',
      name: 'Pineview Villas',
      rating: 5,
      totalRated: 55,
      type: ['Apartment', 'Condo', 'Commercial', 'Industrial'],
      reviews: [],
      mainImage: '/assets/image-3.jpg',
      contact: ['Contact 5', 'Contact 6'],
      address: 'Cavite, PH',
      images: {
        front: 'front3.jpg',
        back: 'back3.jpg',
        interior: 'interior3.jpg',
        top: 'top3.jpg'
      },
      category: 'for-rent',
      price: {
        amount: 15000,
        type: 'month'
      }
    },
    {
      id: '1267',
      name: 'Sunset Terrace',
      rating: 2.3,
      totalRated: 5,
      type: ['House'],
      reviews: [],
      mainImage: '/assets/image-4.jpg',
      contact: ['Contact 7', 'Contact 8'],
      address: 'Taguig City, PH',
      images: {
        front: 'front4.jpg',
        back: 'back4.jpg',
        interior: 'interior4.jpg',
        top: 'top4.jpg'
      },
      category: 'for-rent',
      price: {
        amount: 10000,
        type: 'month'
      }
    },
    {
      id: '1244',
      name: 'Riverbend Estates',
      rating: 4,
      totalRated: 40,
      type: ['Apartment'],
      reviews: [],
      mainImage: '/assets/image-5.jpg',
      contact: ['Contact 9', 'Contact 10'],
      address: 'Lipa City, PH',
      images: {
        front: 'front5.jpg',
        back: 'back5.jpg',
        interior: 'interior5.jpg',
        top: 'top5.jpg'
      },
      category: 'for-rent',
      price: {
        amount: 8000,
        type: 'month'
      }
    }
  ];

  export const testimonials = [
    {
      id: "testimony1",
      user: {
        id: "user1",
        name: "John Doe",
        email: "johndoe@example.com",
        profileImage: "/assets/profile-sample.png",
        residences: "Tendian Residence"
      },
      ratingCategory: ["Excellent Service", "Quick Response"],
      ratingMessage: "I had a great experience with Tendian Residence. The service provided was excellent, and they responded quickly to all my queries. Highly recommended!",
      rating: 5
    },
    {
      id: "testimony2",
      user: {
        id: "user2",
        name: "Jane Smith",
        email: "janesmith@example.com",
        profileImage: "/assets/profile-sample-2.png",
        residences: "Tendian Residence"
      },
      ratingCategory: ["Friendly Staff", "Smooth Process"],
      ratingMessage: "I am extremely satisfied with Tendian Residence. The staff was friendly and helpful, and the whole application process went smoothly. I would definitely choose them again!",
      rating: 4.5
    },
    {
      id: "testimony3",
      user: {
        id: "user3",
        name: "David Johnson",
        email: "davidjohnson@example.com",
        profileImage: "/assets/profile-sample.png",
        residences: "Tendian Residence 2 "
      },
      ratingCategory: ["Great Value", "Excellent Amenities"],
      ratingMessage: "I had a wonderful experience with Tendian Residence. The value for money was great, and the amenities provided were excellent. Highly recommended!",
      rating: 4
    }
  ]

  export const ratingGraph = [
    {id: 'asrdf', star: 5, value: 70},
    {id: 'asrdf32',star: 4, value: 13},
    {id: 'AFdasrdf',star: 3, value: 12},
    {id: 'saWWasrdf',star: 2, value: 50},
    {id: '09GGasrdf',star: 1, value: 10}
  ]

  export const comments = [
    {
      id: '123ddd',
      user: { 
        id: '1212ff',
        name: 'John Doe',
        residences: 'Excalibur Residences'
      },
      reviews: {
        rating: 4,
        remarks: 'Amazing',
        images: ['/assets/image-1.jpg', '/assets/image-3.jpg', '/assets/image-2.jpg'],
        message: 'I am extemely happy with the recent purchase of a new home from Company name. The entire process'
      },
      createdAt: new Date()
    },
    {
      id: '123ddd2',
      user: { 
        id: '1212fssf',
        name: 'Jason Yup'
      },
      reviews: {
        rating: 3.5,
        remarks: 'Cool',
        images: [],
        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati dolor non sint totam, maxime tenetur molestiae atque maiores similique odio quos distinctio enim, ratione voluptatibus perspiciatis assumenda velit aliquid expedita. Repellendus, velit. Optio, quibusdam beatae cum nesciunt ad dolorum.'
      },
      createdAt: new Date()
    },
    {
      id: '123ddd',
      user: { 
        id: '1212ff',
        name: 'John Doe',
        residences: 'Excalibur Residences'
      },
      reviews: {
        rating: 4,
        remarks: 'Amazing',
        images: [],
        message: 'I am extemely happy with the recent purchase of a new home from Company name.'
      },
      createdAt: new Date()
    },
  ]

export const galleryImagesData = {
    totalPhotos: 17,
    images: [
      {
        img: '/assets/image-1.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-2.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-3.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-4.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-5.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-2.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-3.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-4.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-3.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-4.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-3.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-4.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-4.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-3.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-4.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-3.jpg',
        title: 'house',
      },
      {
        img: '/assets/image-4.jpg',
        title: 'house',
      },
    ]
}

export const founders = [
  {id: '1234', image: "/assets/image-profile-1.jpg", name: 'John Doe', title: 'Head Programmer - Development Team', description: 'He is the main founder'},
  {id: '12344', image: '/assets/image-profile-2.jpg', name: 'Jackson Gate', title: 'Marketing and Promotions - Design Team', description: 'A real estate agent for the past 5 years'},
  {id: '12344', image: '/assets/image-profile-2.jpg', name: 'Mark Jack', title: 'Digital marketing - Design Team', description: 'A real estate agent for the past 5 years'},
  {id: '12344', image: '/assets/image-profile-2.jpg', name: 'Jason Mike', title: 'Head strategist - Real Estate Experts', description: 'A real estate agent for the past 5 years'}
]

export const featuredLists = [
  {
    id: '123444ewedsds',
    name: 'Ayala Malls',
    mainColor: '#EB7137',
    subColor: '#F5B79B',
    logo: '/assets/ayala-mall-logo.png',
    location: 'Ayala Malls Alabang',
    title: 'HOUSE AND LOT FOR SALE IN Alabang',
    subTitle: 'Cammella Home Series',
    coverImage: '/assets/ayala-malls-cover.jpg',
    properties: [
      {
        id: '1267',
        name: 'Sunset Terrace',
        rating: 2.3,
        totalRated: 5,
        type: ['House'],
        reviews: [],
        mainImage: '/assets/image-4.jpg',
        contact: ['Contact 7', 'Contact 8'],
        address: 'Taguig City, PH',
        images: {
          front: 'front4.jpg',
          back: 'back4.jpg',
          interior: 'interior4.jpg',
          top: 'top4.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 10000,
          type: 'month'
        }
      },
      {
        id: '1244',
        name: 'Riverbend Estates',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-5.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      }
    ]
  },
  {
    id: '123444dsd4ee34s',
    name: 'Camella Homes',
    mainColor: '#233624',
    subColor: '#2C5B26',
    location: 'Camella Homes Santiago',
    logo: '/assets/camella-homes-logo.png',
    title: 'HOUSE AND LOT FOR SALE IN Santiago City',
    subTitle: 'Cammella Home Series',
    coverImage: '/assets/camilla-homes-cover.webp',
    properties: [
      {
        id: '1244323',
        name: 'Riverbend Estates',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-2.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqw',
        name: 'Camella home Lipa',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqwq323',
        name: 'Camella homes Cavite',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Cavite, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      }
    ]
  },
  {
    id: '123444dsd434ewews',
    name: 'SM Prime',
    mainColor: '#1E398D',
    subColor: '#2070C1',
    location: 'SM Prime Cebu',
    logo: '/assets/sm-prime-logo-2.png',
    title: 'HOUSE AND LOT FOR SALE IN Cebu City, Visayas',
    subTitle: 'Cammella Home Series',
    coverImage: '/assets/sm-prime-cover.jpg',
    properties: [
      {
        id: '1244323',
        name: 'Light Residences',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-2.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqw',
        name: 'Camilla home Lipa',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqwq323',
        name: 'Camilla home Cavite',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Cavite, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      }
    ]
  },
  {
    id: '1234ss44dsd434ewessasa',
    name: 'Mega world',
    mainColor: '#1674C1',
    subColor: '#65A3D6',
    logo: '/assets/megaworld-logo.png',
    location: 'Mega World Metro Manila',
    title: 'HOUSE AND LOT FOR SALE IN Metro Manila',
    subTitle: 'Cammella Home Series',
    coverImage: '/assets/mega-world-cover.png',
    properties: [
      {
        id: '1244323',
        name: 'Light Residences',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-2.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqw',
        name: 'Camilla home Lipa',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqwq323',
        name: 'Camilla home Cavite',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Cavite, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      }
    ]
  },
  {
    id: '1234ss44dsd434ssaewesa',
    name: 'DMCI Homes',
    mainColor: '#041B4D',
    subColor: '#01A71C',
    location: 'DMCI Home Taguig',
    title: 'HOUSE AND LOT FOR SALE IN Taguig CITY',
    subTitle: 'Cammella Home Series',
    logo: '/assets/dmci-homes-logo.webp',
    coverImage: '/assets/dmci-homes-cover.jpg',
    properties: [
      {
        id: '1244323',
        name: 'Light Residences',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-2.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqw',
        name: 'Camilla home Lipa',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      }
    ]
  },
  {
    id: '1234ss44dsewed434ssasa',
    name: 'Federal Land',
    mainColor: '#041B4D',
    subColor: '#01A71C',
    location: 'Federal Land Las Piñas City',
    logo: '/assets/federal-land-logo.png',
    coverImage: '/assets/federal-land-cover.jpg',
    title: 'HOUSE AND LOT FOR SALE IN Las Piñas City, Metro Manila',
    subTitle: 'Cammella Home Series',
    description: '',
    properties: [
      {
        id: '1244323',
        name: 'Light Residences',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-2.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqw',
        name: 'Camilla home Lipa',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      }
    ]
  },
  {
    id: '1234ss44dsd434sseweasa',
    name: 'Robinsons Land Corp.',
    mainColor: '#3371AB',
    subColor: '#E14E5C',
    logo: '/assets/robinsons-land0corp-logo.png',
    title: 'HOUSE AND LOT FOR SALE IN Cavite City, Cavite',
    subTitle: 'Cammella Home Series',
    location: 'Robinsons States Cavite',
    coverImage: '/assets/robinsons-land-corp.jpg',
    properties: [
      {
        id: '1244323',
        name: 'Light Residences',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-2.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      },
      {
        id: '1244wqw',
        name: 'Camilla home Lipa',
        rating: 4,
        totalRated: 40,
        type: ['Apartment'],
        reviews: [],
        mainImage: '/assets/image-1.jpg',
        contact: ['Contact 9', 'Contact 10'],
        address: 'Lipa City, PH',
        images: {
          front: 'front5.jpg',
          back: 'back5.jpg',
          interior: 'interior5.jpg',
          top: 'top5.jpg'
        },
        category: 'for-rent',
        price: {
          amount: 8000,
          type: 'month'
        }
      }
    ]
  }
]