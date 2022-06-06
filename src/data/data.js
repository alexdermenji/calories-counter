export const genderValues = [
  { id: "gender-male", gender: "male", value: "Man", type: "gender" },
  { id: "gender-female", gender: "female", value: "Woman", type: "gender" },
];

export const physicalValues = [
  { id: "age", value: "Age", name: "age", values: "years", type: "age" },
  {
    id: "weight",
    value: "Weight",
    name: "weight",
    values: "kg",
    type: "weight",
  },
  {
    id: "height",
    value: "Height",
    name: "height",
    values: "cm",
    type: "height",
  },
];

export const activityValues = [
  {
    id: "activity-min",
    value: "Minimal",
    name: "minimal",
    description: "Сидячая работа и нет физических нагрузок",
    type: "activity",
  },
  {
    id: "activity-low",
    value: "Low",
    name: "low",
    description: " Редкие, нерегулярные тренировки, активность в быту",
    type: "activity",
  },
  {
    id: "activity-medium",
    value: "Medium",
    name: "medium",
    description: "Тренировки 3-5 раз в неделю",
    type: "activity",
  },
  {
    id: "activity-high",
    value: "High",
    name: "high",
    description: "Тренировки 6-7 раз в неделю",
    type: "activity",
  },
  {
    id: "activity-very-high",
    value: "Very high",
    name: "veryHigh",
    description: "Больше 6 тренировок в неделю и физическая работа",
    type: "activity",
  },
];
