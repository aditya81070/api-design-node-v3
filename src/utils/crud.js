export const getOne = model => async (req, res) => {
  const { id } = req.params
  const userId = req.user._id
  const item = await model.findOne({ _id: id, createdBy: userId }).exec()
  if (!item) {
    return res.status(404).end()
  }
  res.status(200).json({ data: item })
}

export const getMany = model => async (req, res) => {
  const items = await model.find({ createdBy: req.user._id }).exec()
  res.status(200).json({ data: items })
}

export const createOne = model => async (req, res) => {
  const data = {
    ...req.body,
    createdBy: req.user._id
  }
  const newItem = await model.create(data)
  res.status(201).json({ data: newItem })
}

export const updateOne = model => async (req, res) => {
  const { id } = req.params
  const userId = req.user._id
  const updateItem = await model.findOneAndUpdate(
    { _id: id, createdBy: userId },
    req.body,
    { new: true }
  )
  if (!updateItem) return res.status(404).end()
  res.status(200).json({ data: updateItem })
}

export const removeOne = model => async (req, res) => {
  const removedItem = await model
    .findOneAndRemove({
      _id: req.params.id,
      createdBy: req.user._id
    })
    .exec()
  if (!removedItem) return res.status(404).end()
  res.status(200).json({ data: removedItem })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
