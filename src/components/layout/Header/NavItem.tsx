import { Link } from "react-router-dom"

interface NavItemProps {
  icon: string,
  lable: React.ReactNode,
  count?: number
  to: string
}

export default (props: NavItemProps) => {
  return (
    <>
      <Link to={props.to} className="menu-item">
        <div className="flex items-center">
          <img src={props.icon} />
          <span className="ml-[8px]">
            {props.lable}
          </span>
        </div>
      </Link>
    </>
  )
}