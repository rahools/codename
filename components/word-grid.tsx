import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type Props = {
  words: string[];
  timerTokens: Map<string, string[]>;
}

const getAvatar = (timerToken: string[] | undefined) => {
  if (timerToken === undefined || timerToken.length === 0) {
    return (
      <Avatar className='hidden'>
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
    )
  }

  return (
    <>
      {/* make avatar for each timer token */}
      {timerToken.forEach(element => {
        <Avatar>
          <AvatarFallback>{element}</AvatarFallback>
        </Avatar>
      })}
    </>
  )
}

const getWordCard = (word: string, timerTokens: string[] | undefined) => {
  return (
    <Card>
      <CardHeader className='items-center'>
        <CardTitle>{word}</CardTitle>
      </CardHeader>
      {/* <Separator className="my-4" className='items-center' /> */}
      {getAvatar(timerTokens)}
    </Card>
  )
}

const WordGrid = (props: Props) => {
  return (
    // make a grid of 5x5
    <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-full">
      {
        props.words.map(
          word => getWordCard(
            word,
            props.timerTokens.get(word)
          )
        )
      }
    </div>
  )
}

export default WordGrid