const express = require('express')
const app = express()
const session = require('express-session');
const router = require('./routes/index')
const nodemailer = require('nodemailer')
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(session({
	secret: 'Everyone has one or two secret',
  resave: false,
  saveUninitialized: false,
	cookie: { 
		secure: false,
		sameSite: true 
	}
}))

app.use(router)




app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})