const JWTStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../User/user.schema.js");

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: "secret"
};

module.exports = (passport) => {
	passport.use(
		"jwt",
		new JWTStrategy(opts, (jwt_payload, done) => {
			console.log("inside strategy");
			User.findById(jwt_payload.id)
				.then((user) => {
					if (user) return done(null, user);
					return done(null, false);
				})
				.catch((err) => console.log(err));
		})
	);

	passport.use(
		"google",
		new GoogleStrategy(
			{
				clientID: "471060917903-cofebv35439sq2k6732l0lkt5fsuem2p.apps.googleusercontent.com",
				clientSecret: "HouFxa9mbOXhpstQRpVONNJq",
				callbackURL: "http://"
			},
			(accessToken) => {
				console.log("access token: ", accessToken);
			}
		)
	);
};
