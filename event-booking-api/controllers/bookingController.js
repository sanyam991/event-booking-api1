const { Booking, Event } = require('../models');

exports.bookEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    const event = await Event.findByPk(eventId);
    if (!event || event.availableSeats < 1)
      return res.status(400).json({ error: 'No seats available' });

    const booking = await Booking.create({
      UserId: req.user.id,
      EventId: eventId,
    });

    event.availableSeats -= 1;
    await event.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { UserId: req.user.id },
      include: ['Event'],
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking || booking.UserId !== req.user.id)
      return res.status(404).json({ error: 'Booking not found' });

    const event = await Event.findByPk(booking.EventId);
    event.availableSeats += 1;
    await event.save();

    await booking.destroy();
    res.json({ message: 'Booking cancelled' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
