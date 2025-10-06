export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-4 sm:flex sm:items-center sm:justify-between">
        <nav aria-label="Footer" className="flex gap-6 text-sm">
          <a href="#home" className="hover:neon-accent">
            Home
          </a>
          <a href="#about" className="hover:neon-accent">
            About Us
          </a>
          <a href="#solutions" className="hover:neon-accent">
            Solutions
          </a>
          <a href="#contact" className="hover:neon-accent">
            Contact
          </a>
        </nav>
        <div className="text-sm text-muted-foreground text-pretty text-center sm:text-right">
          VishvTech — Innovating Technology for a Smarter Tomorrow<br />
          &copy; {new Date().getFullYear()} VishvTech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
