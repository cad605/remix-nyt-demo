export default function Footer() {
  return (
    <footer className="order-last flex-none border-t-2 border-zinc-600 border-dotted">
      <div className="m-6 flex flex-col space-y-4 items-center">
        <div className="flex flex-row space-x-4"></div>
        <h1 className="text-slate-600 text-base font-normal">
          <a
            href="https://developer.nytimes.com/"
            rel="noopener noreferrer"
            target={'_blank'}
            aria-label="Data provided by The New York Times"
          >
            <img
              src="/logos/poweredby_nytimes_200c.png"
              alt="Data provided by The New York Times"
            ></img>
          </a>
        </h1>
      </div>
    </footer>
  )
}
