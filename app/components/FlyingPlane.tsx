"use client";

import PlaneSVG from "./PlaneSVG";

export default function FlyingPlane() {
  return (
    <>
      <div className="sky">
        <div className="contrail" />

        <div className="plane">
          <PlaneSVG />
        </div>

        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
      </div>

      <style jsx>{`
        .sky {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 999;
        }

        .plane {
          position: absolute;
          left: -220px;
          top: 70px;

          animation: fly 22s linear infinite;

          will-change: transform;

          filter:
            drop-shadow(0 12px 20px rgba(0,0,0,.35))
            drop-shadow(0 0 25px rgba(255,255,255,.15));
        }

        .contrail {
          position: absolute;
          top: 130px;
          left: -300vw;

          width: 500vw;
          height: 3px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.8),
            transparent
          );

          animation: trail 22s linear infinite;
        }

        .cloud {
          position: absolute;
          width: 180px;
          height: 60px;

          border-radius: 999px;

          background: linear-gradient(
            180deg,
            rgba(255,255,255,.35),
            rgba(255,255,255,.08)
          );

          filter: blur(2px);
        }

        .cloud::before {
          content: "";
          position: absolute;

          width: 70px;
          height: 70px;

          border-radius: 50%;

          background: inherit;

          left: 25px;
          top: -22px;
        }

        .cloud::after {
          content: "";
          position: absolute;

          width: 90px;
          height: 90px;

          border-radius: 50%;

          background: inherit;

          right: 18px;
          top: -35px;
        }

        .cloud1 {
          top: 90px;
          animation: cloudMove 40s linear infinite;
        }

        .cloud2 {
          top: 220px;
          animation: cloudMove 55s linear infinite;
        }

        .cloud3 {
          top: 340px;
          animation: cloudMove 70s linear infinite;
        }

        @keyframes fly {
          0% {
            transform:
              translateX(-250px)
              translateY(0px)
              rotate(6deg)
              scale(.88);
          }

          20% {
            transform:
              translateX(20vw)
              translateY(-10px)
              rotate(5deg)
              scale(.94);
          }

          40% {
            transform:
              translateX(45vw)
              translateY(6px)
              rotate(2deg)
              scale(1);
          }

          65% {
            transform:
              translateX(75vw)
              translateY(-8px)
              rotate(-2deg)
              scale(.97);
          }

          100% {
            transform:
              translateX(calc(100vw + 280px))
              translateY(0px)
              rotate(-6deg)
              scale(.90);
          }
        }

        @keyframes trail {
          0% {
            opacity: 0;
          }

          10% {
            opacity: .8;
          }

          90% {
            opacity: .8;
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes cloudMove {
          from {
            transform: translateX(-250px);
          }

          to {
            transform: translateX(calc(100vw + 250px));
          }
        }

        @media (max-width:768px) {
          .plane {
            top: 60px;
            transform: scale(.7);
          }

          .cloud {
            transform: scale(.65);
          }

          .contrail {
            top: 105px;
          }
        }
      `}</style>
    </>
  );
}