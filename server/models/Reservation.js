import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    reservationDate: {
      type: Date,
      required: true,
    },
    reservationTime: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      enum: ['booked', 'confirmed', 'cancelled'],
      default: 'booked',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Reservation', reservationSchema);
