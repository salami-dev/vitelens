
import { type Response, type Request, type NextFunction } from 'express';
import passport, {Profile,  } from 'passport';
// import by extracting GoogleStrategy from passport-google-oauth20
import {Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth20'
import cookieSession from 'cookie-session';


import { GOOGLE_AUTH_OPTIONS, AUTH_CONFIG } from './config';


// callback after user has signed in with google auth. let us do and undo here

function VerifyCallback(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
  // console.log('profile" = ', profile)
  
  // console.log(profile.emails[0], "profile from google", "id from google", profile.id, "displayName from google", profile.displayName, "photos from google", profile.photos[0]);
  done(undefined, profile);
}

passport.use(new GoogleStrategy(GOOGLE_AUTH_OPTIONS, VerifyCallback));

// Save the session to the cookie
passport.serializeUser((user:Profile , done) => {
    done(null, user.id);
  });
  
  // Read the session from the cookie
  passport.deserializeUser((id, done) => {
    done(null, id);
  });

  export function checkLoggedIn(req:Request, res:Response, next:NextFunction) {
    console.log('Current user is:', req.user);
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
      return res.status(401).json({
        error: 'User not authenticated',
      });
    }
    next();
  }

export const passportGoogle = passport;
export const session = cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [AUTH_CONFIG.COOKIE_KEY_1, AUTH_CONFIG.COOKIE_KEY_2],
  });


  export const removeStub = (req: Request, res: Response, next: NextFunction): void => {
    // Stub out missing regenerate and save functions.
    // These don't make sense for client side sessions.
    if (req.session && !req.session.regenerate) {        
        // @ts-expect-error disable ts lint any implicit errorParameter 'cb' implicitly has an 'any' type.ts(7006)
      req.session.regenerate = (cb) => {
        cb();
      };
    }
    if (req.session && !req.session.save) {
      // @ts-expect-error disable ts lint any implicit errorParameter 'cb' implicitly has an 'any' type.ts(7006)
      req.session.save = (cb) => {
        cb();
      };
    }
    next();
  };