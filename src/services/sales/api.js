import axios from "axios";

export async function getAllBlogPost({ fetch }) {
  try {
    const response = await axios(
      `https://api.hackerwebapp.com/news?page=${fetch?.currentPage || 1}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to load blogs");
  }
}

// import axios from "axios";

// export async function getAllBlogPost(ctx) {
//   let data = {};

//   try {
//     const response = await axios("https://api.hackerwebapp.com/news?page=1");
//     data = {
//       blogs: response.data,
//       result: {
//         message: "",
//         status: 200,
//         loading: false,
//       },
//     };
//   } catch (e) {
//     data = {
//       blogs: {},
//       result: {
//         message: "Something happened in the Api",
//         status: 500,
//         loading: false,
//       },
//     };
//   }

//   return data;
// }
