const getDayRangeInSeconds = (selectedTime: number) => {
  const start = new Date(selectedTime);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start.getTime());
  end.setHours(23, 59, 59, 999);

  return {
    from: start.getTime() / 1000,
    to: end.getTime() / 1000,
  };
};

export default getDayRangeInSeconds;
