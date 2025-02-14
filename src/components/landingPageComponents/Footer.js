import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row items-center md:items-center justify-between">

        {/* Left Column - Logo (Centered Vertically) */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <Link href="https://www.pinelines.eu/" className="flex">
            <img
              src="/logo_pinelines_1.png"
              alt="Pine Lines Logo"
              className="h-auto w-[200px] object-contain"
            />
          </Link>
        </div>

        {/* Center Column - Business Info (Centered) */}
        <div className="flex flex-col text-center w-full md:w-1/3 md:items-center">
          <p className="text-gray-700 text-sm font-medium">
            Facturio.app is brought to you by Pine Lines SRL, CUI: 40670956, Reg. Com. J12/662/2019
          </p>
          <small className="text-gray-700 mt-3"> {/* Increased margin from mt-1 to mt-3 */}
            &copy; {new Date().getFullYear()} PINE LINES - All rights reserved
          </small>
        </div>

        {/* Right Column - Links Section (Centered Vertically) */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 w-full md:w-1/3 justify-center md:justify-end">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-400 mb-2">LINKS</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:underline">
                <a href="#">Support</a>
              </li>
              <li className="hover:underline">
                <Link href="#faq">FAQ</Link>
              </li>
              <li className="hover:underline">
                <Link href="#pricing" target="_blank" rel="noopener noreferrer">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-400 mb-2">LEGAL</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:underline">
                <Link href='/privacy-policy' target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:underline">
                <Link href='/terms-of-service' target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
