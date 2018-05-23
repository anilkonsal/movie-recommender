module.exports = (string) => {
  let params = string.split(',')
  let px = {}
  params.forEach(p => {
    let pArr = p.split(/:(.*)/)
    px[pArr[0]] = pArr[1]
  })
  return px
}
