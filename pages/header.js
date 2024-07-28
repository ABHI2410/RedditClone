export default function header() {
  return (
    <header>
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex flex-row lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 flex items-center">
            <img class="h-16 w-auto" src="/logo.svg" alt="" />
            <span class="ml-2 font-bold text-4xl tracking-wide">Felix</span>
          </a>
        </div>

        <div class="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 m-2">
            Sign up
          </a>
          <a href="#" class="text-sm font-semibold leading-6 m-2">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <div>
            <button
              type="button"
              class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded="false"
              data-dropdown-toggle="dropdown-user"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
