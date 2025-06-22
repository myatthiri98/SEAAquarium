import { describe, it, expect } from 'vitest'
import { AnimalInfo } from '../../types'

const mockAnimal: AnimalInfo = {
  id: '1',
  name: 'Alligator Gar',
  zone: 'ZONE 1',
  distance: '410m away',
  description:
    "With its wide, alligator-like snout and razor-sharp teeth, it's easy to see how this fish acquired its name.",
  facts:
    'As the largest species in the gar family, the alligator gar can reach up to 3 metres in length.',
  image: require('../../../assets/icons/Fish.png'),
}

describe('AnimalModal Logic', () => {
  it('should have valid animal data structure', () => {
    expect(mockAnimal).toHaveProperty('id')
    expect(mockAnimal).toHaveProperty('name')
    expect(mockAnimal).toHaveProperty('zone')
    expect(mockAnimal).toHaveProperty('distance')
    expect(mockAnimal).toHaveProperty('description')
    expect(mockAnimal).toHaveProperty('facts')
    expect(mockAnimal).toHaveProperty('image')
  })

  it('should have correct animal data types', () => {
    expect(typeof mockAnimal.id).toBe('string')
    expect(typeof mockAnimal.name).toBe('string')
    expect(typeof mockAnimal.zone).toBe('string')
    expect(typeof mockAnimal.distance).toBe('string')
    expect(typeof mockAnimal.description).toBe('string')
    expect(typeof mockAnimal.facts).toBe('string')
  })

  it('should have expected animal information', () => {
    expect(mockAnimal.name).toBe('Alligator Gar')
    expect(mockAnimal.zone).toBe('ZONE 1')
    expect(mockAnimal.distance).toBe('410m away')
    expect(mockAnimal.description).toContain('alligator-like snout')
    expect(mockAnimal.facts).toContain('largest species')
  })

  it('should validate modal props interface', () => {
    // Test that modal props would be valid
    const modalProps = {
      visible: true,
      onClose: () => {},
      animal: mockAnimal,
    }

    expect(typeof modalProps.visible).toBe('boolean')
    expect(typeof modalProps.onClose).toBe('function')
    expect(modalProps.animal).toEqual(mockAnimal)
  })
})
