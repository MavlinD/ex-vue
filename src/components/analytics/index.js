export function checkSiteId(to, from, next) {
  if (!localStorage.getItem('leadhit-site-id')) {
    next({ name: 'SignIn' })
  } else {
    next()
  }
}
