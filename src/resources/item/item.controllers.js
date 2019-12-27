export const getItem = (req, res) => {
  const id = req.params.id
  res.send({
    id,
    name: `task no ${id}`
  })
}

export const getItems = (req, res) => {
  const items = [
    { id: 1, name: `task no ${1}` },
    { id: 2, name: `task no ${2}` }
  ]
  res.send(items)
}

export const createItem = (req, res) => {
  const data = req.body
  res.send({ data, message: 'created' })
}

export const updateItem = (req, res) => {
  const { id } = req.params
  res.send({ id, item: req.body, message: 'updated' })
}

export const deleteItem = (req, res) => {
  const { id } = req.params
  res.send(`successfully deleted ${id} item`)
}
