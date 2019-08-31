import http from "@utils/http";

export const loginApi = (username,password)=>http.post("/app/mock/222092/books/users",{username,password})