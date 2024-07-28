import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 border-b-2 bg-white z-50'>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-row lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-16 w-auto" src="/catlogo.svg" alt="" />
            <span className="ml-2 font-bold text-4xl tracking-wide">Felix</span>
          </a>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <div>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header