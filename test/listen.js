import srv from '../'

export default () => {
  return new Promise((resolve, reject) => {
    srv.listen((err) => {
      if (err) return reject(err)
      const { port } = srv.address()
      resolve(`http://localhost:${port}`)
    })
  })
}
