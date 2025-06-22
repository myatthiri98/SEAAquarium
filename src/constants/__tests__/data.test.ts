import { describe, it, expect } from 'vitest'
import {
  navigationItems,
  upcomingShows,
  ticketInfo,
  parkHours,
  alligatorGarInfo,
} from '../data'
import { NavigationTitles, NavigationRoutes } from '../navigation'

describe('Data Constants', () => {
  describe('navigationItems', () => {
    it('should have correct number of navigation items', () => {
      expect(navigationItems).toHaveLength(6)
    })

    it('should have required properties for each navigation item', () => {
      navigationItems.forEach((item) => {
        expect(item).toHaveProperty('id')
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('icon')
        expect(item).toHaveProperty('route')
        expect(typeof item.id).toBe('string')
        expect(typeof item.title).toBe('string')
        expect(typeof item.route).toBe('string')
      })
    })

    it('should contain expected navigation titles', () => {
      const expectedTitles = [
        'Map',
        'Inhabitants',
        'Shows',
        'Shopping',
        'Dine',
        'Meet & Greets',
      ]
      const actualTitles = navigationItems.map((item) => item.title)

      expectedTitles.forEach((title) => {
        expect(actualTitles).toContain(title)
      })
    })

    it('should use enum values correctly', () => {
      // Verify specific navigation items use enum values
      const inhabitantsItem = navigationItems.find(
        (item) => item.title === NavigationTitles.INHABITANTS,
      )
      expect(inhabitantsItem).toBeDefined()
      expect(inhabitantsItem?.route).toBe(NavigationRoutes.INHABITANTS)

      const mapItem = navigationItems.find(
        (item) => item.title === NavigationTitles.MAP,
      )
      expect(mapItem).toBeDefined()
      expect(mapItem?.route).toBe(NavigationRoutes.MAP)
    })
  })

  describe('upcomingShows', () => {
    it('should have shows data', () => {
      expect(upcomingShows.length).toBeGreaterThan(0)
    })

    it('should have required properties for each show', () => {
      upcomingShows.forEach((show) => {
        expect(show).toHaveProperty('id')
        expect(show).toHaveProperty('title')
        expect(show).toHaveProperty('time')
        expect(show).toHaveProperty('image')
        expect(typeof show.id).toBe('string')
        expect(typeof show.title).toBe('string')
        expect(typeof show.time).toBe('string')
      })
    })
  })

  describe('ticketInfo', () => {
    it('should have correct structure', () => {
      expect(ticketInfo).toHaveProperty('hasTickets')
      expect(ticketInfo).toHaveProperty('message')
      expect(typeof ticketInfo.hasTickets).toBe('boolean')
      expect(typeof ticketInfo.message).toBe('string')
    })
  })

  describe('parkHours', () => {
    it('should have correct structure', () => {
      expect(parkHours).toHaveProperty('date')
      expect(parkHours).toHaveProperty('hours')
      expect(typeof parkHours.date).toBe('string')
      expect(typeof parkHours.hours).toBe('string')
    })
  })

  describe('alligatorGarInfo', () => {
    it('should have correct animal info structure', () => {
      expect(alligatorGarInfo).toHaveProperty('id')
      expect(alligatorGarInfo).toHaveProperty('name')
      expect(alligatorGarInfo).toHaveProperty('zone')
      expect(alligatorGarInfo).toHaveProperty('distance')
      expect(alligatorGarInfo).toHaveProperty('description')
      expect(alligatorGarInfo).toHaveProperty('facts')
      expect(alligatorGarInfo).toHaveProperty('image')

      expect(typeof alligatorGarInfo.id).toBe('string')
      expect(typeof alligatorGarInfo.name).toBe('string')
      expect(typeof alligatorGarInfo.zone).toBe('string')
      expect(typeof alligatorGarInfo.distance).toBe('string')
      expect(typeof alligatorGarInfo.description).toBe('string')
      expect(typeof alligatorGarInfo.facts).toBe('string')
    })

    it('should have expected animal name', () => {
      expect(alligatorGarInfo.name).toBe('Alligator Gar')
    })

    it('should have expected zone', () => {
      expect(alligatorGarInfo.zone).toBe('ZONE 1')
    })
  })
})
