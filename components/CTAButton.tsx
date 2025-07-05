import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type CTAButtonProps = {
  children: React.ReactNode;
  href: string;
  color?: 'cyan' | 'purple';
};

export default function CTAButton({ children, href, color = 'cyan' }: CTAButtonProps) {
    const colorClasses = {
        cyan: 'bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/30',
        purple: 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/30'
    };

    return (
        <Link href={href} className={`inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white transition-transform transform hover:scale-105 shadow-lg ${colorClasses[color]}`}>
            {children} <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
        </Link>
    );
};