const Lead = require("../models/lead.model");

// Get all leads
exports.getAllLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching leads",
            error: error.message,
        });
    }
};

// Get lead by ID
exports.getLeadById = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }
        res.status(200).json({
            success: true,
            data: lead,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching lead",
            error: error.message,
        });
    }
};

// Create a new lead
exports.createLead = async (req, res) => {
    try {
        const lead = await Lead.create(req.body);
        res.status(201).json({
            success: true,
            data: lead,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error creating lead",
            error: error.message,
        });
    }
};

// Update a lead
exports.updateLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }
        res.status(200).json({
            success: true,
            data: lead,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error updating lead",
            error: error.message,
        });
    }
};

// Delete a lead
exports.deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id);
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Lead deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting lead",
            error: error.message,
        });
    }
};
