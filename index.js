const express = require('express')
const app = express()
const port = 2406

app.get('/trang-chu', (req, res) => {
  res.send('Đừng có mà nhìn!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})