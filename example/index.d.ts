type Toast = React.RefObject<
  import('react-native-ficus-ui').SnackbarRef
>['current'];

interface Global {
  toast: Toast;
}

declare var global: Global;
