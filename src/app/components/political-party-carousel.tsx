"use client"

import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const parties = [
  {
    name: "Progressive Party",
    ideas: "Focus on social welfare, environmental protection, and technological innovation.",
    link: "https://example.com/progressive-party",
  },
  {
    name: "Conservative Alliance",
    ideas: "Emphasis on traditional values, free market economics, and limited government.",
    link: "https://example.com/conservative-alliance",
  },
  {
    name: "Green Future",
    ideas: "Prioritize climate action, sustainable development, and renewable energy.",
    link: "https://example.com/green-future",
  },
  {
    name: "Libertarian Movement",
    ideas: "Advocate for individual liberty, minimal government intervention, and free markets.",
    link: "https://example.com/libertarian-movement",
  },
  {
    name: "Centrist Union",
    ideas: "Balance between progressive and conservative ideas, focus on pragmatic solutions.",
    link: "https://example.com/centrist-union",
  },
]

export function PoliticalPartyCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto"
    >
      <CarouselContent>
        {parties.map((party, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>{party.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{party.ideas}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href={party.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

