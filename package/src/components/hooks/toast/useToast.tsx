import Toast from 'react-native-toast-message';

const useToast = () => {
  const { show, hide } = Toast;
  return { show, hide, Toast };
};

export { useToast };
