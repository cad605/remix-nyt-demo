export default function Footer() {
  return (
    <footer className="flex-none border-t-2 border-slate-400 border- border-dotted">
      <div className="m-6 flex flex-col space-y-4 items-center">
        <div className="flex flex-row space-x-4"></div>
        <h1 className="text-slate-600 text-base font-normal">
          <image></image>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.nytimes.com/"
            className="text-zinc-800 hover:text-slate-600"
          >
            Data provided by The New York Times
          </a>
        </h1>
      </div>
    </footer>
  )
}
