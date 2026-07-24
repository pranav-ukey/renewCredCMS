import Standard from "../models/Standard.js";

// Create a new standard
export const createStandard = async (req, res) => {
  try {
    const standard = await Standard.create(req.body);

    res.status(201).json({
      success: true,
      data: standard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all standards
export const getAllStandards = async (req, res) => {
  try {
    const standards = await Standard.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: standards.length,
      data: standards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a single standard by slug
export const getStandardBySlug = async (req, res) => {
  try {
    const standard = await Standard.findOne({
      slug: req.params.slug,
    });

    if (!standard) {
      return res.status(404).json({
        success: false,
        message: "Standard not found",
      });
    }

    res.status(200).json({
      success: true,
      data: standard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a standard
export const updateStandard = async (req, res) => {
  try {
    const standard = await Standard.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!standard) {
      return res.status(404).json({
        success: false,
        message: "Standard not found",
      });
    }

    res.status(200).json({
      success: true,
      data: standard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a standard
export const deleteStandard = async (req, res) => {
  try {
    const standard = await Standard.findByIdAndDelete(req.params.id);

    if (!standard) {
      return res.status(404).json({
        success: false,
        message: "Standard not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Standard deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};