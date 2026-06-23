import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.jpg.jpeg" 
                alt="BlackOriginX Logo" 
                width={150} 
                height={33} 
                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                style={{ width: "auto", height: "32px" }}
              />
            </Link>
            <p className="text-brand-light-grey/60 text-sm max-w-xs">
              Building and scaling technology-driven brands that redefine the future of mobility and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-light-grey/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Brands</h4>
            <ul className="space-y-4 text-sm text-brand-light-grey/60">
              <li><Link href="/brands" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/brands/torkk" className="hover:text-white transition-colors">Torkk</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-brand-light-grey/60">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-light-grey/40">
          <p>© {new Date().getFullYear()} BlackOriginX Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
