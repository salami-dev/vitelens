
const GOOGLE_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

export const AUTH_CONFIG = {
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
 GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
 GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,

}
export const GOOGLE_AUTH_OPTIONS = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}