import { Card, CardContent } from "@/components/ui/card"

export default function LoadingServices() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="bg-gradient-to-br from-primary to-secondary">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full mb-4 animate-pulse"></div>
            <div className="h-4 bg-white/20 rounded w-3/4 mb-2 animate-pulse"></div>
            <div className="h-3 bg-white/20 rounded w-full mb-1 animate-pulse"></div>
            <div className="h-3 bg-white/20 rounded w-5/6 animate-pulse"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}