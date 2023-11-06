import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Authorization: "Client-ID n2WaQFhA9_FVsXxOgMm3dhJXpU9jdbZ4a0otj2rr9WQ",
  },
});

export default authFetch;
