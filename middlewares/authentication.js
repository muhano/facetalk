const isLoginMiddleware = function (req, res, next)  {
  if (req.session.isLogin) {
    next()
  } else {
    // redirect ke landing page
    res.redirect('/products')
  }
}