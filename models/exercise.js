module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define(
    "Exercise",
    {
      bodyPart: DataTypes.STRING,
      equipment: DataTypes.STRING,
      gif_id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      target: DataTypes.STRING,
      secondaryMuscles: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      instructions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      difficulty: DataTypes.ENUM("beginner", "intermediate", "advanced"),
    },
    {}
  );

  return Exercise;
};
