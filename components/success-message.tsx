export function SuccessMessage() {
  return (
    <div className="relative animate-slide-down">
      <div className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div
        className="absolute -top-2 right-1/3 w-2 h-2 bg-secondary rounded-full animate-ping"
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className="absolute -top-6 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping"
        style={{ animationDelay: "0.4s" }}
      />

      <div className="relative bg-gradient-to-br from-card to-primary/5 border-2 border-primary/30 rounded-2xl p-8 text-center space-y-4 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(41,120,255,0.3),transparent_50%)]" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full animate-scale-in">
            <span className="text-5xl animate-bounce">✅</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Thanks for joining my waitlist!
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">I can't wait to share my projects with you.</p>
          </div>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">You'll hear from me soon</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
