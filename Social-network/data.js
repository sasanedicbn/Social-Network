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
      img: "/assets/Angelina-Jolie.webp",
    },
    {
      id: crypto.randomUUID(),
      name: "Dobrila ",
      lastName: "Jovina",
      img: "/assets/dobrila2.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Jovan",
      lastName: "Jovic",
      img: "/assets/dobrinko3.webp",
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
};
