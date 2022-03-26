import axios from "axios";

export default async function fetcher(url, method){
  return axios.request({
    method,
    url: url,
  }).then(res => res.data)
}