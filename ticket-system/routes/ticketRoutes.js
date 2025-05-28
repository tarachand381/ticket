const express = require("express");
const router = express.Router();
const {
    generateTicket,
    getAllTickets,
    getTicketById,
    deleteTicket,
} = require("../controllers/ticketController");
router.post("/generate", generateTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicketById);
router.delete("/:id", deleteTicket);

module.exports = router;
