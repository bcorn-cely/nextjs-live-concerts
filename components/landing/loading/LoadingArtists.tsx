import { Card, CardContent } from "@/components/ui/card"

export default function LoadingArtists() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="bg-white shadow-lg">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}