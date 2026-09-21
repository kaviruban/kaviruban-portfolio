type IntroScreenProps = {
  greeting: string;
  hasEntered: boolean;
};

export function IntroScreen({ greeting, hasEntered }: IntroScreenProps) {
  return (
    <div
      className={`intro-screen ${hasEntered ? "is-complete" : ""}`}
      aria-hidden="true"
    >
      <span className="intro-mark" key={`intro-${greeting}`}>
        {greeting}
      </span>
      <span className="intro-spark">✦</span>
      <span className="intro-line" />
    </div>
  );
}
