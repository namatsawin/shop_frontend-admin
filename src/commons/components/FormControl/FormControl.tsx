interface Props {
  label?: string;
  error?: string;
  children: React.ReactNode
}

function FormControl({ label, children, error }: Props) {
  return (
    <div className="form-control w-full max-w-xs">
      {label && 
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      }
      {children}
      {error && <p role="alert" className="text-xs text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}

export default FormControl;