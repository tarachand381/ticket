const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
    {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ticketNumber: { type: String, unique: true },
    issuedAt: { type: Date, default: Date.now }
}
);

module.exports = mongoose.model("Ticket", ticketSchema);