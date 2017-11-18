// import form from '../../templates/form.html';
// const form = require('./form.html');
function introHandler(req, res) {
  res.send(`
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="attachment">
    <input type="submit" value="Upload file">
  </form>`);
}

export { introHandler } 