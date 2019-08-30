import {
    Auth,
    Login,
    HotBooks
} from "@pages"

export const LayoutRouteComponent = [
    {
        path:"/auth",
        key:"/auth",
        mete:{
            login:true,
        },
        icon:"user",
        name:"权限管理",
        component:Auth
    },
    {
        path:"/books",
        key:"/books",
        mete:{
            login:true,
        },
        icon:"user",
        name:"书籍管理",
        //redirect: '/books/booksList',
        children:[
            {
                path:"/books/booksList",
                component:HotBooks,
                name:"热门书籍",
                key:"/books/booksList",
            }
        ]
    }
]

export const noLayoutRouteComponent = [
    {
        path:"/login",
        mete:{
            login:false,
        },
        icon:"user",
        name:"登陆",
        component:Login
    },
]