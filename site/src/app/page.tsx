"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   FLOATING GOLD DUST
   Tiny gold particles drifting in the dark, like dust in a spotlight
   ═══════════════════════════════════════════════════════════ */
function GoldDust({ count = 60, boost = false }: { count?: number; boost?: boolean }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 8;
    const size = 0.8 + Math.random() * (boost ? 3.5 : 2);
    const dur = 6 + Math.random() * 10;
    const dx = (Math.random() - 0.5) * 60;
    const dy = (Math.random() - 0.5) * 60;
    const brightness = 0.4 + Math.random() * 0.6;
    return (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: `radial-gradient(circle, rgba(255,215,0,${brightness}), transparent 70%)`,
          animation: `dust-float ${dur}s ease-in-out ${delay}s infinite`,
          ["--dx" as string]: `${dx}px`,
          ["--dy" as string]: `${dy}px`,
        }}
      />
    );
  });
  return <div className="absolute inset-0 pointer-events-none">{particles}</div>;
}

/* ═══════════════════════════════════════════════════════════
   ORBITING SPARKLES
   Small sparkles that orbit slowly around the gift box
   ═══════════════════════════════════════════════════════════ */
function OrbitingSparkles({ active }: { active: boolean }) {
  const sparkles = Array.from({ length: 8 }, (_, i) => {
    const angle = (360 / 8) * i;
    const radius = 180 + Math.random() * 40;
    const size = 3 + Math.random() * 3;
    const delay = i * 0.5;
    return (
      <div
        key={i}
        className="absolute left-1/2 top-1/2"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          background: `radial-gradient(circle, rgba(255,250,200,0.9), rgba(255,215,0,0.3), transparent)`,
          borderRadius: "50%",
          boxShadow: "0 0 6px rgba(255,215,0,0.4)",
          animation: `orbit ${12 + i * 2}s linear ${delay}s infinite`,
          ["--radius" as string]: `${radius}px`,
          ["--start-angle" as string]: `${angle}deg`,
          opacity: active ? 1 : 0,
          transition: "opacity 2s ease-in",
        }}
      />
    );
  });
  return <div className="absolute inset-0 pointer-events-none">{sparkles}</div>;
}

/* ═══════════════════════════════════════════════════════════
   RISING PARTICLES (emerge from inside the box when opening)
   ═══════════════════════════════════════════════════════════ */
