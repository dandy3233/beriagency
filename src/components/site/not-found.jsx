import React from 'react';
import { Home, ArrowLeft, Compass, LifeBuoy, Mail } from 'lucide-react';

export function DefaultNotFoundComponent() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-accent/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary-deep/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-3xl text-center z-10">
        <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full gradient-brand shadow-elegant group p-1 cursor-pointer">
          <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
            <Compass className="relative h-20 w-20 text-primary transition-all duration-700 ease-in-out group-hover:rotate-180 group-hover:scale-110" />
          </div>
        </div>
        
        <h1 className="mt-8 text-8xl font-black tracking-tighter sm:text-[10rem] text-transparent bg-clip-text gradient-brand drop-shadow-sm">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto text-balance font-medium">
          Sorry, we couldn't find the page you're looking for. It might have been moved, renamed, or perhaps it never existed in the first place.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="/"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full gradient-brand p-[2px] font-medium shadow-soft transition-all hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <span className="relative flex w-full items-center justify-center rounded-full bg-background px-8 py-3.5 transition-all duration-300 ease-out group-hover:bg-opacity-0 group-hover:text-primary-foreground text-foreground">
              <Home className="mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
              <span>Back to Home</span>
            </span>
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-border/50 bg-background/50 backdrop-blur-sm px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group"
          >
            <ArrowLeft className="mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful links section */}
        <div className="mt-20 pt-10 border-t border-border/40">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Or try these popular pages
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { name: 'Our Services', icon: LifeBuoy, to: '/services' },
              { name: 'Contact Support', icon: Mail, to: '/contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.to}
                className="flex items-center rounded-xl border border-border/30 bg-card/50 backdrop-blur-md px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-sm"
              >
                <link.icon className="mr-2.5 h-4 w-4" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
