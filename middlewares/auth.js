const isLoggedIn = function(req, res, next) {
  console.log(req.session.userId, req.session.role)
  if(!req.session.userId) {
    const error = `Please Login First!`
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
}

const isAdmin =  function(req, res, next)  {
  if(!req.session.userId || req.session.role !== "Admin") {
    const error = `You dont have permission`
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
}


module.exports = {isLoggedIn, isAdmin}