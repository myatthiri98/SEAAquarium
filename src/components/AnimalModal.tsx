import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native'

import { Colors } from '@/constants/colors'
import { AnimalInfo } from '@/types'
import { formatWalkingTime } from '@/utils/helpers'
import { ButtonText } from '@/constants/text'
import {
  FadeInView,
  SlideInView,
  AnimatedPressable,
} from './AnimatedComponents'

const { height } = Dimensions.get('window')

interface AnimalModalProps {
  visible: boolean
  onClose: () => void
  animal: AnimalInfo
}

const AnimalModal: React.FC<AnimalModalProps> = ({
  visible,
  onClose,
  animal,
}) => {
  const slideAnim = React.useRef(new Animated.Value(height)).current

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }).start()
    } else {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }, [visible, slideAnim])

  return (
    <Modal
      visible={visible}
      animationType="none"
      presentationStyle="overFullScreen"
      onRequestClose={onClose}
      transparent
      testID="animal-modal"
    >
      <View style={styles.overlay}>
        <Animated.View
          style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
        >
          <View style={styles.imageContainer}>
            <FadeInView duration={800}>
              <Image source={animal.image} style={styles.animalImage} />
            </FadeInView>

            <AnimatedPressable onPress={onClose} style={styles.closeButton}>
              <Image
                source={require('../../assets/icons/cross.png')}
                style={styles.closeIcon}
              />
            </AnimatedPressable>
          </View>

          <View style={styles.contentContainer}>
            <ScrollView
              style={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContentContainer}
            >
              <View style={styles.infoSection}>
                <SlideInView direction="up" delay={200}>
                  <Text style={styles.zoneText}>{animal.zone}</Text>
                </SlideInView>

                <SlideInView direction="up" delay={300}>
                  <Text style={styles.animalName}>{animal.name}</Text>
                </SlideInView>

                <SlideInView direction="up" delay={400}>
                  <View style={styles.distanceContainer}>
                    <View style={styles.distanceInfo}>
                      <Image
                        source={require('../../assets/icons/walk.png')}
                        style={styles.distanceIcon}
                      />
                      <View>
                        <Text style={styles.distanceText}>
                          {animal.distance}
                        </Text>
                        <Text style={styles.walkingTimeText}>
                          {formatWalkingTime(animal.distance)}
                        </Text>
                      </View>
                    </View>
                    <AnimatedPressable style={styles.mapButton}>
                      <Text style={styles.mapButtonText}>{ButtonText.MAP}</Text>
                    </AnimatedPressable>
                  </View>
                </SlideInView>

                <SlideInView direction="up" delay={500}>
                  <Text style={styles.description}>{animal.description}</Text>
                </SlideInView>

                <SlideInView direction="up" delay={600}>
                  <Text style={styles.facts}>{animal.facts}</Text>
                </SlideInView>
              </View>
            </ScrollView>
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    position: 'relative',
    height: height * 0.45, // 45% of screen height
    overflow: 'visible',
  },
  animalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: 36,
    height: 36,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  infoSection: {
    padding: 24,
    paddingTop: 32,
  },
  zoneText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
    letterSpacing: 1.5,
    fontWeight: '500',
  },
  animalName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 24,
    lineHeight: 34,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.lightGray,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  distanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  distanceIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: Colors.textSecondary,
  },
  distanceText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  walkingTimeText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '400',
    marginTop: 2,
  },
  mapButton: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 12,
  },
  mapButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 26,
    marginBottom: 24,
    textAlign: 'left',
  },
  facts: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 26,
    textAlign: 'left',
  },
})

export default AnimalModal
