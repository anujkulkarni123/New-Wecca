module.exports = mongoose => {
    const Event = mongoose.model(
      "event",
      mongoose.Schema(
        {
          title: String,
          meta: String,
          start: Date,
          end: Date,
          team: String,
          allDay: Boolean,
          color: {
            primary: String,
            secondary: String
          }
          //draggable: Boolean,
          //resizable: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Event;
  };