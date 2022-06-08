const k = {
  minimal: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  veryHigh: 1.9,
};

export const supportWeightCalc = (gender, weight, height, age, activity) => {
  if (gender === "male") {
    return Math.trunc(
      (10 * weight + 6.25 * height - 5 * age + 5) * k[activity]
    );
  } else {
    return Math.trunc(
      (10 * weight + 6.25 * height - 5 * age - 161) * k[activity]
    );
  }
};

export const increaseWeightCalc = (currentCalories) => {
  return Math.trunc(currentCalories * 1.15);
};

export const decreaseWeightCalc = (currentCalories) => {
  return Math.trunc(currentCalories * 0.85);
};
