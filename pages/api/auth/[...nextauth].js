import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'
export default NextAuth({
    providers:[
        GithubProvider({
            clientId:'123f85059f9f5472b474',
            clientSecret:'468ae7f11e57df2ae278e637e9ffc8c4e0ae63f6'
        })
    ],
    // database:'url of connected database'
})