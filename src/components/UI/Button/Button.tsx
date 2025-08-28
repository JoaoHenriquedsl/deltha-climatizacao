type Props = {
  className?: string
  children: React.ReactNode,
  href?: string
}

const Button = ({className, children, href}: Props) => {
  return (
    <button className={className}>
      <a href={href}>{children}</a>
    </button>
  )
}

export default Button