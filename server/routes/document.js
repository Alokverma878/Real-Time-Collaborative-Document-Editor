const express = require('express');
const Document = require('../models/Document');
const router = express.Router();

router.post('/', async (req, res) => {
  const doc = new Document(req.body);
  await doc.save();
  res.json(doc);
});

router.get('/:id', async (req, res) => {
  const doc = await Document.findById(req.params.id);
  res.json(doc);
});

router.put('/:id', async (req, res) => {
  const updated = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;