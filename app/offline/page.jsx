export const metadata = {
  title: "Offline — CYON ADC",
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface text-ink">
      <div className="text-center max-w-md px-6">
        <h1 className="text-3xl font-extrabold text-primary mb-3">
          You&apos;re offline
        </h1>
        <p className="text-ink-muted">
          It looks like you&apos;ve lost your internet connection. Reconnect and
          try again — cached pages will still be available.
        </p>
      </div>
    </div>
  );
}
