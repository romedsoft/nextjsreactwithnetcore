import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import AzureADProvider from "next-auth/providers/azure-ad";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({

  providers: [
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: "Credentials",
    //   // `credentials` is used to generate a form on the sign in page.
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied

    //     const details = {
    //       'userName': credentials?.username,
    //       'password': credentials?.password,
    //       'client_id' : "testclient2",
    //       'client_secret': "dummy",
    //       'grant_type' : "password",
    //       'scope' : "openid profile offline_access roles"
    //     };

    //     let parseToString = (value : string  | undefined) : string => {
    //             if(value){
    //               return value.toString()
    //             }

    //             return "";
    //     }

    //     const formBody = Object.entries(details).map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(parseToString(value))).join('&');

    //     try {
    //       const res = await fetch("https://127.0.0.1:5000/connect/token", {
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //         },
    //         body: formBody,
    //       });

    //     const user = await res.json();

    //     if (user.access_token) {
    //       // Any object returned will be saved in `user` property of the JWT

    //       return user;
    //     } else {
    //       // If you return null then an error will be displayed advising the user to check their details.
    //       console.log(user);
    //       return null;

    //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //     }

    //     }catch(e){
    //       console.log(e);

    //       return null;
    //     }
        

        
    //   },
    // }),
    AzureADProvider({
      name: "AzureADProvider",
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: { params: { scope: "openid profile user.Read email" } },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account  }) {

      console.log("jwt");
      console.log(token);
      console.log("account ");
      console.log(account );

      token.idToken = account?.id_token;
      // try{
      //   const res = await fetch("https://127.0.0.1:5000/connect/userinfo", {
      //     method: "POST",
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': 'Bearer ' + token.access_token
      //     },
      //     body: null,
      //   });

      //   user = await res.json();

      //   console.log(user);
      // }catch(e){
      //     console.log(e);
      // }
      

      return { ...token, ...account };
    },

    async session({ session, token }) {

      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
