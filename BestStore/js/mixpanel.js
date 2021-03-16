// This function executes when a user loads the sign up page
function signupPageViewed() {
	mixpanel.track("Signup Page Viewed")
}

// This function executes after a user successfully signs up
// The "user" object contains the following properties: name, email, favorite_genre, plan, id
// e.g. calling user.id will return the user's id
function accountCreated(user) {
	mixpanel.track("Account Created", {"email": user.email, "Items that they want to buy":user.favorite_items})
	
}

// This function executes when a user successfully checks out
// The "user" object contains the following properties: name, email, favorite_genre, plan, id
// e.g. calling user.id will return the user's id
function checkout(user) {
	
}

// This function executes every time a song is played
// The "song" object contains the following properties: title, artist, genre, duration
// e.g. calling song.title will return the song's title
function songSampled(song) {
	
}

// This function executes every time a song is purchased
// The "song" object contains the following properties: title, artist, genre, duration, price
// e.g. calling song.title will return the song's title
function AddedtoCart(song) {
	mixpanel.track("Added to Cart")
	
}
