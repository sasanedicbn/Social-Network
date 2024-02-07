export const user = {
  id: crypto.randomUUID(),
  name: "Sasa",
  lastName: "Nedic",
  img: "/assets/user.png",
  adress: {
    country: "Bosnia and Herzegovina",
    city: "Bijeljina",
    socialMedia: {
      facebook: "Sasa Nedic",
      instagram: "nedicsasa",
    },
  },

  friends: [
    {
      id: crypto.randomUUID(),
      name: "Angelina",
      lastName: "Jolie",
      img: "assets/Angelina-Jolie.webp",
    },
    {
      id: crypto.randomUUID(),
      name: "Dobrila ",
      lastName: "Jovina",
      img: "/assets/dobrila 2.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Jovan",
      lastName: "Jovic",
      img: "/assets/dobrinko 3.webp",
    },
    {
      id: crypto.randomUUID(),
      name: "Milan",
      lastName: "Samardzic",
      img: "/assets/cetvrti.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Nikolina",
      lastName: "Ikic",
      img: "/assets/peta.avif",
    },
    {
      id: crypto.randomUUID(),
      name: "Isak",
      lastName: "Mihajlovic",
      img: "/assets/arslan6.jpg",
    },
  ],

  posts: [
    {
      id: crypto.randomUUID(),
      postText: "Believe you can and you're halfway there.",
      postDate: "2 days ago",
      likes: [
        {
          name: "Isak",
          lastName: "Mihajlovic",
        },
        {
          name: "Nikolina",
          lastName: "Ikic",
        },
      ],
      comments: [
        {
          name: "Isak",
          lastName: "Mihajlovic",
          commentText: "Wow, this is amazing",
          img: "/assets/arslan6.jpg",
        },
        {
          name: "Jovan",
          lastName: "Jovic",
          commentText: "Absolutely love this quote!",
          img: "/assets/dobrinko3.webp",
        },
        {
          name: "Angelina",
          lastName: "Jolie",
          commentText:
            "Sometimes, it's the small gestures that make someone a hero",
          img: "/assets/Angelina-Jolie.webp",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      postText:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      postDate: "7 days ago",
      likes: [
        {
          name: "Dobrila",
          lastName: "Jovina",
        },
      ],
      comments: [],
    },
    {
      id: crypto.randomUUID(),
      postText: "Don't watch the clock; do what it does. Keep going.",
      postDate: "1 day ago",
      likes: [
        { name: "Jovan", lastName: "Jovic" },
        { name: "Angelina", lastName: "Jolie" },
        { name: "Isak", lastName: "Mihajlovic" },
        { name: "Milan", lastName: "Samardzic" },
      ],
      comments: [
        {
          name: "Isak",
          lastName: "Mihajlovic",
          commentText:
            "Sometimes the choices we face are so tough, it's almost like navigating through shades of gray.",
          img: "/assets/arslan6.jpg",
        },
        {
          name: "Angelina",
          lastName: "Jolie",
          commentText:
            " Choosing between evils can be a dilemma, but your stance adds a layer of wisdom to it. ",
          img: "/assets/Angelina-Jolie.webp",
        },
        {
          name: "Isak",
          lastName: "Mihajlovic",
          commentText:
            " It's a reminder that sometimes the best option is to stay true to your principles, even if the choices seem challenging.",
          img: "/assets/arslan6.jpg",
        },
        {
          name: "Milan",
          lastName: "Samardzic",
          commentText:
            "Makes me ponder on the importance of staying true to one's moral compass. ",
          img: "/assets/cetvrti.jpg",
        },
      ],
    },
  ],
};
