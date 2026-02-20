import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })
        if (user && bcrypt.compareSync(credentials.password as string, user.password!)) {
          return user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOptions)