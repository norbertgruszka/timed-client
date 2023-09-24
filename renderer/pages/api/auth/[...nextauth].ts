import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
        clientId: "timed-public",
        clientSecret: "731474de-9346-457a-a514-888887f78683",
        issuer: 'http://timed.local/auth/realms/timed',
    }),
  ],
}

export default NextAuth(authOptions)