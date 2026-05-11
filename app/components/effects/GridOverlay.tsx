export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(30, 30, 48, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30, 30, 48, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "grid-move 20s linear infinite",
      }}
    />
  );
}
