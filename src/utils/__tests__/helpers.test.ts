import { describe, it, expect, vi } from 'vitest'
import {
  formatDistance,
  formatTime,
  validateAnimalData,
  formatShowTime,
  calculateWalkingTime,
  formatWalkingTime,
  truncateText,
  isShowTimeActive,
} from '../helpers'

describe('Utility Functions', () => {
  describe('formatDistance', () => {
    it('should format distance correctly', () => {
      expect(formatDistance('410m away')).toBe('410 meters away')
      expect(formatDistance('100m away')).toBe('100 meters away')
      expect(formatDistance('50m away')).toBe('50 meters away')
    })
  })

  describe('formatTime', () => {
    it('should convert 24-hour to 12-hour format', () => {
      expect(formatTime('14:30')).toBe('2:30 PM')
      expect(formatTime('09:15')).toBe('9:15 AM')
      expect(formatTime('12:00')).toBe('12:00 PM')
      expect(formatTime('00:00')).toBe('12:00 AM')
      expect(formatTime('23:59')).toBe('11:59 PM')
      expect(formatTime('01:30')).toBe('1:30 AM')
    })
  })

  describe('validateAnimalData', () => {
    it('should validate complete animal data', () => {
      const validAnimal = {
        id: '1',
        name: 'Test Animal',
        zone: 'Zone 1',
        distance: '100m away',
        description: 'Test description',
        facts: 'Test facts',
        image: 'test-image.png',
      }

      expect(validateAnimalData(validAnimal)).toBe(true)
    })

    it('should reject incomplete animal data', () => {
      const incompleteAnimal = {
        id: '1',
        name: 'Test Animal',
        // missing required fields
      }

      expect(validateAnimalData(incompleteAnimal)).toBe(false)
    })

    it('should reject null or undefined data', () => {
      expect(validateAnimalData(null)).toBe(false)
      expect(validateAnimalData(undefined)).toBe(false)
    })
  })

  describe('formatShowTime', () => {
    it('should remove seconds from time string', () => {
      expect(formatShowTime('14:30:00')).toBe('14:30')
      expect(formatShowTime('09:15:30')).toBe('09:15')
    })

    it('should leave time unchanged if no seconds', () => {
      expect(formatShowTime('14:30')).toBe('14:30')
      expect(formatShowTime('09:15')).toBe('09:15')
    })
  })

  describe('calculateWalkingTime', () => {
    it('should calculate walking time correctly', () => {
      expect(calculateWalkingTime('410m away')).toBe(6) // 410/80 = 5.125, rounded up to 6
      expect(calculateWalkingTime('80m away')).toBe(1)
      expect(calculateWalkingTime('160m away')).toBe(2)
      expect(calculateWalkingTime('100m away')).toBe(2) // 100/80 = 1.25, rounded up to 2
    })
  })

  describe('formatWalkingTime', () => {
    it('should format walking time correctly', () => {
      expect(formatWalkingTime('410m away')).toBe('6 min walk')
      expect(formatWalkingTime('80m away')).toBe('1 min walk')
      expect(formatWalkingTime('160m away')).toBe('2 min walk')
    })
  })

  describe('truncateText', () => {
    it('should truncate long text with ellipsis', () => {
      const longText = 'This is a very long text that should be truncated'
      expect(truncateText(longText, 20)).toBe('This is a very lo...')
      expect(truncateText(longText, 10)).toBe('This is...')
    })

    it('should not truncate short text', () => {
      const shortText = 'Short text'
      expect(truncateText(shortText, 20)).toBe('Short text')
      expect(truncateText(shortText, 10)).toBe('Short text')
    })

    it('should handle edge cases', () => {
      expect(truncateText('', 10)).toBe('')
      expect(truncateText('Hi', 3)).toBe('Hi')
      expect(truncateText('Hello', 3)).toBe('...')
    })
  })

  describe('isShowTimeActive', () => {
    it('should determine if show time is active', () => {
      // Mock current time for testing
      const mockDate = new Date()
      mockDate.setHours(14, 30) // 2:30 PM
      const originalDate = Date
      global.Date = vi.fn(() => mockDate) as any
      global.Date.now = originalDate.now

      // Show at 14:30 should be active
      expect(isShowTimeActive('14:30', 30)).toBe(true)

      // Show at 15:00 should be active (30 min buffer)
      expect(isShowTimeActive('15:00', 30)).toBe(true)

      // Show at 16:30 should not be active (2 hours away)
      expect(isShowTimeActive('16:30', 30)).toBe(false)

      // Restore original Date
      global.Date = originalDate
    })
  })
})
