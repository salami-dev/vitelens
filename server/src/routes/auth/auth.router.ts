import express from 'express';
import { passportGoogle } from '../../services/auth/passport-google-strategy';


const router = express.Router();
router.get('/google',  passportGoogle.authenticate('google', {
    scope: ['email'],
  })
);

router.get('/google/callback', passportGoogle.authenticate('google', {
    failureRedirect: 'http://localhost:3000/login', //TODO: Adjust to frontend URL automatically, maybe by passing it in.
    successRedirect: 'http://localhost:3000/',
    session: true,
  }),
  (req,res) => {

    res.status(200).json({message: 'google sign in successfull. :(|> what should we do with that?'});
    console.log('google sign in successfull. :(|> what should we do with that?');

    return res.redirect('http://localhost:3000/');
    
    
    }
);

router.get('/logout', (req, res,next) => {
    //Removes req.user and clears any logged in session
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
});




export default router;
