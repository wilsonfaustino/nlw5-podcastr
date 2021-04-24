export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  if (hours > 0) {
    const timeStringWithHours = [hours, minutes, seconds]
      .map(unit => String(unit).padStart(2, '0'))
      .join(':');

    return timeStringWithHours;
  }

  const timeString = [minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}
