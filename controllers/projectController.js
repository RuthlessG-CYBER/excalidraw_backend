import Project from "../models/projectModel.js";

export const saveProject = async (req, res) => {
  try {
    const { userId, shapes, zoom, pan } = req.body;

    const project = await Project.create({
      userId,
      shapes,
      zoom,
      pan
    });

    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
