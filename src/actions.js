import axios from "axios";

//   id: 1,
//   img: "/123/abc.png",
//   title: "This is a title.",
//   description: "This is a description.",
//   user: {
//     id: 1,
//     first_name: "Candela",
//     last_name: "Rebot",
//     profile_image: "/321/bca.png"
//   }
const randomImg = ["800/600", "500/300", "200/150"];

const formatDummyData = (d = []) =>
  d.map(({ id, title, thumbnailUrl: profile_image }) => ({
    id,
    img: `https://picsum.photos/${
      randomImg[Math.floor(Math.random() * 3 + 1) - 1]
    }`,
    title,
    description: `${title} ${title} ${title}  ${title} ${title}`,
    user: {
      id,
      first_name: "Candela",
      last_name: "Rebot",
      profile_image,
      title: "Producer",
    },
  }));

export const getPhotos = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/photos", {
      "Content-Type": "application/json",
      Accept: "application/json",
    })
    .then(({ data }) => {
      return {
        // remove this if below response format is true
        new: formatDummyData(data.slice(0, 15)),
        winner: formatDummyData(data.slice(15, 30)),
        featured: formatDummyData(data.slice(30, 45)),
      };
      //   return data; // uncomment this if the actual reponse is { popular: [], new: [], winner:[] } etc
    });
