import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-slate-400 py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                <span className="text-primary-600 font-bold">RA</span>
                            </div>
                            <span className="text-2xl font-bold text-white">Rozgar App</span>
                        </div>
                        <p className="mb-8 max-w-sm text-slate-400">
                            A modern way to connect the community with skilled professionals. Reliable, fast, and secure.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm">
                    © {new Date().getFullYear()} Rozgar App | All rights reserved
                </div>
            </div>
        </footer>
    );
}