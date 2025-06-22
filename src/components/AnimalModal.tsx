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
                      <Text style={styles.distanceText}>{animal.distance}</Text>
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
    height: height * 0.35, // 35% of screen height
    overflow: 'visible',
  },
  animalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: 30,
    height: 30,
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
    paddingTop: 24,
  },
  zoneText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
    letterSpacing: 1.5,
    fontWeight: '500',
  },
  animalName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 20,
    lineHeight: 38,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    alignSelf: 'flex-start',
  },
  distanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
    tintColor: '#666',
  },
  distanceText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '400',
    marginRight: 8,
  },
  walkingTimeText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '400',
  },
  mapButton: {
    backgroundColor: '#E53E3E',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'left',
  },
  facts: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
    textAlign: 'left',
  },
})

export default AnimalModal
