const Ticket = require("../models/ticketModel");

exports.generateTicket = async (req, res) => {
    const { userId } = req.body;

    const existing = await Ticket.findOne({ userId });
    if (existing) 
        return res.send(
        { msg: "Ticket already exists", status: 0 }
    );

    const ticket = new Ticket({
        userId,
        ticketNumber: "TKT-" + Date.now()
    });
    await ticket.save();
    res.send(
        { msg: "Ticket generated", status: 1, ticket }
    );
};
exports.getAllTickets = async (req, res) => {
    const tickets = await Ticket.find().populate("userId");
    res.send(
        { msg: `${tickets.length} tickets found`, status: 1, tickets }
    );
};

exports.getTicketById = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate("userId");
    if (!ticket) 
        return res.send(
        { msg: "Ticket not found", status: 0 }
    );
    res.send(
        { msg: "Ticket found", status: 1, ticket }
    );
};
exports.deleteTicket = async (req, res) => {
    await Ticket.findByIdAndDelete(req.params.id);
    res.send(
        { msg: "Ticket deleted", status: 1 }
    );
};
