import { vi } from 'vitest'

// Mock React Native modules
vi.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// Mock Expo modules
vi.mock('expo-linear-gradient', () => ({
  LinearGradient: 'LinearGradient',
}))

vi.mock('expo-font', () => ({
  loadAsync: vi.fn(),
  isLoaded: vi.fn(() => true),
}))

vi.mock('react-native-safe-area-context', () => ({
  SafeAreaView: 'SafeAreaView',
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
  useSafeAreaInsets: () => ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }),
}))

// Mock navigation
vi.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: vi.fn(),
    goBack: vi.fn(),
  }),
  useFocusEffect: vi.fn(),
}))

vi.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: vi.fn(),
}))

vi.mock('@react-navigation/stack', () => ({
  createStackNavigator: vi.fn(),
}))

// Global test utilities
global.console = {
  ...console,
  // Suppress console.warn and console.error during tests
  warn: vi.fn(),
  error: vi.fn(),
}
