import { useState } from "react"
import { Link } from "react-router-dom"
interface NavItemProps {
  to: string,
  children?: React.ReactNode,
  label?: React.ReactNode
}

interface MenuDropDownProps {
  menuSoruce?: NavItemProps[]
}

const MenuItem = ({ to, children, label }: NavItemProps) => {
  return (
    <>
      <div className="border-b border-b-light opacity-[0.15] " />
      <Link
        to={to}
        className="block pl-[32px] py-[23px] font-[Hiragino Kaku Gothic Pro] text-light text-[18px]"
      >
        {label || children}
      </Link>
      <div className="border-b border-b-dark-600 opacity-[0.25]" />
    </>
  )
}

export default ({ menuSoruce = [] }: MenuDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative inline-block z-50">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 "
          onClick={toggleDropdown}
        >
          <img src={'/icon/' + (isOpen ? 'close.svg' : 'menu.svg')} />
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-1 w-[280px] bg-gray-400">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {
                menuSoruce.map((menu, index) => (
                  <li key={index} onClick={closeDropdown}>
                    <MenuItem to={menu.to}>{menu.label || menu.children}</MenuItem>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  )
}