// B R E A D

const { SQLGenericError } = require("../errors/SQLGenericError");
const tables = require("../tables");

// B - Browse (Read All)
const browse = async (req, res) => {
  try {
    const persons = await tables.person.readAll();
    persons.length
      ? res.json(persons)
      : res.status(404).json({
          message: "No data in this table.",
        });
  } catch (e) {
    console.error(e);
  }
};

// R - Read (Read one element)
const read = async (req, res) => {
  const { id } = req.params;

  try {
    const [person] = await tables.person.readOne(parseInt(id, 10));
    console.log(person);
    person
      ? res.json(person)
      : res.status(404).json({
          message: "Person not found",
        });
  } catch (e) {
    console.error(e);
  }
};

// E - Edit
const edit = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const result = await tables.person.editOne(
      parseInt(id, 10),
      name,
      description
    );

    res.status(200).json({
      id: id,
      message: "Votre utilisateur a été modifié",
    });
  } catch (e) {
    next(e);
  }
};

// A - Add
const add = async (req, res, next) => {
  const { name, description, password } = req.body;

  try {
    const result = await tables.person.addOne(name, description, password);

    res.status(201).json({
      id: result.insertId,
      message: "Votre utilisateur a été crée",
    });
  } catch (e) {
    next(e);
  }
};

// D - Delete
const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await tables.person.deleteOne(parseInt(id, 10));

    result
      ? res.json({
          message: `Deleted entry ${id}`,
        })
      : res.status(404).json({
          message: "Person not found",
        });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { browse, read, edit, add, remove };
