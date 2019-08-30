import http from "@utils/http.js"
//http://m.maoyan.com/ajax/movieOnInfoList?token=
export const getMovie = ()=>http.get("/ajax/movieOnInfoList?token=")