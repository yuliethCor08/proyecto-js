// export function get(url) {
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

export async function get(url) {
  try {
      const response = await fetch(url, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });

      if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error(error);
      return null;
  }
}