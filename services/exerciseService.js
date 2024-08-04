const { Exercise } = require("../models");

const getAllExercises = async () => {
  return await Exercise.findAll();
};

const getBodyweightExercises = async () => {
  return await Exercise.findAll({
    where: {
      equipment: "body weight",
    },
  });
};

const filterExercises = async (filters) => {
  const whereClause = {};

  if (filters.equipment) {
    whereClause.equipment = filters.equipment;
  }
  if (filters.bodyPart) {
    whereClause.bodyPart = filters.bodyPart;
  }
  if (filters.target) {
    whereClause.target = filters.target;
  }
  if (filters.difficulty) {
    whereClause.difficulty = filters.difficulty;
  }

  try {
    const exercises = await Exercise.findAll({
      where: whereClause,
    });
    return exercises;
  } catch (error) {
    console.error("Error filtering exercises:", error);
    throw error;
  }
};

module.exports = {
  getAllExercises,
  getBodyweightExercises,
  filterExercises,
};
