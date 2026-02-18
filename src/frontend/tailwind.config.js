/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          pink: 'var(--romantic-pink)',
          peach: 'var(--romantic-peach)',
          coral: 'var(--romantic-coral)',
          deep: 'var(--romantic-deep)',
          dark: 'var(--romantic-dark)',
          accent: 'var(--romantic-accent)',
          heart: 'var(--romantic-heart)',
          quote: 'var(--romantic-quote)',
          border: 'var(--romantic-border)',
          text: 'var(--romantic-text)',
          footer: 'var(--romantic-footer)',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      fontFamily: {
        script: ['Parisienne', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      boxShadow: {
        'photo': '0 10px 30px rgba(0, 0, 0, 0.2)',
        'photo-hover': '0 15px 40px rgba(0, 0, 0, 0.3)',
        'message': '0 8px 25px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        'cute-reveal': {
          '0%': { 
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'scale(1)',
          },
          '100%': { 
            opacity: '0',
            filter: 'blur(20px)',
            transform: 'scale(1.15)',
          },
        },
        'curtain-swish': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'heart-float': {
          '0%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '0.8',
          },
          '50%': {
            opacity: '1',
          },
          '100%': { 
            transform: 'translateY(-100vh) scale(1.2)',
            opacity: '0',
          },
        },
        'heart-float-zigzag': {
          '0%': { 
            transform: 'translateY(0) translateX(0) scale(1)',
            opacity: '0.8',
          },
          '25%': {
            transform: 'translateY(-25vh) translateX(20px) scale(1.1)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(-50vh) translateX(-20px) scale(1.15)',
            opacity: '0.9',
          },
          '75%': {
            transform: 'translateY(-75vh) translateX(15px) scale(1.2)',
            opacity: '0.6',
          },
          '100%': { 
            transform: 'translateY(-100vh) translateX(0) scale(1.25)',
            opacity: '0',
          },
        },
        'heart-float-spiral': {
          '0%': { 
            transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
            opacity: '0.8',
          },
          '25%': {
            transform: 'translateY(-25vh) translateX(30px) rotate(90deg) scale(1.1)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(-50vh) translateX(0) rotate(180deg) scale(1.15)',
            opacity: '0.9',
          },
          '75%': {
            transform: 'translateY(-75vh) translateX(-30px) rotate(270deg) scale(1.2)',
            opacity: '0.6',
          },
          '100%': { 
            transform: 'translateY(-100vh) translateX(0) rotate(360deg) scale(1.25)',
            opacity: '0',
          },
        },
        'sparkle-twinkle': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(0.8)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },
        'sparkle-pop': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.3)',
          },
          '100%': { 
            opacity: '0',
            transform: 'scale(0.8)',
          },
        },
        'sparkle-wobble': {
          '0%, 100%': { 
            transform: 'rotate(0deg) scale(1)',
            opacity: '0.7',
          },
          '25%': { 
            transform: 'rotate(15deg) scale(1.1)',
            opacity: '1',
          },
          '75%': { 
            transform: 'rotate(-15deg) scale(0.9)',
            opacity: '0.8',
          },
        },
        'star-twinkle': {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(0.5) rotate(0deg)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1) rotate(180deg)',
          },
        },
        'star-pop': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0) rotate(0deg)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.5) rotate(90deg)',
          },
          '100%': { 
            opacity: '0',
            transform: 'scale(0.3) rotate(180deg)',
          },
        },
        'star-burst': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0) rotate(0deg)',
          },
          '30%': { 
            opacity: '1',
            transform: 'scale(1.8) rotate(45deg)',
          },
          '100%': { 
            opacity: '0',
            transform: 'scale(0.5) rotate(180deg)',
          },
        },
        'drift-1': {
          '0%': { 
            transform: 'translate(0, 0)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'translate(30px, -40px)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translate(0, -80px)',
            opacity: '0',
          },
        },
        'drift-2': {
          '0%': { 
            transform: 'translate(0, 0)',
            opacity: '0.5',
          },
          '50%': { 
            transform: 'translate(-40px, 30px)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translate(-80px, 0)',
            opacity: '0',
          },
        },
        'drift-3': {
          '0%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'translate(25px, 35px) rotate(180deg)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translate(50px, 70px) rotate(360deg)',
            opacity: '0',
          },
        },
        'drift-4': {
          '0%': { 
            transform: 'translate(0, 0)',
            opacity: '0.7',
          },
          '50%': { 
            transform: 'translate(-30px, -30px)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translate(-60px, -60px)',
            opacity: '0',
          },
        },
        'drift-bounce': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'translateY(-50px)',
            opacity: '1',
          },
        },
        'drift-swirl': {
          '0%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.5',
          },
          '25%': { 
            transform: 'translate(20px, -20px) rotate(90deg)',
            opacity: '0.8',
          },
          '50%': { 
            transform: 'translate(0, -40px) rotate(180deg)',
            opacity: '1',
          },
          '75%': { 
            transform: 'translate(-20px, -60px) rotate(270deg)',
            opacity: '0.7',
          },
          '100%': { 
            transform: 'translate(0, -80px) rotate(360deg)',
            opacity: '0',
          },
        },
        'soft-burst': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '50%': { 
            opacity: '0.4',
            transform: 'scale(1.2)',
          },
          '100%': { 
            opacity: '0',
            transform: 'scale(1.5)',
          },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'cute-reveal': 'cute-reveal 1s ease-out forwards',
        'curtain-swish': 'curtain-swish 1s ease-in-out forwards',
        'heart-float': 'heart-float 4s ease-in-out infinite',
        'heart-float-zigzag': 'heart-float-zigzag 5s ease-in-out infinite',
        'heart-float-spiral': 'heart-float-spiral 6s ease-in-out infinite',
        'sparkle-twinkle': 'sparkle-twinkle 2s ease-in-out infinite',
        'sparkle-pop': 'sparkle-pop 2.5s ease-in-out infinite',
        'sparkle-wobble': 'sparkle-wobble 3s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 2s ease-in-out infinite',
        'star-pop': 'star-pop 2.5s ease-in-out infinite',
        'star-burst': 'star-burst 3s ease-in-out infinite',
        'drift-1': 'drift-1 8s ease-in-out infinite',
        'drift-2': 'drift-2 10s ease-in-out infinite',
        'drift-3': 'drift-3 12s ease-in-out infinite',
        'drift-4': 'drift-4 9s ease-in-out infinite',
        'drift-bounce': 'drift-bounce 4s ease-in-out infinite',
        'drift-swirl': 'drift-swirl 7s ease-in-out infinite',
        'soft-burst': 'soft-burst 3s ease-out infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
      },
      safelist: [
        'animate-cute-reveal',
        'animate-curtain-swish',
        'animate-heart-float',
        'animate-heart-float-zigzag',
        'animate-heart-float-spiral',
        'animate-sparkle-twinkle',
        'animate-sparkle-pop',
        'animate-sparkle-wobble',
        'animate-star-twinkle',
        'animate-star-pop',
        'animate-star-burst',
        'animate-drift-1',
        'animate-drift-2',
        'animate-drift-3',
        'animate-drift-4',
        'animate-drift-bounce',
        'animate-drift-swirl',
        'animate-soft-burst',
        'animate-heartbeat',
      ],
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
}
