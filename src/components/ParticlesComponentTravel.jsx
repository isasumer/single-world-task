import Particles from "react-tsparticles";

const ParticlesComponentTravel = () => {
  return (
    <Particles
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "#232741",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -11,
        },

        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: true,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
            },
            value: 160,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 3,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesComponentTravel;
