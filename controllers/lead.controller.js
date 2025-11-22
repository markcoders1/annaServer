const Lead = require("../models/lead.model");

// Get all leads with pagination
exports.getAllLeads = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const leads = await Lead.find().skip(skip).limit(limit);
        const total = await Lead.countDocuments();

        res.status(200).json({
            success: true,
            data: leads,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: limit,
                hasNextPage: page < Math.ceil(total / limit),
                hasPreviousPage: page > 1,
            },
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
