import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go, a native Android/iOS build,
// or on the Web, the environment is set up appropriately.
registerRootComponent(App);
