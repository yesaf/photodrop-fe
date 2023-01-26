import PI from 'react-phone-input-2';

// Bad work around for the fact that react-phone-input-2 doesn't work properly with vite and TS
const PhoneInput: typeof PI =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? PI : (PI as any).default;

export default PhoneInput;
