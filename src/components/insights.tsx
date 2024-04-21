type Props = {
  insights: string[]
}

export const Insights = ({ insights }: Props) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-accent text-light">
      <div className="animate-roll flex w-full items-center justify-center py-3 text-base font-semibold capitalize tracking-wider">
        {insights.map((insight, index) => (
          <div key={index}>
            {insight}
            <span className="px-4">|</span>
          </div>
        ))}
      </div>
    </div>
  )
}
