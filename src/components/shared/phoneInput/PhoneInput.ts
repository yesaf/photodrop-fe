import PI from 'react-phone-input-2';

// Bad work around for the fact that react-phone-input-2 doesn't work properly with vite and TS
const PhoneInput: typeof PI = (PI as any).default !== null ? (PI as any).default : PI

export default PhoneInput;
