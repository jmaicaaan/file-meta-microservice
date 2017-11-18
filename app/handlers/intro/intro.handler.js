import form from '../../templates/form.html';

function introHandler(req, res) {
  res.sendFile(form);
}

export { introHandler } 