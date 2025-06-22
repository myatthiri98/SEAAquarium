import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts,tsx}'],
    exclude: ['node_modules', 'dist', '.expo'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        'babel.config.js',
        'metro.config.js',
      ],
    },
    server: {
      deps: {
        inline: [
          'react-native',
          '@testing-library/react-native',
          'react-native-safe-area-context',
          'expo-linear-gradient',
          '@react-navigation/native',
          '@react-navigation/bottom-tabs',
          '@react-navigation/stack',
        ],
      },
    },
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
  define: {
    __DEV__: true,
  },
})
