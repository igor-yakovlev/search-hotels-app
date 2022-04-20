export function useEndOfWord (countOfDays) {
  switch (countOfDays) {
    case 1:
    return 'день';
    case 2:
    return 'дня';
    case 3:
    return 'дня';
    case 4:
    return 'дня';
    default:
    return 'дней';
  }
}


