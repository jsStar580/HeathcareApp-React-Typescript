import { Link, LinkProps } from 'react-router-dom'

export default ({ to, children, className }: LinkProps) => {
  return (
    <Link to={to} className={'text-light hover:text-secondary-300 ml-[45px] ' + className}>
      {children}
    </Link>
  )
}