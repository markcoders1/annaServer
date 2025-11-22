const express = require("express");
const router = express.Router();
const leadController = require("../controllers/lead.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Apply auth middleware to all routes
router.use(authMiddleware);

// Routes
router.get("/", leadController.getAllLeads);
router.get("/:id", leadController.getLeadById);
router.post("/", leadController.createLead);
router.put("/:id", leadController.updateLead);
router.delete("/:id", leadController.deleteLead);

module.exports = router;
