export default function Container({ children, className }) {
  return(
    <div className={`px-4 lg:px-5 ${className}`}>
      {children}
    </div>
  )
}