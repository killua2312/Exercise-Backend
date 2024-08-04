const express = require("express");
const {
  getBodyweightExercises,
  filterExercises,
} = require("../services/exerciseService");
const { getPresignedUrl } = require("../services/minioService");
const exercise = require("../models/exercise");

const router = express.Router();

router.get("/bodyweight", async (req, res) => {
  try {
    const exercises = await getBodyweightExercises();
    const exercisesWithUrls = await Promise.all(
      exercises.map(async (exercise) => {
        const presignedUrl = await getPresignedUrl(exercise.gif_id);
        return { ...exercise.toJSON(), gifurl: presignedUrl };
      }),
    );
    res.send(exercisesWithUrls);
  } catch (error) {
    console.log("error in bodyweight");
    res.status(500).send(error);
  }
});

router.get("/filteredExercises", async (req, res) => {
  try {
    const filters = {
      bodyPart: req.query.bodyPart,
      target: req.query.target,
      difficulty: req.query.difficulty,
    };

    const exercises = await filterExercises(filters);

    const exercisesWithUrls = await Promise.all(
      exercises.map(async (exercise) => {
        const presignedUrl = await getPresignedUrl(exercise.gif_id);
        return { ...exercise.toJSON(), gifurl: presignedUrl };
      }),
    );
    res.send(exercisesWithUrls);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
