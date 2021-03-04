// This function executes when a user loads the sign up page
function signupPageViewed() {
	mixpanel.track("Signup Page Viewed")
	mixpanel.identify()
}

// This function executes after a user successfully signs up
// The "user" object contains the following properties: name, email, favorite_genre, plan, id
// e.g. calling user.id will return the user's id
function accountCreated(user) {
	mixpanel.track("Account Created", {"Name":user.name, "Email":user.email, "Genre": user.favorite_genre})
	mixpanel.alias(user.name, mixpanel.get_distinct_id())
	mixpanel.register({"Name":user.name, "Email":user.email, "Genre": user.favorite_genre})
	
}

// This function executes when a user successfully logs in
// The "user" object contains the following properties: name, email, favorite_genre, plan, id
// e.g. calling user.id will return the user's id
function login(user) {
	mixpanel.track("Login", {"Name":user.name, "Email":user.email, "Genre": user.favorite_genre, "Plan": user.plan})
}

// This function executes every time a song is played
// The "song" object contains the following properties: title, artist, genre, duration
// e.g. calling song.title will return the song's title
function songPlayed(song) {
	mixpanel.track("Song Played", {"Title": song.title, "Artist": song.artist, "Genre": song.genre})
}

// This function executes every time a song is purchased
// The "song" object contains the following properties: title, artist, genre, duration, price
// e.g. calling song.title will return the song's title
function songPurchased(song) {
	mixpanel.track("Song Purchase", {"Title": song.title, "Artist": song.artist, "Genre": song.genre})
	
}

// This function executes when a user upgrades from a Free plan to a Premium plan
function planUpgraded() {
	mixpanel.track("Plan Upgraded", {"Plan": user.plan})
	
}

// This function executes when a user downgrades from a Premium plan to a Free plan
function planDowngraded() {
	
}
