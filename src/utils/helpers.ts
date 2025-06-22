export const formatDistance = (distance: string): string => {
  return distance.replace('m away', ' meters away')
}

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

export const validateAnimalData = (animal: any): boolean => {
  const requiredFields = [
    'id',
    'name',
    'zone',
    'distance',
    'description',
    'facts',
    'image',
  ]
  return requiredFields.every((field) => animal && animal[field] !== undefined)
}

export const formatShowTime = (time: string): string => {
  if (time.includes(':') && time.split(':').length === 3) {
    const [hours, minutes] = time.split(':')
    return `${hours}:${minutes}`
  }
  return time
}

export const calculateWalkingTime = (distance: string): number => {
  const meters = parseInt(distance.replace(/\D/g, ''), 10)
  return Math.ceil(meters / 80)
}

export const formatWalkingTime = (distance: string): string => {
  const walkingTime = calculateWalkingTime(distance)
  return `${walkingTime} min walk`
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}

export const isShowTimeActive = (
  showTime: string,
  bufferMinutes: number = 30,
): boolean => {
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const currentTotalMinutes = currentHour * 60 + currentMinute

  const [showHour, showMinute] = showTime.split(':').map(Number)
  const showTotalMinutes = showHour * 60 + showMinute

  const timeDiff = Math.abs(currentTotalMinutes - showTotalMinutes)
  return timeDiff <= bufferMinutes
}
