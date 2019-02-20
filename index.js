import { DeviceEventEmitter, NativeModules, Platform } from 'react-native';

const { RNSmsRetrieverModule } = NativeModules;
const EVEN_LISTENER = 'me.furtado.smsretriever:SmsEvent';

const SmsRetrieverModule = Platform.OS == "ios" ? {
  requestPhoneNumber: () => new Promise(),
  startSmsRetriever: () => new Promise(),
  addSmsListener: (callback) => DeviceEventEmitter.addListener(EVEN_LISTENER, callback),
  removeSmsListener: () => DeviceEventEmitter.removeAllListeners(EVEN_LISTENER)
} : {
  requestPhoneNumber: RNSmsRetrieverModule.requestPhoneNumber,
  startSmsRetriever: RNSmsRetrieverModule.startSmsRetriever,
  addSmsListener: (callback) => DeviceEventEmitter.addListener(EVEN_LISTENER, callback),
  removeSmsListener: () => DeviceEventEmitter.removeAllListeners(EVEN_LISTENER)
};

export default SmsRetrieverModule;
