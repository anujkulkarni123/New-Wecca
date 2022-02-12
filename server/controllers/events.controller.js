const db = require("../models");
const Event = db.events;

//Track colours
const colors = {
  //General --> general
  //Materials --> materials
  //Mould --> mould
  //Design and Analysis --> design
  //Research and Development --> research
  //Executive General --> executive
  //Software --> software
  //Training --> training
  //Graphic Design --> graphic
  //Tech comms/pres --> presentation

  general: {
    primary: "#7945bd",
    secondary: "#e3d0f0",
  },
  executive: {
    primary: "#3C91E6",
    secondary: "#92c9ff",
  },
  software: {
    primary: "#A2D729",
    secondary: "#cfea91",
  },
  materials: {
    primary: "#FA824C",
    secondary: "#ffbea0",
  },
  mould: {
    primary: "#D4AFB9",
    secondary: "#fcdfe6",
  },
  design: {
    primary: "#FFB30F",
    secondary: "#ffdd95",
  },
  research: {
    primary: "#bcc2bc",
    secondary: "#F2F7F2",
  },
  presentation: {
    primary: "#8B9D83",
    secondary: "#bedcb0",
  },
  graphic: {
    primary: "#5d6b67",
    secondary: "#b4bfbc",
  },
  training: {
    primary: "#E54F6D",
    secondary: "#ed9dad",
  },
};

// Create and Save a new Event
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an Event
  const event = new Event({
    title: req.body.title,
    meta: req.body.meta,
    start: new Date(req.body.start),
    end: new Date(req.body.end),
    team: req.body.team,
    allDay: req.body.allDay ? req.body.allDay : false,
    color: colors.general
  });

  // Save Tutorial in the database
  event
    .save(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Event.",
      });
    });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Event.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving events.",
      });
    });
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Event.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Event with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Event with id=" + id });
    });
};

// Update an Event by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found!`,
        });
      } else res.send({ message: "Event was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Event with id=" + id,
      });
    });
};

// Delete an Event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Event.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`,
        });
      } else {
        res.send({
          message: "Event was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Event with id=" + id,
      });
    });
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
    Event.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Events were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Events.",
      });
    });
};
