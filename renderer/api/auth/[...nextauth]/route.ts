import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
    {
      id: "sso",
      name: "SSO",
      wellKnown: "http://timed.local/auth/realms/timed/.well-known/openid-configuration",
      type: "oauth",
      authorization: { params: { scope: "openid" } },
      checks: ["pkce", "state"],
      idToken: true,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name ?? profile.preferred_username,
          email: profile.email,
          image: profile.picture,
        }
      },
      clientId: "timed-public",
      clientSecret: "731474de-9346-457a-a514-888887f78683"
    }
  ]
})

export { handler as GET, handler as POST }