const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        Email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
        },
        Address: {
            type: String,
            required: [true, "Address is required"],
            trim: true,
        },
        Phone: {
            type: String,
            required: [true, "Phone is required"],
            trim: true,
        },
        Service: {
            type: String,
            required: [true, "Service is required"],
            trim: true,
        },
        Timeline: {
            type: String,
            required: [true, "Timeline is required"],
            trim: true,
        },
        ProjectDetails: {
            type: String,
            required: [true, "ProjectDetails is required"],
            trim: true,
        },
        purpose: {
            type: String,
            required: [true, "purpose is required"],
            trim: true,
        },
        ref: {
            type: String,
            required: [true, "ref is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
