const useAge = (dob = "1998-12-23") => {
  const dobDate = new Date(dob);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - dobDate;

  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const ageInYears = ageInMilliseconds / millisecondsPerYear;
  const age = Math.floor(ageInYears);

  return age;
};

export default useAge;
