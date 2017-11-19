function uploadHandler(req, res) {
  let file = req.file;
  if (file) {
    return res.send({ size: file.size, filename: file.originalname });
  }
  return res.status(500)
    .send('No file submitted');
}

export { uploadHandler } 