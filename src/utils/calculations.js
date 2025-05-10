export const calculateBMR = (age, gender, weight, height) => {
  return gender === "male"
    ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
    : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
};

export const getRecommendedPackage = (calories) => {
  if (calories < 1500) return "1200";
  if (calories < 1800) return "1500";
  if (calories < 2100) return "1800";
  return "2100";
};
