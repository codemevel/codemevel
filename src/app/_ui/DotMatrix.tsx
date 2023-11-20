import React from 'react'

const DotMatrixSVG = async ({
  width = 200,
  height = 200,
}: {
  width: number
  height: number
}) => {
  const dotSize: number = 1
  const spacing: number = 5

  const totalDotSize: number = dotSize + spacing

  const numRows: number = height / totalDotSize
  const numCols: number = width / totalDotSize

  const generateDots = (): React.JSX.Element[] => {
    const dots: React.JSX.Element[] = []

    // eslint-disable-next-line no-plusplus
    for (let row = 0; row < numRows; row++) {
      // eslint-disable-next-line no-plusplus
      for (let col = 0; col < numCols; col++) {
        const x: number = col * totalDotSize
        const y: number = row * totalDotSize

        dots.push(
          <rect
            key={`${row}-${col}`}
            x={x}
            y={y}
            width={dotSize}
            height={dotSize}
            fill="gray"
          />
        )
      }
    }

    return dots
  }

  return (
    <div className="h-full w-full ">
      <svg width={width} height={height} className="  z-0">
        {generateDots()}
      </svg>
    </div>
  )
}

export default DotMatrixSVG
