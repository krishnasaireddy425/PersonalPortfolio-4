import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function ParticlesBackground() {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#000000"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.4
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#000000",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10
            }
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed inset-0 -z-10"
      style={{ 
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
} 