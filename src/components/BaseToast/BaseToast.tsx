import { Toaster } from 'react-hot-toast';

function BaseToaster() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        className: '',
        duration: 3000,
        style: {
          background: 'oklch(var(--b1))',
          color: 'oklch(var(--bc))',
        },
        loading: {
          iconTheme: { primary: 'oklch(var(--bc))', secondary: 'oklch(var(--b3))'}
        },
        success: {
          iconTheme: { primary: 'oklch(var(--su))', secondary: 'white'}
        },
        error: {
          iconTheme: { primary: 'oklch(var(--er))', secondary: 'white'}
        }
      }}
    />
  );
}

export default BaseToaster;