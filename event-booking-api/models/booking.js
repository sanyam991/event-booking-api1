module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    status: { type: DataTypes.STRING, defaultValue: 'booked' },
  });

  return Booking;
};