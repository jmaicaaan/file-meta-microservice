function uploadHandler(req, res) {
  let file = res.file;
  res.send('Hello World');
}

export { uploadHandler } 