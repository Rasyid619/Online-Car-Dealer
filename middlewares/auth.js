const isLoggedIn = function(req, res, next) {
  console.log(req.session.userId)
  if(!req.session.userId) {
    const error = `Please Login First!`
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
}

const isAdmin =  ((req, res, next) => {
  if(!req.session.userId && req.session.role !== "Admin") {
    const error = `You dont have permission`
    res.redirect(`/login/error?=`)
  } else {
    next()
  }
})


module.exports = {isLoggedIn, isAdmin}