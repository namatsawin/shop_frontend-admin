interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean
}

function BaseButton({ children, loading, ...rest }: Props) {
  return (  
    <button {...rest} disabled={loading}>
      {
        loading ? <span className="loading loading-spinner"></span> : children
      }
    </button>
  );
}

export default BaseButton;