function RisingParticles({ active }: { active: boolean }) {
  if (!active) return null;
  const particles = Array.from({ length: 40 }, (_, i) => {
    const left = 20 + Math.random() * 60;
    const delay = Math.random() * 2;
    const dur = 1.5 + Math.random() * 2.5;
    const size = 2 + Math.random() * 5;
    const drift = (Math.random() - 0.5) * 100;
    const isGold = Math.random() > 0.3;
    return (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${left}%`,
          bottom: "50%",
          width: size,
          height: size,
          background: isGold
            ? `radial-gradient(circle, rgba(255,250,200,0.95), rgba(255,215,0,0.5), transparent)`
            : `radial-gradient(circle, rgba(255,255,255,0.9), transparent)`,
          boxShadow: isGold ? `0 0 ${size * 2}px rgba(255,215,0,0.3)` : "none",
          animation: `rise-up ${dur}s ease-out ${delay}s forwards`,
          opacity: 0,
          ["--drift" as string]: `${drift}px`,
        }}
      />
    );
  });
  return <div className="absolute inset-0 pointer-events-none z-20">{particles}</div>;
}

/* ═══════════════════════════════════════════════════════════
   CONFETTI (luxurious gold-themed burst)
   ═══════════════════════════════════════════════════════════ */
function Confetti({ active }: { active: boolean }) {
  if (!active) return null;
  const colors = [
    "#FFD700", "#f5d680", "#e8b44c", "#DAA520", "#d4a040",
    "#ffffff", "#fffbe6", "#c49020", "#e87461", "#b5d89a",
  ];
  const particles = Array.from({ length: 120 }, (_, i) => {
    const color = colors[i % colors.length];
    const left = Math.random() * 100;
    const delay = Math.random() * 1;
    const dur = 3 + Math.random() * 3;
    const size = 3 + Math.random() * 8;
    const rotation = Math.random() * 720 - 360;
    const drift = (Math.random() - 0.5) * 350;
    const shape = i % 5;
    return (
      <div
        key={i}
        className="absolute"
        style={{
          left: `${left}%`,
          top: "-5%",
          width: shape === 2 ? size * 0.35 : shape === 4 ? size * 0.6 : size,
          height: shape === 2 ? size * 2 : shape === 4 ? size * 0.6 : size,
          backgroundColor: shape === 3 ? "transparent" : color,
          border: shape === 3 ? `1.5px solid ${color}` : "none",
          borderRadius: shape === 1 ? "50%" : shape === 4 ? "50% 0" : "1px",
          animation: `confetti-fall ${dur}s ease-in ${delay}s forwards`,
          opacity: 0,
          ["--drift" as string]: `${drift}px`,
          ["--rotation" as string]: `${rotation}deg`,
        }}
      />
    );
  });
  return <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">{particles}</div>;
}

/* ═══════════════════════════════════════════════════════════
   SCREEN FLASH (golden bloom when gift opens)
   ═══════════════════════════════════════════════════════════ */
function ScreenFlash({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div
      className="fixed inset-0 z-[90] pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(255,250,220,0.8), rgba(255,215,0,0.3), transparent 70%)",
        animation: "screen-flash 2s ease-out forwards",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   HYPERREALISTIC GIFT BOX

   Design philosophy:
   - Deep crimson velvet body with realistic specular highlights
   - Metallic gold satin ribbon with animated shimmer
   - Elaborate satin bow with volume and light play
   - Lid LIFTS UPWARD when opening (clear visual separation)
   - Golden light beam from interior gap
   - Particles rising from inside
   - Floor reflection/shadow for grounding
   ═══════════════════════════════════════════════════════════ */
function GiftBox({ phase }: { phase: "idle" | "shake" | "glow" | "open" | "burst" }) {
  const isOpen = phase === "open";
  const isBurst = phase === "burst";
  const isOpening = isOpen || isBurst;

  // How far the lid lifts
  const lidTransform = isOpen
    ? "translateY(min(-110px, -30vw)) rotateX(-15deg) scale(1.02)"
    : isBurst
      ? "translateY(min(-200px, -50vw)) rotateX(-30deg) scale(0.3)"
      : "translateY(0) rotateX(0deg) scale(1)";

  return (
    <div
      className="relative"
      style={{
        width: "min(310px, 72vw)",
        height: "min(400px, 92vw)",
        animation: phase === "shake" ? "gift-shake-lux 0.55s ease-in-out 5" : "none",
      }}
    >
      {/* ══════ Floor reflection ══════ */}
      <div
        className="absolute left-[5%] right-[5%] bottom-[-2%] h-[18%] transition-all duration-1000"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 50% 0%,
              rgba(140,20,20,0.15) 0%,
              rgba(80,10,10,0.08) 40%,
              transparent 70%)
          `,
          filter: "blur(12px)",
          opacity: isBurst ? 0 : 0.9,
        }}
      />
      {/* Contact shadow */}
      <div
        className="absolute left-[10%] right-[10%] bottom-[1%] h-[4%] transition-all duration-1000"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.6), transparent 70%)",
          filter: "blur(8px)",
          opacity: isBurst ? 0 : 1,
        }}
      />

      {/* ══════ Ambient glow ══════ */}
      <div
        className="absolute rounded-full transition-all"
        style={{
          inset: "-60%",
          background: "radial-gradient(circle, rgba(255,215,0,0.12), rgba(200,30,30,0.04), transparent 55%)",
          opacity: phase === "glow" || isOpening ? 1 : 0,
          transform: isBurst ? "scale(6)" : isOpen ? "scale(3)" : "scale(0.3)",
          transition: "all 2.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* ══════ GOLDEN LIGHT BEAM from gap ══════ */}
      {/* Upward beam */}
      <div
        className="absolute left-[14%] right-[14%] transition-all"
        style={{
          top: "5%",
          height: "35%",
          background: `
            radial-gradient(ellipse 70% 100% at 50% 100%,
              rgba(255,255,240,0.9) 0%,
              rgba(255,250,200,0.6) 15%,
              rgba(255,215,0,0.3) 35%,
              rgba(232,180,76,0.1) 55%,
              transparent 75%)
          `,
          opacity: isOpening ? 1 : 0,
          transform: isOpening ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "bottom center",
          transition: isOpening ? "all 2s ease-out 0.5s" : "all 0.3s ease-in",
          filter: "blur(6px)",
          zIndex: 5,
        }}
      />
      {/* Gap glow line */}
      <div
        className="absolute left-[8%] right-[8%] transition-all"
        style={{
          top: "35%",
          height: "6px",
          background: `
            radial-gradient(ellipse 80% 100% at 50% 50%,
              rgba(255,255,240,1) 0%,
              rgba(255,250,200,0.8) 30%,
              rgba(255,215,0,0.4) 60%,
              transparent 90%)
          `,
          opacity: isOpening ? 1 : 0,
          transition: isOpening ? "opacity 1s ease-out 0.3s" : "opacity 0.2s ease-in",
          filter: "blur(3px)",
          zIndex: 6,
        }}
      />

      {/* Rising sparkles from inside */}
      <RisingParticles active={isOpening} />

      {/* ══════════════════════════════════════════════════
         BOX BODY
         Multi-layered crimson velvet with specular highlights
         ══════════════════════════════════════════════════ */}
      <div
        className="absolute left-[7%] right-[7%] bottom-[3%] rounded-b-[10px] rounded-t-[6px] transition-all overflow-hidden"
        style={{
          top: "37%",
          background: `
            radial-gradient(ellipse 60% 40% at 22% 10%, rgba(255,255,255,0.09) 0%, transparent 100%),
            linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.2) 100%),
            linear-gradient(172deg,
              #f44040 0%, #ef3535 8%, #dc2626 16%, #c81e1e 26%,
              #b91c1c 38%, #a01818 50%, #8b1414 62%,
              #7f1d1d 74%, #6b1515 86%, #5c1010 100%)
          `,
          boxShadow: `
            0 2px 3px rgba(0,0,0,0.5),
            0 8px 20px rgba(0,0,0,0.4),
            0 25px 50px -5px rgba(0,0,0,0.5),
            0 50px 100px -15px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset -2px 0 8px rgba(0,0,0,0.08),
            inset 2px 0 8px rgba(0,0,0,0.08),
            inset 0 -4px 12px rgba(0,0,0,0.12)
          `,
          transform: isBurst ? "scale(0) rotateX(20deg)" : "none",
          opacity: isBurst ? 0 : 1,
          transitionDuration: "1s",
        }}
      >
        {/* Velvet noise texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top edge highlight */}
        <div
          className="absolute top-0 left-[3%] right-[3%] h-px"
          style={{
            background: "linear-gradient(90deg, transparent 5%, rgba(255,200,200,0.3) 30%, rgba(255,220,220,0.4) 50%, rgba(255,200,200,0.3) 70%, transparent 95%)",
          }}
        />

        {/* Left edge highlight */}
        <div
          className="absolute top-[3%] left-0 bottom-[3%] w-px"
          style={{
            background: "linear-gradient(180deg, transparent 5%, rgba(255,200,200,0.15) 30%, rgba(255,200,200,0.2) 50%, rgba(255,200,200,0.15) 70%, transparent 95%)",
          }}
        />

        {/* Interior glow visible at top when open */}
        <div
          className="absolute top-0 left-[3%] right-[3%] h-[40%] transition-all"
          style={{
            background: `radial-gradient(ellipse 80% 100% at 50% 0%, rgba(255,250,220,0.5), rgba(255,215,0,0.2), transparent 70%)`,
            opacity: isOpening ? 1 : 0,
            transition: "opacity 1.2s ease-out",
          }}
        />

        {/* ── Vertical gold satin ribbon ── */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 overflow-hidden" style={{ width: "13.5%" }}>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg,
                #5c4510 0%, #705a10 5%, #8b6914 12%, #a88020 20%,
                #c49530 28%, #d4a040 35%, #e8b84c 42%,
                #f5d680 48%, #ffe4a0 50%, #f5d680 52%,
                #e8b84c 58%, #d4a040 65%, #c49530 72%,
                #a88020 80%, #8b6914 88%, #705a10 95%, #5c4510 100%)`,
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.1)",
            }}
          />
          {/* Animated shimmer traveling down */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.4) 48%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.4) 52%, rgba(255,255,255,0.02) 65%, transparent 100%)",
              backgroundSize: "100% 350%",
              animation: isOpening ? "none" : "ribbon-shimmer-v 4s ease-in-out infinite",
            }}
          />
          {/* Edge shadows for depth */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px]" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.15), transparent)" }} />
          <div className="absolute top-0 bottom-0 right-0 w-[2px]" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.15), transparent)" }} />
        </div>

        {/* ── Horizontal gold satin ribbon ── */}
        <div className="absolute left-0 right-0 overflow-hidden" style={{ top: "42%", height: "13.5%" }}>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                #5c4510 0%, #705a10 5%, #8b6914 12%, #a88020 20%,
                #c49530 28%, #d4a040 35%, #e8b84c 42%,
                #f5d680 48%, #ffe4a0 50%, #f5d680 52%,
                #e8b84c 58%, #d4a040 65%, #c49530 72%,
                #a88020 80%, #8b6914 88%, #705a10 95%, #5c4510 100%)`,
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.1)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.4) 48%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.4) 52%, rgba(255,255,255,0.02) 65%, transparent 100%)",
              backgroundSize: "350% 100%",
              animation: isOpening ? "none" : "ribbon-shimmer-h 4s ease-in-out 2s infinite",
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)" }} />
        </div>

        {/* ── Center jewel at ribbon crossing ── */}
        <div className="absolute left-1/2 z-10 -translate-x-1/2" style={{ top: "38.5%", width: "15%", paddingBottom: "15%" }}>
          {/* Outer glow */}
          <div
            className="absolute inset-[-30%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,215,0,0.2), transparent 60%)",
              animation: isOpening ? "none" : "jewel-pulse 3s ease-in-out infinite",
            }}
          />
          {/* Jewel body */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 36% 30%,
                #fff8e0 0%, #ffe4a0 12%, #f5d680 28%, #d4a040 50%, #a88020 75%, #8b6914 100%)`,
              boxShadow: `
                0 2px 12px rgba(0,0,0,0.45),
                0 0 30px rgba(255,215,0,0.25),
                inset 0 1px 3px rgba(255,255,255,0.5),
                inset 0 -1px 2px rgba(0,0,0,0.2)
              `,
            }}
          />
          {/* Specular highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: "12%",
              left: "18%",
              width: "40%",
              height: "35%",
              background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.8), rgba(255,255,255,0.2) 50%, transparent 80%)",
            }}
          />
          {/* Secondary highlight */}
          <div
            className="absolute rounded-full"
            style={{
              bottom: "18%",
              right: "15%",
              width: "18%",
              height: "15%",
              background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
         LID — LIFTS UPWARD when opening
         The clear gap + golden light makes the opening unmistakable
         ══════════════════════════════════════════════════ */}
      <div
        className="absolute left-[3%] right-[3%] rounded-[14px] z-10 transition-all"
        style={{
          top: "22%",
          height: "17%",
          transform: lidTransform,
          transitionDuration: isOpen ? "2.8s" : isBurst ? "0.9s" : "0.5s",
          transitionTimingFunction: isOpen
            ? "cubic-bezier(0.22, 0.61, 0.36, 1)"
            : "cubic-bezier(0.16, 1, 0.3, 1)",
          opacity: isBurst ? 0 : 1,
          filter: isOpen ? "drop-shadow(0 8px 20px rgba(0,0,0,0.4))" : "none",
        }}
      >
        {/* Lid main face */}
        <div
          className="absolute inset-0 rounded-[14px] overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 50% 50% at 25% 20%, rgba(255,255,255,0.14) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.08) 100%),
              linear-gradient(172deg,
                #f87171 0%, #ef4444 12%, #dc2626 28%, #c81e1e 48%,
                #b91c1c 65%, #a01818 80%, #8b1414 100%)
            `,
            boxShadow: `
              0 6px 35px rgba(0,0,0,0.35),
              0 2px 10px rgba(0,0,0,0.25),
              inset 0 1px 0 rgba(255,255,255,0.2),
              inset 0 -1px 3px rgba(0,0,0,0.12)
            `,
          }}
        >
          {/* Velvet texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Lid bottom edge - dark line showing separation */}
        <div
          className="absolute bottom-0 left-[2%] right-[2%] h-[3px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.25) 15%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.25) 85%, transparent)",
          }}
        />

        {/* Lid top edge highlight */}
        <div
          className="absolute top-0 left-[4%] right-[4%] h-px rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,220,220,0.35) 30%, rgba(255,230,230,0.4) 50%, rgba(255,220,220,0.35) 70%, transparent)",
          }}
        />

        {/* Lid ribbon strip */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 overflow-hidden rounded-[14px]" style={{ width: "12.8%" }}>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg,
                #5c4510 0%, #8b6914 12%, #c49530 28%, #e8b84c 42%,
                #f5d680 48%, #ffe4a0 50%, #f5d680 52%,
                #e8b84c 58%, #c49530 72%, #8b6914 88%, #5c4510 100%)`,
            }}
          />
        </div>

        {/* ══════════ LUXURIOUS SATIN BOW ══════════ */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: "55%",
            width: "min(180px, 56%)",
            height: "min(130px, 40%)",
          }}
        >
          {/* Bow shadow on lid */}
          <div
            className="absolute left-[15%] right-[15%] bottom-[-20%] h-[25%]"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.2), transparent 70%)",
              filter: "blur(6px)",
            }}
          />

          {/* Left satin loop — rich gradient with internal light */}
          <div
            className="absolute right-[44%] top-[8%]"
            style={{
              width: "105%",
              height: "78%",
              borderRadius: "58% 45% 35% 58% / 55% 82% 20% 48%",
              background: `linear-gradient(145deg,
                #ffe8a8 0%, #f5d680 15%, #e8c060 28%, #d4a040 42%,
                #c49020 55%, #a88020 68%, #8b6914 82%, #705a10 100%)`,
              boxShadow: `
                inset 5px 5px 15px rgba(255,255,255,0.45),
                inset -4px -4px 10px rgba(0,0,0,0.2),
                0 5px 18px rgba(0,0,0,0.35),
                0 2px 6px rgba(0,0,0,0.2)
              `,
              transform: "rotate(-24deg)",
            }}
          >
            {/* Primary specular */}
            <div
              className="absolute inset-0 rounded-[inherit]"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 32% 22%, rgba(255,255,255,0.5), transparent 60%)",
              }}
            />
            {/* Secondary specular */}
            <div
              className="absolute inset-0 rounded-[inherit]"
              style={{
                background: "radial-gradient(ellipse 30% 25% at 65% 70%, rgba(255,255,255,0.15), transparent 50%)",
              }}
            />
          </div>

          {/* Right satin loop */}
          <div
            className="absolute left-[44%] top-[8%]"
            style={{
              width: "105%",
              height: "78%",
              borderRadius: "45% 58% 58% 35% / 82% 55% 48% 20%",
              background: `linear-gradient(215deg,
                #ffe8a8 0%, #f5d680 15%, #e8c060 28%, #d4a040 42%,
                #c49020 55%, #a88020 68%, #8b6914 82%, #705a10 100%)`,
              boxShadow: `
                inset -5px 5px 15px rgba(255,255,255,0.45),
                inset 4px -4px 10px rgba(0,0,0,0.2),
                0 5px 18px rgba(0,0,0,0.35),
                0 2px 6px rgba(0,0,0,0.2)
              `,
              transform: "rotate(24deg)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[inherit]"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 68% 22%, rgba(255,255,255,0.5), transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0 rounded-[inherit]"
              style={{
                background: "radial-gradient(ellipse 30% 25% at 35% 70%, rgba(255,255,255,0.15), transparent 50%)",
              }}
            />
          </div>

          {/* Left tail - curving ribbon */}
          <div
            className="absolute left-[8%] bottom-[-45%]"
            style={{
              width: "15%",
              height: "75%",
              background: `linear-gradient(90deg, #8b6914, #c49020 25%, #e8b84c 45%, #f5d680 55%, #d4a040 75%, #a88020)`,
              borderRadius: "3px 3px 35% 65%",
              transform: "rotate(-32deg)",
              boxShadow: "2px 4px 10px rgba(0,0,0,0.35)",
            }}
          />

          {/* Right tail */}
          <div
            className="absolute right-[8%] bottom-[-45%]"
            style={{
              width: "15%",
              height: "75%",
              background: `linear-gradient(90deg, #a88020, #d4a040 25%, #f5d680 45%, #e8b84c 55%, #c49020 75%, #8b6914)`,
              borderRadius: "3px 3px 65% 35%",
              transform: "rotate(32deg)",
              boxShadow: "-2px 4px 10px rgba(0,0,0,0.35)",
            }}
          />

          {/* Center knot — ornamental, jewel-like */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-10"
            style={{ top: "22%", width: "34%", height: "50%" }}
          >
            <div
              className="absolute inset-0"
              style={{
                borderRadius: "40% 40% 45% 45%",
                background: `radial-gradient(circle at 36% 28%,
                  #fff8e0 0%, #ffe4a0 10%, #f5d680 25%, #e8c060 40%, #d4a040 55%, #a88020 75%, #8b6914 100%)`,
                boxShadow: `
                  0 4px 16px rgba(0,0,0,0.45),
                  0 0 30px rgba(255,215,0,0.4),
                  inset 0 2px 4px rgba(255,255,255,0.55),
                  inset 0 -2px 4px rgba(0,0,0,0.2)
                `,
              }}
            />
            {/* Knot specular */}
            <div
              className="absolute rounded-[inherit]"
              style={{
                top: "8%",
                left: "15%",
                width: "45%",
                height: "38%",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.8), rgba(255,255,255,0.15) 55%, transparent 80%)",
              }}
            />
            {/* Knot secondary highlight */}
            <div
              className="absolute rounded-full"
              style={{
                bottom: "12%",
                right: "12%",
                width: "20%",
                height: "16%",
                background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)",
              }}
            />
            {/* Subtle fold lines for realism */}
            <div
              className="absolute left-[30%] top-[45%] w-[40%] h-px rotate-[-8deg]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)" }}
            />
            <div
              className="absolute left-[25%] top-[60%] w-[50%] h-px rotate-[5deg]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }}
            />
          </div>
        </div>
      </div>

      {/* Orbiting sparkles during glow phase */}
      <OrbitingSparkles active={phase === "glow" || isOpening} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function BirthdayPage() {
  const [phase, setPhase] = useState<"intro" | "shake" | "glow" | "open" | "burst" | "reveal">("intro");
  const [showContent, setShowContent] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [flashActive, setFlashActive] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Cinematic timeline - the opening is the star of the show
    timers.push(setTimeout(() => setFadeIn(true), 400));        // Fade in from black
    timers.push(setTimeout(() => setPhase("shake"), 3200));     // Anticipation shake
    timers.push(setTimeout(() => setPhase("glow"), 5000));      // Golden aura builds
    timers.push(setTimeout(() => setPhase("open"), 6200));      // Lid lifts up SLOWLY
    timers.push(setTimeout(() => setFlashActive(true), 8800));  // Golden flash
    timers.push(setTimeout(() => setConfettiActive(true), 9000)); // Confetti burst
    timers.push(setTimeout(() => setPhase("burst"), 10000));    // Box dissolves
    timers.push(setTimeout(() => setPhase("reveal"), 10800));   // Content fades in
    timers.push(setTimeout(() => setShowContent(true), 11100));

    return () => timers.forEach(clearTimeout);
  }, []);

  const skipAnimation = useCallback(() => {
    setPhase("reveal");
    setShowContent(true);
    setConfettiActive(true);
    setFadeIn(true);
  }, []);

  const giftPhase = phase === "intro" ? "idle" : phase === "reveal" ? "burst" : phase;

  return (
    <div className="min-h-[100svh] bg-black relative overflow-hidden">
      {/* ═══ Keyframe Animations ═══ */}
      <style jsx global>{`
        @keyframes dust-float {
          0%, 100% { opacity: 0.15; transform: translate(0, 0) scale(1); }
          25% { opacity: 0.9; transform: translate(calc(var(--dx) * 0.3), calc(var(--dy) * 0.3)) scale(1.4); }
          50% { opacity: 0.25; transform: translate(var(--dx), var(--dy)) scale(0.6); }
          75% { opacity: 0.8; transform: translate(calc(var(--dx) * 0.7), calc(var(--dy) * 0.7)) scale(1.1); }
        }
        @keyframes orbit {
          from { transform: rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle))); }
          to { transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle) - 360deg)); }
        }
        @keyframes rise-up {
          0% { opacity: 0; transform: translateY(0) translateX(0) scale(0.3); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-250px) translateX(var(--drift)) scale(0); }
        }
        @keyframes confetti-fall {
          0% { opacity: 1; transform: translateY(0) translateX(0) rotate(0deg); }
          100% { opacity: 0; transform: translateY(100vh) translateX(var(--drift)) rotate(var(--rotation)); }
        }
        @keyframes gift-shake-lux {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-14px) rotate(-4deg); }
          20% { transform: translateX(14px) rotate(4deg); }
          30% { transform: translateX(-12px) rotate(-3.5deg); }
          40% { transform: translateX(12px) rotate(3.5deg); }
          50% { transform: translateX(-10px) rotate(-2.5deg); }
          60% { transform: translateX(10px) rotate(2.5deg); }
          70% { transform: translateX(-7px) rotate(-1.5deg); }
          80% { transform: translateX(7px) rotate(1.5deg); }
          90% { transform: translateX(-3px) rotate(-0.5deg); }
        }
        @keyframes gift-float-lux {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-16px) scale(1.01); }
        }
        @keyframes ribbon-shimmer-v {
          0% { background-position: 100% -100%; }
          50% { background-position: 100% 250%; }
          100% { background-position: 100% -100%; }
        }
        @keyframes ribbon-shimmer-h {
          0% { background-position: -100% 100%; }
          50% { background-position: 250% 100%; }
          100% { background-position: -100% 100%; }
        }
        @keyframes jewel-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        @keyframes screen-flash {
          0% { opacity: 0; }
          25% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes spotlight-breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.65; }
        }
        @keyframes title-reveal {
          0% { opacity: 0; transform: translateY(40px) scale(0.9); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes card-reveal {
          0% { opacity: 0; transform: translateY(60px) scale(0.85); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes text-glow {
          0% { text-shadow: none; }
          50% { text-shadow: 0 0 30px rgba(232,180,76,0.4), 0 0 60px rgba(232,180,76,0.1); }
          100% { text-shadow: none; }
        }
        @keyframes star-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <Confetti active={confettiActive} />
      <ScreenFlash active={flashActive} />

      {/* ═══════════════════════════════════════════════════
         PHASE 1: THE GIFT — Pure cinematic experience
         No text, just the gift in its spotlight
         ═══════════════════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center transition-all"
        style={{
          opacity: phase === "reveal" ? 0 : 1,
          pointerEvents: phase === "reveal" ? "none" : "auto",
          transition: "opacity 1.5s ease-out",
          background: "#000000",
        }}
      >
        {/* Warm spotlight from above — like a luxury product shot */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 50% 45% at 50% 40%,
                rgba(45,30,12,0.5) 0%,
                rgba(25,15,5,0.25) 35%,
                rgba(10,5,2,0.1) 55%,
                transparent 70%)
            `,
            animation: "spotlight-breathe 7s ease-in-out infinite",
            opacity: fadeIn ? 1 : 0,
            transition: "opacity 3s ease-out",
          }}
        />

        {/* Vignette — cinematic framing */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.75) 100%)" }}
        />

        {/* Film grain — subtle cinematic texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.012]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating gold dust — ambient magic */}
        <GoldDust count={phase === "open" || phase === "burst" ? 90 : 50} boost={phase === "glow" || phase === "open"} />

        {/* The Gift — centered, floating, majestic */}
        <div
          style={{
            animation: phase === "intro" || phase === "glow" ? "gift-float-lux 4.5s ease-in-out infinite" : "none",
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
            transition: "opacity 2.5s ease-out, transform 2.5s ease-out",
          }}
        >
          <GiftBox phase={giftPhase} />
        </div>

        {/* Skip button — barely visible, doesn't distract */}
        <button
          onClick={skipAnimation}
          className="absolute bottom-5 text-white/[0.06] hover:text-white/20 text-[9px] tracking-[0.5em] uppercase transition-colors duration-700"
        >
          Pular
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════
         PHASE 2: Birthday Content Reveal
         ═══════════════════════════════════════════════════ */}
      <div
        className="min-h-[100svh] flex flex-col overflow-hidden transition-all"
        style={{
          background: showContent ? "#fef9f4" : "#000000",
          transitionDuration: "2s",
        }}
      >
        <div
          className="h-1 bg-gradient-to-r from-coral via-pistachio to-golden transition-opacity duration-1000"
          style={{ opacity: showContent ? 1 : 0 }}
        />

        <div className="flex-1 flex flex-col items-center justify-center px-5 py-8 sm:py-10 relative">
          <div
            className="absolute top-10 left-5 w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-pistachio/10 blur-3xl transition-opacity duration-1000"
            style={{ opacity: showContent ? 1 : 0, animation: showContent ? "float-slow 8s ease-in-out infinite" : "none" }}
          />
          <div
            className="absolute bottom-16 right-5 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-coral/10 blur-3xl transition-opacity duration-1000"
            style={{ opacity: showContent ? 1 : 0, animation: showContent ? "float-slow 10s ease-in-out 2s infinite" : "none" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-golden/5 blur-3xl transition-opacity duration-1000"
            style={{ opacity: showContent ? 1 : 0 }}
          />

          <div className="text-center mb-10 sm:mb-14 relative z-10">
            <p
              className="text-[10px] sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase text-coral/80 mb-4 font-semibold"
              style={{
                opacity: showContent ? 1 : 0,
                animation: showContent ? "title-reveal 1s ease-out 0.1s both" : "none",
              }}
            >
              Um presente pra voc&ecirc;
            </p>

            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic text-primary-dark mb-3 leading-tight"
              style={{
                opacity: showContent ? 1 : 0,
                animation: showContent ? "title-reveal 1.2s ease-out 0.3s both, text-glow 3s ease-in-out 2s infinite" : "none",
              }}
            >
              Feliz Anivers&aacute;rio
            </h1>

            <div
              className="flex items-center justify-center gap-3 mb-5"
              style={{
                opacity: showContent ? 1 : 0,
                animation: showContent ? "title-reveal 1s ease-out 0.6s both" : "none",
              }}
            >
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-coral/40" />
              <span
                className="text-golden text-lg sm:text-xl inline-block"
                style={{ animation: showContent ? "star-rotate 8s linear infinite" : "none" }}
              >
                &#10022;
              </span>
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-coral/40" />
            </div>

            <p
              className="text-base sm:text-lg md:text-xl text-foreground/55 font-light max-w-sm sm:max-w-md mx-auto leading-relaxed"
              style={{
                opacity: showContent ? 1 : 0,
                animation: showContent ? "title-reveal 1s ease-out 0.8s both" : "none",
              }}
            >
              Aqui est&aacute; o seu site, em 3 vers&otilde;es.
              <br />
              <span className="text-primary-dark font-medium">Escolha a que mais gostar!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-5xl w-full relative z-10">
            {[
              {
                href: "/v1",
                image: "/photos/ser.levemente_1745349010_3616572083368822439_6683801803_1.jpg",
                alt: "Vers\u00e3o Tropical",
                badge: "Vers\u00e3o 1",
                badgeBg: "bg-coral-light text-coral-dark",
                title: "Tropical",
                desc: "Quente e vibrante, com energia",
                border: "border-coral/10 hover:border-coral/30",
                delay: 0,
              },
              {
                href: "/v2",
                image: "/photos/ser.levemente_1535555625_1856697615237570673_6683801803_4.jpg",
                alt: "Vers\u00e3o Natureza",
                badge: "Vers\u00e3o 2",
                badgeBg: "bg-sage-light text-sage",
                title: "Natureza",
                desc: "Org\u00e2nica e fresca, verde",
                border: "border-sage/10 hover:border-sage/30",
                delay: 0.15,
              },
              {
                href: "/v3",
                image: "/photos/ser.levemente_1569699713_2143118985558736132_6683801803_7.jpg",
                alt: "Vers\u00e3o Pistache",
                badge: "Vers\u00e3o 3",
                badgeBg: "bg-pistachio-light text-pistachio-deep",
                title: "Pistache",
                desc: "Original e jovem, vibe brasileira",
                border: "border-pistachio/15 hover:border-pistachio/40",
                delay: 0.3,
              },
            ].map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border ${v.border}`}
                style={{
                  opacity: showContent ? 1 : 0,
                  animation: showContent ? `card-reveal 0.8s ease-out ${1 + v.delay}s both` : "none",
                }}
              >
                <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5 sm:p-6 text-center">
                  <span className={`inline-block ${v.badgeBg} text-[10px] sm:text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2 font-semibold`}>
                    {v.badge}
                  </span>
                  <h2 className="text-lg sm:text-xl font-medium text-primary-dark mb-1">
                    {v.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-foreground/45">
                    {v.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="mt-10 sm:mt-14 text-center relative z-10"
            style={{
              opacity: showContent ? 1 : 0,
              animation: showContent ? "title-reveal 1s ease-out 1.8s both" : "none",
            }}
          >
            <p className="font-logo text-3xl sm:text-4xl text-primary-dark/25">
              &ldquo;Seja leve me leve&rdquo;
            </p>
          </div>
        </div>

        <div
          className="h-1 bg-gradient-to-r from-pistachio via-coral to-golden transition-opacity duration-1000"
          style={{ opacity: showContent ? 1 : 0 }}
        />
      </div>
    </div>
  );
}
