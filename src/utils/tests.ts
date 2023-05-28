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
  