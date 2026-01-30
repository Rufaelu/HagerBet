import express from 'express';
import Reservation from '../models/Reservation.js';

const router = express.Router();

// Create a new reservation
router.post('/', async (req, res) => {
  try {
    const { customerName, customerEmail, reservationDate, reservationTime, guests } = req.body;

    if (!customerName || !customerEmail || !reservationDate || !reservationTime || !guests) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newReservation = new Reservation({
      customerName,
      customerEmail,
      reservationDate,
      reservationTime,
      guests,
    });

    await newReservation.save();
    res.status(201).json({ success: true, message: 'Reservation created successfully', data: newReservation });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating reservation', error: error.message });
  }
});

// Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json({ success: true, data: reservations });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching reservations', error: error.message });
  }
});

// Get a single reservation by ID
router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ success: false, message: 'Reservation not found' });
    }
    res.json({ success: true, data: reservation });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching reservation', error: error.message });
  }
});

// Update a reservation
router.put('/:id', async (req, res) => {
  try {
    const { customerName, customerEmail, reservationDate, reservationTime, guests, status } = req.body;

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { customerName, customerEmail, reservationDate, reservationTime, guests, status },
      { new: true, runValidators: true }
    );

    if (!reservation) {
      return res.status(404).json({ success: false, message: 'Reservation not found' });
    }

    res.json({ success: true, message: 'Reservation updated successfully', data: reservation });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating reservation', error: error.message });
  }
});

// Delete a reservation
router.delete('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);

    if (!reservation) {
      return res.status(404).json({ success: false, message: 'Reservation not found' });
    }

    res.json({ success: true, message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting reservation', error: error.message });
  }
});

export default router;
