import { Disclosure } from "@headlessui/react";

function Header() {
  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <h3 className="text-4xl font-extrabold text-indigo-500">
                Te
                <span className="text-sky-500">ka</span>
                <span className="text-teal-500">do</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

export default Header;
