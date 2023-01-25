export default function Stats() {
    return (
      <div className="bg-indigo-800">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Was macht Tekado aus?
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
              Zahlen sagen mehr als Worte... oder doch nicht? Naja auf jeden Fall hier Tekado in Zahlen:
            </p>
          </div>
          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Händler</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">9.000+</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Produkte</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">250.000.000</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Mission</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">1</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }
  