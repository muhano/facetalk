function authentication (req, res, next)  {
  if (req.session.userId) {
    next()
  } else {
    // redirect ke landing page
    res.redirect('/')
  }
}

module.exports = authentication