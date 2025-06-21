# S.E.A. Aquarium Mobile App

A beautiful React Native mobile application for the S.E.A. Aquarium, built with Expo and TypeScript following clean architecture principles.

## Features

- **Home Screen**: Featuring daily dive feeding announcements, navigation grid, e-tickets info, park hours, and upcoming shows
- **Navigation**: Intuitive bottom tab navigation with Home, Wallet, and More screens
- **Animal Modal**: Interactive modal displaying detailed information about aquarium inhabitants
- **Clean Architecture**: Modular structure with TypeScript support
- **Responsive Design**: Pixel-perfect UI matching the provided design specifications

## Tech Stack

- **React Native** with **Expo SDK 53**
- **TypeScript** for type safety
- **React Navigation v7** for navigation
- **Expo Linear Gradient** for beautiful gradient effects
- **Custom Icon Integration** from provided assets

## Project Structure

```
SEAAquarium/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimalModal.tsx  # Modal for animal information
│   │   └── index.ts         # Component exports
│   ├── screens/             # Screen components
│   │   ├── HomeScreen.tsx   # Main application screen
│   │   ├── WalletScreen.tsx # Wallet/tickets screen
│   │   ├── MoreScreen.tsx   # Additional options screen
│   │   └── index.ts         # Screen exports
│   ├── navigation/          # Navigation configuration
│   │   └── AppNavigator.tsx # Main navigation setup
│   ├── constants/           # App constants
│   │   ├── colors.ts        # Color palette
│   │   └── data.ts          # Mock data
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts         # Type definitions
│   └── utils/               # Utility functions
├── assets/                  # Static assets
│   ├── icons/              # Custom icons
│   └── ...                 # Other assets
├── App.tsx                 # Main app component
├── babel.config.js         # Babel configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Expo CLI
- iOS Simulator or Android Emulator (or physical device with Expo Go)

### Installation

1. **Clone the repository** (if applicable):

   ```bash
   git clone <repository-url>
   cd SEAAquarium
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   ```bash
   yarn start
   ```

4. **Run on your preferred platform**:
   - **iOS**: `yarn ios` or scan QR code with iOS device
   - **Android**: `yarn android` or scan QR code with Android device
   - **Web**: `yarn web`

## Key Components

### HomeScreen

The main screen featuring:

- **Header** with S.E.A. Aquarium branding and notifications
- **Featured Section** with daily dive feeding announcement
- **Navigation Grid** with 6 main categories (Map, Inhabitants, Shows, Shopping, Dine, Meet & Greets)
- **Info Cards** for e-tickets and park hours
- **Upcoming Shows** horizontal scroll list

### AnimalModal

Interactive modal displaying:

- High-quality animal images
- Zone information and walking distance
- Detailed descriptions and fascinating facts
- Map navigation button

### Navigation Structure

- **Bottom Tab Navigation** with three main sections
- **Custom Icons** from provided assets
- **Active/Inactive States** with appropriate color schemes

## Customization

### Colors

All colors are centralized in `src/constants/colors.ts`:

- Primary colors (blues for aquarium theme)
- Secondary colors (red accents)
- Accent colors (golden highlights)
- Neutral and status colors

### Data

Mock data is stored in `src/constants/data.ts` and can be easily replaced with API calls:

- Navigation items
- Upcoming shows
- Animal information
- Ticket and park information

### Icons

Custom icons are integrated from the `assets/icons/` directory and can be easily swapped or updated.

## Development Guidelines

### Code Style

- **TypeScript** strict mode enabled
- **Modular architecture** with clear separation of concerns
- **Consistent naming conventions** (PascalCase for components, camelCase for variables)
- **Clean imports** using path aliases (@/ for src/)

### Adding New Screens

1. Create screen component in `src/screens/`
2. Add to `src/screens/index.ts` exports
3. Update navigation in `src/navigation/AppNavigator.tsx`

### Adding New Components

1. Create component in `src/components/`
2. Add to `src/components/index.ts` exports
3. Import using clean path alias

## Scripts

- `yarn start` - Start Expo development server
- `yarn android` - Run on Android device/emulator
- `yarn ios` - Run on iOS device/simulator
- `yarn web` - Run on web browser

## Dependencies

### Core Dependencies

- `expo`: ~53.0.12
- `react`: 19.0.0
- `react-native`: 0.79.4
- `@react-navigation/native`: Navigation framework
- `@react-navigation/bottom-tabs`: Bottom tab navigation
- `expo-linear-gradient`: Gradient effects
- `react-native-safe-area-context`: Safe area handling

### Development Dependencies

- `typescript`: ~5.8.3
- `@types/react`: Type definitions
- `babel-plugin-module-resolver`: Path alias support

## Future Enhancements

- **API Integration**: Replace mock data with real API endpoints
- **User Authentication**: Add login/logout functionality
- **Offline Support**: Cache data for offline viewing
- **Push Notifications**: Real-time updates for shows and events
- **Interactive Maps**: Detailed venue navigation
- **Ticket Purchasing**: In-app ticket booking system
- **Favorites System**: Save favorite animals and shows
- **Social Features**: Share experiences and photos

## Contributing

1. Follow the established project structure
2. Maintain TypeScript strict mode compatibility
3. Use the centralized color system
4. Add proper type definitions for new features
5. Test on both iOS and Android platforms

## Troubleshooting

### Common Issues

1. **Metro bundler cache issues**:

   ```bash
   expo start --clear
   ```

2. **Node modules conflicts**:

   ```bash
   rm -rf node_modules yarn.lock
   yarn install
   ```

3. **iOS simulator not opening**:

   - Ensure Xcode is installed and up to date
   - Check iOS simulator installation

4. **Android emulator issues**:
   - Verify Android Studio setup
   - Check AVD configuration

## License

This project is part of a UI coding test implementation for the S.E.A. Aquarium mobile application.
