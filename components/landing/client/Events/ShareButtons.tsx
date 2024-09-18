'use client';

import { Button } from "@/components/ui/button";
import { FacebookIcon, TwitterIcon } from "lucide-react";
import { shareEvent } from "@/actions/actions";

export default function ShareButtons({eventId}: {eventId: string}) {
    return (
        <div className="mt-4 flex space-x-2">
        <Button size="sm" variant="outline" onClick={(e) => shareEvent(eventId, 'facebook')}>
          <FacebookIcon className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button size="sm" variant="outline" onClick={(e) => shareEvent(eventId, 'twitter')}>
          <TwitterIcon className="h-4 w-4 mr-2" />
          Tweet
        </Button>
      </div>
    )
}